import classes from './Card.module.css'



const Card = dataProps => {



  return (

    <div className={ classes.card }>



      { dataProps.children }



    </div>
    
  )


  
}



export default Card
