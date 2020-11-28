import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { MainConsummer } from 'stores'
import { Home, Projects, NoMatch } from '../containers/index.js'

export default class Routes extends Component {
    render() {
        return (
            <MainConsummer>
				{({state}) => (
                    <Switch>
                        <Route exact path="/" component={Home} />
                        {state.error ? null : 
                            <React.Fragment>
                                <Route exact path="/projects/" component={Projects} />
                                <Route exact path="/projects/:slug" component={Projects} />
                            </React.Fragment>
                        }
                        <Route component={NoMatch} />
                    </Switch>
                )}
            </MainConsummer>
        )
    }
}
