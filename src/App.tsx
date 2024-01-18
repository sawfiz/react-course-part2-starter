import "./App.css";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/TaskList";

function App() {
  return (
    <>
      <h1>React Starter Project</h1>
      <Counter />
      <TaskList />
      <LoginStatus />
    </>
  );
}

export default App;
