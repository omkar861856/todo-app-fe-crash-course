import { useState } from "react";
import { api } from "./api";
const TodoForm = () => {
  const [todo, setTodo] = useState("");
  async function submitTodo(e) {
    e.preventDefault();
    alert(todo)
    await fetch(`${api}/todo`, {
      method: "POST",
      body: JSON.stringify({todo}),
      //{"title":"todo4"}
    });
    setTodo('')
  }
  return (
    <div>
      <form onSubmit={(e)=>submitTodo(e)}>
        <input
          onInput={(e) => {
            setTodo(e.target.value);
          }}
          type="text"
          name="todo"
          id="todo"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
