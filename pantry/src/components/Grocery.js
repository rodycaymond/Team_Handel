import { useState, useEffect } from 'react';

function GroceryBody (props){

    // let pantryDesignator = props.pantryDesignator;
    // let pantryItemList = [];

    // let itemList=items.map((item,index)=>{
    //     return <li key={index}>{item}</li>
    //   })

    return (
        <div className="GroceryBody">
            {/* {itemList} */}
            <p>{props.state}</p>
        </div>
    )
}

export default GroceryBody;