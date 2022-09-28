import React from 'react';
import proPic from '../../suraj.jpg'
import './List.css'
const List = () => {
    return (
        <div>
         <div className='list-header'>
          <img className='suraj' src={proPic} alt="" />
          <div>
          <h4>Abu Bokor Suraj</h4> 
          <p>Sylhet, Bangladesh</p>
            </div> 
         </div>
        </div>
    );
};

export default List;