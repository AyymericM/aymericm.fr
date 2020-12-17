import React, { Component } from 'react'
import { texts as t, projects as p } from 'styles'
import { withRouter } from 'react-router-dom'
import { ProjectContent } from 'components'
import { MainConsummer } from 'stores'

class ProjectView extends Component {
    constructor() {
        super()

        this.state = {
            activeProject: -1,
            willRedirect: false
        }

        this.redirect = this.redirect.bind(this)
    }

    redirect(redirect, length = 1) {
        this.setState({ willRedirect: true })

        setTimeout(() => {
            this.props.history.push(redirect)
        }, length * 100)
    }

    componentDidMount() {
        // console.log('PROJECTVIEW')
    }

	render() {
		return (
			<MainConsummer>
				{({state, actions}) => (
                    !state.ui.loaded ?
                        <t.loadScreen willBeLoaded={state.ui.willBeLoaded}>Loading :)</t.loadScreen>
                    :
                        <React.Fragment>
                            {/* {state.ui.firstLoad && state.ui.projects.activeProject != -1 ? null :
                                <h.container>
                                    <t.main willRedirect={this.state.willRedirect || state.ui.projects.hideMozaic}>Here is my work. You can <br/><a onClick={() => this.redirect('/', state.data.projects.length)}>go back</a> at any time !</t.main>
                                </h.container>
                            } TO ACTIVATE FOR ROUTE CHECK/REDIRECTS */}
                            <p.content active={true}>
                                {state.ui.projects.activeProjectData.banner ?
                                    <p.banner source={`${window.env.API_URL}${state.ui.projects.activeProjectData.banner.url}`}></p.banner>
                                : null}
                                <p.close
                                    active={true}
                                    onClick={() => {
                                        actions.setActiveProject(-1)
                                    }}
                                >Close</p.close>
                                <ProjectContent active={state.ui.projects.expandActive} showContent={state.ui.projects.expandActive && state.ui.projects.showContent} data={state.ui.projects.activeProjectData}></ProjectContent>
                            </p.content>
                        </React.Fragment>
				)}
			</MainConsummer>
		)
	}
}

export default withRouter(ProjectView)