import classes from './Input.module.css'



const Input = dataProps => {



  return (

    <div className={ classes.input }>


      <div className={ classes.label }>
        <label className={ dataProps.showError ? classes.error : '' } htmlFor={ dataProps.id }>
          { dataProps.label }
        </label>
      </div>

      <div className={ classes.group }>
        <input
          type={ dataProps.type || 'text' }
          id={ dataProps.id }
          value={ dataProps.value }
          onInput={ dataProps.onInput }
          onBlur={ dataProps.onBlur }
        />

        { dataProps.showError && (
          <p>{ dataProps.error }</p>
        ) }
      </div>



    </div>

  )



}



export default Input