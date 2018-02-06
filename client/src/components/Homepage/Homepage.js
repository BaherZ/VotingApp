import React,{Component} from 'react';
import './Homepage.css';

import { Grid } from 'semantic-ui-react'


//Component imports
import Header from '../Header/Header'
class Homepage extends Component{
    
    render(){
        return(
            <div className="Home">
                
                {/*
                     <Grid divided='vertically'>
                    <Grid.Row>
                        <Header openSignIn = {this.props.openSignIn}/>
                                             <Grid.Column width={11}></Grid.Column>
                        <Grid.Column width={4}> <Header openSignIn = {this.props.openSignIn}/> </Grid.Column>
                        <Grid.Column width={1}></Grid.Column>
                    </Grid.Row>  
                     
                </Grid>
               */}
               
            </div>
            
            
            
            
        )
    }
}
export default Homepage;