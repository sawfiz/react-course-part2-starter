import "./App.css";
import Counter from "./state-management/Counter";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { TasksContextProvider } from "./state-management/tasks";

function App() {
  return (
    <>
      <TasksContextProvider>
        <NavBar />
        <HomePage />
        <Counter />
      </TasksContextProvider>
    </>
  );
}

export default App;
