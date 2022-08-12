import classes from './Inventory.module.css'

import { useState, useContext } from 'react'
import InventoryContext from './../../context/inventory'
import Modal from './../UI/Modal'
import Item from './Item/Item'
import Form from './Order/Form'



const Inventory = dataProps => {



  const [showOrderForm, setShowOrderForm] = useState(false)



  const inventoryContext = useContext(InventoryContext)

  const total = `$${ inventoryContext.inventory.total.toFixed(2) }`

  const list_ = (
    <ul className={ classes.list }>
      { inventoryContext.inventory.list.map(item => (
        <Item
          key={ item.inventoryId }
          item={ item }
          onAdd={ inventoryContext.addHandler }
          onRemove={ inventoryContext.removeHandler }
      	/>
      )) }
    </ul>
  )



  const toggleShowOrderForm = () => {

    setShowOrderForm(previousShowOrderForm => !previousShowOrderForm)

  }

  
  return (

    <Modal onClose={ dataProps.onClose }>



      { showOrderForm ? (
        <Form
          onReturn={ toggleShowOrderForm }
          onCloseInventory={ dataProps.onClose }
          list={ inventoryContext.inventory.list }
          onSubmit={ inventoryContext.resetHandler }
        />
      ) : (
        <div>
          { list_ }

          <div className={ classes.total }>
            <span>total</span>

            <span>{ total }</span>
          </div>

          <div className={ classes.actions }>
            <button className={ classes['button-alt'] } onClick={ dataProps.onClose }>
              close
            </button>

            { inventoryContext.inventory.list.length > 0 && (
              <button className={ classes.button } onClick={ toggleShowOrderForm }>
                order
              </button>
            ) }
          </div>
        </div>
      ) }



    </Modal>
    
  )


  
}



export default Inventory
