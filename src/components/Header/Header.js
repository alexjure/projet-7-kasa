import './Header.css'
import logo from '../../assets/logo-kasa.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <Link to="/" className='logoLienKasa'><img src={logo} alt='logo Kasa' className='kasaLogo' /></Link>
            <div className='liens'>
                <Link to="/" className='textLienAccueil'>Accueil</Link>
                <Link to="/a-propos" className='textLienAPropos'>A Propos</Link>
            </div>
        </div>
    )
}

export default Header