import React from 'react';
import './Stylesheets/App.css';

import NavigationHeader from "./Containers/NavigationHeader"
import MainContent from './Containers/MainContent';
import SocialFooter from './Containers/SocialFooter'


export default class App extends React.Component {

  render(){
    return(
      <div className="App">
        <NavigationHeader />
        <MainContent />
        <SocialFooter />
      </div>
    )
  }
}