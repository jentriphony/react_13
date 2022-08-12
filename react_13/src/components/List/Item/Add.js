import classes from './Add.module.css'

import { useRef, useState } from 'react'
import InputRef from './../../UI/InputRef'



const Item = dataProps => {



  const [countValid, setCountValid] = useState(true)
  const countRef = useRef()



  const submitHandler = event => {

    event.preventDefault()

    if(countRef.current.value.trim() === '' ||
       +countRef.current.value < 1 ||
       +countRef.current.value > 4
    ) {
      setCountValid(false)
      return
    }
    dataProps.onAdd(+countRef.current.value)
  }


  return (

    <form className={ classes.add } onSubmit={ submitHandler }>



      <InputRef
        ref={ countRef }
        label='count'
        input={ {
          id: `count_${ dataProps.id }`,
          type: 'number',
          min: '1',
          max: '4',
          step: '1',
          defaultValue: '1'
        } }
      />

      <button type='submit'>
	      + add
      </button>

      { !countValid && (
	      <p>error_count</p>
      ) }


      
    </form>
    
  )


  
}



export default Item
