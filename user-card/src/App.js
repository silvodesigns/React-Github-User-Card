import React from 'react';
import './App.css';
import axios from 'axios';
import logo from './git.png';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      user: null,
      followers: null
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/search/users?q=silvodesigns')
      .then( res => { 
        this.setState({user: res.data.items[0]})
      })
     .catch( err => {
       console.log(err);
      
     })


     axios.get('https://api.github.com/search/users?q=silvodesigns+followers')
     .then( res => { 
      this.setState({followers: res.data.total_count})
     })
    .catch( err => {
      console.log(err);
     
    })

     

  }

  render(){

    let information;

    if(this.state.user !== null){
      information = <div className="card">
        <img src ={logo} alt="git logo" className="git"/>
        <img src={this.state.user.avatar_url} alt="profile-pic" className="profile-pic"/>
        <br></br>
        <a href={this.state.user.html_url}>link to GitHub Page</a>
        <h1>Username: {this.state.user.login}</h1>
        <h3>followers: {this.state.followers}</h3>
      </div>

    } 

    return (
      <div className="user-card">
          {information}
      </div>
    );

  }
} 
 


export default App;
