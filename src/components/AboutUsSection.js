import React from 'react'
import aboutImage from '../assets/images/about-image.png'

class AboutUsSection extends React.Component {
    render() {
        return(
            <div className="about-block container">
                <div className="row">
                    <div className="image-block col-sm">
                        <img className="about-image" src={aboutImage} alt="aboutImage"/>
                    </div>
                    <div className="text-block col-sm">
                        <h3>About Us</h3>
                        <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                            nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                            ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                        <button type="submit">Read more</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUsSection;