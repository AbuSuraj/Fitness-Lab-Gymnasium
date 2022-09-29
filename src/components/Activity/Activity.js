import React, { useState, useEffect } from 'react';
import './Activity.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Activity = ({activity, addToList}) => {
//   const  {id, name, time, img, description} = props.activity;
  const  {id, name, time, img, description} = activity;
  useEffect(() => {
    AOS.init();
  }, [])

    return (
        <div>
            
        <div data-aos="fade-up" className='activity'>
          <div className='activity-info'>
          <img src= {img} alt="" />
         <h2 className='activity-name'>{name}</h2>
         <p>{description}</p>
         <p>time: <span className='activity-time'> {time}s</span> </p>
          </div>
          <button onClick={()=>addToList(activity)} className='btn-list btn-text'>Add to lsit</button> 

           
          {/* //  <button onClick={()=>addToList(activity)}>{btnText? "Added to List":"Add to List"}</button>  */}
        </div>
        </div>
    );
};

export default Activity;