import React from 'react'
import './service-card.css'
export const ServiceCard = ({item}) => {
  
    const {imgUrl, title , disc} = item
  return (
    <div className='service__item'>
           <div className="service__img">
            <img src={imgUrl} alt="" />
           </div>
           <h5>{title}</h5>
           <p>{disc}</p>
    </div>
  )
}
