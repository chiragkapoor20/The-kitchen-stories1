import React, { useState } from "react";
import './Foods.css';
import Fooditems from "./Fooditems";



const Foods=()=>{
    const[search,setSearch]=useState("");
    const[Myfood,setFood]=useState();
    const searchFood=(evt)=>{
        if(evt.key=="Enter"){
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(res=>res.json()).then(data=> {setFood(data.meals);setSearch("")})
        }
    }

    return(
        <div id='f1'>
        <div className="bodycont" >
            <div className="heading">
                <h1>Find a Food Recipe</h1>
                <h3>Get your favourite food recipes with just one go.</h3>
            </div>
            <div className="searchBox">
                <input type="search" className="search-bar" placeholder="Enter your favourite dish." onChange={(e)=>setSearch(e.target.value)} value={search} onKeyPress={searchFood}></input>
            </div>
            <div className="container">
            {
                (Myfood==null)? <p className="notSearch">Sorry! Recipe Not Found</p> : 
                    Myfood.map((res)=>{
                        return(
                        <Fooditems data={res}/>
                    )
                }
                )
            }
            

            </div>
        </div>
        </div>
    )
}


export default Foods;