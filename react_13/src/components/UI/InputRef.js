import classes from './InputRef.module.css'

import { forwardRef } from 'react'



const Input = forwardRef((dataProps, ref) => {



  return (

    <div className={ classes.input }>



      <label htmlFor={ dataProps.id }>
      	{ dataProps.label }
      </label>

      <input ref={ ref } { ...dataProps.input } />



    </div>
    
  )


  
})



export default Input
