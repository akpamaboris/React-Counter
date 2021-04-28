const ButtonComp = (props) => {
  const decrementbtn = () => {
    props.setCounter(props.counter - 1);
  };

  const incrementbtn = () => {
    props.setCounter(props.counter + 1);
  };

  const resetCounter = () => {
    props.setCounter(1 - 1);
  };
  return (
    <>
      <div className="f-row">
        {props.counter === 0 ? null : <button onClick={decrementbtn}>-</button>}
        <h1>{props.counter}</h1>
        {props.counter === 10 ? null : (
          <button onClick={incrementbtn}>+</button>
        )}
      </div>
      <div className="f2-row">
        <br />
        <br />
        <button onClick={resetCounter}>Reset</button>
      </div>
    </>
  );
};

export default ButtonComp;
