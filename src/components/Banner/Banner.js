import './Banner.css'
import image from "../../assets/img-home.jpg"

function Banner() {
    return (
        <div className='banner'>
            <div className='cartBanner'>
                <p className='textBanner' style={{ backgroundImage: `url(${image})` }}> Chez vous, partout et ailleurs </p>
            </div>
        </div>
    )
}

export default Banner