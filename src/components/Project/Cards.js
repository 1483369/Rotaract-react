import React from 'react';
import './cards.css';
import img1 from '../../assets/images/back.jpeg';
import { Link } from 'react-router-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Comserv from './comserv';


import First from './First';
import Intserv from './intserv';

function Cards(){


    
        return(

            <div className="container-fluid cardBody">
            <h2 className="text-center">Project Avenues</h2>
            <br></br>
            <br></br>
            <h4 className="text-center"> Lorem ipsum dolor sit amet. axime vitae excepturi iste ipsa ratione Lorem ipsum dolor sit amet. axime vitae excepturi iste ipsa ratione</h4>

                <div className="d-flex justify-content-space-between">
                    <div className="row justify-content-space-between">
                        <div className="avn col-md-3">
                        <First linkU="comserv" imgsrc={img1} title="Community Service" text="Lorem ipsum dolor sit amet. axime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, earum perspiciatis est debitis numquam esse officiis praesentium nisi! Illum, consectetur? Necessitatibus, iste tempore."/>

                        </div>
                        <div className="avn col-md-3">
                            <First linkU="clubserv" imgsrc={img1} title="Club Service" text="Lorem ipsum dolor sit amet. axime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, earum perspiciatis est debitis numquam esse officiis praesentium nisi! Illum, consectetur? Necessitatibus, iste tempore."/>
                        </div>
                        <div className="avn col-md-3">
                            <First linkU="intserv" imgsrc={img1} title="International Service" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis iure exercitationem repellendus dolore temporibus maxime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, e"/>
                        </div>
                        <div className="avn col-md-3">
                        <First linkU="pd" imgsrc={img1} title="Professional Development" text="Lorem ipsum consectetur adipisicing elit. Quod quis iure exercitationem repellendus dolore temporibus maxime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, e"/>
                    </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="row">
                       
                        <div className="avm col-md-3">
                            <First linkU="/Project/editorial" imgsrc={img1} title="Editorials" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis iure exercitationem repellendus dolore temporibus maxime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, e"/>
                            </div>
                            <div className="avn col-md-3">
                                <First linkU="sports" imgsrc={img1} title="Sports" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis iure exercitationem repellendus dolore temporibus maxime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, e"/>
                            </div>
                            <div className="avn col-md-3">
                            <First linkU="sm" imgsrc={img1} title="Social Media" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis iure exercitationem repellendus dolore temporibus maxime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, e"/>
                        </div>
                        <div className="avn col-md-3">
                            <First linkU="pr" imgsrc={img1} title="Public Relations" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis iure exercitationem repellendus dolore temporibus maxime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, e"/>
                        </div>
                        </div>
                </div>

                <div className="d-flex justify-content-center">
                    <div className="row">
                    
                        
                        <div className="avn col-md-3">
                            <First linkU="pis" imgsrc={img1} title="Partners In Service" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis iure exercitationem repellendus dolore temporibus maxime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, e"/>
        
                        </div>
                        <div className="col-md-3">
                        </div>
                        
                        <div className="avn col-md-3">
                            <First linkU="digi" imgsrc={img1} title="Digital Communications" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis iure exercitationem repellendus dolore temporibus maxime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, e"/>
                        </div>
                        <div className="avn col-md-3">
        
                        </div>
                        
                        
                        
                        
                        
                        </div>
                </div>

               
                
            </div>
            
        
        )
}

export default Cards;
