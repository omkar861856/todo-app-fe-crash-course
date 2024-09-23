import { useState, useEffect } from "react";

import { api } from "./api";

const TodoList = ({common, setCommon}) => {

  const [todoList, setTodoList] = useState([]);

  // lifecycle methods of a component.

  useEffect(() => {

    // logic - when the component is loaded in view
    async function fetchData() {
      // fetch() method is an inbuilt method
      // provided by the browser
      // for making network calls.
      const result = await fetch(`${api}/todos`);
      const resultJson = await result.json();
      setTodoList(resultJson);// called - 
      // state will/ has changed
      // it should update view.
      // reconcile with the real dom.

    }

    fetchData();

    // unmount logic

    // component cleanup function.

    return ()=>{
      console.log("Component unmounted from view")
    }


  }, [common]);// dependency array

  async function EditTodo(todoValue){
    const edited = prompt("What should be the todo instead of " + todoValue)
    alert("New todo is " + edited)
  }

  async function ToggleCompletion(id){
    await fetch(`${api}/todo/${id}`,{
      method:'PUT',
      headers: {
        "Content-Type": "application/json", // Set the appropriate header
      },
      body: JSON.stringify({ completed: true})
    })
    setCommon(!common)
  }

  async function DeleteTodo(id){
    await fetch(`${api}/todo/${id}`,{
      method:'DELETE',
      headers: {
        "Content-Type": "application/json", // Set the appropriate header
      }
    })
    setCommon(!common)
  }

  return (
    <div>
      {todoList.length === 0 ? (
        <div>No Todos - Add One</div>
      ) : (
        <ul>
          {todoList.map((e) => {
           return <li className="todoItem" style={e.completed?{textDecoration:"line-through"}:null} key={e._id}>{e.title}<div><button onClick={()=>EditTodo(e.title)}>📝</button><button onClick={()=>ToggleCompletion(e._id)}>✔</button><button onClick={()=>DeleteTodo(e._id)}>❌</button></div></li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default TodoList;

export function SingleTodo(){

  return(
    <div>

    </div>
  )

}

// named can be any number.

