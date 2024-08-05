import { Dispatch } from "react";

type Props = {
  tipAmount: number;
  perPerson: number;
  dispatch: Dispatch<{ type: string; value: number }>;
};

function ResultScreen({ tipAmount, perPerson, dispatch }: Props) {
  const handleDispatch = (type: string, value: number) => {
    dispatch({
      type,
      value,
    });
  };
  return (
    <div className="flex flex-col justify-between w-full lg:w-1/2 pl-2 bg-teal-600 rounded-lg p-4 text-white">
      <div>
        <div className="mb-4 flex justify-between">
          <div>
            <div className="text-sm">Tip Amount</div>
            <div className="text-xs">/ person</div>
          </div>
          <div className="text-2xl font-bold">${tipAmount.toFixed(2)}</div>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="text-sm">Total</div>
            <div className="text-xs">/ person</div>
          </div>
          <div className="text-2xl font-bold">${perPerson.toFixed(2)}</div>
        </div>
      </div>
      <button
        onClick={() => handleDispatch("tipChange", 0)}
        className="w-full mt-4 p-2 bg-teal-200 text-teal-800 rounded-md"
      >
        RESET
      </button>
    </div>
  );
}

export default ResultScreen;
