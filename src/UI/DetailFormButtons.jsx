import React from 'react'
import { Trash2, Save, X } from 'lucide-react';
import '../UI/ui.css'
import Button from '../UI/Button'
function DetailFormButtons() {

    return (
        <>
            <div className='form-buttons'>
                <div>
                    <Button className={`detailForm-task-buttons  delete-task-btn`} color="#d63031" text="Delete" Icon={Trash2} />
                </div>

                <div className='save-cancel-btn'>
                    <Button className={`detailForm-task-buttons  save-task-btn`} color="#447fcd" text="Save" Icon={Save} />
                    <Button className={`detailForm-task-buttons  cancel-task-btn`} color="#000000" text="Cancel" Icon={X} />
                </div>
            </div>
        </>
    )
}

export default DetailFormButtons