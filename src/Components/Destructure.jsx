import React from "react"

function Destructure({name,age,lover,lovername}){
    
    return(
        <div>
                <h1 className="bg-red-600">{lover} {lovername}</h1>
            <h1 className="bg-red-600">{name}</h1>
            <h2 className="bg-red-600">{age}</h2>
        </div>
    )
}

export default Destructure;