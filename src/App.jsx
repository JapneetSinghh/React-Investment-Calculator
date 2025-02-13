import { useState } from "react";
import Input from "./components/Input";

import Result from "./components/Result";

let labels = [
  "Year",
  "Investment Value",
  "Interest (Year)",
  "Total Interest",
  "Invested Capital",
];

import { calculateInvestmentResults } from "./util/investment";

let VALUES = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};




let resultArr;

function App() {
  const [values, setValues] = useState(VALUES);
  const [resultCalc, setResult] = useState([]);

  function getInputValue(labelName, inputValue, key) {
    setValues(() => {
      values[key] = inputValue;
      console.log("values", values);

      // resultArr = getResult(VALUES);
      getResult(values);
      return values;
    });

    return values;
  }

  function getResult(values) {
    console.log("RESULT VALS", values);

    // Destructure and ensure values are properly parsed
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      values;

    // // Validate inputs
    // if (
    //   isNaN(initialInvestment) ||
    //   isNaN(annualInvestment) ||
    //   isNaN(expectedReturn) ||
    //   isNaN(duration) ||
    //   duration <= 0
    // ) {
    //   console.error("Invalid input values. Please check inputs.");
    //   return;
    // }

    // Call the calculation function
    const esult = calculateInvestmentResults({
      initialInvestment: parseFloat(initialInvestment),
      annualInvestment: parseFloat(annualInvestment),
      expectedReturn: parseFloat(expectedReturn),
      duration: parseInt(duration, 10),
    });

    console.log("Calculated Results:", resultCalc);

    // Set the results in state
    setResult(result);
  }

  return (
    <>
      {/* Inputs Section */}
      <section id="user-input">
        {/* Input group 1 */}
        <div className="input-group">
          <Input
            keyVal={"initialInvestment"}
            labelName={"Initial Investment"}
            getInputValue={getInputValue}
          />
          <Input
            keyVal={"annualInvestment"}
            labelName={"Annual Investment"}
            getInputValue={getInputValue}
          />
        </div>r

        <br />

        {/* Input group 2 */}
        <div className="input-group">
          <Input
            keyVal={"expectedReturn"}
            labelName={"Expected Return"}
            getInputValue={getInputValue}
          />

          <Input
            keyVal={"duration"}
            labelName={"Duration"}
            getInputValue={getInputValue}
          />
        </div>
      </section>

      {/* Result Section */}

      <section>
        <Result labels={labels} VALUES={values} result={resultCalc} />
      </section>
    </>
  );
}

export default App;
