import React, { Component } from 'react'
// import M from 'materialize-css/dist/js/materialize.min.js'
class dashboard extends Component {
  componentDidMount(){
    // var form = document.querySelector('#dothedo')
    // M.FormSelect.init(form)
  }
  render() {
    
    return (
      <div className="dashboard">
          <div className="profile">
              <div className="card z-depth-3 radius">
              <i className="material-icons sec right toggle">more_vert</i>
                  <div className="card-content">
                  {/* <i class="fa fa-user radius gradient userimg" aria-hidden="true"></i> */}
                  <i className="material-icons radius gradient sec userimg">account_box</i>
                    <span className="name">Laniran Peter</span>
                    <span className="title">Full Stack Developer
                    <hr/>
                    </span>
                     <span className="location"><i className="material-icons">location_on</i>Lagos, Nigeria</span>
                    <i className="material-icons mail">mail</i>
                    
                  </div>
                  <div className="card-action">
                        SUBSCRIPTION
                    </div>
              </div>
              
              <button className="btn blueish z-depth-3 capitalize radius">Build Fan-Base</button>
          </div>
          <div className="bio">
              <b>Bio</b>
              <p>Lorem ipsum dolor sit amet consectetur, necessitatibus expedita libero voluptate quod laboriosam quaerat ex tempore natus? Vitae laboriosam ad similique!</p>
              <hr/>
              <b>Skills</b>
              <p>Node, PHP, React, SASS</p>
              <hr/>
              <b>Experience</b>
              <p>4 Years</p>
              <hr/>
              <b>Interest</b>
              <p>Movies, Playing games</p>
          </div>
          <div className="awards">
              <div className="award">
                  <h2>5k+</h2>
                  <img src="/images/badge.png" alt="award badge" className="responsive-img"/>
              </div>
              <div className="award">
                  <h2>5k+</h2>
                  <img src="/images/badge.png" alt="award badge" className="responsive-img"/>
              </div>
              <div className="award">
                  <h2>5k+</h2>
                  <img src="/images/badge.png" alt="award badge" className="responsive-img"/>
              </div>
              <div className="award">
                  <h2>5k+</h2>
                  <img src="/images/badge.png" alt="award badge" className="responsive-img"/>
              </div>
              <div className="award">
                  <h2>5k+</h2>
                  <img src="/images/badge.png" alt="award badge" className="responsive-img"/>
              </div>
            <div className="note">
              <p>Reach the above level number of fans & <b>Unlock</b> the achievers badge</p>
              <hr/>
              </div>
          </div>
          <div className="info">
           <div className="card radius z-depth-3">
               <div className="card-content">
                   <div className="img">
                   <i className="material-icons radius gradient sec userimg">account_box</i>
                   </div>
                   
                   <div className="info">
                    <span className="name">Joshuas Graphics</span>
                    <span className="title">Graphics Designer
                    <hr/>
                    </span>
                     <span className="location"><i className="material-icons">location_on</i>Lagos, Nigeria</span>
                   </div>

                   <div className="talk black white-text radius">
                       <p>Explore my creative portfolio & connect with me on <b>Connnect Me</b></p>
                   </div>
    
                   <div className="social">
                    <i className="fab fa-2x fa-facebook-square"></i>
                    <i className="fab fa-2x fa-twitter-square"></i>
                    <i className="fab fa-2x fa-youtube-square"></i>
                    <i className="fab fa-2x fa-linkedin"></i>
                            
                   </div>
                   
               </div>
            </div>   
          </div>
          <div className="badgeinfo">
              <div className="card z-depth-3">
                  <div className="card-content">
                      <b className="title">The badge lets you:</b>
                      <p>Boost every new uploaded content
                        <br/><br/>
                        Boost your profile and portfolio
                        <br/><br/>
                        Gain extra connect me features</p>
                  </div>
              </div>
              <button className="btn blueish gradient radius">Share Invite On</button>
          </div>
      </div>
    )
  }
}

export default dashboard  