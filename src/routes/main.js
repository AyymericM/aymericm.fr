import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, NoMatch } from '../containers/index.js'

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route component={NoMatch} />
            </Switch>
        )
    }
}
