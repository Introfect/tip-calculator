import { useReducer } from "react";
import InputConstrints from "./InputConstrints";
import ResultScreen from "./ResultScreen";
import splitConstraintsReducer from "../lib/splitConstraintsReducer";

export type splitConstraints = {
  bill: number;
  tipPercent: number;
  people: number;
};
const initialSplitConstraints: splitConstraints = {
  bill: 0,
  tipPercent: 0,
  people: 1,
};

function TipCalculatorModal() {
  const [splitConstraints, dispatch] = useReducer(
    splitConstraintsReducer,
    initialSplitConstraints
  );
  const tipAmount = (splitConstraints.bill * splitConstraints.tipPercent) / 100;
  const tipAmountPerPerson = tipAmount / splitConstraints.people;
  const perPerson = splitConstraints.bill / splitConstraints.people;
  const total = perPerson + tipAmountPerPerson;
  return (
    <div className="flex flex-col items-center space-y-6 justify-center lg:flex-row lg:items-stretch lg:space-x-4 mb-4 w-full">
      <InputConstrints
        splitConstraints={splitConstraints}
        dispatch={dispatch}
      />
      <ResultScreen
        tipAmount={tipAmountPerPerson}
        perPerson={total}
        dispatch={dispatch}
      />
    </div>
  );
}

export default TipCalculatorModal;
