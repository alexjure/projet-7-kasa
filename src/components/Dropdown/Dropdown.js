import './Dropdown.css'
import { useState } from 'react'
function Dropdown({ title, content }) {

    const [active, setActive] = useState(false)

    const handleToggle = (e) => {
        setActive(!active)
    }

    return (
        <div className={`dropdown ${active && 'active'}`}>
            <div className='dropdownBlock' onClick={handleToggle}>
                <div className='title'>{title}</div>
                <div> <i className="fa-solid fa-chevron-down"></i></div>
            </div>
            <div className='text'>
                {content}
            </div>
        </div>
    )
}

export default Dropdown



