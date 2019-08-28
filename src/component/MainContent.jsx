import React from "react";
import Nav from "./Nav";
import Profile from "./Profile";
import Resume from "./Resume";
import About from "./About";
import Contact from "./Contact";
import SocialLinks from "./SocialLinks";

class MainContent extends React.Component {
  state = {
    activeTab: "about"
  };

  handleSetActiveTab = activeTab => this.setState({ activeTab });

  render() {
    let renderContent;
    switch (this.state.activeTab) {
      case "profile":
        renderContent = <Profile />;
        break;
      case "resume":
        renderContent = <Resume />;
        break;
      case "about":
        renderContent = <About />;
        break;
      case "contact":
        renderContent = <Contact />;
        break;
      default:
        renderContent = null;
        break;
    }
    return (
      <>
        <SocialLinks />
        <div id="content">
          <Nav
            activeTab={this.state.activeTab}
            onTabChange={this.handleSetActiveTab}
          />
          <div id="content-body">{renderContent}</div>
        </div>
      </>
    );
  }
}

export default MainContent;
