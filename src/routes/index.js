import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { MainConsummer } from 'stores'
import { Home, Projects, ProjectView, NoMatch } from '../containers/index.js'

export default class Routes extends Component {
    render() {
        return (
            <MainConsummer>
				{({state}) => (
                    <Switch>
                        <Route exact path="/" component={Home} />
                        {state.error ? null : 
                            <React.Fragment>
                                <Route exact={true} path="/projects" component={Projects} />
                                <Route exact={true} path="/projects/:slug" component={ProjectView} />
                            </React.Fragment>
                        }
                        <Route component={NoMatch} />
                    </Switch>
                )}
            </MainConsummer>
        )
    }
}
