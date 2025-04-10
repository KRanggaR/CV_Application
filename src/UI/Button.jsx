import React, {useState} from 'react'
import '../UI/ui.css'
import { FileUser, FilePlus, Trash2 } from 'lucide-react';

// eslint-disable-next-line no-unused-vars
function Button({ color = 'red', text = 'click me', Icon = FileUser, onClick }) {
    const [hovered, setHovered] = useState(false);
    const buttonStyle = {
        border: `2px solid ${color}`,
        color: color,
        text: text,
        borderColor: color,
        backgroundColor: hovered ? `${color}60` : 'transparent',
    };


    return (
        <div>
            <button className="task_buttons" style={buttonStyle} onClick={onClick} 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>
                    <Icon size={16} color={color} strokeWidth={1.5} style={{ marginRight: '0.4rem' }}/>
                {text}
            </button>

        </div>
    )
}



export default Button
