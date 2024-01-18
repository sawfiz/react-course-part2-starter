import { useContext } from "react";
import TasksContext from "./TasksContext";

export default function useTasks() {
  return useContext(TasksContext);
}
