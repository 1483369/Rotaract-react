import React from 'react';
//import './App.css';
//import Cards from './cards';
//import img1 from './images/back.jpeg';
import './cards.css';
const Projtemplate=(props)=> {
    return (
         
            <div className="border-0 card text-center">
                <div className="overflow">
                    <img src={props.imgsrc} alt="Image2" className="card-img"/>
                </div>
                <div className="card-body text-dark">
                   <h4 className="card-title">{props.title}</h4>
                   <p className="card-text text-secondary">{props.text}
                </p>
               </div>
            </div>
        
    );
  }
  
  export default Projtemplate;