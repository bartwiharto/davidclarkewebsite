import React, { Component } from 'react';
import '../css/style.css';

import Model1 from "../img/Model1.jpg";
import Model2 from "../img/Model2.jpg";
import Model3 from "../img/Model3.jpg";
import Model4 from "../img/Model4.jpg";
import Model5 from "../img/Model5.jpg";
import Model6 from "../img/Model6.jpg";
import Model7 from "../img/Model7.jpg";
import Model8 from "../img/Model8.jpg";
import Model9 from "../img/Model9.jpg";



import Model1small from "../img/Model1small.jpeg";
import Model2small from "../img/Model2small.jpeg";
import Model3small from "../img/Model3small.jpeg";
import Model4small from "../img/Model4small.jpeg";
import Model5small from "../img/Model5small.jpeg";
import Model6small from "../img/Model6small.jpeg";
import Model7small from "../img/Model7small.jpeg";
import Model8small from "../img/Model8small.jpeg";
import Model9small from "../img/Model9small.jpeg";



class Portfolio extends Component {
  render() {
    return (
        <div className="portfoliopage" id="portfoliopage">
        
            <div className="title">
                <h1>Portfolio</h1>
            </div>

            <div className="portfolio__photos">

{/* <------------------ 1st Row ------------------------> */}

                <div className="row">

                    <div className="col-1-of-3">
                        <a href="#popup1">
                            <img src={Model1small} alt="Photo Model 1" className="small-pic picture--photo1" />
                        </a>
                    </div>

                    <div className="col-1-of-3">
                        <a href="#popup2">
                            <img src={Model2small} alt="Photo Model 2" className="small-pic picture--photo2" />
                        </a>
                    </div>

                    <div className="col-1-of-3">
                        <a href="#popup3">
                            <img src={Model3small} alt="Photo Model 3" className="small-pic picture--photo3" />
                        </a>
                    </div>

                </div>

{/* <------------------ 2nd Row ------------------------> */}

                <div className="row">

                    <div className="col-1-of-3">
                        <a href="#popup4">
                            <img src={Model4small} id="small4" alt="Photo Model 4" className="small-pic picture--photo4" />
                        </a>
                    </div>

                    <div className="col-1-of-3">
                        <a href="#popup5">
                            <img src={Model5small} id="small5" alt="Photo Model 5" className="small-pic picture--photo5" />
                        </a>
                    </div>

                    <div className="col-1-of-3">
                        <a href="#popup6">
                            <img src={Model6small} id="small6" alt="Photo Model 6" className="small-pic picture--photo6" />
                        </a>
                    </div>

                </div>

{/* <------------------ 3rd Row ------------------------> */}

                <div className="row">

                    <div className="col-1-of-3">
                        <a href="#popup7">
                            <img src={Model7small} id="small7" alt="Photo Model 7" className="small-pic picture--photo7" />
                        </a>
                    </div>

                    <div className="col-1-of-3">
                        <a href="#popup8">
                            <img src={Model8small} id="small8" alt="Photo Model 8" className="small-pic picture--photo8" />
                        </a>                    
                    </div>

                    <div className="col-1-of-3">
                        <a href="#popup9">
                            <img src={Model9small} id="small9" alt="Photo Model 9" className="small-pic picture--photo9" />
                        </a>
                    </div>

                </div>
            </div>

{/* <------------------ 1st Row Pop Up------------------------> */}

            <div className="popup" id="popup1">

                    <a href="#portfoliopage" className="popup__close">&times;</a>

                    <div className="popup__content">
                        <img src={Model1} alt="Photo Model 1" className="big-pic picture--photo1" />    
                    </div>

            </div>

            <div className="popup" id="popup2">

                    <a href="#portfoliopage" className="popup__close">&times;</a>

                    <div className="popup__content">
                        <img src={Model2} alt="Photo Model 2" className="big-pic picture--photo2" />    
                    </div>
                    
            </div>

            <div className="popup" id="popup3">

                    <a href="#portfoliopage" className="popup__close">&times;</a>

                    <div className="popup__content">
                        <img src={Model3} alt="Photo Model 3" className="big-pic picture--photo3" />    
                    </div>
                    
            </div>

{/* <------------------ 2ns Row Pop Up------------------------> */}
            <div className="popup" id="popup4">

                    <a href="#portfoliopage" className="popup__close">&times;</a>

                    <div className="popup__content">
                        <img src={Model4} alt="Photo Model 4" className="big-pic picture--photo4" />    
                    </div>
                    
            </div>

            <div className="popup" id="popup5">

                    <a href="#portfoliopage" className="popup__close">&times;</a>

                    <div className="popup__content">
                        <img src={Model5} alt="Photo Model 5" className="big-pic picture--photo5" />    
                    </div>
                    
            </div>

            <div className="popup" id="popup6">

                    <a href="#portfoliopage" className="popup__close">&times;</a>

                    <div className="popup__content">
                        <img src={Model6} alt="Photo Model 6" className="big-pic picture--photo6" />    
                    </div>
                    
            </div>
{/* <------------------ 3rd Row Pop Up------------------------> */}

            <div className="popup" id="popup7">

                    <a href="#small4" className="popup__close">&times;</a>

                    <div className="popup__content">
                        <img src={Model7} alt="Photo Model 7" className="big-pic picture--photo7" />    
                    </div>
                    
            </div>

            <div className="popup" id="popup8">

                    <a href="#small5" className="popup__close">&times;</a>

                    <div className="popup__content">
                        <img src={Model8} alt="Photo Model 8" className="big-pic picture--photo8" />    
                    </div>
                    
            </div>

            <div className="popup" id="popup9">

                    <a href="#small6" className="popup__close">&times;</a>

                    <div className="popup__content">
                        <img src={Model9} alt="Photo Model 9" className="big-pic picture--photo9" />    
                    </div>
                    
            </div>
        </div>
    );
  }
}

export default Portfolio;