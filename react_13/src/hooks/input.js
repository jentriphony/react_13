import { useState } from 'react'



const useInput = dataProps => {



  const [value, setValue] = useState('')
  const [active, setActive] = useState(false)



  const inputHandler = event => {

    setValue(event.target.value)
    
  }

  const blurHandler = () => {

    !active && setActive(true)
    
  }
  
  const reset = () => {

    active && setActive(false)
    value && setValue('')
    
  }
  
  const valid = dataProps.valid(value)
  const showError = active && !valid


  return {
    value,
    valid,
    setActive,
    showError,
    inputHandler,
    blurHandler,
    reset
  }
  

  
}



export default useInput
