import React from 'react';
import profile from './profile.png'
const Profile = () => (
    <div id='profile' className='row'>       
      <div className='about col-8 align-self-center'>
        <div className='row'>
          <div className='photo col-6 text-center'>
            <img src={profile} alt='Weidong Li' className='img-fluid'/>
          </div>
          <div className='col-6 text-white'>
            <h1>Weidong Li</h1>
            <h5>Web Developer</h5>
            <p>I am a web developer who passionate in engineering and crafting responsive, interactive web app.</p>
          </div>
        </div>
      </div>
      <div className='col-4 text-white align-self-center'>

          <div className='info-item'>
              <label>Birthday</label>
              <span>November 27, 1988</span>
          </div>

          <div className='info-item'>
              <label>Location</label>
              <span>Ottawa, ON, Canada</span>
          </div>

          <div className='info-item'>
              <label>Email</label>
              <span>weidongli1988@gmail.com</span>
          </div>

          <div className='info-item'>
              <label>Phone</label>
              <span>+1-613-878-3953</span>
          </div>
      </div>
  </div>
);

export default Profile;