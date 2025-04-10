import React from 'react'
import '../styles/defaultView.css';
import FormToggler from '../UI/FormToggler'
import { CircleUserRound, GraduationCap, BriefcaseBusiness} from 'lucide-react';

function DetailForm() {
  return (
    <>
      <div className='detailForm border-box'>
        <div>
          <FormToggler FormSvg={CircleUserRound} formTitle='Personal Details'/>
          <FormToggler FormSvg={GraduationCap} formTitle='Education'/>
          <FormToggler FormSvg={BriefcaseBusiness} formTitle='Experience'/>
        </div>
      </div>
    </>
  )
}

export default DetailForm
