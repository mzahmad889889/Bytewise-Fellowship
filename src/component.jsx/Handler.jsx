import React, { useState } from 'react'

function Handler() {
    const Blues = "#1455E9";
    const [text, setText ] = useState("Click me to change text and background color");
    const [color, setColor] = useState(Blues);
    const handleClick = () => {
        setText("Text Changed");
        setColor("yellow");
    }
    const handledoubleclick = () =>{
      setText("Grt work :⛹️‍♀️🤟")
    }
  return (
    <>
    <h2>Handler in React</h2>
    <div>
        <button  style={{backgroundColor:color}} onDoubleClick={handledoubleclick} onClick={handleClick}>{text}</button>
    </div>
    </>
  )
}

export default Handler
