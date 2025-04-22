import React, { useState } from 'react'
import "../styles/ui.css";
import { ChevronDown } from 'lucide-react';

function FormToggler({ FormSvg, formTitle = 'Title Demo', children }) {
    const [childVisible, setIsChildVisible] = useState(false);
    const handleClick = () => {
        setIsChildVisible(!childVisible)
    };
    

    // console.log(children)
    return (
        <>
            <div className='form-section border-box' >
                < div className='formm-header' onClick={handleClick}>
                    <h3 className='title-header'>
                        <FormSvg size={18} strokeWidth={2} />
                        {formTitle}
                    </h3>

                    <div>
                        <ChevronDown className='drop-down-arrow' size={16} strokeWidth={1.5} style={childVisible ? { transform: 'rotate(180deg)'} : {} }/>
                    </div>
                </div>
                {
                    childVisible && children
                }
            </div>


        </>
    )
}

export default FormToggler
