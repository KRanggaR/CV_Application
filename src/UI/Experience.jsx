import React, { useState } from 'react'
import '../UI/ui.css'
import DetailFormButtons from './DetailFormButtons'

function Experience({ detail: { jobTitle, company, startDate, endDate, location, description }, id, onChange, onDelete }) {
    const [formVisible, setFormVisible] = useState(true);
    const toggleFormVisibility = () => {
        setFormVisible(!formVisible);
    }

    return (
        <>
            {
                formVisible ?

                    <div className='education-details' >
                        <div>
                            <span className='education-degree-name' onClick={toggleFormVisibility}>
                                {jobTitle ? jobTitle : 'Untitled Job Title'}
                            </span>
                        </div>

                        <div className='address-box'>
                            <span className='address-label'>Job Title</span>
                            <input
                                className='address-input'
                                name='jobTitle'
                                placeholder='React Developer'
                                value={jobTitle}
                                onChange={(e) => onChange(id, e)}>
                            </input>
                        </div>

                        <div className='address-box  '>
                            <span className='address-label'>Company</span>
                            <input
                                className='address-input'
                                name='company'
                                placeholder='EVON Technologies'
                                value={company}
                                onChange={(e) => onChange(id, e)}>
                            </input>
                        </div>

                        <div className='emailPhone-box'>
                            <div className='email-box '>
                                <span className='email-field'>Start Date</span>
                                <input className='email-input'
                                    name='startDate'
                                    placeholder='2024'
                                    value={startDate}
                                    onChange={(e) => onChange(id, e)}>
                                </input>
                            </div>
                            <div className='phone-box'>
                                <span className='endDate-span'>End Date</span>
                                <input className='phone-input'
                                    name='endDate'
                                    placeholder='Current'
                                    value={endDate}
                                    onChange={(e) => onChange(id, e)}>
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
                                onChange={(e) => onChange(id, e)}>
                            </input>
                        </div>

                        <div className='address-box  '>
                            <span className='address-label'>Description</span>
                            <textarea
                                className='address-input'
                                name='description'
                                placeholder='What was your main role?'
                                value={description}
                                onChange={(e) => onChange(id, e)}>
                            </textarea>
                        </div>

                        <DetailFormButtons onDelete={() => onDelete(id)} onSave={() => setFormVisible(false)}/>
                    </div>

                    :

                    <div className='education-details'>
                        <div onClick={toggleFormVisibility}>
                            <span className='education-degree-name'>
                                {jobTitle ? jobTitle : 'Untitled Job Title'}
                            </span>
                        </div>
                    </div>


            }



        </>
    )
}

export default Experience
