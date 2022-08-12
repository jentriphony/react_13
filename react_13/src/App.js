import { useState } from 'react'
import useFetch from './hooks/fetch'
import { InventoryProvider } from './context/inventory'
import Header from './components/Layout/Header/Header'
import List from './components/List/List'
import Inventory from './components/Inventory/Inventory'



function App() {



  const [showInventory, setShowInventory] = useState(false)



  const fetchHook = useFetch()



  const toggleShowInventory = () => {

    setShowInventory(previousShowInventory => !previousShowInventory)
    
  }

  
  return (

    <InventoryProvider>



      { showInventory && (
      	<Inventory onClose={ toggleShowInventory } onOrder={ fetchHook } />
      ) }

      <Header onShowInventory={ toggleShowInventory } />

      <main>
	      <List onFetch={ fetchHook } />
      </main>
      


    </InventoryProvider>
    
  )


  
}



export default App
