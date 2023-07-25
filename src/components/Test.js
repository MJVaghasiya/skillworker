import React, { useState } from "react";
// import "./styles.css";

function Test() {
  const [active, setActive] = useState(false);

  function closeItem() {
    setActive(true);
  }
  function openItem() {
    setActive(false);
  }
  return (
    <>
      <button onClick={closeItem}>close</button>
      <button onClick={openItem}>open</button>
      <h1 className={active ? "close" : "open"}>Test</h1>
    </>
  );
}

export default Test;
