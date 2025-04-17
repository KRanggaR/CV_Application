import React, {useState} from 'react'
import '../UI/ui.css'
import DetailFormButtons from './DetailFormButtons'

function Education({ detail : {degree, school,location, endDate, startDate}, id, onChange, onDelete }) {
const [formVisible, setFormVisible] = useState(true);
const toggleFormVisibility = ()=> {
    setFormVisible(!formVisible);
}

// console.log({formVisible});
    return (
        <>
            {
            formVisible? 

            <div className='education-details'>

                    <div onClick={toggleFormVisibility}>
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
                            onChange={(e) => onChange(id, e)}
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
                            onChange={(e) => onChange(id, e)}>

                        </input>
                    </div>

                    <div className='emailPhone-box'>
                        <div className='email-box '>
                            <span className='email-field'>Start Date</span>
                            <input className='email-input'
                                name='startDate'
                                placeholder='2020'
                                value={startDate}
                                onChange={(e) => onChange(id, e)}
                            >

                            </input>
                        </div>
                        <div className='phone-box'>
                            <span className='endDate-span'>End Date</span>
                            <input className='phone-input'
                                name='endDate'
                                placeholder='2024'
                                value={endDate}
                                onChange={(e) => onChange(id, e)}
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
                            onChange={(e) => onChange(id, e)}>

                        </input>
                    </div>

                    <DetailFormButtons onDelete={() => onDelete(id)} onSave={()=>setFormVisible(false)}/>
                </div>

                :

                <div className='education-details' >
                    <div onClick={toggleFormVisibility}>
                        <span className='education-degree-name'>
                            {degree ? degree : 'Untitled Degree'}
                        </span>
                    </div>
                </div>

            }
                
        </>
    );
}

export default Education;
