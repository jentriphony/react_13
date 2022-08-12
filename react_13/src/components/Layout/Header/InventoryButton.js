import classes from './InventoryButton.module.css'

import {
  useContext,
  useState,
  useEffect
} from 'react'
import InventoryContext from './../../../context/inventory'



const InventoryButton = dataProps => {



  const [bump, setBump] = useState(false)


  
  const inventoryContext = useContext(InventoryContext)


  
  useEffect(() => {

    if(inventoryContext.inventory.list.length === 0) {
      return
    }
    !bump && setBump(true)
    const timer = setTimeout(() => setBump(false), 1024)
    return () => clearTimeout(timer)
    
  }, [inventoryContext.inventory.total])

  const className = `${ classes.button }${ bump ? ' ' + classes.bump : '' }`

  
  return (

    <button className={ className } onClick={ dataProps.onClick }>


      
      <span>inventory</span>

      <span className={ classes.badge }>
	{ inventoryContext.inventory.list.length }
      </span>


      
    </button>
    
  )


  
}



export default InventoryButton
