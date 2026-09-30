import React from 'react'
import Card from './components/card';
import Navbar from './components/Navbar';

const App = () => {
  
  const user ="eL";  //variable
  const age =21;  //variable

  return (
    <>

       <Navbar/>

      <Card/>
      <Card/>
      <Card/>
     
      <h1> hello guys I am {user}. I am {age} years old.</h1>
    
    </>
    

  );
  
}

export default App;
