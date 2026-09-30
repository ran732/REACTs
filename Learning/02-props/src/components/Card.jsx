import React from 'react'

const Card = (props) => {

    console.log(props);
    console.log(props.age);
    console.log(props.user);

  return (

    <div className="parent">
    <div>
      <div className="card"><h1>{props.user},{props.age}</h1>
      <img src={props.img} alt="eL" />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere velit eos dignissimos doloribus?</p>
      <button>View Profile</button>
      </div>
    </div>
    
    
    </div>
  )
}

export default Card;
