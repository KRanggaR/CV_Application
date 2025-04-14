import React from 'react'
import '../UI/ui.css'
import { Camera } from 'lucide-react';

function PersonalDetails({ formData : {fullname, email, phone, address, summary}, onChange }) {
    return (
        <div className='personal-details'>
            <div className='nameImage-box '>
                <div className='name-box  '>
                    <span className='name-field'>Full Name</span>
                    <input
                        className='name-input'
                        placeholder='Enter name'
                        name='fullname'
                        value={fullname}
                        onChange={onChange}>

                    </input>
                </div>
                <div className='image-box'>
                    <span className='image-field' >Photo</span>
                    <button className="image-button">
                        <Camera size={16} strokeWidth={1.5} />
                        Upload
                    </button>
                </div>
            </div>

            <div className='emailPhone-box'>
                <div className='email-box  '>
                    <span className='email-field'>Email</span>
                    <input className='email-input'
                        name='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={onChange}>

                    </input>
                </div>
                <div className='phone-box  '>
                    <span className='phone-field'>Phone</span>
                    <input className='phone-input'
                        name='phone'
                        placeholder='7300540930'
                        value={phone}
                        onChange={onChange}>

                    </input>
                </div>
            </div>

            <div className='address-box  '>
                <span className='address-label'>Address</span>
                <input
                    className='address-input'
                    name='address'
                    placeholder='Add...'
                    value={address}
                    onChange={onChange}>

                </input>
            </div>

            <div className='summary-box  '>
                <span className='summary-label'>Summary</span>
                <textarea rows="5"
                    className='summary-input'
                    name='summary'
                    placeholder='Enter your profile summary'
                    value={summary}
                    onChange={onChange}>

                </textarea>
            </div>
        </div>
    )
}

export default PersonalDetails
