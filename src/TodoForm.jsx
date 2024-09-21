import { useState } from "react";
import { api } from "./api";
const TodoForm = ({common, setCommon}) => {
  const [todo, setTodo] = useState("");
  async function submitTodo(e) {
    e.preventDefault();
    await fetch(`${api}/todo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the appropriate header
      },
      body: JSON.stringify({title:todo}),
      //{"title":"todo4"}
    });
    setCommon(!common)
    setTodo('')
  }
  return (
    <div>
      <form onSubmit={(e)=>submitTodo(e)}>
        <input
          onInput={(e) => {
            setTodo(e.target.value);
          }}
          value={todo}
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
