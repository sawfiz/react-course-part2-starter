import { useReducer } from "react";
import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/contexts/authContext";
import taskReducer from "./state-management/reducers/taskReducer";
import TasksContext from "./state-management/contexts/tasksContext";

function App() {
  const [tasks, tasksDispatch] = useReducer(taskReducer, []);
  const [user, authDispatch] = useReducer(authReducer, "");

  return (
    <>
      <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
          <NavBar />
          <HomePage />
        </AuthContext.Provider>
      </TasksContext.Provider>
    </>
  );
}

export default App;
