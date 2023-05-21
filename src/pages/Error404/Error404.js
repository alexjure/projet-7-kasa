import error from '../../assets/error.png'
import { Link } from 'react-router-dom'
import './Error404.css'

function Error() {
    return (
        <>
            <div className='error'>
                <img src={error} alt='erreur 404' className='image404' />
                <div className='pageNotFound'>
                    <p className='textError'>Oups ! La page que vous demandez n'existe pas.</p>
                </div>
                <div className='retourAccueil'>
                    <Link to="/" className='lienAccueil'>Retourner sur la page d'accueil</Link>
                </div>
            </div>
        </>
    )
}

export default Error