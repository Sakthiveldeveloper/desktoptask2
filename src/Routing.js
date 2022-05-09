import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/header'
import About from './components/about';
import Skills from './components/skills';
import Home from './components/home';
import Exprience from './components/exprience'
import Sidebar from './components/Sidebar'

const Routing = () => {
    return(
        <BrowserRouter forceRefresh="true">
            <Header/>
            <br/>
            <br/>
			<br/><br/><br/>
            <Route exact path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/exprience" component={Exprience}/>
            <Route path="/sidebar" component={Sidebar}/>
        </BrowserRouter>
    )
}

export default Routing