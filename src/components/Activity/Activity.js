import React from 'react';
import './Activity.css'

const Activity = ({activity, addToList}) => {
//   const  {id, name, time, img, description} = props.activity;
  const  {id, name, time, img, description} = activity;
//   const {addToList} = props.addToList;
//   console.log(addToList)
    return (
        <div>
            
        <div className='activity'>
          <div className='activity-info'>
          <img src= {img} alt="" />
         <h2 className='activity-name'>{name}</h2>
         <p>{description}</p>
         <p>time: <span className='activity-time'> {time}s</span> </p>
          </div>
          <button onClick={()=>addToList(activity)} className='btn-list btn-text'>Add to lsit</button>
        </div>
        </div>
    );
};

export default Activity;