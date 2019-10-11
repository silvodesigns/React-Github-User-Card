import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/search/users?q=silvodesigns')
      .then( res => { 
        this.setState({user: res.data.items[0]})
        console.log(this.state.user);
      })
     .catch( err => {
       console.log(err);
      
     })

     

  }

  render(){

    let information;

    if(this.state.user !== null){
      information = <div>
        <h1>Username: {this.state.user.login}</h1>
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
