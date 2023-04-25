import './Card.css'
import data from '../../data/logement.json'
import { Link } from 'react-router-dom'
import Logement from '../../pages/FicheLogement/FicheLogement'

function Cart() {
   return (
      <section>
         <div className='carte'>
            {data.map((house) => (
               <Link to={house} className='lien-logement'>
               <div className='carte-image' style={{ backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${house.cover})` }}>
                  {house.name}
                  <p>{house.title} </p>
               </div>
               </Link>
            ))}

         </div>
      </section>
   )
}

export default Cart;
