import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
//import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header'
//import Main from './components/Main';
import Navigation from './components/Navigation';
 
const App = () => {
  return (    
    <Router>
       <div className=''>
         <Navigation />
         <Header />
         <Contact />
         <Footer />
    </div>
   </Router>
  );
}

export default App;
 