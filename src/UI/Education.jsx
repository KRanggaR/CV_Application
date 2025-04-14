import React from 'react'
import '../UI/ui.css'
import DetailFormButtons from './DetailFormButtons'

function Education() {
    return (
        <>
            <div className='education-details'>
                
                <div>
                    <span className='education-degree-name'>Bachelors in Technology, CSE</span>
                </div>

                <div className='address-box  '>
                <span className='address-label'>Degree</span>
                <input
                    className='address-input'
                    name='address'
                    placeholder='Bachelors in Technology, CSE'
                    >

                </input>
            </div>

            <div className='address-box  '>
                <span className='address-label'>School</span>
                <input
                    className='address-input'
                    name='address'
                    placeholder='School'>

                </input>
            </div>

                <div className='emailPhone-box'>
                    <div className='email-box '>
                        <span className='email-field'>Start Date</span>
                        <input className='email-input'
                            name=''
                            placeholder='2020'
                        >

                        </input>
                    </div>
                    <div className='phone-box'>
                        <span className='phone-field'>End Date</span>
                        <input className='phone-input'
                            name=''
                            placeholder='2024'>

                        </input>
                    </div>
                </div>

                <div className='address-box  '>
                    <span className='address-label'>Location</span>
                    <input
                        className='address-input'
                        name='address'
                        placeholder='UPES, Dehradun'>

                    </input>
                </div>


                <DetailFormButtons />
            </div>
        </>
    )
}

export default Education
