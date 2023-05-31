import './Card.css'
import data from '../../data/logement.json'
import { Link } from 'react-router-dom'

function Cart() {
   return (
      <section>
         <div className='carte'>
            {data.map((house, index) => (
               <Link to={`/logement/${house.id}`} className='lienLogement' key={index}>
                  <div className='carteImage' style={{ backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${house.cover})` }}>
                     <p>{house.title} </p>
                  </div>
               </Link>
            ))}
         </div>
      </section>
   )
}

export default Cart;
