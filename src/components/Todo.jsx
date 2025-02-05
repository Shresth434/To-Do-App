import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const CompletedTodos = todos.filter((todo) => todo.done).length;
  const TotalTodos = todos.length;
  return (
    <div>
      <Form setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer CompletedTodos={CompletedTodos} TotalTodos={TotalTodos} />
    </div>
  );
}
