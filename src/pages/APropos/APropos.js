import Dropdown from '../../components/Dropdown/Dropdown'
import Image from '../../assets/img-a-propos.jpg'
import data from '../../data/a-propos.json'
import './APropos.css'

function APropos() {

    return (
        <div className='sectionAPropos'>

            <div className='imgAPropos'>
                <img src={Image} alt='illustrations à propos'/>
            </div>

            <div className='blocDropdown'>
                {data.map((text) => (
                    <>
                    <Dropdown title='Fiabilité' className='Dropdown' content={text.fiabilite} />
                    <Dropdown title='Respect' className='Dropdown' content={text.respect} />
                    <Dropdown title='Service' className='Dropdown' content={text.service} />
                    <Dropdown title='Sécurité' className='Dropdown' content={text.securite} />
                    </>
                ))}
            </div>
        </div>
    )
}


export default APropos