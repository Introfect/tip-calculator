import { Dispatch, useState } from "react";
import { splitConstraints } from "./TipCalculatorModal";
import CustomTipModal from "./CustomTipModal";
import { createPortal } from "react-dom";

type Props = {
  splitConstraints: splitConstraints;
  dispatch: Dispatch<{ type: string; value: number }>;
};

function InputConstrints({ splitConstraints, dispatch }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tipPercentages = [5, 10, 15, 25, 50];
  const handleDispatch = (type: string, value: number) => {
    dispatch({
      type,
      value,
    });
  };
  return (
    <div className="w-full lg:w-1/2 pr-2">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Bill
      </label>
      <input
        type="number"
        value={splitConstraints.bill}
        onChange={(e) => handleDispatch("billChange", Number(e.target.value))}
        className="w-full p-2 border rounded-md"
      />
      <div className="grid grid-cols-3 gap-2 mt-4">
        {tipPercentages.map((percent) => (
          <button
            key={percent}
            onClick={() => handleDispatch("tipChange", percent)}
            className={`p-2 rounded-md ${
              splitConstraints.tipPercent === percent
                ? "bg-teal-600 text-white"
                : "bg-teal-100 text-teal-800"
            }`}
          >
            {percent}%
          </button>
        ))}
        <button
          onClick={() => setIsModalOpen(true)}
          className="p-2 rounded-md bg-teal-100 text-teal-800"
        >
          Custom
        </button>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Number of People
        </label>
        <input
          type="number"
          min={1}
          value={splitConstraints.people}
          onChange={(e) =>
            handleDispatch("peopleChange", Number(e.target.value))
          }
          className="w-full p-2 border rounded-md"
        />
      </div>
      {isModalOpen &&
        createPortal(
          <CustomTipModal
            dispatch={dispatch}
            onClose={() => setIsModalOpen(false)}
          />,
          document.body
        )}
    </div>
  );
}

export default InputConstrints;
