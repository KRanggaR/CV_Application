import React from 'react'
import '../UI/ui.css'
import { FileUser, FilePlus, Trash2 } from 'lucide-react';

// eslint-disable-next-line no-unused-vars
function Button({ color = 'red', text = 'click me', Icon = FileUser, onClick }) {
    const buttonStyle = {
        color: color,
        text: text,
        borderColor: color,
    };


    return (
        <div>
            <button className="task_buttons" style={buttonStyle} onClick={onClick}>
                <Icon size={16} color={color} strokeWidth={1.5} style={{ marginRight: '0.4rem' }}/>
                {text}
            </button>

        </div>
    )
}



export default Button
