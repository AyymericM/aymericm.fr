import React, { Component } from 'react'
import { ProjectContent } from 'components'
import { MainConsummer } from 'stores'
import { projects } from 'styles'
import { API_URL } from 'config'

export default class ProjectItem extends Component {
    constructor() {
        super()

        this.ref = React.createRef()

        this.state = {
            top: 0,
            left: 0,
            relTop: 0,
            relLeft: 0
        }
    }

    refreshRef() {
        if ((this.ref.current.getBoundingClientRect().left + this.ref.current.getBoundingClientRect().top) > 0 && this.ref.current != null) {
            this.setState({
                top: window.scrollY + this.ref.current.getBoundingClientRect().top,
                left: window.scrollX + this.ref.current.getBoundingClientRect().left,
                relTop: window.scrollY,
                relLeft: window.scrollX
            })
        }
    }

    componentDidMount() {
        this.refreshRef()
    }

    render() {
        return (
            <MainConsummer>
                {({state, actions}) => (
                    <projects.container
                        ref={this.ref}
                        thumbnail={`${API_URL}${this.props.data.project.thumbnail.url}`}
                        onClick={() => {
                            if (!this.props.active || !state.ui.projects.expandActive) {
                                this.refreshRef()
                            }
                            actions.setActiveProject(this.props.index)
                        }}
                        active={this.props.active}
                        expand={this.props.active && state.ui.projects.expandActive}
                        hide={state.ui.projects.hideMozaic && !this.props.active}
                        disable={(!this.props.active && state.ui.projects.hideMozaic) || (!this.props.active && state.ui.projects.expandActive)}
                        delay={this.props.index * 100}
                        willRedirect={this.props.willRedirect}
                        pos={this.state}
                    >
                        <projects.content active={this.props.active && state.ui.projects.expandActive}>
                            {this.props.data.project.banner ?
                                <projects.banner source={`${API_URL}${this.props.data.project.banner.url}`}></projects.banner>
                            : null}
                            <projects.close
                                active={this.props.active && state.ui.projects.expandActive}
                                onClick={() => actions.setActiveProject(-1)}
                            >Close</projects.close>
                            <ProjectContent active={this.props.active && state.ui.projects.expandActive} data={this.props.data}></ProjectContent>
                        </projects.content>
                    </projects.container>
                )}
            </MainConsummer>
        )
    }
}
