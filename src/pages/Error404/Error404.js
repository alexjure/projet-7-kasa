import error from '../../assets/error.png'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import './Error404.css'
function Error() {
    return (
        <section>
            < Header />
            <div className='error'>
                <img src={error} alt='erreur 404' className='image-404' />
                <div className='page-not-found'>
                    <p className='text-error'>Oups ! La page que vous demandez n'existe pas.</p>
                </div>
                <Link to="/" className='text-retour-accueil'>Retourner sur la page d'accueil</Link>
            </div>
            < Footer />
        </section>
    )
}

export default Error

/*

*/ 