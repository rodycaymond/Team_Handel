import { useState, useEffect } from 'react';

function PantryBody (props){
    
    // let pantryDesignator = props.state;
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

export default PantryBody;