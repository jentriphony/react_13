import classes from './Form.module.css'

import { useState, useEffect, Fragment } from 'react'
import useInput from './../../../hooks/input'
import useFetch from './../../../hooks/fetch'
import Input from './../../UI/Input'



const valid = value => {

  return value.trim() !== ''

}

const initialFetchFeedback = {
  data: null,
  isFetching: false
}

const Form = dataProps => {



  const [
    input_1,
    input_2,
    input_3
  ] = [
    useInput({ valid }),
    useInput({ valid }),
    useInput({ valid })
  ]



  const [fetchFeedback, setFetchFeedback] = useState({ ...initialFetchFeedback })



  const fetchHook = useFetch()



  const onSuccess = data => {

    console.log(data)
    dataProps.onSubmit()
    dataProps.onCloseInventory()

  }

  const submitHandler = event => {

    event.preventDefault()

    if(input_1.valid && input_2.valid && input_3.valid) {
      fetchHook({
        method: 'post',
        body: {
          list: dataProps.list,
          customer: {
            input_1: input_1.value,
            input_2: input_2.value,
            input_3: input_3.value
          }
        },
        onSuccess,
        feedback: setFetchFeedback
      })
      return
    }
    !input_1.valid && input_1.setActive(true)
    !input_2.valid && input_2.setActive(true)
    !input_3.valid && input_3.setActive(true)

  }

  const tryHandler = () => {

    setFetchFeedback(initialFetchFeedback)

  }

  let content = !fetchFeedback.data && !fetchFeedback.isFetching
  if(content) {
    content = (
      <form className={ classes.form } onSubmit={ submitHandler }>
        <div className={ classes['input-group'] }>
          <Input
            id='input_1'
            label='input_1'
            value={ input_1.value }
            onInput={ input_1.inputHandler }
            onBlur={ input_1.blurHandler }
            showError={ input_1.showError }
            error='error_input_1'
          />

          <Input
            id='input_2'
            label='input_2'
            value={ input_2.value }
            onInput={ input_2.inputHandler }
            onBlur={ input_2.blurHandler }
            showError={ input_2.showError }
            error='error_input_2'
          />
        </div>

        <Input
          id='input_3'
          label='input_3'
          value={ input_3.value }
          onInput={ input_3.inputHandler }
          onBlur={ input_3.blurHandler }
          showError={ input_3.showError }
          error='error_input_3'
        />

        <div className={ classes.actions }>
          <button
            className={ classes['button-alt'] }
            type='button'
            onClick={ dataProps.onReturn }
          >
            return
          </button>

          <button type='submit' onClick={ submitHandler }>
            submit
          </button>
        </div>
      </form>
    )
  } else if(fetchFeedback.isFetching) {
    content = (
      <p className={ classes.fetching }>
        <span>fetching</span>
      </p>
    )
  } else {
    content = (
      <Fragment>
        <p className={ classes.error }>
          <span>{ fetchFeedback.data.error }</span>
        </p>

        <button
          className={ classes.button }
          type='button'
          onClick={ tryHandler }
        >
          try again
        </button>
      </Fragment>
    )
  }


  return (

    <Fragment>



      { content }



    </Fragment>

  )


  
}



export default Form
