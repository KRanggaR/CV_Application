import React from 'react'
import '../UI/ui.css';
import { ChevronDown } from 'lucide-react';

function FormToggler({FormSvg, formTitle= 'Title Demo'}) {

    return (
        <>
            <div className='form-section border-box'>
                <div className='formm-header'>
                    <div>
                        <span className='title-header'>
                            <FormSvg size={18} strokeWidth={1.5} />
                            {formTitle}
                        </span>
                    </div>
                    <div>
                        <ChevronDown size={16} strokeWidth={1.5} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormToggler
