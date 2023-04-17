import './Header.css'
import logo from '../../assets/logo-kasa.png'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <Link to="/" className='logo-lien-kasa'><img src={logo} alt='logo Kasa' className='kasa-logo' /></Link>
                <div className='liens'>
                    <Link to="/" className='text-lien-accueil'>Accueil</Link>
                    <Link to="/" className='text-lien-a-propos'>A Propos</Link>
                </div>
        </div>
    )
}

export default Header