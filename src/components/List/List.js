import React, { useEffect, useState } from 'react';
import proPic from '../../suraj.jpg';
import './List.css';
  
import Swal from 'sweetalert2';
const List = ({time}) => {
//  console.log(time)
    const [breakTime, setBreakTime] = useState(0)
    const completed = () => {Swal.fire(
        'Good job!',
        'You have completed your todays exercise!',
        'success'
      )};
     const ten = 10;
     const tweenty = 20;
     const thirty = 30;
     const fourty = 40;
      const handleBreakTime =(t) => {
        setBreakTime(t);
        localStorage.setItem("breakTime", JSON.stringify(t));
      }
      useEffect(()=>{
        const storedBreakTime = localStorage.getItem("breakTime");
        const storedBreakTimeParse = JSON.parse(storedBreakTime);
        if(storedBreakTimeParse){
            setBreakTime(storedBreakTimeParse)
        }
        
      })
      
    return (
        <div className='list-container2'>
         <div >
         <div className='list-header'>
          <img className='suraj' src={proPic} alt="" />
          <div>
          <h3>Abu Bokor Suraj</h3> 
          <p>Sylhet, Bangladesh</p>
            </div> 
         </div>
         <div className='personal-info'>
            <div>
                <div className='make-inline'>
                <p className='make-inline-p'>69 </p>
                <p> kg</p>
                </div>  
                <p>Weight</p>
            </div>
            <div>
                <div className='make-inline'>
                <p className='make-inline-p'>67</p>
                <p>Inches</p>
                </div>  
                <p>Height</p>
            </div>
            <div>
                <div className='make-inline'>
                <p className='make-inline-p'>25 </p>
                <p>Years</p>
                </div>  
                <p>Age</p>
            </div>
         </div>

         <div className='add-break-container'>
            <h3>Add a break</h3>
            <div className='add-break'>
                <button onClick={()=>handleBreakTime(ten)}>{ten}s</button>
                <button onClick={()=>handleBreakTime(tweenty)}>{tweenty}s</button>
                <button onClick={()=>handleBreakTime(thirty)}>{thirty}s</button>
                <button onClick={()=>handleBreakTime(fourty)}>{fourty}s</button>
            </div>
         </div>
         <div className='Workout-specifics'>
            <h3>Workout Specifics</h3>
            <div>
            <h4>Exercise Time: {time}S</h4>
            </div>
            <div>
            <h4>Break Time: {breakTime}S</h4>
            </div>
         </div>
         <div>
        <button className='activity-completed-btn' onClick={completed}>Activity Completed</button>
      </div>
        </div>
         </div>
       
    );
};

export default List;