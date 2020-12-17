import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { ProjectContent } from 'components'
import { MainConsummer } from 'stores'
import { projects } from 'styles'

class ProjectItem extends Component {
    constructor() {
        super()

        this.ref = React.createRef()
    }

    refreshRef() {
        if ((this.ref.current.getBoundingClientRect().left + this.ref.current.getBoundingClientRect().top) > 0 && this.ref.current != null) {
            return {
                top: window.scrollY + this.ref.current.getBoundingClientRect().top,
                left: window.scrollX + this.ref.current.getBoundingClientRect().left,
                relTop: window.scrollY,
                relLeft: window.scrollX
            }
        }
    }

    render() {
        return (
            <MainConsummer>
                {({ state, actions }) => (
                    <projects.container
                        ref={this.ref}
                        thumbnail={`${window.env.API_URL}${this.props.data.project.thumbnail.url}`}
                        onClick={() => {
                            if (!this.props.active || !state.ui.projects.expandActive) {
                                actions.refreshRef(this.refreshRef())
                                setTimeout(() => {
                                    actions.setActiveProject(this.props.data.hash)
                                }, 200);
                            }
                        }}
                        active={this.props.active}
                        expand={this.props.active && state.ui.projects.expandActive}
                        hide={(state.ui.projects.hideMozaic && !this.props.active)}
                        disable={(!this.props.active && state.ui.projects.hideMozaic) || (!this.props.active && state.ui.projects.expandActive)}
                        delay={this.props.index * 100}
                        willRedirect={this.props.willRedirect}
                        pos={state.ui.projects.elPos}
                        firstLoad={state.ui.firstLoad}
                    >
                    </projects.container>
                )}
            </MainConsummer>
        )
    }
}

export default withRouter(ProjectItem)