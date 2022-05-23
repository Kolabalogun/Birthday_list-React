import React from "react";
import "./Style.css";
import Array from "./Array";
import Data from "./Data";

const MainPage = () => {
  const [Birthday, BirthdayF] = React.useState(Array);
  const [btn, btnF] = React.useState(true);

  const BirthdayElement = Birthday.map((B) => (
    <Data
      key={B.id}
      id={B.id}
      img={B.img}
      name={B.name}
      Year={B.age}
      handleClick={handleClick}
    />
  ));

  function handleClick(id) {
    let newLists = Birthday.filter((newA) => newA.id !== id);
    BirthdayF(newLists);
  }

  function reset(params) {
    BirthdayF([]);
    btnF(false);
  }
  function refresh(params) {
    BirthdayF(Array);
    btnF(true);
  }

  return (
    <div className="container">
      <h3>{Birthday.length} Birthdays today</h3>
      {BirthdayElement}

      {btn === true && Birthday.length > 0 ? (
        <button onClick={reset}>Clear All</button>
      ) : (
        <button onClick={refresh}>Refresh</button>
      )}
    </div>
  );
};

export default MainPage;
