import React from 'react';
import './Stylesheets/App.css';

import NavigationHeader from "./Containers/NavigationHeader"
import MainContent from './Containers/MainContent';
import SocialFooter from './Containers/SocialFooter'
import NotFound from './Components/NotFound'

import {BrowserRouter, Route, Switch} from 'react-router-dom'


export default class App extends React.Component {

  render(){
    return(
      <div className="App">
        <BrowserRouter>
        <NavigationHeader />
        
          <Switch>
            <Route exact path='/' component={MainContent} />
            <Route path='/home' component={MainContent} />
            <Route path='/programming' component={NotFound} />
            <Route path='/photography' component={NotFound} />
            <Route path='/dance' component={NotFound} />
            <Route component={NotFound} />
          </Switch>
        

        <SocialFooter />
        </BrowserRouter>
      </div>
    )
  }
}