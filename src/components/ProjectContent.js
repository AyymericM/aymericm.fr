import React, { Component } from 'react'
import { projects, texts } from 'styles'
import ReactMarkdown from "react-markdown"
import { API_URL } from 'config'

export default class ProjectContent extends Component {
    constructor(props) {
        super(props)

        this.project = this.props.data.project

        this.state = {
            showContent: false
        }
    }

    componentDidUpdate() {
        if (this.props.active != this.state.showContent) {
            if (this.props.active) {
                setTimeout(() => {
                    this.setState({ showContent: true })
                }, 400)
            } else {
                this.setState({ showContent: false })
            }
        }
    }

    render() {
        return (
            <projects.markdownContainer active={this.props.active} showContent={this.state.showContent} useMargin={this.project.banner}>
                <texts.projectTitle>{this.project.name}</texts.projectTitle>
                <ReactMarkdown transformImageUri={uri => `${API_URL}${uri}`} source={this.project.content}/>
            </projects.markdownContainer>
        )
    }
}
