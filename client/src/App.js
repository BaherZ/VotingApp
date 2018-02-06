import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import './App.css';

//Components imports
import Homepage from './components/Homepage/Homepage';
import Header from './components/Header/Header'
import Registration from './components/Registration/Registration';
import About from './components/About/About';
import pollList from './components/PollList/PollList';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


class App extends Component {
    
    state = {
        signinOpen:false,
        pollList:[],
        user:''
    }
    openSignIn = ()=>{
        console.log("openSignin in app.js called")
        this.setState({signinOpen:true},()=>{
            console.log("in app.js,signinOpen is",this.state.signinOpen);  
        });
        
    }
    closeSignin = ()=>{
        console.log("closeSignin called in app.js");
        this.setState({signinOpen:false});
    }
    render() {
        return (
        <Router>
          <div className="App">
           
            <Header openSignIn = {this.openSignIn}/>
            
            <Route path="/" exact render = {()=><Homepage/> }></Route>
            <Route path="/about" component={About}/>   
            <Route path="/polls" component={pollList}/>  
            <Registration 
            open = {this.state.signinOpen}
            closeSignin = {this.closeSignin}
            />
        
          </div>
        </Router>
        );
      }
}

export default App;
