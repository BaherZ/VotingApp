import React,{Component} from 'react';
import './Registration.css';

import { Modal } from 'react-bootstrap';

import Dialog from 'material-ui/Dialog';
import {Tabs,Tab} from 'material-ui/Tabs'; 
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
//import './Signin.css'

const dialogStyle = {
	contentStyle: {maxWidth: 520}
}
const tabStyle = {
	tabItemContainerStyle: {background: '#F0F0F0'},
	buttonStyle: {color: 'rgba(0, 0, 0, 0.6)'}
};
const btnStyle = {
	margin: "15px auto 5px auto",
	width: 100
};

class Registration extends Component {
	state = {
		isOpen: false,
		inputField: {
			username: '',
			password: ''
		}
	}
	componentWillReceiveProps(nextProps){
		this.setState({isOpen: nextProps.open})
	} 
	handleOpen = () => {
		this.setState({isOpen: true})
	}
	handleClose = () => {
		this.setState({
			isOpen: false
		})
		this.props.closeSignin();
	}

	render(){
		return (
	        <Dialog
	          open={this.state.isOpen}
	          onRequestClose={this.handleClose}	          
	        >
	          <p>Sign in with your social network account</p>
	          <div className="signin-social-icons">
	          	<i className="fab fa-facebook-square"></i>
	          	<i className="fab fa-google-plus-square"></i>
	          </div>
	          <p>Or Login locally</p>
	          <SigninTab/>
	        </Dialog>
	    );
	}
}

class SigninTab extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            value:0,
            inputField:{
                username:'',
                password:''
            },
            errorText:{
                username:'',
                password:''
            }
            
            
        }
    }
    handleInputChange = (e)=>{
        //name is either username or password, update accordingly
        let {name,value} = e.target;
        let {inputField} = this.state
        inputField[name] = value;
        this.setState({inputField})
    }
    handleSubmit = ()=>{
        
    }
    renderTab = type => {
		let label = type === 'Login' ? 'Login' : 'Signup';
		return (
			<Tab label={label}>
			  <div className="signin-tab-content">
			    <TextField
			    	name="username"
			        hintText="Username"
			        value={this.state.inputField.username}
			    	onChange={this.handleInputChange}
			    	fullWidth={true}
			    />
			    <TextField
			    	name="password"
			        hintText="Password"
			        type="password"
			        value={this.state.inputField.password}
			    	onChange={this.handleInputChange}  
			    	fullWidth={true} 
			    />
			    <br/>
			    <RaisedButton label={label} primary={true} onTouchTap={() => this.handleSubmit(type)} />
			  </div>
			</Tab>
		)
	}

    render(){
        return (
            <Tabs>
                {this.renderTab('Login')}
				{this.renderTab('Signup')}
            </Tabs>
            
        )
    }
}

/*

class Registration extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen:false
        }
        this.handleClose = this.handleClose.bind(this);

    }
    
    componentWillReceiveProps(nextProps){
        console.log("next props called, nextProps.open is: ")
        console.log(nextProps.open);
        
        this.setState({isOpen:nextProps.open},()=>{
            console.log("now isOpen in Registration state is: ")
            console.log(this.state.isOpen);
        });
    }
    handleClose = ()=>{
        console.log("handle close in registration called");
        this.setState({isOpen:false});
        this.props.closeSignin();
        
    }
    state = { isOpen: false }
    componentWillReceiveProps(nextProps){
        console.log("next props called, nextProps.open is: ")
        console.log(nextProps.open);
        
        this.setState({isOpen:nextProps.open},()=>{
            console.log("now isOpen in Registration state is: ")
            console.log(this.state.isOpen);
        });
        
        this.checkHandle()
    }
    checkHandle = ()=>{
        if(!this.state.isOpen){
            console.log("will call handleOpen");
            this.handleOpen();
        } 
        else{
            console.log("will call handleClose");
            this.handleClose();
        }
    }
    handleOpen = () => this.setState({ isOpen: true })
    handleClose = () => {
        this.setState({ isOpen: false }); 
        //this.props.closeSignin();
    }

    render(){
        
        return(
                <Modal 
                    open={this.state.isOpen}
                    onHide={this.handleClose}
                >    
                    
                </Modal>
        )
    }
}
*/

export default Registration;