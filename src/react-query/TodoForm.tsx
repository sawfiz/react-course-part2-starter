import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import useTodos, { Todo } from "./hooks/useTodos";
import { queryClient } from "../main";

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);

  const addTodo = useMutation({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),
    onSuccess: (savedTodo, newTodo) => {
      // Approach 1: Invalidating the cache
      // queryClient.invalidateQueries({ queryKey: ["todos"] });

      // Approach 2: Updating the data in the the cache
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        savedTodo,
        ...(todos || []),
      ]);
    },
  });

  return (
    <form
      className="row mb-3"
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current && ref.current.value)
          // call addTodo.mutate, the object is sent to mutationFn
          addTodo.mutate({
            id: 0,
            title: ref.current?.value,
            userId: 1,
            completed: false,
          });
      }}
    >
      <div className="col">
        <input ref={ref} type="text" className="form-control" />
      </div>
      <div className="col">
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
