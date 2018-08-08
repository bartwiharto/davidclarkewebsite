import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './Home/About';
import Portfolio from './Home/Portfolio';
import Contact from './Home/Contact';
import Header from './constants/Header/Header';
import Footer from './constants/Footer/Footer';

import * as routes from './constants/routes';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
          	<Header />

            <main>
            <Route
              exact path={routes}
              component={() => <Home />}
            />

            <Route
              exact path={routes}
              component={() => <About />}
            />

            <Route
              exact path={routes}
              component={() => <Portfolio />}
            />

            <Route
              exact path={routes}
              component={() => <Contact />}
            /> 
            </main>   

            <Footer />
          </div> 
        </Router>
      </div>  
    );
  }
}



export default App;
