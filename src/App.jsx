import React,{ useContext } from 'react'
import './App.css'
import Handler from './component/Handler'
import Routes_concept from './component/Routes_concept'
import Conditional_Render from './component/Conditional_Render'
import List_Rendering from './component/List_Rendering'
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import UseOfRef from './hooks/UseOfRef'
import Name from './hooks/UseContext'

    


function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Routes_concept/>
      <h1>Bytewise Fellowshp tasks</h1>
      <Routes>
        <Route  path='/' element={<Handler/>}/>
        <Route  path='/Bytewise-Fellowship/about' element={<Conditional_Render/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    <Name.Provider value={{firstName:'Muhammad Zubair', lastName:'Ahmad'}}>
        <Conditional_Render/>   
    </Name.Provider>
    <UseOfRef/> 
    <List_Rendering/>
   </>
  )
}

export default App
