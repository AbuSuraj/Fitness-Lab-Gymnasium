import React, { useEffect } from 'react';
import './Blog.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='blog-container'>
           <h1>Interview Qustions</h1> 
           <div data-aos="fade-right"  className='qustions1'>
            <h2>1. How Does React Work?</h2>
            <p>React employs a declarative paradigm that facilitates application reasoning and aspires to be both effective and adaptable. React swiftly updates and renders the appropriate component as the data changes because it creates straightforward views for each state of the application.
            React implements a virtual DOM, which is essentially a JavaScript version of the DOM tree. Therefore, it will utilize a virtual version of the DOM whenever it wants to read from or write to it. The virtual DOM will then look for the most effective approach to update the DOM of the browser.</p>
           </div>
           <div data-aos="fade-left" className='qustions1'>
            <h2>2. Difference between props and State?</h2>
            <p>
            <h4>Props:</h4> 
            <ul>
                <li>
                The Data is passed from one component to another.
                </li>
                <li>It is Immutable (cannot be modified).</li>
                <li>Props can be used with state and functional components.</li>
                <li>
                Props are read-only.
                </li>
            </ul>


            <h4>State:</h4>  
            <ul>
                <li>The Data is passed within the component only.</li>
                <li>It is Mutable ( can be modified).</li>
                <li>State can be used only with the state components/class component (Before 16.0)</li>
                <li>	State is both read and write.</li>
            </ul>
            </p>
           </div>
           <div data-aos="fade-up-right" className='qustions1'>
            <h2>3. Different Uses of useEffect?</h2>
            <p>
            A functional React component uses props and/or state to calculate the output. If the functional component makes calculations that don't target the output value, then these calculations are named side-effects. <br />
            main uses of useEffect are:
            <ul>
                <li>
                To communicate with the browser's APIs (that is, to use document or window directly)
                </li>
                <li> Validating input field when state changes in the application.</li>
                <li>use erratic timing mechanisms such as setTimeout or setInterval</li>
                <li>running live filtering on state change</li>
                
            </ul>
            </p>
           </div>
        </div>
    );
};

export default Blog;