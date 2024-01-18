export interface Task {
  id: number;
  title: string;
}

interface AddTask {
  type: "AddTask";
  task: Task;
}

interface DeleteTask {
  type: "DeleteTask";
  taskId: number;
}

export type TaskAction = AddTask | DeleteTask;

export default function taskReducer(tasks: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case "AddTask":
      return [...tasks, action.task];
    case "DeleteTask":
      return tasks.filter((task) => task.id !== action.taskId);

    default:
      return tasks;
  }
}
