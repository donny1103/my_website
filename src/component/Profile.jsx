import React from "react";

const Profile = () => (
  <div id="profile" className="row">
    <div className="col-6 text-white align-self-center">
      <div className="info-item">
        <label>Name</label>
        <span>Weidong Li</span>
      </div>

      <div className="info-item">
        <label>Birthday</label>
        <span>November 27, 1988</span>
      </div>

      <div className="info-item">
        <label>Email</label>
        <span>weidongli1988@gmail.com</span>
      </div>

      <div className="info-item">
        <label>Phone</label>
        <span>+1-613-878-3953</span>
      </div>

      <div className="info-item">
        <label>Location</label>
        <span>Ottawa, ON, Canada</span>
      </div>

      <div className="info-item">
        <label>Title</label>
        <span>Web Developer</span>
      </div>
    </div>

    <div className="col-6 text-white align-self-center">
      <div className="info-item">
        <label>Facebook</label>
        <span>
          <a href="https://www.facebook.com/donny1103" target="__blank">
            https://www.facebook.com/donny1103
          </a>
        </span>
      </div>

      <div className="info-item">
        <label>LinkedIn</label>
        <span>
          <a href="https://www.linkedin.com/in/weidong-li/" target="__blank">
            https://www.linkedin.com/in/weidong-li/
          </a>
        </span>
      </div>

      <div className="info-item">
        <label>GitHub</label>
        <span>
          <a href="https://github.com/donny1103" target="__blank">
            https://github.com/donny1103
          </a>
        </span>
      </div>

      <div className="info-item">
        <label>Twitter</label>
        <span>
          <a href=" https://twitter.com/weidongli1988" target="__blank">
            https://twitter.com/weidongli1988
          </a>
        </span>
      </div>

      <div className="info-item">
        <label>Instagram</label>
        <span>
          <a href="https://www.instagram.com/li.donny/" target="__blank">
            https://www.instagram.com/li.donny/
          </a>
        </span>
      </div>

      <div className="info-item">
        <label>WeChat ID</label>
        <span>Donny_WDLI</span>
      </div>
    </div>
  </div>
);

export default Profile;
