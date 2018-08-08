import React, { Component } from 'react';
import '../css/style.css';
import david_ctc from "../img/david_ctc.jpg";


class Contact extends Component {
  render() {
    return (
   	
        <div className="contactpage" id="contactpage">

            <div className="title">
                <h1>Contact</h1>
            </div>

            
            <div className="row">

                <div className="col-1-of-3">
                    <div className="contactpage__picture">
                        <img src={david_ctc} alt="David Photo" className="contactpage__picture--1"/>
                    </div>
                </div>


                <div className="col-2-of-3">
                    
                    <div className="contactpage__info">
                        <div className="contactpage__info--header">

                            <h5>For inquiries or to book an appointment:</h5>

                        </div>

                        <div className="contactpage__info--stats">
                            <p>by phone: (000)000-0000</p>
                            <p>by email: davidclarke@davidclarke.com</p>                            
                        </div>
                    </div>


                </div>

            </div>

        </div>
    );
  }
}

export default Contact;