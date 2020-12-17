import React, { Component } from 'react'
import { home as h, texts as t, projects as p } from '../styles'
import { withRouter } from 'react-router-dom'
import { BottomLinks, ProjectItem } from 'components'
import { MainConsummer } from 'stores'

class Projects extends Component {
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
                            <h.container>
                                <t.main willRedirect={this.state.willRedirect || state.ui.projects.hideMozaic}>Here is my work. You can <br/><a onClick={() => this.redirect('/', state.data.projects.length)}>go back</a> at any time !</t.main>
                            </h.container>
                            <p.wrapper>
                                {state.data.projects.map((project, i) => {
                                    return (
                                        <ProjectItem
                                            key={i}
                                            index={i}
                                            data={project}
                                            active={state.ui.projects.activeProject === project.hash ? true : false}
                                            willRedirect={this.state.willRedirect}
                                        />
                                    )
                                })}
                            </p.wrapper>
                            <BottomLinks/>
                        </React.Fragment>
				)}
			</MainConsummer>
		)
	}
}


export default withRouter(Projects)
