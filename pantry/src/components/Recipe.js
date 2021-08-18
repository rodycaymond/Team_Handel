import { useState, useEffect } from 'react';
import './Grocery.css';
function RecipeBody (props){

    
    
        const [addItem, setAddItem] = useState(1);
        let inputs = Array(addItem).fill('Item');
        let createRecipes = inputs.map((item,index)=>{
            return (
                <div key={index}>
                    <label htmlFor={item+(index+1)+":"}>{item + ' ' + (index+1)}</label>
                    <input name={item+(index+1)} placeholder="Grocery Item"></input>
                    <label htmlFor="amount">{"Amount"+":"}</label>
                    <input name='amount' placeholder="Amount"></input>
                    <br></br><br></br>
                </div>
            )
        })
        function handleSubmit (event) {
            event.preventDefault();
        }
        if (props.state === 'Create'){
        return (
            <div>
                <button onClick={()=>setAddItem(addItem+1)}>Add a new item</button>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>New Recipe</legend>
                        {createRecipes}
                    </fieldset>
                    <input type="submit" className="submit"></input>
                </form>
            </div>
        )
    } else {
    /*
    else if (props.state === 'All'){
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
            return <li key={index}>{item.recipeName}</li>
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
}

export default RecipeBody;