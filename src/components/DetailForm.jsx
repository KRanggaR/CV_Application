import React, { useState } from 'react'
import '../styles/defaultView.css';
import FormToggler from '../UI/FormToggler'
import PersonalDetails from '../UI/PersonalDetails'
import { CircleUserRound, GraduationCap, BriefcaseBusiness } from 'lucide-react';
import Education from '../UI/Education';
import Experience from '../UI/Experience';




function DetailForm() {
  const [formData, setFormData] = useState({
    personal: {
      fullname: '',
      email: '',
      phone: '',
      address: '',
      summary: '',
    },
    education: [
      {
      degree: '',
      school: '',
      startDate: '',
      endDate: '',
      location: '',
    }
  ],
    experience: [
      {
      jobTitle: '',
      company: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
    }
  ],
    
  });
  // console.log(formData);


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

  console.log('p;rinting: ', formData.experience);
  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      education: {
        ...prev.education,
        [name]: value,
      },
    }));
  };

  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      experience: {
        ...prev.experience,
        [name]: value,
      },
    }));
  };

  /*
  formData : 10000 {....}
  formData : 10000 {...., fullname: 'something}
  */
  // console.log("triggered");
  // setFormData({...formData, personal: {...formData.personal, fullname: 'something'}});

  // formData.personal.fullname = 'something';
  // setFormData(formData);
  



  return (
    <>
      <div className='detailForm '>
        <div>
          <FormToggler FormSvg={CircleUserRound} formTitle='Personal Details'>
            <PersonalDetails formData={formData.personal} onChange={handlePersonalChange} />
          </FormToggler>
          <FormToggler FormSvg={GraduationCap} formTitle='Education'>
            <Education formData={formData.education} onChange={handleEducationChange}/>
          </FormToggler>

          <FormToggler FormSvg={BriefcaseBusiness} formTitle='Experience'>
          <Experience formData={formData.experience} onChange={handleExperienceChange}/>
          </FormToggler>
        </div>
      </div>
    </>
  )
}

export default DetailForm
