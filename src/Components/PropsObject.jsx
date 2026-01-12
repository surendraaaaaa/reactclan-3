import React from "react";

function PropsObject({Info}){
    return(
        <div>
    <h1>{Info.name}</h1>
    <h1>{Info.age}</h1>
    <h1>{Info.lover}</h1>
    </div>
    );
}

export default PropsObject;