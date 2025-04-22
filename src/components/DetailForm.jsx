import React from 'react'
import '../styles/defaultView.css';
import FormToggler from '../UI/FormToggler'
import PersonalDetails from '../UI/PersonalDetails'
import { CircleUserRound, GraduationCap, BriefcaseBusiness } from 'lucide-react';
import CarrerDetailsContainer from '../UI/CarrerDetailsContainer';
import Education from '../UI/Education';
import Experience from '../UI/Experience';


function DetailForm({formData, setFormData, addImage, setImage}) {


  const handlePersonalChange = (e) => {

    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [name]: value,
      },
    }));
  };




  // onChange Event to store values to state

  const handleEducationChange = (index, e) => {
    console.log(formData)
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedEducation = [...prev.education];
      updatedEducation[index][name] = value;
      return {
        ...prev,
        education: updatedEducation,
      };
    });
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedExperience = [...prev.experience];
      updatedExperience[index][name] = value;
      return {
        ...prev,
        experience: updatedExperience,
      };
    });
  };

  // Adding section on every add button clicked in education/experience
  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          degree: '',
          school: '',
          startDate: '',
          endDate: '',
          location: '',
          newForm: 'true',
        },
      ],
    }));
  };

  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          jobTitle: '',
          company: '',
          startDate: '',
          endDate: '',
          location: '',
          description: '',
          newForm: 'true'
        },
      ],
    }));
  };


  // Delete function
  const deleteEducation = (index) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  }

  const deleteExperience = (index) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  }

  /*
  formData : 10000 {....}
  formData : 10000 {...., fullname: 'something}
  */
  // console.log("triggered");
  // setFormData({...formData, personal: {...formData.personal, fullname: 'something'}});

  // formData.personal.fullname = 'something';
  // setFormData(formData);
  const handleCloseNewForm = (index) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.map((item, i) =>
        i === index ? { ...item, newForm: false } : item
      )
    }));
    setFormData(prev => ({
      ...prev,
      experience: prev.experience.map((item, i) =>
        i === index ? { ...item, newForm: false } : item
      )
    }));
  };

  return (
    <>
      <div className='detailForm '>
        <div>
          <FormToggler FormSvg={CircleUserRound} formTitle='Personal Details'>
            <PersonalDetails formData={formData.personal} 
                            onChange={handlePersonalChange} 
                            addImage={addImage}
                            setImage={setImage}/>
          </FormToggler>

          <FormToggler FormSvg={GraduationCap} formTitle='Education' >
            <CarrerDetailsContainer
              buttonText='Education'
              onAdd={addEducation}
              >
              {/* <Education educationData={formData.education} onChange={handleEducationChange} onDelete={deleteEducation}/> */}
              {
                formData.education.map(( edu, index ) => <Education detail={edu} key={index} id={index} onChange={handleEducationChange} onDelete={deleteEducation} newForm={edu.newForm} onCloseNewForm={handleCloseNewForm}/>)
              }
            </CarrerDetailsContainer>
          </FormToggler>

          <FormToggler FormSvg={BriefcaseBusiness} formTitle='Experience'>
            <CarrerDetailsContainer
              buttonText='Experience'
              onAdd={addExperience}>
              {/* <Experience experienceData={formData.experience} onChange={handleExperienceChange} onDelete={deleteExperience} /> */}
              {
                formData.experience.map(( exp, index ) => <Experience detail={exp} key={index} id={index} onChange={handleExperienceChange} onDelete={deleteExperience} newForm={exp.newForm} onCloseNewForm={handleCloseNewForm}/>)
              }
            </CarrerDetailsContainer>
          </FormToggler>
        </div>
      </div>
    </>
  )
}

export default DetailForm
