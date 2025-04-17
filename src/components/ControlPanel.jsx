import React from 'react'
import '../styles/defaultView.css';
import Button from '../UI/Button.jsx';
import { FileUser, FilePlus, Trash2 } from 'lucide-react';


function ControlPanel({ setFormData}) {
    // const [isCleared, setIsCleared] = useState(false);

    const handleExample = () => {
        setFormData((prev) => ({
            ...prev,
            personal: {
              fullname: 'Kishant Rangar',
              email: 'krangar@notmock.com',
              phone: '7300529637',
              address: 'IT Park, Dehradun',
              summary: 'A dedicated B.Tech student majoring in Computer Science',
            },
            
            education: [
                {
                    degree: 'B.Tech in Computer Science', 
                    school: 'UPES, Dehradun', 
                    startDate: '2020', 
                    endDate: '2024', 
                    location: 'Dehradun, Uttarakhand'
                },
                {
                    degree: 'Intermediate (XII)', 
                    school: 'RRSS', 
                    startDate: '2019', 
                    endDate: '2020', 
                    location: 'Uttarkashi, Uttarakhand'
                },
                
            ],
            experience: [
                {
                    jobTitle : "Programmer Intern",
                    company: "EVON Technologies", 
                    startDate : "2024",
                    endDate : "Current",
                    location : "A-5 IT Park, Sahastradhara Road, Dehradun",
                    description : "Working on React, a Javascript Framework.",
                },
                {
                    jobTitle: 'Intern', 
                    company: 'PwC', 
                    startDate: '2023', 
                    endDate: '2023', 
                    location: 'Gurugram/Hybrid',
                    description : "Enhanced database performance by optimizing SQL queries and indexing strategies.",
                },

            ],
          }));
    };

    // index
    const handleClear = () => {
        setFormData((prev) => ({
          ...prev,
          personal: {
            fullname: '',
            email: '',
            phone: '',
            address: '',
            summary: '',
          },
          education: [],
          experience: [],
        }));
      };

    const handleDownload = () => {
        window.location.href = "https://www.google.com";
    };
    return (
        <>
            <div className='controlPanel '>
                <div className='controlPanel_box '>
                    <div className='controlPanel_box_heading  '>
                        <h1>Resume Builder</h1>
                    </div>

                    <div className='controlPanel_box_buttons'>
                        <Button color="#447fcd" className={'task_buttons'} type={'large'} text="Example" Icon={FileUser} onClick={handleExample} />
                        <Button color="#d63031" className={'task_buttons'} type={'large'} text="Clear" Icon={FilePlus} onClick={handleClear} />
                        <Button color="#00b894" className={'task_buttons'} type={'large'} text="Download" Icon={Trash2} onClick={handleDownload} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ControlPanel
