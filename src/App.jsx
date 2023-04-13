import React,{ createContext } from 'react'
import './App.css'
import Handler from './component/Handler'
import Routes_concept from './component/Routes_concept'
import Conditional_Render from './component/Conditional_Render'
import List_Rendering from './component/List_Rendering'
import GlobalContext from './hooks/GlobalContext'
import { BrowserRouter,Routes, Route} from 'react-router-dom';
export const FirstName = createContext();
export const SecondName = createContext();

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Routes_concept/>
      <h1>Bytewise Fellowshp tasks</h1>
      <Routes>
        <Route  path='/' element={<Handler/>}/>
        <Route  path='/about' element={<Conditional_Render/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    <FirstName.Provider value="Muhammad">
      <SecondName.Provider value="Zubair Ahmad">
        <GlobalContext/>
      </SecondName.Provider>   
    </FirstName.Provider>
   <List_Rendering/>
   </>
  )
}

export default App
