import './Banner.css'
//import imageBanniere from '../../assets/img-home.jpg'

function Banner() {
    return (
        <div className='banner'>
            <div className='cartBanner'>
            <p className='textBanner' style={{backgroundImage: "url(../assets/img-home.jpg"}}> Chez vous, partout et ailleurs </p>
            </div>           
        </div>
    )
}

export default Banner