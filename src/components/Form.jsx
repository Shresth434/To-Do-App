import { useState } from "react";
export default function Form({ setTodos, todos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-md shadow-gray-500 mx-auto w-[40%] my-7 h-20 rounded-lg flex items-center px-3"
    >
      <input
        className="block w-full text-lg focus:outline-none placeholder-gray-500 text-gray-500"
        placeholder="Enter Todo item"
        value={todo.name}
        onChange={(e) => setTodo({ name: e.target.value, done: false })}
        type="text"
      />
      <button
        className="bg-violet-500 text-white px-4 py-2 text-lg font-semibold rounded-xl shadow-violet-400 shadow-sm font-sans"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}
