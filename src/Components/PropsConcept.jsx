import React from 'react'

 function PropsConcept(props) {
  return (
    <div>
      
      <h1 className="bg-red-600">Name:{props.name}</h1>
      <h1 className="bg-red-600">Age:{props.age}</h1>

    </div>
  )
}

export default PropsConcept;
