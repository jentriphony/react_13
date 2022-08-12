import { createContext, useReducer } from 'react'



const Inventory = createContext({})

const initialInventory = {
  list: [],
  total: 0
}

const findIndex = (list, id) => {

  return list.findIndex(item => item.id === id)
  
}

const inventoryReducer = (previousInventory, dataProps) => {

  let itemIndex = 0
  let resultTotal = 0
  let resultItem = null
  let resultList = null
  if(dataProps.action === 'ADD') {
    resultTotal = previousInventory.total + dataProps.item.price * dataProps.count
    itemIndex = findIndex(previousInventory.list, dataProps.item.id)
    if(itemIndex !== -1) {
      resultItem = {
        ...previousInventory.list[itemIndex],
        count: previousInventory.list[itemIndex].count + dataProps.count
      }
      resultList = [ ...previousInventory.list ]
      resultList[itemIndex] = resultItem
    } else {
      resultItem = {
        ...dataProps.item,
        count: dataProps.count,
        inventoryId: `inventory_${ dataProps.item.id }`
      }
      resultList = previousInventory.list.concat(resultItem)
    }
    return {
      list: resultList,
      total: resultTotal
    }
  }

  if(dataProps.action === 'REMOVE') {
    itemIndex = findIndex(previousInventory.list, dataProps.id)
    resultTotal = previousInventory.total - previousInventory.list[itemIndex].price
    if(previousInventory.list[itemIndex].count === 1) {
      resultList = previousInventory.list.filter(item => item.id !== dataProps.id)
    } else {
      resultItem = {
        ...previousInventory.list[itemIndex],
        count: previousInventory.list[itemIndex].count - 1
      }
      resultList = [ ...previousInventory.list ]
      resultList[itemIndex] = resultItem
    }
    return {
      list: resultList,
      total: resultTotal
    }
    
  }

  if(dataProps.action === 'RESET') {
    return { ...initialInventory }
  }
  
}

export const InventoryProvider = dataProps => {



  const [inventory, dispatchInventory] = useReducer(inventoryReducer, initialInventory)


  
  const addHandler = itemProps => {

    dispatchInventory({
      action: 'ADD',
      ...itemProps
    })
    
  }

  const removeHandler = id => {

    dispatchInventory({
      action: 'REMOVE',
      id
    })
    
  }

  const resetHandler = () => {

    dispatchInventory({ action: 'RESET' })

  }

  
  return (

    <Inventory.Provider
      value={ {
        inventory,
        addHandler,
        removeHandler,
        resetHandler
      } }
    >



      { dataProps.children }



    </Inventory.Provider>
    
  )


  
}



export default Inventory
