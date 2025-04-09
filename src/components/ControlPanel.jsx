import React from 'react'
import '../styles/defaultView.css';
import Button from '../UI/Button.jsx';
import { FileUser, FilePlus, Trash2 } from 'lucide-react';


function ControlPanel() {
    const handleFileUserClick = () => {
        window.location.href = "https://www.google.com";
    };
    const handleFilePlusClick = () => {
        window.location.href = "https://www.google.com";
    };
    const handleTrash2Click = () => {
        window.location.href = "https://www.google.com";
    };
    return (
        <>
            <div className='controlPanel border-box'>
                <div className='controlPanel_box '>
                    <div className='controlPanel_box_heading  '>
                        <h1>Resume Builder</h1>
                    </div>

                    <div className='controlPanel_box_buttons'>
                        <Button color="blue" text="Example" Icon={FileUser} onClick={handleFileUserClick} />
                        <Button color="red" text="Clear" Icon={FilePlus} onClick={handleFilePlusClick} />
                        <Button color="green" text="Download" Icon={Trash2} onClick={handleTrash2Click} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ControlPanel
