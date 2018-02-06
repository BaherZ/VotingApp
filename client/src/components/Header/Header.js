import React,{Component} from 'react';
import './Header.css';

import { Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom';



class Header extends Component{
    state = {
        loggedIn:false
    }
    render(){
        return(
            <Grid divided='vertically'>
                    <Grid.Row>
                        <Grid.Column width={5}></Grid.Column>
                        
                        <Grid.Column width={7}> 
                            <header className="header">
                                <Link className="header-button" to="/about">About</Link>
                                <Link className="header-button" to="/polls">Poll List</Link>
                                {/*Instead of just adding the following link, we will do a check if the user is logged in,
                                is he's logged in we show a dropdown menu that says welcome */}
                                <Link className="header-button" to="#" onTouchTap={this.props.openSignIn}>SignIn</Link>                        
                            </header>     
                        </Grid.Column>
                        <Grid.Column width={2}></Grid.Column>
                    </Grid.Row>  
                     
                </Grid>
            

        )
    }
}
export default Header;