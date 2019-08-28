import React from "react";
import Nav from "./Nav";
import Profile from "./Profile";
import Resume from "./Resume";
import About from "./About";
import Contact from "./Contact";
import SocialLinks from "./SocialLinks";

export default function MainContent() {
  const [tab, setTab] = React.useState("about");

  let renderContent;
  switch (tab) {
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
        <Nav activeTab={tab} onTabChange={setTab} />
        <div id="content-body">{renderContent}</div>
      </div>
    </>
  );
}
