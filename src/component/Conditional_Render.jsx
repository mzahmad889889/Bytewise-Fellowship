import React, {useState, useContext} from 'react'
import { useCounter } from '../hooks/CustomHooks';
import Name from '../hooks/UseContext';
function Conditional_Render() {
  const {value, reset, decrease, increase} = useCounter()
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
  const {firstName, lastName} = useContext(Name)
  return (
    <>
    <h5>My name is {firstName} and my Last name is {lastName}</h5>
    <h2>Conditional Rendering</h2>
    <h3>{count}</h3>
    <div id="button">
       <button style={{backgroundColor:'blue'}} onClick={handleClick}>+</button>
       <button style={{backgroundColor:'red'}}onClick={NegativeHandle}>-</button>
    </div>
    <h3>{person && person.personName.first}</h3>
    <button onClick={increase}>Increase</button>
    <div>{value}</div>
    <button onClick={decrease}>Decrease</button><br/>
    <button onClick={reset}>Reset</button>
    
    
    </>
  )
}

export default Conditional_Render
