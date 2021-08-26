import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header'
//import Main from './components/Main';
import Navigation from './components/Navigation';
 
const App = () => {
  return (    
    <div className=''>
     <div className=''>
       <Navigation />
     </div>
    <div className=''>
       <Header />
       <About />
       <Contact />
       <Footer />
     </div>
    
    </div>
   
    
  );
}

export default App;
