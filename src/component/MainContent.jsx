import React from 'react';
import Nav from './Nav';
import Profile from './Profile';
import Resume from './Resume';

class MainContent extends React.Component{

  state = {
    activeTab: 'profile'
  };

  handleSetActiveTab = activeTab => this.setState({activeTab});

  render(){
    let renderContent;
    switch (this.state.activeTab){
       case 'profile':
          renderContent = <Profile/>;
          break;
        case 'resume':
          renderContent = <Resume/>;
          break;

    }
    return (
      <div id='content'>
        <Nav activeTab={this.state.activeTab} onTabChange={this.handleSetActiveTab}/>
        <div id='content-body'>
          {renderContent}
        </div>
      </div>
    )
  }
}


export default MainContent;