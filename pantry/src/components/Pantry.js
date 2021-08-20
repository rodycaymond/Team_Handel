import { useState, useEffect } from 'react';
import DataHandler from '../DataHandler.js';
import React from 'react';

class PantryBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    componentDidMount() {
        fetch(`http://localhost:8080/pantry/${this.props.userId}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    data: data
                })
            })
            .catch(err => console.log(err));
    }
    async handleAdd(event) {
        event.preventDefault();
        console.log(event.target.perishable.value);
        let ingred = event.target.New_Item.value;
        let amount = event.target.amount.value;
        let units = event.target.units.value;
        let perishable = event.target.perishable.value === 'on' ? true : false;
        console.log(perishable)


        await fetch(`http://localhost:8080/pantry/${this.props.userId}/addingredient`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: ingred,
                amount: amount,
                amount_unit: units,
                perishable: perishable
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        return fetch (`http://localhost:8080/pantry/${this.props.userId}`);
        })
        .then(res=>res.json())
        .then(data=>{
            let info = data;
            this.setState({
                data: info
            })
        })
        .catch(err=>console.log(err))
    }
    handleDelete(index) {
        let p_id = this.state.data[index].pantry_id;
        let p_ingred_id = this.state.data[index].pantry_ingredients_id;
        fetch(`http://localhost:8080/pantry?pantry_id=${p_id}&pantry_ingredients_id=${p_ingred_id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                return fetch(`http://localhost:8080/pantry/${this.props.userId}`);
            })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    data: data
                })
            })
            .catch(err => console.log(err))
    }
    //useEffect like component did mount, but if something changes the selected pantry id, will rerun the useEffect, 
    //component did mount to update. takes a callback and then an array as arguments
    render() {
        if (this.props.identifier === 'All') {
            let allPantryItems = this.state.data.map((item, index) => {
                return (
                    <li style={{ listStyleType: 'none' }} key={index}>
                        {item.amount + ' ' + item.amount_unit + ' of ' + item.name + ' '}
                        <button type="button" className="deletebtn" onClick={() => this.handleDelete(index)}>Delete</button>
                    </li>
                )
            });
            return (
                <div className="PantryBody">
                    <ul>
                        {allPantryItems}
                    </ul>
                    <div>
                        <form onSubmit={this.handleAdd}>
                            <label htmlFor='New_Item'></label>
                            <input name='New_Item' placeholder="New Ingredient"></input>
                            <label htmlFor="amount"></label>
                            <input name='amount' placeholder="Amount"></input>
                            <label htmlFor="units"></label>
                            <input name='units' placeholder="Units"></input><br></br>
                            <label htmlFor="perishable">Is perishable?</label>
                            <input type='checkbox' name='perishable'></input>
                            <br></br>
                            <input type="submit" text="Add Item" className="submit"></input>
                        </form>
                    </div>
                </div>
            )
        } else {
            return (
                <div aria-label="PantryBody" className="PantryBody">
                    <p>{this.props.indentifier}</p>
                </div>
            )
        }
    }
    /*
    else if (props.state === 'Reserved'){
        let reservedItems = //fetch call .filter(item=>{
            return item.reservation === 'reserved';
        });
        let pantryItems = reservedItems.map((item,index)=>{
            return <li key={index}>{item.name}</li>
        });
        return (
            <div className="PantryBody">
                <ul>
                    {pantryItems}
                </ul>
            </div>
        )
    } else if (props.state === 'Unreserved'){
        let unreservedItems = //fetch call .filter(item=>{
            return item.reservation === 'unreserved';
        });
        let pantryItems = unreservedItems.map((item,index)=>{
            return <li key={index}>{item.name}</li>
        });
        return (
            <div className="PantryBody">
                <ul>
                      {pantryItems}
                </ul>
            </div>
        )
    }
    
        
        return (
            <div aria-label="PantryBody" className="PantryBody">
                <p>{props.state}</p>
            </div>
        )
        */
}

export default PantryBody;