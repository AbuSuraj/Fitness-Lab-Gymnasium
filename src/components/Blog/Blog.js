import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
           <h1>Interview Qustions</h1> 
           <div className='qustions1'>
            <h2>1. How Does React Work?</h2>
            <p>React employs a declarative paradigm that facilitates application reasoning and aspires to be both effective and adaptable. React swiftly updates and renders the appropriate component as the data changes because it creates straightforward views for each state of the application.
            React implements a virtual DOM, which is essentially a JavaScript version of the DOM tree. Therefore, it will utilize a virtual version of the DOM whenever it wants to read from or write to it. The virtual DOM will then look for the most effective approach to update the DOM of the browser.</p>
           </div>
           <div className='qustions1'>
            <h2>2. Difference between props and State?</h2>
            <p>
            <h4>Props:</h4> (Short for "Properties") are used to pass data from one component to another. Props can not be modified,read-only and Immutable


            <h4>State:</h4> The state represents parts of an Application that can change. Each component can have it's state. The state is mutable and it is local to the component only.
            </p>
           </div>
           <div className='qustions1'>
            <h2>3. Different Uses of useEffect?</h2>
            <p>
            A functional React component uses props and/or state to calculate the output. If the functional component makes calculations that don't target the output value, then these calculations are named side-effects. <br />
            main uses of useEffect are:
            <ul>
                <li>
                to communicate with the browser's APIs (that is, to use document or window directly)
                </li>
                <li>use erratic timing mechanisms such as setTimeout or setInterval</li>
            </ul>
            </p>
           </div>
        </div>
    );
};

export default Blog;