import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MainConsummer } from 'stores'
import { Home, Projects, ProjectView, NoMatch } from '../containers/index.js'

const CustomRoute = props => {
    if (!props.apiError) {
        return <Route {...props} />
    } else {
        return <Redirect to='/' />
    }
 }

export default class Routes extends Component {
    render() {
        return (
            <MainConsummer>
				{({state}) => (
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <CustomRoute exact={true} path="/projects" component={Projects} apiError={state.error} />
                        <CustomRoute exact={true} path="/projects/:slug" component={ProjectView} apiError={state.error} />
                        <Route component={NoMatch} />
                    </Switch>
                )}
            </MainConsummer>
        )
    }
}
