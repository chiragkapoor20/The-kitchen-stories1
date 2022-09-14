import React from 'react'
import Foods from '../Foods.js';
import Shopping from '../Shopping.js';
import Carasoul from '../Carasoul.js';
import Bigmenu from '../Bigmenu.js';
import Recipe from '../Recipe.js';
import Header from '../Header.js';
import Footer from '../Footer.js';


const Home = () => {
    return (
        <div>
            <Header ></Header>
            
            <Bigmenu></Bigmenu>
            <Carasoul></Carasoul>
            <Recipe></Recipe>
            <Foods></Foods>
            <Shopping></Shopping>
            <Footer></Footer>
        </div>
    )
}

export default Home