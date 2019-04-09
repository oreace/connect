import React, { Component } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
class signin extends Component {
  componentDidMount(){
    var form = document.querySelector('#dothedo')
    M.FormSelect.init(form)
  }
    state = {
    username:'',
    password:'',
  }
  handleChange = (e)=>{
   this.setState({
       [e.target.id]:e.target.value
   })
  }
  handleSubmit =(e)=>{
    e.preventDefault();
    console.log(this.state)
    this.props.signUp(this.state)
  }
  render() {
    
    return (
      
      <div className="signin">
        <div className="card z-depth-4">
            <div className="card-content">
            <form onSubmit={this.handleSubmit} className="white">
            <h5 className="prim">Login</h5>
     
            <div className="input-field col s12 m6">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={this.handleChange}/>
            </div>
            <div className="input-field col s12 m6">
                <input type="password" id="password" onChange={this.handleChange}/>
                <label htmlFor="password">Password</label>
            </div>
        
                <div className="input-field">
                    <button className="btn btn-large capitalize radius gradient z-depth-3">Sign In</button>
                </div>
           </form>
              
            </div>
        </div>  
        
      </div>


    )
  }
}

export default signin  