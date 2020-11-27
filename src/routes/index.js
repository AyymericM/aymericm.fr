import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, Projects, NoMatch } from '../containers/index.js'

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects/" component={Projects} />
                <Route exact path="/projects/:slug" component={Projects} />
                <Route component={NoMatch} />
            </Switch>
        )
    }
}
