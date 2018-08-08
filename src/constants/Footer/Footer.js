import React, { Component } from 'react';
import '../../css/style.css';
import FB from "../../img/FB_btn_grey.png";
import Insta from "../../img/Insta_btn_grey.png";
import Twitter from "../../img/twitter_btn_grey.png";

class Footer extends Component {
  render() {
    return (
    	<div className="footerBar">

                <div className="footerBar__links">
                    <img src={FB} alt="FB button" className="footerBar__links--icon" />
                    <img src={Insta} alt="Insta button" className="footerBar__links--icon" />
                    <img src={Twitter} alt="Twitter button" className="footerBar__links--icon" />
                </div>

                <div className="footerBar__copy">
                    <p>Built by: &#9400; 2018 Bart Wiharto</p>
                </div>	

    	</div>
    );
  }
}

export default Footer;