import logo from './logo.svg';
import './App.css';
import Gym from './components/Gym/Gym';
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="">
      <Gym></Gym>
    </div>
  );
}

export default App;
