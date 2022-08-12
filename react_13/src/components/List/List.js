import { Fragment } from 'react'
import Summary from './Summary'
import Available from './Available'



const List = dataProps => {



  return (

    <Fragment>



      <Summary />

      <Available onFetch={ dataProps.onFetch } />



    </Fragment>
    
  )


  
}



export default List
