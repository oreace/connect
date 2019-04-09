import React, { Component } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
class signup extends Component {
  componentDidMount(){
    var form = document.querySelector('#dothedo')
    M.FormSelect.init(form)
  }
    state = {
    fullname:'',
    username:'',
    email:'',
    dothedo:'',
    password:'',
    cpassword:''
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
      
      <div className="signup">
        <div className="card z-depth-4">
            <div className="card-content">
            <div className="form">
            <form onSubmit={this.handleSubmit} className="white">
            <h5 className="prim">Join the community</h5>
            <div className="row">
            <div className="input-field col s12 m6">
                <label htmlFor="fullname">Full Name</label>
                <input type="text" id="fullname" onChange={this.handleChange}/>
            </div>

            <div className="input-field col s12 m6">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={this.handleChange}/>
            </div>
            </div>
            <div className="row">
            
            <div className="input-field col s12 m6">
                <input type="email" id="email" onChange={this.handleChange}/>
                <label htmlFor="email">Email</label>
            </div>    

            <div className="input-field col s12 m6">
                <select id="dothedo" onChange={this.handleChange}>
                <option value="1">FrontEnd Ninja</option>
                <option value="2">BackEnd Samuria</option>
                <option value="3">Graphics Designer</option>
                <option value="4">Photographer</option>
                </select>
                <label>What do you do</label>
            </div>
            </div>

            <div className="row">
            <div className="input-field col s12 m6">
                <input type="password" id="password" onChange={this.handleChange}/>
                <label htmlFor="password">Password</label>
            </div>
            <div className="input-field col s12 m6">
                <input type="password" id="cpassword" onChange={this.handleChange}/>
                <label htmlFor="cpassword">Confirm Password</label>
            </div>

            </div>

                <div className="input-field">
                    <button className="btn btn-large capitalize radius gradient z-depth-3">Sign Up</button>
                </div>
           </form>
              
                </div>
                <div className="otherside">
                <div className="socials">
                <i class="fab fa-2x fa-facebook-square"></i>
                <i class="fab fa-2x fa-twitter-square"></i>
                <i class="fab fa-2x fa-youtube-square"></i>
                <i class="fab fa-2x fa-linkedin"></i>
                
                </div>
                </div>                
            </div>
        </div>  
        
      </div>


    )
  }
}

export default signup  