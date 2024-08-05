import TipCalculatorModal from "./components/TipCalculatorModal";

function App() {
  return (
    <div className="flex justify-center w-full items-center h-screen bg-cyan-100 px-2">
      <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2">
        <div className="flex justify-between mb-4">
          <TipCalculatorModal />
        </div>
      </div>
    </div>
  );
}

export default App;
