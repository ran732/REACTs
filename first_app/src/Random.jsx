import BaseComponent from "bootstrap/js/dist/base-component";
function Random() {

    let number = Math.random() * 10;

  return (
    <h3 style = {{color: "blue", backgroundColor: "yellow"}}> Random number is : {number}    </h3>

  );
}

export default Random;