import "./App.css";
import Counter from "./state-management/Counter";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import {
  AuthContextProvider,
} from "./state-management/auth/AuthContext";
import { TasksContextProvider } from "./state-management/tasks";

function App() {
  return (
    <>
      <TasksContextProvider>
        <AuthContextProvider>
          <NavBar />
          <HomePage />
          <Counter />
        </AuthContextProvider>
      </TasksContextProvider>
    </>
  );
}

export default App;
