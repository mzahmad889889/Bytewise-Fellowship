import { useState } from 'react'
import './App.css'
import Handler from './component.jsx/Handler'
import Routes_concept from './component.jsx/Routes_concept'
import Conditional_Render from './component.jsx/Conditional_Render'
import List_Rendering from './component.jsx/List_Rendering'
import { BrowserRouter,Routes, Route} from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <>
      <BrowserRouter>
      <Routes_concept/>
      <h1>Bytewise Fellowshp tasks</h1>
      <h2>Handler in React</h2>
      <Routes>
        <Route  path='/' element={<Handler/>}/>
        <Route  path='/about' element={<Conditional_Render/>}/>
      </Routes>
      <List_Rendering/>
      </BrowserRouter> 
      </>
    </div>
  )
}

export default App
