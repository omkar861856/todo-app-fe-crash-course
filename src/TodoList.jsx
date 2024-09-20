import { useState, useEffect } from "react";

import { api } from "./api";

const TodoList = () => {

  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // fetch() method is an inbuilt method
      // provided by the browser
      // for making network calls.
      const result = await fetch(`${api}/todos`);
      const resultJson = await result.json();
      console.log(resultJson)
      setTodoList(resultJson);

    }

    fetchData();
  }, []);

  return (
    <div>
      {todoList.length === 0 ? (
        <div>No Todos - Add One</div>
      ) : (
        <ul>
          {todoList.map((e) => {
           return <li key={e._id}>{e.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
