import React from "react";

function TodoItem(props) {
  const completedStyle = { color: "green", textDecoration: "line-through" };
  console.log(props.compStatus);
  return (
    <div style={{ border: "5px green solid" }}>
      <input
        type="checkbox"
        onChange={(event) => props.newprop(props.serial1)}
        checked={props.compStatus}
      ></input>
      <h2 style={props.compStatus === false ? completedStyle : null}>
        Your item's serial number is {props.serial1}
        <br></br>
        <br></br>
        The title of ur item is {props.title1}
        <br></br>
        <br></br>
        {`the check property is ${props.compStatus}`}
      </h2>
      <hr />
    </div>
  );
}

export default TodoItem;
