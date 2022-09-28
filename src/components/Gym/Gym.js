import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import List from '../List/List';
import './Gym.css'

const Gym = () => {
    const [acitivites, setActivities] = useState([]);
    const [time, setTime] = useState(0);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    })
    // let time = 0;
    // console.log(time)
    const addToList = (selectedActivity) =>{
        // console.log(selectedActivity.time)
        // time = selectedActivity.time;
        // console.log(time)
        setTime((current)=>current+selectedActivity.time);

    }
    //  console.log(time)
    return (
        <div>
            <div className='Gym-container'>
              <div >
            <h1 className='heading'>Fitness Lab Gymnasium</h1>
            <h4 className='pick'>Pick today's workout.</h4>
            <div className='activities-container'>
              {
                    acitivites.map(activity => <Activity
                    key={activity.id}
                    activity ={activity}
                    addToList = {addToList}
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
        </div>
    );
};

export default Gym;