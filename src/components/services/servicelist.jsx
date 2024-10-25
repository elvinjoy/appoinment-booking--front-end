import React from 'react';
import {Services}  from '../../assets/data/services';
import ServiceCard from './serviceCard'

const servicelist = () => {
  
  return (
    <div className='grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
      {Services.map((item, index)=>
        <ServiceCard item={item} index={index} key={index} />
    )}
    </div>
  )
};

export default servicelist
