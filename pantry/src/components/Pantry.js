import { useState, useEffect } from 'react';
import DataHandler from '../DataHandler.js';
import React from 'react';

class PantryBody extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        fetch(`http://localhost:8080/pantry/${2}`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                data: data
            })
        })
        .catch(err=>console.log(err));
    }
    
//useEffect like component did mount, but if something changes the selected pantry id, will rerun the useEffect, component did mount to update. takes a callback and then an array as arguments
    render(){
        if (this.props.identifier === 'All'){
            let allPantryItems = this.state.data.map((item,index)=>{
                return <li style={{listStyleType: 'none'}} key={index}>{item.name}</li>
            });
            return (
                <div className="PantryBody">
                    <ul>
                        {allPantryItems}
                    </ul>
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