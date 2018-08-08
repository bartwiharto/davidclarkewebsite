import React, { Component } from 'react';
import '../../css/style.css';

class Header extends Component {
  render() {
    return (
    	<div className="navigationBar">

             <div className="row">

                 <div className="col-1-of-2">
                     <h3 className="logoName heading-tertiary">David Clark</h3>
                 </div>

                 <div className="col-1-of-2">

			          	<ul className="navigation">
								<li className="navi-list"><a href="/home" className="btn-text">Home</a></li>
								<li className="navi-list"><a href="#aboutpage" className="btn-text">About</a></li>
								<li className="navi-list"><a href="#portfoliopage" className="btn-text">Portfolio</a></li>
								<li className="navi-list"><a href="#contactpage" className="btn-text">Contact</a></li>
						</ul>
                 </div>

             </div>			
    	</div>
    );
  }
}

export default Header;