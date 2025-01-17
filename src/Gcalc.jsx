import { useState } from "react";
import BackspaceIcon from "@mui/icons-material/Backspace";

function Gcalc() {
  const [calc, setCalc] = useState([]);
  const [inputVal, setInputVal] = useState("");
  function calculate() {
    const exprs = calc.join("").replace(/÷/g, "/").replace(/×/g, "*");
    console.log(exprs);
    const result = eval(exprs);
    console.log(result);
    setCalc([result]);
    console.log(calc);
    setInputVal(`${result}`);
  }

  function addToCalc(num) {
    setCalc((c) => {
      const updatedValue = [...c, num];
      setInputVal(`${updatedValue.join("")}`);
      return updatedValue;
    });
  }
  function backspace() {
    calc.pop();
    setInputVal(calc.join(""));
  }

  return (
    <>
      <div id="calculator">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div id="upper-part">
            <input value={inputVal} type="text" id="display" readOnly />
            <p id="calculations">( :</p>
          </div>
          <div className="buttons">
            <button
              id="ac"
              onClick={() => {
                setCalc([]);
                setInputVal("");
              }}
            >
              AC
            </button>
            <button className="calc" onClick={() => addToCalc("÷")}>
              ÷
            </button>
            <button className="calc" onClick={() => addToCalc("×")}>
              ×{" "}
            </button>
            <button id="bs-button" onClick={() => backspace()}>
              <BackspaceIcon style={{ fontSize: "18px" }} />
            </button>

            <button onClick={() => addToCalc(7)}>7</button>
            <button onClick={() => addToCalc(8)}>8</button>
            <button onClick={() => addToCalc(9)}>9</button>
            <button className="calc" onClick={() => addToCalc("-")}>
              -
            </button>
            <button onClick={() => addToCalc(4)}>4</button>
            <button onClick={() => addToCalc(5)}>5</button>
            <button onClick={() => addToCalc(6)}>6</button>
            <button className="calc" onClick={() => addToCalc("+")}>
              +
            </button>

            <button onClick={() => addToCalc(1)}>1</button>
            <button onClick={() => addToCalc(2)}>2</button>
            <button onClick={() => addToCalc(3)}>3</button>
            <button id="equal-button" onClick={calculate}>
              =
            </button>
            <button id="zero-button" onClick={() => addToCalc(0)}>
              0
            </button>
            <button onClick={() => addToCalc(".")}>.</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gcalc;
