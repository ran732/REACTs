import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

function Header({headerInfo,cname,greet}) {

  return (
    <div>
   
    <div className='text-center'>
      <h1 >This is the Header {headerInfo.email} | {headerInfo.phone} | {cname} </h1>
       <button onClick={greet}> Click Me</button>
    </div>
    </div>
  )
}
export default Header;
