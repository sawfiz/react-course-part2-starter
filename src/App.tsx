import { useReducer } from "react";
import "./App.css";
import NavBar from "./state-management/NavBar";
import taskReducer from "./state-management/reducers/taskReducer";
import TasksContext from "./state-management/contexts/tasksContext";
import HomePage from "./state-management/HomePage";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <>
      <TasksContext.Provider value={{tasks, dispatch}}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </>
  );
}

export default App;
