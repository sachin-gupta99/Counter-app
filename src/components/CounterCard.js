import React, { useState, useEffect } from "react";
import CounterContent from "./CounterContent";

function CounterCard(props) {
  const [count, setCount] = useState(props.counter);
  let timer;

  useEffect(() => {
    setCount(props.counter);
  }, [props.counter]);

  useEffect(() => {
    if (props.flag) {
      timer = setInterval(() => {
        if(props.title === "Increment")
            setCount(prev => prev+1);
        else if(props.title === "Decrement")
            setCount(prev => prev-1);
      }, 1000);
    } else {
      clearInterval(timer);
      props.counterChange(count);
    }
    return () => {
      clearInterval(timer);
    };
  }, [props.flag, props.counter]);

  const clickHandler = () => {
    props.setFlag();
  };

  return (
    <CounterContent title={props.title} onClick={clickHandler} count={count} />
  );
}

export default CounterCard;
