import React, { useEffect, useRef, useState } from 'react'

function UseOfRef() {
  const [names,setNames] = useState('')
  const Render = useRef()
  // const RenderFun = () => {
  //        Render.current.focus();
  //        Render.current.value="Hello"
  // } 
  useEffect(()=>{
     Render.current = names;
  },[names])
  
  return (
    <div>
        <input ref={Render} value={names} onChange={e =>setNames(e.target.value)}/><br></br>
        <p>My name is render ({names}) and render the prev value of {Render.current}</p>
        <button>Focus</button>
      
      
    </div>
  )
}

export default UseOfRef
