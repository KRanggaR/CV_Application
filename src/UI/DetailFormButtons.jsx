import React from 'react'
import { Trash2, Save, X } from 'lucide-react';
import "../styles/ui.css"
import Button from '../UI/Button'
function DetailFormButtons({onDelete, onSave}) {

    return (
        <>
            <div className='form-buttons'>
                <div>
                    <Button type={'small'} color="#d63031" text="Delete" Icon={Trash2} onClick={onDelete}/>
                </div>

                <div className='save-cancel-btn'>
                    <Button type={'small'} color="#00b894" text="Save" Icon={Save} onClick={onSave}/>
                </div>
            </div>
        </>
    )
}

export default DetailFormButtons