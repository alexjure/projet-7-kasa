import './Footer.css'
import logoFooter from '../../assets/logo-kasa-footer.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='footer'>
            <Link to="/"><img src={logoFooter} alt='logo Kasa' className='kasaLogoFooter' /></Link>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer