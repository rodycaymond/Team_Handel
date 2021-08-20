import { useState, useEffect } from 'react';
import './Grocery.css';
function RecipeBody (props){

        const [recipes, setRecipes] = useState([]);

        useEffect(()=>{
        fetch(`http://localhost:8080/recipes/${props.userId}`)
        .then(res=>res.json())
        .then(data=>{
            setRecipes(data)
            console.log(data, recipes)
        })
        }, []);
    
        const [addItem, setAddItem] = useState(1);
        let inputs = Array(addItem).fill('Item');
        let createRecipes = inputs.map((item,index)=>{
            return (
                <div key={index}>
                    <label htmlFor={item}>{item + " "+(index+1)}</label>
                    <input name={item} placeholder="Ingredient"></input>
                    <label htmlFor="amount">{"Amount"+":"}</label>
                    <input name='amount' placeholder="Amount"></input>
                    <br></br><br></br>
                </div>
            )
        })
        function handleSubmit (event) {
            event.preventDefault();
            let e = event.target;
            if (!e.Item.length){
                fetch('http://localhost:8080/recipes/add', {
                    method: 'POST',
                    body: JSON.stringify({
                        recipe_name: 'test',
                        recipe_ingredients: e.Item.value,
                        instructions: e.instructions.value,
                        user_id: props.userId
                    })
                })
                .then(res=>res.json())
                .then(data=>{
                    return fetch(`http://localhost:8080/recipes/${props.userId}`);
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                });
                // console.log(e.Item.value, e.amount.value)
            } else if (e.Item.length){
                console.log(e.Item)
                let items = [];
                e.Item.forEach(item=>items.push(item.value))
                console.log(items)
                fetch('http://localhost:8080/recipes/add', {
                    method: 'POST',
                    body: JSON.stringify({
                        recipe_name: e.recipeName.value,
                        recipe_ingredients: items,
                        instructions: e.instructions.value,
                        user_id: props.userId
                    })
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    return fetch(`http://localhost:8080/recipes/${props.userId}`);
                })
                .then(res=>res.json())
                .then(data=>setRecipes(data))
                .catch(err=>console.log(err))
                // console.log(
                //     e.Item.forEach(item=>console.log(item.value)),
                //     e.amount.forEach(item=>console.log(item.value))
                // )
            }
        }

        if (props.state === 'Create'){
        return (
            <div aria-label="RecipeBody" >
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>New Recipe</legend>
                        <label htmlFor="recipeName">Recipe Name</label>
                        <input name="recipeName" placeholder="Recipe name"></input><br></br><br></br>
                        <label htmlFor="instructions"> Instructions </label>
                        <br></br>
                        <textarea rows = "5" cols = "60" name = "instructions" placeholder="Enter details here ...">
                        </textarea><br></br>
                        <br></br>
                        {createRecipes}
                    </fieldset>
                    <input type="submit" className="submit"></input>
                </form>
                <button onClick={()=>setAddItem(addItem+1)}>Add a new item</button>
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