import { useState } from "react";
import "./App.css";
import { buttons } from "./buttons-data";

const App = () => {
  const [firstOperand, setFirstOperand] = useState("");
  const [secondOperand, setSecondOperand] = useState("");
  const [operator, setOperator] = useState("");
  const [flag, setFlag] = useState(false);

  const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const displayDigits = (e) => {
    if (operator === "") {
      console.log(firstOperand, typeof firstOperand);

      setFirstOperand(firstOperand.toString().concat(e.target.textContent));
    }
    if (operator !== "") {
      setSecondOperand(secondOperand.concat(e.target.textContent));
    }
  };

  const addNumbers = () => {
    if (flag === true) {
      setFlag(false);
    }
    setOperator("+");
  };

  const deductNumbers = () => {
    if (flag === true) {
      setFlag(false);
    }
    setOperator("-");
  };

  function reset() {
    setFirstOperand("");
    setSecondOperand("");
    setOperator("");
    setFlag(false);
  }

  let result;

  const calculateResult = () => {
    if (operator === "+") {
      result = Number(firstOperand) + Number(secondOperand);
    }
    if (operator === "-") {
      result = Number(firstOperand) - Number(secondOperand);
    }

    setFlag(!flag);
    setOperator("");
    setFirstOperand(result);
    setSecondOperand("");
  };

  return (
    <div className="calculator">
      <div className={flag ? "result output" : "result-output output"}>
        {result
          ? `(${result})`
          : `${firstOperand} ${operator} ${secondOperand}`}
      </div>
      <div className="calculator__buttons">
        <button className="button-c" onClick={reset}>
          C
        </button>
        <button onClick={addNumbers}>+</button>
        <button onClick={deductNumbers}>-</button>

        {nums.map((num, idx) => {
          return (
            <button key={idx} onClick={displayDigits}>
              {num}
            </button>
          );
        })}

        <button className="button-equal" onClick={calculateResult}>
          =
        </button>
      </div>
    </div>
  );
};

export default App;
