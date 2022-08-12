import classes from './Available.module.css'

import { useState, useEffect } from 'react'
import Card from './../UI/Card'
import Item from './Item/Item'



const Available = dataProps => {



  const [fetchFeedback, setFetchFeedback] = useState(null)



  useEffect(() => {

    dataProps.onFetch({
      method: 'get',
      feedback: setFetchFeedback
    })
    
  }, [])
  
  const list_ = fetchFeedback && !fetchFeedback.isFetching ? (fetchFeedback.error ? (
    <p className={ classes.error }>
      <span>{ fetchFeedback.error }</span>
    </p>
  ) : (
    <ul>{ fetchFeedback.data.map(item => (
      <Item key={ `item_${ item.id }` } item={ item } />
    )) }</ul>
  )) : (
    <p className={ classes.fetching }>
      <span>fetching</span>
    </p>
  )


  return (

    <section className={ classes.list }>



      <Card>
        { list_ }
      </Card>



    </section>

  )


  
}



export default Available
