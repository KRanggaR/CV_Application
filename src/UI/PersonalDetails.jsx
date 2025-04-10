import React from 'react'
import '../UI/ui.css'
import { Camera } from 'lucide-react';

function PersonalDetails() {
    return (
        <div className='personal-details form-section'>
            <div className='nameImage-box '>
                <div className='name-box  '>
                    <span className='name-field'>Full Name</span>
                    <input className='name-input' placeholder='Enter name'></input>
                </div>
                <div className='image-box'>
                    <span className='image-field' >Photo</span>
                    <button className="image-button">
                        <Camera size={16} strokeWidth={1.5} />
                        Upload
                    </button>
                </div>
            </div>
            <br />
            <div className='emailPhone-box'>
                <div className='email-box  '>
                    <span className='email-field'>Email</span>
                    <input className='email-input' placeholder='Enter Email'></input>
                </div>
                <div className='phone-box  '>
                    <span className='phone-field'>Phone</span>
                    <input className='phone-input' placeholder='7300540930'></input>
                </div>
            </div>
            <br />
            <div className='address-box  '>
                <span className='address-label'>Address</span>
                <input className='address-input' placeholder='Add...'></input>
            </div>
            <br />
            <div className='summary-box  '>
                <span className='summary-label'>Summary</span>
                <textarea rows="5" className='summary-input' placeholder='Enter your profile summary'></textarea>
            </div>
        </div>
    )
}

export default PersonalDetails
