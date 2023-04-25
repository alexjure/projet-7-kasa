import data from '../../data/logement.json'
import Tags from '../../components/Tag/Tag'
// import Stars from '../../components/Stars/Stars'
import Error404 from '../../pages/Error404/Error404'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Dropdown from '../../components/Dropdown/Dropdown';
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


    return (
        <section>
            <h2>{logementTitle}</h2>
            <h3>{logementLocation}</h3>
            <Tags content={logement.tags} />
            <Dropdown title='Description' content={logement.description} className="Dropdown"/>
            <Dropdown title="Equipements" content={logement.equipments} className="Dropdown"/>
        </section>

    )
}

export default FicheLogement

/*

<Dropdown title='Description' content={logement.description} />
<Dropdown title="Equipements" content={logement.equipments} />
        
*/