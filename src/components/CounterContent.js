import React from "react";

import './CounterContent.css';

function InCounterContent(props) {
  return (
    <div className="content">
      <p className="content-text counter">{props.count}</p>
      <p className="content-text">{props.title + " tab"}</p>
      <button onClick={props.onClick} className={props.title} id="incDec">{props.title}</button>
    </div>
  );
}

export default InCounterContent;
