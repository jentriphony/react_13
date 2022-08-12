import classes from './Modal.module.css'

import { Fragment } from 'react'
import { createPortal } from 'react-dom'



const Backdrop = dataProps => {



  return (

    <div className={ classes.backdrop } onClick={ dataProps.onClose } />
    
  )


  
}

const ModalOverlay = dataProps => {



  return (

    <div className={ classes.modal }>



      <div className={ classes.content }>
	      { dataProps.children }
      </div>



    </div>
    
  )
  
  
  
}

const overlays = document.getElementById('overlays')

const Modal = dataProps => {




  return (

    <Fragment>



      { createPortal((
	      <Backdrop onClose={ dataProps.onClose } />
      ), overlays) }

      { createPortal((
	      <ModalOverlay>{ dataProps.children }</ModalOverlay>
      ), overlays) }      



    </Fragment>
    
  )


  
}



export default Modal
