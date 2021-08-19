import { useState, useEffect } from 'react';
import './Grocery.css';
function RecipeBody (props){

        const [recipes, setRecipes] = useState([]);

        useEffect(()=>{
        fetch(`http://localhost:8080/recipes/${props.userId}`)
        .then(res=>res.json())
        .then(data=>setRecipes(data))
        }, []);
    
        const [addItem, setAddItem] = useState(1);
        let inputs = Array(addItem).fill('Item');
        let createRecipes = inputs.map((item,index)=>{
            return (
                <div key={index}>
                    <label htmlFor={item+(index+1)+":"}>{item + ' ' + (index+1)}</label>
                    <input name={item+(index+1)} placeholder="Ingredient"></input>
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
            <div aria-label="RecipeBody" >
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>New Recipe</legend>
                        <label htmlFor="Recipe Name">Recipe Name</label>
                        <input name="Recipe Name" placeholder="Recipe name"></input>
                        <label htmlFor="Instructions"> Instructions </label>
                        <br></br><br></br>
                        <textarea rows = "5" cols = "60" name = "instructions" placeholder="Enter details here ...">
                           
                        </textarea><br></br>

                        <br></br>
                        {createRecipes}
                        <button onClick={()=>setAddItem(addItem+1)}>Add a new item</button>
                    </fieldset>
                    <input type="submit" className="submit"></input>
                </form>
            </div>
        )
    } else if (props.state === 'All'){

        let allRecipes = recipes.map((item,index)=>{
            return (
                <li key={index}>
                    <p>{item.recipe_name}</p>
                    <p>{item.recipe_ingredients}</p>
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
    } /*else if (props.state === 'Lists'){
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
}

export default RecipeBody;