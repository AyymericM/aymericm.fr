import React, { Component } from 'react'
import { home, texts, projects } from '../styles'
import { withRouter } from 'react-router-dom'
import { BottomLinks, ProjectItem } from 'components'
import { MainConsummer } from 'stores'

class Projects extends Component {
    constructor() {
        super()

        this.state = {
            willRedirect: false
        }

        this.redirect = this.redirect.bind(this)
    }

    redirect(redirect, length = 3) {
        this.setState({ willRedirect: true })

        setTimeout(() => {
            this.props.history.push(redirect)
        }, length * 150 + 100)
    }

	render() {
		return (
			<MainConsummer>
				{({state}) => (
                    !state.ui.loaded ?
                        <texts.loadScreen willBeLoaded={state.ui.willBeLoaded}>Loading :)</texts.loadScreen>
                    :
                        <React.Fragment>
                            <texts.projectLoader showLoader={state.ui.projects.showLoader}>{state.ui.projects.activeProjectData !== {} ? state.ui.projects.activeProjectData.name : null}</texts.projectLoader>
                            <home.container>
                                <texts.main willRedirect={(state.ui.projects.hideMozaic || this.state.willRedirect)}>Here is my work. You can <a onClick={() => this.redirect('/', state.data.projects.length)}>go back</a> at any time !</texts.main>
                            </home.container>
                            <projects.wrapper>
                                {state.data.projects.map((project, i) => {
                                    return (
                                        <ProjectItem
                                            key={i}
                                            index={i}
                                            data={project}
                                            willRedirect={(state.ui.projects.hideMozaic || this.state.willRedirect)}
                                        />
                                    )
                                })}
                            </projects.wrapper>
                            <BottomLinks willRedirect={(state.ui.projects.hideMozaic || this.state.willRedirect)}/>
                        </React.Fragment>
				)}
			</MainConsummer>
		)
	}
}


export default withRouter(Projects)