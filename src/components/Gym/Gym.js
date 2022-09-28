import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import List from '../List/List';
import './Gym.css'

const Gym = () => {
    const [acitivites, setActivities] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    })
    return (
        <div>
            <h1 className=''>Fitness Lab Gymnasium</h1>
            <div className='Gym-container'>
              <div className='activities-container'>
              {
                    acitivites.map(activity => <Activity
                    key={activity.id}
                    activity ={activity}
                    ></Activity>)
                }
              </div>
              <div className='list-container'>
                <List></List>
              </div>
            </div> 
        </div>
    );
};

export default Gym;