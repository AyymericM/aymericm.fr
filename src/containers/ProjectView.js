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

	render() {
		return (
			<MainConsummer>
				{({state, actions}) => (
                    !state.ui.loaded ?
                        <t.loadScreen willBeLoaded={state.ui.willBeLoaded}>Loading :)</t.loadScreen>
                    :
                        <React.Fragment>
                            {state.ui.projects.activeProjectData.banner ?
                                <p.banner source={`${process.env.REACT_APP_API_URL}${state.ui.projects.activeProjectData.banner.url}`}></p.banner>
                            : null}
                            <p.close
                                active={state.ui.projects.showContent && !this.state.willRedirect}
                                onClick={() => {
                                    if (state.ui.canInteract) {
                                        actions.setActiveProject(-1)
                                    }
                                }}
                            >Close</p.close>
                            <ProjectContent showContent={state.ui.projects.showContent} data={state.ui.projects.activeProjectData}></ProjectContent>
                        </React.Fragment>
				)}
			</MainConsummer>
		)
	}
}

export default withRouter(ProjectView)