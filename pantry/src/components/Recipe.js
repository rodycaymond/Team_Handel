import { useState, useEffect } from 'react';

function RecipeBody (props){

    /*
    if (props.state === 'All'){
        let allRecipes = //fetch call .map((item,index)=>{
            return (
                <li key={index}>
                    <p>{item.recipeName</p>
                    <p>{item.ingredients}</p>
                </li>
            )
        });
        return (
            <div className="RecipeBody">
                <ul>
                    {allRecipes}
                </ul>
            </div>
        )
    } else if (props.state === 'Lists'){
        let lists = //fetch call .map((item,index)=>{
            return <li key={index}>{item.recipeName</li>
        });
        return (
            <div className="RecipeBody">
                <ul>
                    {lists}
                </ul>
            </div>
        )
    }
    */

    return (
        <div className="PantryBody">
            <p>{props.state}</p>
        </div>
    )
}

export default RecipeBody;