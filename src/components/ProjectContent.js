import React, { Component } from 'react'
import { projects } from 'styles'
import ReactMarkdown from "react-markdown"

export default class ProjectContent extends Component {
    constructor(props) {
        super(props)

        console.log(this.props.data)
    }

    render() {
        return (
            <projects.markdownContainer>
                <ReactMarkdown source={this.props.data.project.content}/>
            </projects.markdownContainer>
        )
    }
}
