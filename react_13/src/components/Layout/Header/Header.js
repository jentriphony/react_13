import classes from './Header.module.css'

import { Fragment } from 'react'
import InventoryButton from './InventoryButton'



const Header = dataProps => {



  return (

    <Fragment>



      <header className={ classes.header }>
	<h1>list</h1>

	<InventoryButton onClick={ dataProps.onShowInventory } />
      </header>

      <div className={ classes.background }>
	<div />
      </div>


      
    </Fragment>
    
  )


  
}



export default Header
