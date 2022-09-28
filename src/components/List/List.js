import React from 'react';
import proPic from '../../suraj.jpg';
import './List.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const List = () => {
    // const notify = () => toast("Congratulations! you have completed!");
    return (
        <div>
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
                <p>{10}s</p>
                <p>{20}s</p>
                <p>{30}s</p>
                <p>{40}s</p>
            </div>
         </div>
         
        </div>
    );
};

export default List;