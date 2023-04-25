import './Dropdown.css'

function Dropdown({ title, content }) {
    return (
        <section>
            <div className='dropdown'>
                <button className='buttonMenu'>
                    <p>{title}
                        <i className="fa-solid fa-chevron-down"></i>
                    </p>
                </button>
                <div className='text'>
                    {content}
                </div>
            </div>
        </section>
    )
}

export default Dropdown



