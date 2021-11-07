import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import React from 'react';
//import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home'
//import Main from './components/Main';
import Navigation from './components/Navigation';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <div className=''>
                <Navbar/>
                <Switch>
                    <Route path='/'/>
                </Switch>
                <Home />
                <Contact />
                <Footer />
                <Navigation />
            </div>
        </Router>
    );
}

export default App;
