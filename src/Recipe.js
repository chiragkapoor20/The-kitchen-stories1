import React from "react";
import './Recipe.css'
import Pizza from './recipeofday.jpg'
import Paneer from './paneer.jpeg'
import Mixveg from './mixveg.jpeg'
import Tikka from './tikka.jpeg'



export default function Recipe() {
  return (
    <div>
        <div className="imgcont">
            <div className="headiv">RECIPE OF THE DAY</div>    
            <img src={Pizza} className='imgpizza'></img>
            <p className="quotes">Love fades, Pizza is <br></br><span>Forever!</span></p>
            <div className="vl"></div>
            <p className="quotes1">Pizza is a dish of Italian origin consisting of a usually round, 
            flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various 
            other ingredients (such as various types of sausage, anchovies, mushrooms, onions, olives, vegetables, meat, ham, etc.), 
            which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is 
            sometimes called a pizzetta. A person who makes pizza is known as a pizzaiolo.</p>
            <div className="comp"><a >VIEW COMPLETE GUIDE <i className='fas fa-angle-double-right'></i></a></div>
            <div className="comps">
              <div className="comp1">
                <div><img src={Paneer} alt="paneer"></img></div>
                <div><a href="https://cookieandkate.com/margherita-pizza-recipe/">Pizza always makes a bad day feel better, and there's nothing nicer than a perfect slice of margherita pizza.</a></div>
              </div>
              <div className="comp1">
                <div><img src={Mixveg} alt="mixveg"></img></div>
                <div><a href="https://www.vegrecipesofindia.com/paneer-tikka-pizza-recipe/"> We Indians like to fuse our food is with Italian. Paneer Tikka Pizza looks awesome and is our very own fusion version</a> </div>
                
              </div>
              <div className="comp1">
                <div><img src={Tikka} alt="tikka"></img></div>
                <div><a href="https://midwestfoodieblog.com/20-minute-mac-and-cheese-pizza/">You are going to love this new twist on comfort food that combines two of the best macaroni and cheese and pizza!</a></div>
                
              </div>
            </div>
        </div>
    </div>
  )
}


