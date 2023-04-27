import React, { useEffect, useRef, useState } from 'react'

function UseOfRef() {
  const [names,setNames] = useState('')
  const Render = useRef()
  // Render.current = names;
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
        <p>Your text is rendering ({names}) and rendering the prev text of your input ({Render.current})</p>
        {/* <button>Focus</button> */}
      
      
    </div>
  )
}

export default UseOfRef
