import React from 'react';
import Cards from './components/Project/Cards';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Team from './components/Teams/Team';
import ContactForm from './components/Form/ContactForm';
import Comserv from './components/Project/comserv';
import Intserv from './components/Project/intserv';
import Sports from './components/Project/sports';
import Clubserv from './components/Project/clubserv';
import Pd from './components/Project/pd';
import Pr from './components/Project/pr';
import Pis from './components/Project/pis';
import Sm from './components/Project/sm';
import Digi from './components/Project/digi';
import Editorials from './components/Project/editorial';




function App() {
  return(
    <Router>
    <Navbar/>
    <Switch>
    <Route exact path="/"><Home/></Route>
    <Route path="/team"><Team/></Route>

    <Route path="/projects"><Cards/></Route>  
    <Route path ="/comserv"><Comserv/></Route>
    <Route path ="/clubserv"><Clubserv/></Route> 
    <Route path="/intserv"><Intserv/></Route>
    <Route path="/sports"><Sports/></Route>
    <Route path="/pd"><Pd/></Route>
    <Route path ="/Project/editorial"><Editorials/></Route>
    <Route path="/sm"><Sm/></Route>
    <Route path="/pr"><Pr/></Route>
    <Route path="/pis"><Pis/></Route>
    <Route path="/digi"><Digi/></Route>
  
    <Route path="/form"><ContactForm/></Route>
    </Switch>
    <Footer/>
    </Router>
  )
  
}
export default App;
