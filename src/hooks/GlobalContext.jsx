import React, { useContext } from 'react'
import {FirstName, SecondName} from '../App'
function GlobalContext() {
  const fName = useContext(FirstName)
  const sName = useContext(SecondName)
  return (
    <h5>My name is {fName} and Last name is {sName}</h5>
  )
}
export default GlobalContext


