import React, { Component } from 'react'
import { ProjectsConsummer } from '../stores/Projects'
import { ProjectItem } from '../components'
import { projects } from '../styles'

export default class Projects extends Component {
    render() {
        return (
            <projects.wrapper>
                <projects.container>
                    <ProjectsConsummer>
                        {({state, actions}) => (
                            state.projectList.map((item, index) => {
                                return <ProjectItem key={index} data={item} />
                            })
                        )}
                    </ProjectsConsummer>
                </projects.container>
            </projects.wrapper>
        )
    }
}
