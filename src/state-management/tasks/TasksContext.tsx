import React, { Dispatch, PropsWithChildren, useReducer } from "react";
import taskReducer, { Task, TaskAction } from "./taskReducer";

interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TasksContextType>(
  {} as TasksContextType
);

export const TasksContextProvider = ({ children }: PropsWithChildren) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContext;
