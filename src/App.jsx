import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
import { useState } from "react"

const App = () => {
  const [common, setCommon] = useState(false)
  return (
    <div id="appDiv">
      <TodoForm common={common} setCommon={setCommon}/>
      <TodoList common={common} setCommon={setCommon}/>
    </div>
  )
}

export default App

// there must only one and minimum one default export

// useContext hook

// redux - complex state management.