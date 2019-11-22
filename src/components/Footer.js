import React from 'react'
import homeAddress from '../assets/images/home-address.png'
import phoneNumber from '../assets/images/phone-number.png'

class Footer extends React.Component {
    render() {
        return(
            <div className="footer-container d-flex justify-content-center align-items-center">
                <div className="info-block">
                    <div className="row">
                        <div className="fr-logo col">
                            <h3> Logo </h3>
                            <p> One page psd template </p>
                        </div>
                        <div className="divine-line col">
                            <hr/>
                        </div>
                        <div className="address-info col">
                            <div className="row">
                                <div className="col-2">
                                    <img src={homeAddress} alt=""/>
                                </div>
                                <div className="col-2">
                                    <h6 >13/2 Elizabeth Street Melbourne VIC 3000, Australia</h6>
                                </div>
                                <div className="w-100" style={{marginTop: '10%'}}></div>
                                <div className="col-2">
                                   <img src={phoneNumber} alt=""/>
                                </div>
                                <div className="col-2">
                                    <h6>+(00)1247 457893
                                        mail.example@legngth.com</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright row align-items-center justify-content-center">
                        <div>
                            <h6>Copyright © 2019 All Rights Reserved.
                                This template is developed by Andrew Kovalenko</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;