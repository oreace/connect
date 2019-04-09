import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = (props) =>{
    return (
        <div className="mainContent">
            <div className="mainText">
                <h3>Where  <span className="sec">Creativity  </span> Meets <span className="sec">Opportunity</span></h3>
                <Link to="/signup" className="btn capitalize btn-large special-button z-depth-3 bold">Sign Up</Link>
            </div>
            <div className="mainImg">
                <img src="/images/illustration.png" alt="Illustration" className="responsive-img"/>
            </div>
        </div>
    )
}


export default HomePage;