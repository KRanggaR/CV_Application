import React, {useState} from 'react'
import '../UI/ui.css'
import { FileUser } from 'lucide-react';

// eslint-disable-next-line no-unused-vars
function Button({ color = 'red', text = 'click me', Icon = FileUser, onClick, type}) {
    const [hovered, setHovered] = useState(false);
    const buttonStyle = {
        border: `2px solid ${color}`,
        color: hovered ? `white` : `${color}`, //text color
        text: text,
        borderColor: color,
        backgroundColor: hovered ? `${color}` : 'transparent',
        cursor: hovered ? `pointer` : `arrow`,
    };


    return (
        <div>
            <button className={type === 'large' ? 'task_buttons' : 'detailForm-task-buttons'} type={type} style={buttonStyle} onClick={onClick} 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>
                    <Icon size={16} color={buttonStyle.color} strokeWidth={2.2} style={{ marginRight: '0.4rem' }}/>
                {text}
            </button>

        </div>
    )
}



export default Button
// classes :
// task_buttons large
// detailForm-task-buttons small