import { Dispatch, useState } from "react";
type Props = {
  onClose: ()=> void;
  dispatch: Dispatch<{ type: string; value: number }>;
};

function CustomTipModal({ onClose, dispatch }: Props) {
  const [customTip, setCustomTip] = useState(0);
  const handleCustomTip = (type: string, value: number) => {
    dispatch({
      type,
      value,
    });
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Enter Custom Tip Percentage</h2>
        <input
          type="number"
          value={customTip}
          onChange={(e) => setCustomTip(Number(e.target.value))}
          className="w-full p-2 border rounded-md mb-4"
          placeholder="Enter tip percentage"
        />
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-2 px-4 py-2 bg-gray-200 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={() => handleCustomTip("tipChange", customTip)}
            className="px-4 py-2 bg-teal-600 text-white rounded-md"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomTipModal;
