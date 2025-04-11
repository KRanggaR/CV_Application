import React, { useState } from 'react'
import '../styles/defaultView.css';
import FormToggler from '../UI/FormToggler'
import PersonalDetails from '../UI/PersonalDetails'
import { CircleUserRound, GraduationCap, BriefcaseBusiness } from 'lucide-react';

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
  console.log(formData);

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


  return (
    <>
      <div className='detailForm border-box'>
        <div>
          <FormToggler FormSvg={CircleUserRound} formTitle='Personal Details'>
            <PersonalDetails formData={formData.personal} onChange={handlePersonalChange} />
          </FormToggler>
          <FormToggler FormSvg={GraduationCap} formTitle='Education'>

          </FormToggler>

          <FormToggler FormSvg={BriefcaseBusiness} formTitle='Experience'>

          </FormToggler>
        </div>
      </div>
    </>
  )
}

export default DetailForm
