import React from 'react'
import '../UI/ui.css'
import DetailFormButtons from './DetailFormButtons'

function Education({ formData : {degree, school, startDate, endDate, location}, onChange }) {
    return (
        <>
            <div className='education-details'>
                
                <div>
                    <span className='education-degree-name'>
                    {degree ? degree : 'Untitled Degree'}
                        </span>
                </div>

                <div className='address-box'>
                <span className='address-label'>Degree</span>
                <input
                    className='address-input'
                    name='degree'
                    placeholder='Bachelors in Technology, CSE'
                        value={degree}
                        onChange={onChange}
                    >

                </input>
            </div>

            <div className='address-box  '>
                <span className='address-label'>School</span>
                <input
                    className='address-input'
                    name='school'
                    placeholder='School'
                    value={school}
                        onChange={onChange}>

                </input>
            </div>

                <div className='emailPhone-box'>
                    <div className='email-box '>
                        <span className='email-field'>Start Date</span>
                        <input className='email-input'
                            name='startDate'
                            placeholder='2020'
                            value={startDate}
                        onChange={onChange}
                        >

                        </input>
                    </div>
                    <div className='phone-box'>
                        <span className='phone-field'>End Date</span>
                        <input className='phone-input'
                            name='endDate'
                            placeholder='2024'
                            value={endDate}
                        onChange={onChange}
                        >

                        </input>
                    </div>
                </div>

                <div className='address-box  '>
                    <span className='address-label'>Location</span>
                    <input
                        className='address-input'
                        name='location'
                        placeholder='UPES, Dehradun'
                        value={location}
                        onChange={onChange}>

                    </input>
                </div>


                <DetailFormButtons />
            </div>
        </>
    )
}

export default Education
