import { useState, useEffect } from 'react';
import './Grocery.css';

function GroceryBody (props){
    const [addItem, setAddItem] = useState(1);
    let inputs = Array(addItem).fill('Item');
    let createInputs = inputs.map((item,index)=>{
        return (
            <div key={index}>
                <label htmlFor={item+(index+1)+":"}>{item + ' ' + (index+1)+":"}</label>
                <input name={item+(index+1)} placeholder="Grocery Item"></input>
                <label htmlFor="amount">Amount:</label>
                <input name='amount' placeholder="Amount"></input><br></br>
                <label htmlFor="units">Units: </label>
                <input name="units" placeholder="Units"></input>
                <br></br><br></br>
            </div>
        )
    })
    function handleSubmit(event){
        event.preventDefault();
        console.log('submitted', event.target);
        fetch('http://localhost:8080/grocerylist/add', {
            method: 'POST',
            body:  {
                   user_id: 1,//req.body.user_id,
                   name: 'test',//req.body.name,
                   perishable: true,//req.body.perishable,
                   amount: 2.0,//req.body.amount,
                   amount_units: 'test',//req.body.amount_units
                }
            })
            .then(res=>res.json())
            .then(data=>console.log(data))
        }
    

    if (props.state === 'NewList'){
        return (
            <div aria-label="GroceryBody">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Groceries</legend>
                        <label htmlFor="list name">Grocery List Name:</label>
                        <input name="list name" placeholder="Ex: Carne Asada"></input>
                        <br></br><br></br>
                        {createInputs}
                    </fieldset>
                    <button onClick={()=>setAddItem(addItem+1)}>Add a new item</button>
                    <input type="submit" className="submit" value="Save" style={{marginLeft: 10}}></input>
                </form>
            </div>
        )
    } else if (props.state === 'CreatedLists'){
        /*
        
        let individualData;
        let listOfLists;
        fetch(the list of lists)
        .then(res=>res.json())
        .then(data=>{
            individualData = data.map((item,index)=>{
                return (
                    <div key={index}>
                        <p>{item.itemName}</p>
                        <p>{item.amount}</p>
                        <p>{item.units}</p>
                    </div>
                )
            })
            listOfLists = data.map((item,index)=>{
                return (
                    <div className="groc-list" key={index}>
                        <h4>{item.listName}</h4>
                        {individualData}
                    </div>
                )
            })
        })
        final return ----> {listOfLists}
         */
        return (
            <div aria-label="GroceryBody">
                <p>Created lists</p>
            </div>
        )
    }
}

export default GroceryBody;