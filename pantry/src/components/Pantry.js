import { useState, useEffect } from 'react';

function PantryBody (props){
    
    /*
if (props.state === 'All'){
    let allPantryItems = //fetch call .map((item,index)=>{
        return <li key={index}>{item.name}</li>
    });
    return (
        <div className="PantryBody">
            <ul>
                {allPantryItems}
            </ul>
        </div>
    )
} else if (props.state === 'Reserved'){
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

    */
    return (
        <div aria-label="PantryBody" className="PantryBody">
            <p>{props.state}</p>
        </div>
    )
}

export default PantryBody;