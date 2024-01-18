import "./App.css";
import Counter from "./state-management/Counter";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";

function App() {
  return (
    <>
        <NavBar />
        <HomePage />
        <Counter />
    </>
  );
}

export default App;
