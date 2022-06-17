import React from 'react';
import Body from "./components/Body";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Header from './components/Header';

const App = () => {
    return (
            <div>
            <Header />
            <div className='md:mx-64 mx-6'>
                <Body />
                <Skills />
                <Contact />
                <Footer />
            </div>
        </div>
        );
}

export default App;
