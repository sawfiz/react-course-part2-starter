import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import { queryClient } from "../main";
import { Todo } from "./hooks/useTodos";

interface AddTodoContext {
  previousTodos: Todo[];
}

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);

  const addTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todosx", todo)
        .then((res) => res.data),

    onMutate: (newTodo: Todo) => {
      // Save the original todo list
      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];
      // Optimisitcally clear the form on success
      if (ref.current) ref.current.value = "";
      // Add the new Todo to the list
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        newTodo,
        ...(todos || []),
      ]);
      return { previousTodos };
    },

    onSuccess: (savedTodo, newTodo) => {
      // Approach 1: Invalidating the cache
      // queryClient.invalidateQueries({ queryKey: ["todos"] });

      // Approach 2: Updating the data in the the cache
      // If sucessful, replace newTod with savedTodo
      queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },

    onError: (Error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(["todos"], context.previousTodos);
    },
  });

  return (
    <>
      {addTodo.error && (
        <div className=" alert alert-danger"> {addTodo.error.message}</div>
      )}
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
          <button disabled={addTodo.isPending} className="btn btn-primary">
            {addTodo.isPending ? "Saving" : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
