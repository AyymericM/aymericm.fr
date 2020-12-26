import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { MainConsummer } from 'stores'
import { projects } from 'styles'

class ProjectItem extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <MainConsummer>
                {({ state, actions }) => (
                    <projects.container
                        ref={this.ref}
                        thumbnail={`${process.env.API_URL}${this.props.data.project.thumbnail.url}`}
                        onClick={() =>{
                            if (state.ui.canInteract) {
                                actions.setActiveProject(this.props.data.hash)
                            }
                        }}
                        hide={state.ui.projects.hideMozaic}
                        delay={this.props.index * 100}
                        willRedirect={this.props.willRedirect}
                    >
                    </projects.container>
                )}
            </MainConsummer>
        )
    }
}

export default withRouter(ProjectItem)