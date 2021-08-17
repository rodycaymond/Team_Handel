import { useState, useEffect } from 'react';

function RecipeBody (props){

    // let pantryDesignator = props.pantryDesignator;
    // let pantryItemList = [];

    // let itemList=items.map((item,index)=>{
    //     return <li key={index}>{item}</li>
    //   })

    return (
        <div className="PantryBody">
            {/* {itemList} */}
            <p>{props.state}</p>
        </div>
    )
}

export default RecipeBody;