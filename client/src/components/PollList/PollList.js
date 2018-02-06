import React,{Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import Badge from 'material-ui/Badge';

import "./PollList.css";


const VoteNum = (props)=>(
    <Badge
        primary = {true}
        badgeContent = {5}
    />
)
    



class PollList extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchInput:'',
            sortType:'rank'
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSortChange = this.handleSortChange.bind(this);
    }

    handleInputChange = (e)=>this.setState({searchInput:e.target.value})
    handleSortChange = (e, i, type) => this.setState({sortType: type})

    render(){
        return (
            <div className="container poll-list-container">
                <div className = "list-search">
                    <h3 className="text-title-3">Search</h3>
                    <TextField className="list-search-input"
				        hintText="enter keyword here..."
				        hintStyle={{color: '#000'}}
				        onChange={this.handleInputChange} 
				        value={this.state.searchInput}
				    />
                </div>
                
                <div className = "list-rank">
                    <h3 className="text-title-3">Sort by</h3>
                    <SelectField className="list-rank-select"
			            value={this.state.sortType}
			            onChange={this.handleSortChange}>
			          <MenuItem value="rank" primaryText="most popular" />
			          <MenuItem value="time" primaryText="most recent" />
			        </SelectField>
                </div>
                
                <List className="poll-list">
                    <ListItem
                        className = "poll-list-item"
                        leftIcon = {<VoteNum/>}
                        primaryText="First poll"
                    />
                    <ListItem
                        className = "poll-list-item"
                        leftIcon = {<VoteNum/>}
                        primaryText="Second poll"
                    />
                    
                </List>
            </div>
            
        )
    }
}
export default PollList