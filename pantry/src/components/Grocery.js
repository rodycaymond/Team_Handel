import { useState, useEffect } from 'react';
import './Grocery.css';

function GroceryBody (props){
    const [addItem, setAddItem] = useState(1);
    let inputs = Array(addItem).fill('Item');
    let createInputs = inputs.map((item,index)=>{
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
    function handleSubmit(event){
        event.preventDefault();
        console.log('submitted');
    }

    if (props.state === 'NewList'){
        return (
            <div aria-label="GroceryBody">
                <button onClick={()=>setAddItem(addItem+1)}>Add a new item</button>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>New Grocery List</legend>
                        {createInputs}
                    </fieldset>
                    <input type="submit" className="submit"></input>
                </form>
            </div>
        )
    } else if (props.state === 'CreatedLists'){
        return (
            <div aria-label="GroceryBody">
                <p>Created lists</p>
            </div>
        )
    }
}

export default GroceryBody;