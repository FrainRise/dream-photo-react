import React from 'react'
import image_1 from '../assets/images/image-port-1.png'
import image_2 from '../assets/images/image-port-2.png'
import image_3 from '../assets/images/image-port-3.png'
import image_4 from '../assets/images/image-port-4.png'

class PortfolioSection extends React.Component {
    render() {
        const images = [ image_1, image_2, image_3, image_4];

        return(
            <div className="portfolio-block container" align="center">
                <h2 className="portfolio-title"> Portfolio </h2>
                <p className="portfolio-text">Nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi
                    accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                <div className="image-container">
                    {
                        images.map(function (image) {
                        return (
                            <img src={image} alt="" className="portfolio-images"/>
                        )
                     })
                        }
                </div>
            </div>
        )
    }
}

export default PortfolioSection;