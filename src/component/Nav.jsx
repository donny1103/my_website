import React from "react";

const Nav = ({ activeTab, onTabChange }) => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <button
          className={`nav-link btn btn-link h-100 ${
            activeTab === "about" ? "active" : ""
          }`}
          onClick={() => onTabChange("about")}
        >
          <i className="fas fa-folder-open fa-2x d-block" />
          About
        </button>
      </li>
      <li className="nav-item">
        <button
          className={`nav-link btn btn-link h-100 ${
            activeTab === "profile" ? "active" : ""
          }`}
          onClick={() => onTabChange("profile")}
        >
          <i className="fas fa-user fa-2x d-block" />
          Profile
        </button>
      </li>
      <li className="nav-item">
        <button
          className={`nav-link btn btn-link h-100 ${
            activeTab === "resume" ? "active" : ""
          }`}
          onClick={() => onTabChange("resume")}
        >
          <i className="fas fa-newspaper fa-2x d-block" />
          Resume
        </button>
      </li>

      <li className="nav-item">
        <button
          className={`nav-link btn btn-link h-100 ${
            activeTab === "contact" ? "active" : ""
          }`}
          onClick={() => onTabChange("contact")}
        >
          <i className="fas fa-envelope fa-2x d-block" />
          Contact
        </button>
      </li>
    </ul>
  );
};

export default Nav;
