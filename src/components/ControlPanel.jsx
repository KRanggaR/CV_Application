import React, {useState} from 'react'
import '../styles/defaultView.css';
import Button from '../UI/Button.jsx';
import { FileUser, FilePlus, Trash2 } from 'lucide-react';


function ControlPanel() {
    const [isCleared, setIsCleared] = useState(false);

    const handleExample = () => {
        window.location.href = "https://www.google.com";
    };
    const handleClear = () => {
        setIsCleared(true);
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
