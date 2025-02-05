export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleComplete(name) {
    const NewArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(NewArray);
  }
  return (
    <div>
      <div
        className={`text-lg p-5 font-semibold text-gray-500 ${
          item.done ? "text-gray-600 line-through" : ""
        }`}
      >
        <span onClick={() => handleComplete(item.name)}>{item.name}</span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className="bg-violet-500 text-white px-5 py-1.5 text-lg font-semibold rounded-xl shadow-violet-400 shadow-sm font-sans float-right -mt-2"
          >
            x
          </button>
        </span>
      </div>
      <hr className="text-gray-300 border-1" />
    </div>
  );
}
