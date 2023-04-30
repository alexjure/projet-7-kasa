import data from '../../data/logement.json'
import Tags from '../../components/Tag/Tag'
// import Stars from '../../components/Stars/Stars'
import Error404 from '../../pages/Error404/Error404'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Dropdown from '../../components/Dropdown/Dropdown';
import Stars from '../../components/Stars/Stars';
import './FicheLogement.css'

function FicheLogement() {

    const [logement, setLogement] = useState({
        tags: [],
        equipments: [],
        pictures: [],
        rating: '',
        title: '',
        host: { name: '', picture: '' },
        location: ''
    });

    const { id } = useParams();

    useEffect(() => {
        data.map((house) => {
            if (house.id === id) {
                setLogement(house)
            }
            return null;
        })
    }, [id])

    if (logement.title === undefined) {
        return (
            <Error404 />
        )
        //console.log('retourner le composant error')
    }

    const logementTitle = logement.title
    const logementLocation = logement.location
    const logementHostName = logement.host.name
    const logementHostPicture = logement.host.picture
    const logementEquipments = logement.equipments;
    const rating = logement.rating;


    let mapLogementEquipements = logementEquipments.map((l, index) => (
        <p key={l}>{logement.equipments[index]}</p>
    ))
        


    return (
        <section>
            <div className='Title-Host'>
                <div className='Title-Tags'>
                    <h2>{logementTitle}</h2>
                    <h3>{logementLocation}</h3>
                    <Tags content={logement} />
                </div>
                <div className='Host'>
                    <p className='Host-Name'>{logementHostName}</p>
                    <div className='Host-Picture'>
                        <img src={logementHostPicture} alt='hôte du logement' />
                    </div>
                </div>
            </div>
            <div className='Part-Dropdown'>
                <Dropdown title='Description' content={logement.description} className="Dropdown" />
                <Dropdown title="Equipements" content={mapLogementEquipements} className="Dropdown" />
            </div>


            <Stars stars={rating} />

        </section>

    )
}

export default FicheLogement

/*



*/