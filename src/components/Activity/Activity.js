import React from 'react';
import './Activity.css'

const Activity = (props) => {
  const  {id, name, time, img, description} = props.activity;
    return (
        <div>
            
        <div className='activity'>
          <div className='activity-info'>
          <img src= {img} alt="" />
         <h2 className='activity-name'>{name}</h2>
         <p>{description}</p>
         <p>time: <span className='activity-time'> {time}s</span> </p>
          </div>
          <button className='btn-list btn-text'>Add to lsit</button>
        </div>
        </div>
    );
};

export default Activity;