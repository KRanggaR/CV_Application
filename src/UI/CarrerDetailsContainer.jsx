import React from 'react'
import Button from './Button'
import { Plus } from 'lucide-react'
import "../styles/ui.css"

function CarrerDetailsContainer({ children, buttonText, onAdd }) {

    return (
        <>
            <div className='carrerDetail-container'> 
                {                    
                    children
                }

                <div className='add-btn-box'>
                    <Button type='large' color="#447fcd" text={buttonText} Icon={Plus} onClick={onAdd} />
                </div>
            </div>
        </>
    )
}

export default CarrerDetailsContainer
