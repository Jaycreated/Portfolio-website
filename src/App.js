import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header'
import Main from './components/Main';
import Sideons from './components/Sideons';
 
const App = () => {
  return (    
    <div>
      <Header />
      <Sideons />
      <Main />
      <About />
      <Contact />
      <Footer />
    </div>
   
    
  );
}

export default App;
