import React, { useState } from 'react'
import '../styles/defaultView.css';
import FormToggler from '../UI/FormToggler'
import PersonalDetails from '../UI/PersonalDetails'
import { CircleUserRound, GraduationCap, BriefcaseBusiness } from 'lucide-react';
import Education from '../UI/Education';

function DetailForm() {
  const [formData, setFormData] = useState({
    personal: {
      fullname: '',
      email: '',
      phone: '',
      address: '',
      summary: '',
    },
    
  });
  // console.log(formData);
  console.log("rendering")

  const handlePersonalChange = (e) => {

    // const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     personal: {
  //       ...prev.personal,
  //       [name]: value,
  //     },
  //   }));
  // };

  /*
  formData : 10000 {....}
  formData : 10000 {...., fullname: 'something}
  */
  console.log("triggered");
  // setFormData({...formData, personal: {...formData.personal, fullname: 'something'}});

  formData.personal.fullname = 'something';
  setFormData(formData);
  

}

  return (
    <>
      <div className='detailForm '>
        <div>
          <FormToggler FormSvg={CircleUserRound} formTitle='Personal Details'>
            <PersonalDetails formData={formData.personal} onChange={handlePersonalChange} />
          </FormToggler>
          <FormToggler FormSvg={GraduationCap} formTitle='Education'>
            <Education />
          </FormToggler>

          <FormToggler FormSvg={BriefcaseBusiness} formTitle='Experience'>

          </FormToggler>
        </div>
      </div>
    </>
  )
}

export default DetailForm
