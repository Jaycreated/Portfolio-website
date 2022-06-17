import React from 'react';
import Body from "./components/Body";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Header from './components/Header';

const App = () => {
    return (
            <div>
            <Header />
                <Body />
                <div className='md:mx-64'>
                <Skills />
                <Footer />
            </div>
        </div>
        );
}

export default App;
