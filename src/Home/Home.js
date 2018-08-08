import React, { Component } from 'react';
import '../css/style.css';
import david1 from "../img/david1.jpg";

class Home extends Component {
  render() {
    return (
    	<div className="homepage">
    	
    		<div className="homepage__card">
	    		<div>
	    			<h1 className="homepage__card--name">David A. Clark</h1>
	    		</div>
	    		<div className="homepage__card--title">
	    			<p>Assistant Creative Director</p>
	    			<p>Vidal Sassoon Beverly Hills, CA</p>
	    		</div>	
    		</div>

    		<img src={david1} alt="Picture" className="homepage__picture" />	
    	</div>
    );
  }
}

export default Home;
