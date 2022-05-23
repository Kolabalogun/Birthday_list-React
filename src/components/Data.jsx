import React from "react";

const Data = (props) => {
  return (
    <>
      <div className="list">
        <img src={props.img} alt="" />
        <div className="name">
          <h4>{props.name}</h4>
          <span>{props.Year} Years</span>
        </div>
        <p onClick={() => props.handleClick(props.id)}>Remove</p>
      </div>
    </>
  );
};

export default Data;
