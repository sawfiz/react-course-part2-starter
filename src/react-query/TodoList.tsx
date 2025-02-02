import useTodos from "./hooks/useTodos";

const TodoList = () => {
  const { data: todos, error, isLoading } = useTodos();

  if (error) return <div className=" alert alert-danger">{error.message}</div>;

  if (isLoading) return <p>Loading...</p>;

  // The call to the backend may fail, todo might be undefined
  // Use todo?
  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
