import classes from './Item.module.css'



const Item = dataProps => {



  const price = `$${ dataProps.item.price.toFixed(2) }`

  const addHandler = () => {

    dataProps.onAdd({
      item: dataProps.item,
      count: 1
    })
    
  }

  const removeHandler = () => {

    dataProps.onRemove(dataProps.item.id)
    
  }

  
  return (

    <li className={ classes.item }>



      <div>
	<h2>{ dataProps.item.title }</h2>

	<div className={ classes.summary }>
	  <span className={ classes.price }>
	    { price }
	  </span>

	  <span className={ classes.count }>
	    x{ dataProps.item.count }
	  </span>
	</div>
      </div>

      <div className={ classes.actions }>
	<button onClick={ removeHandler }>
	  -
	</button>

	<button onClick={ addHandler }>
	  +
	</button>
      </div>


      
    </li>
    
  )


  
}



export default Item
