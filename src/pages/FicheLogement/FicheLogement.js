import data from '../../data/logement.json'
import Tags from '../../components/Tag/Tag'
import Stars from '../../components/Stars/Stars'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function FicheLogement() {

    const [logement, setLogement] = useState({
        tags: [],
        equipment: [],
        pictures: [],
        rating: '',
        title: '',
        host: { name: '', picture: '' }
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
        console.log('retourner le composant error')
    }

    const logementTitle = logement.title

    return (
        <section>
            <h2>{logementTitle}</h2>
            <Tags logement={logement} />
            <Stars logement={logement} />
        </section>
    )
}

export default FicheLogement