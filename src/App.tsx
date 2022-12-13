import { Logo } from "./logo/Logo";
import { MemeMaker } from "./mememaker/MemeMaker";

function App() {
  return (
    <div className="flex flex-col bg-blue-800">
      <div className="mx-7">
        <Logo />
        <MemeMaker />
      </div>
    </div>
  );
}

export default App;
