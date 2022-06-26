import React, { Component } from 'react';
import "./About.css";
import profile from "../assets/Profile.jpeg";
  
export default class About extends Component {
  render() {
    return (
      <div>
         <div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src={profile}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Prash Katukojwala</div>
        <div className="brief_description">
          UC San Diego Computer Science
        </div>
      </div>
    </div>
  </div>
      </div>
    )
  }
}