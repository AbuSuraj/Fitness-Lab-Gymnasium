import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Blog from '../Blog/Blog';
import List from '../List/List';
import './Gym.css'
import logoPic from "../../logoPic"

const Gym = () => {
    const [acitivites, setActivities] = useState([]);
    const [time, setTime] = useState(0);
    // const [btnText, setBtnText] = useState(false);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    })
    // let time = 0;
    // console.log(time)
    const addToList = (selectedActivity) =>{
      // setBtnText(true);
        setTime((current)=>current+selectedActivity.time);

    }

    //  console.log(btnText)
    return (
        <div>
            <div className='Gym-container'>
              <div >
                <div className='banner'>
                  <img src={logoPic} alt="" />
                  <h1 className='heading'>Fitness Lab Gymnasium</h1>
                </div>
            <h4 className='pick'>Pick today's workout.</h4>
            <div className='activities-container'>
              {
                    acitivites.map(activity => <Activity
                    key={activity.id}
                    activity ={activity}
                    addToList = {addToList}
                    // btnText ={btnText}
                    ></Activity>)
                }
            </div>
            
              </div>
              <div className='list-container'>
                <List 
                  time ={time}
                ></List>
              </div>
            </div> 
            <div>
                <Blog></Blog>
            </div>
        </div>
    );
};

export default Gym;