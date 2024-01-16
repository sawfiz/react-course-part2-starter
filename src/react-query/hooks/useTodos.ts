import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "../services/todoService";
import { CACHE_KEY_TODOS } from "../constants";

const useTodos = () => {
  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.data);

  const {
    data: todos,
    error,
    isLoading,
  } = useQuery<Todo[], Error>({
    queryKey: [CACHE_KEY_TODOS],
    queryFn: fetchTodos,
    staleTime: 10 * 1000,
  });

  return { todos, error, isLoading };
};

export default useTodos;
