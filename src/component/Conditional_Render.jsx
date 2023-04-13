import React, {useState} from 'react'

function Conditional_Render() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count+1);
  }
  const NegativeHandle = () => {
    setCount(count-1);
    if(count==0){
      return setCount(0);
    }
  }
  let person;
 
    person = {personName:{first:'Muhammad zubair', last:'Khan'} };
   
  return (
    <>
    <h2>Conditional Rendering</h2>
    <h3>{count}</h3>
    <div id="button">
       <button style={{backgroundColor:'blue'}} onClick={handleClick}>+</button>
       <button style={{backgroundColor:'red'}}onClick={NegativeHandle}>-</button>
    </div>
    
    <h3>{person && person.personName.first}</h3>
    
    </>
  )
}

export default Conditional_Render
