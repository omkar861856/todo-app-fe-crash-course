import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import CountriesPage from "./CountriesPage"
import BlogPage from "./BlogPage"
import PricingPage from "./PricingPage"
import CountryPage from "./CountryPage"

const App = () => {
  const [common, setCommon] = useState(false)
  return (
    
      <Routes>
        <Route path="/" element={<div id="appDiv">
          <TodoForm common={common} setCommon={setCommon}/>
          <TodoList common={common} setCommon={setCommon}/>
        </div>}/>

        <Route path="/countries" element={<CountriesPage />}/>
        <Route path="/pricing" element={<PricingPage />}/>
        <Route path="/blog" element={<BlogPage />}/>
        <Route path="/country/:id" element={<CountryPage />}/>


      </Routes>

      
  )
}

export default App

// there must only one and minimum one default export

// useContext hook

// redux - complex state management.