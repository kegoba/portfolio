import React, { Component } from "react";
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                < div className="container footer-up">
                    <div className="row">
                        <div className="col">
                            <p className="footer-up-text"> make payment with our App  and <br />
                            and enjoy 20% discount</p>
                        </div>

                        <div className="col">
                            <button className="get-started"> Get Started</button>
                        </div>
                    </div>
                </div>
                < div className="container footer-down">
                    <div className="row">
                        <div className="col">
                            <p> Social-media Handle </p>
                            <p className="fa fa-facebook">  facebook</p>
                            <p className="fa fa-twitter">  twitter  </p>
                            <p className="fa fa-histagram"> histagram</p>

                        </div>
                        <div className="col">
                            <p>  Airtime </p>
                            <p>  Data Subcription   </p>
                            <p>  Dstv Subcription</p>
                            <p> Remita Payment </p>
                        </div>
                        <div className="col ">
                            <p className="fa fa-facebook">  About Us</p>
                            <p className="fa fa-twitter">  Carrier  </p>
                            <p className="fa fa-histagram"> Community</p>
                            <p className="fa fa-histagram"> Privacy Policy</p>
                        </div>
                        <div className="col">
                            <div>
                                <input className="email" placeholder="E-mail" />
                                <button className=""> Go </button>
                                <p className="copyright"> Copyright@2020; </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Footer;