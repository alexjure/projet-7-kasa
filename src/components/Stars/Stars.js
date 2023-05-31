import './Stars.css';
import StarsEmpty from '../../assets/StarsEmpty.png'
import StarsFull from '../../assets/StarsFull.png'

function Stars({ stars }) {
    
    const ratingScore = [1, 2, 3, 4, 5];

    return (
        <>
            {ratingScore.map((ratingElem) =>
                stars >= ratingElem ? (
                    <img src={StarsFull} key={ratingElem.toString()} alt='Etoile rempli' className='stars' />
                ) : (
                    <img src={StarsEmpty} key={ratingElem.toString()} alt='Etoile vide' className='stars' />
                )
            )}
        </>
    )
}

export default Stars
