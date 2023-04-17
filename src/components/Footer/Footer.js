import './Footer.css'
import logoFooter from '../../assets/logo-kasa-footer.png'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>
            <Link to="/"><img src={logoFooter} alt='logo Kasa' className='kasa-logo-footer' /></Link>
            <p className='text'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer