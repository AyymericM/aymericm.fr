import React, { Component } from 'react'
import { projects } from '../config'

const ProjectsContext = React.createContext('Projects')
const ProjectsConsummer = ProjectsContext.Consumer

export default class ProjectsProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projectList: projects
        }

        this.actions = {}
    }

    render() {
        return (
            <ProjectsContext.Provider value={{ state: this.state, actions: this.actions }}>
                {this.props.children}
            </ProjectsContext.Provider>
        )
    }
}

export {
    ProjectsConsummer,
    ProjectsProvider
}