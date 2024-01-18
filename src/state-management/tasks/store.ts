import { create } from "zustand";
import { Task } from "./taskReducer";

interface TasksStore {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (taskId: number) => void;
}

const useTasksStore = create<TasksStore>((set) => ({
  tasks: [],
  addTask: (task) => set((store) => ({ tasks: [...store.tasks, task] })),
  deleteTask: (taskId) =>
    set((store) => ({
      tasks: store.tasks.filter((task) => task.id !== taskId),
    })),
}));

export default useTasksStore;
