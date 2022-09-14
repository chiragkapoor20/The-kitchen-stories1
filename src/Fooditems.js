import React from "react";
import './Foods.css';

const Fooditems=(getFood)=>{
    console.log(getFood.data.strMealThumb);
    return(
        <>
            <div className="card">
                <img src={getFood.data.strMealThumb} alt="food"></img>
                <div className="info">
                    <h2>{getFood.data.strMeal}</h2>
                    <p>{getFood.data.strArea} food</p>
                    
                </div>
                <div className="recipe">
                    <h2>Recipe</h2>
                    <p>{getFood.data.strInstructions}</p>
                    <img src={getFood.data.strMealThumb}></img>
                    <a href={getFood.data.strSource}>Watch Video</a> 
                </div>
            </div>
        </>
    )
}

export default Fooditems;