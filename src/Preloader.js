import React from 'react';
import { useEffect } from 'react';
import { preLoaderAnim } from './animations';
import './Preloader.css'


const Preloader = () => {
    useEffect(()=>{
        preLoaderAnim()
    },[]);





  return (
    <div className="preloader">
        <div className="texts-container">
            <span>Consistency  </span>
            <span>Mentor-ship  </span>
            <span>AI Learning</span>
            
            </div>
    </div>    
  )
}

export default Preloader
