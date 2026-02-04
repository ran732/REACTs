import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function Practice1() {
  let name = " Hello Guys !! Welcome Back to my Channel";
  let l = [1, 2, 3, 4, 5, 6];
  let obj = {
    name: "RaFel",
    cName: "MERN",
    desc: "REact app",
  };
  let status = true;

  return (
    <>
      <div className="main">
        <h1 className="text-center p-5">{name}</h1>
        <div className="text-center">
          {l.map((v) => {
            return <div>{v}</div>;
          })}
        </div>
        <div className="text-center">
          <div>
            {" "}
            {obj.cName}
            {7}{" "}
          </div>
          <div> {23 + 450} </div>
          {status ? <h1 style={{color:"red",backgroundColor:"pink"}} >Welcome</h1> : ""}
        </div>
      </div>
    </>
  )
};



function PS() {
  return (
    <div>
      <h3>This is a function inside practice1</h3>
    </div>
  )
};


export {Practice1,PS};
