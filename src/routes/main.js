import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, NoMatch } from '../containers/index.js'
import { ProjectsProvider } from '../stores/Projects'

export default class Routes extends Component {
    render() {
        return (
            <ProjectsProvider>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route component={NoMatch} />
                </Switch>
            </ProjectsProvider>
        )
    }
}
