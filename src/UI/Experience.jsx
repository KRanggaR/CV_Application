import React from 'react'
import '../UI/ui.css'
import DetailFormButtons from './DetailFormButtons'

function Experience({ formData : {jobTitle, company, startDate, endDate, location, description}, onChange }) {
console.log(jobTitle);

    return (
        <>
            <div className='education-details'>
                
                <div>
                    <span className='education-degree-name'>
                    {jobTitle ? jobTitle : 'Untitled Job Title'}
                    </span>
                </div>

                <div className='address-box'>
                <span className='address-label'>Job Title</span>
                <input
                    className='address-input'
                    name='jobTitle'
                    placeholder='Bachelors in Technology, CSE'
                        value={jobTitle}
                        onChange={onChange}

                    >

                </input>
            </div>

            <div className='address-box  '>
                <span className='address-label'>Company</span>
                <input
                    className='address-input'
                    name='company'
                    placeholder='EVON Technologies'
                    value={company}
                        onChange={onChange}>

                </input>
            </div>

                <div className='emailPhone-box'>
                    <div className='email-box '>
                        <span className='email-field'>Start Date</span>
                        <input className='email-input'
                            name='startDate'
                            placeholder='2024'
                            value={startDate}
                        onChange={onChange}
                        >

                        </input>
                    </div>
                    <div className='phone-box'>
                        <span className='phone-field'>End Date</span>
                        <input className='phone-input'
                            name='endDate'
                            placeholder='Current'
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
                        placeholder='A5 IT Park, Dehradun'
                        value={location}
                        onChange={onChange}>

                    </input>
                </div>

                <div className='address-box  '>
                    <span className='address-label'>Description</span>
                    <textarea
                        className='address-input'
                        name='description'
                        placeholder='What was your main role?'
                        value={description}
                        onChange={onChange}>

                    </textarea>
                </div>


                <DetailFormButtons />
            </div>
        </>
    )
}

export default Experience
