import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {
  MainContainer,
  Home, 
} from '../containers'

const routes = (
  <Router>
    <Switch>
      <MainContainer>
        <Route exact path='/' component={Home} />
      </MainContainer>
    </Switch>
  </Router>
)

export default routes;