import React from 'react';
import './service-card.css'
import {Col} from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import CustomizationImg from '../assets/images/customization.png'
const ServiceList = ({item}) => {
    const servicesData=[
        {
            imgUrl:weatherImg ,
            title:"calculate wheather",
            disc: "  Lorem ipsum dolor sit amet consectetur."
        },
        {
            imgUrl:guideImg,
            title:"calculate wheather",
            disc: "  Lorem ipsum dolor sit amet consectetur."
        },
        {
            imgUrl:CustomizationImg,
            title:"calculate wheather",
            disc: "  Lorem ipsum dolor sit amet consectetur."
        },
    ]
  return (
    <>
  {
    servicesData.map((Element, index)=><Col lg='3' key={index}>
             <div className='service__item'>
           <div className="service__img">
            <img src={Element.imgUrl} alt="" className='highlight2' />
           </div>
           <h5>{Element.title}</h5>
           <p>{Element.disc}</p>
    </div>
    </Col>
    )
  }
  </>
  )
}
export default ServiceList