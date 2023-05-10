import Dropdown from '../../components/Dropdown/Dropdown'
import Image from '../../assets/img-a-propos.jpg'
import './APropos.css'

function APropos() {

    return (
        <div className='section-a-propos'>

            <div className='img-a-propos'>
                <img src={Image} alt='illustrations à propos'/>
            </div>

            <div className='Bloc-Dropdown'>
                <Dropdown title='Fiabilité' className='Dropdown' content={
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale.
                        Les photos sont conformes aux logements, et toutes les informations
                        sont régulièrement vérifiées par nos équipes.
                    </p>
                }>
                </Dropdown>

                <Dropdown title='Respect' className='Dropdown' content={
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa.
                        Tout comportement discriminatoire ou de perturbations du
                        voisinage entraînera une exclusion de notre plateforme.
                    </p>
                }>
                </Dropdown>

                <Dropdown title='Service' className='Dropdown' content={
                    <p>Nos équipes se tiennent à votre disposition pour vous fournir
                        une expérience parfaite. N'hésitez pas à nous contacter
                        si vous avez la moindre question.
                    </p>
                }>
                </Dropdown>

                <Dropdown title='Sécurité' className='Dropdown' content={
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                        que pour les voyageurs, chaque logement correspond aux critères
                        de sécurité établis par nos services. En laissant une note aussi bien
                        à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
                        standards sont bien respectés. Nous organisons également des ateliers
                        sur la sécurité domestique pour nos hôtes.
                    </p>
                }>
                </Dropdown>
            </div>
        </div>
    )
}

/*
  <div className='image-a-propos' style={{ backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${Image})` }}>
            </div>
*/
export default APropos