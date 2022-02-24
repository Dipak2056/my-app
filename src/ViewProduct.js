import React from "react";
const ViewProduct = (props) => {
    const renderProduct = props.prodData.map((item)=>{
        return (
            <div>
 <h2>{item.brand}</h2>
            <span>{item.form}</span>
            </div>
           
        )
    });
    return (
        <div>
            {renderProduct}
        </div>
    )
}
export default ViewProduct;
//map
//filter
//indexOf 
//important concepts to be takencare of 
