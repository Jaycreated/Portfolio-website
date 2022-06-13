import React from 'react';
import Card from './components/Card';
import Body from "./components/Body";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Header from './components/Header';

const App = () => {
    return (
            <div>
            <Header />
            <div className='mx-64'>
                <Body />
                <Skills />
                <Contact />
                <Footer />
            </div>
        </div>
        );
}

export default App;
