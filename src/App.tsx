import { Logo } from "./logo/Logo";

function App() {
  return (
    <div className="flex flex-col bg-blue-800 justify-center items-center w-screen h-screen">
      <div className="mx-7">
        <Logo />
      </div>
      <div className="text-white font-extrabold text-xl">Coming soon...</div>
    </div>
  );
}

export default App;
