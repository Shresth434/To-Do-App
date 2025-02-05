import TodoItem from "./TodoItem";
export default function TodoList({ todos, setTodos }) {
  return (
    <div className="shadow-md shadow-gray-400 w-[40%] mx-auto px-2 rounded-xl">
      {todos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
