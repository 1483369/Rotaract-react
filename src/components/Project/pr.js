import React from 'react';
//import './App.css';
import './cards.css';
import img1 from '../../assets/images/back.jpeg';
import img2 from '../../assets/images/back.jpeg';
//import First from './first';
import Projtemplate from './projtemplate.js';
function pr(){
    return(
    <div className="helo">
    <div className="container-fluid">
        
        <div className="row">
            <div className="col-md-6">
                <div className="fixText">
                <h1>Public Relations</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis iure exercitationem repellendus dolore temporibus maxime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, e</p>
                </div>
            </div>
            <div className="col-md-6">
                <img src={img1} alt="Image2" className="imgz"/>
            </div>
        
       </div>
    </div>
    <div className="container-fluid">
    <div className="d-flex justify-content-center">
        <div className="row">
            <div className="col-md-4">
                <Projtemplate imgsrc={img1} title="ONE" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis iure exercitationem repellendus dolore temporibus maxime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, e"/>
            </div>
            <div className="col-md-4">
                <Projtemplate imgsrc={img2} title="TWO" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis iure exercitationem repellendus dolore temporibus maxime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, e"/>
            </div>
            <div className="col-md-4">
                <Projtemplate imgsrc={img2} title="THREE" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis iure exercitationem repellendus dolore temporibus maxime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, e"/>
            </div>
        </div>
    </div>
    </div>
    </div>
    );
}

export default pr;