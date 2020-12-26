import React, { Component } from 'react'
import { projects, texts } from 'styles'
import ReactMarkdown from "react-markdown"
import { MainConsummer } from 'stores'

export default class ProjectContent extends Component {
    constructor(props) {
        super(props)

        this.project = this.props.data.project

        this.state = {
            showContent: false
        }
    }

    componentDidUpdate() {
        if (this.props.showContent != this.state.showContent) {
            if (this.props.showContent) {
                setTimeout(() => {
                    this.setState({ showContent: true })
                }, 600)
            } else {
                this.setState({ showContent: false })
            }
        }
    }

    render() {
        return (
            <MainConsummer>
                {({state}) => (
                    <React.Fragment>
                        <projects.loader showLoader={state.ui.projects.showLoader}>{this.props.data.name}</projects.loader>
                        <projects.markdownContainer showContent={this.state.showContent} useMargin={this.project.banner}>
                            <projects.header>
                                <texts.projectTitle>{this.project.name}</texts.projectTitle>
                                {this.project.projectURL ? 
                                    <texts.blueLink style={{cursor: 'pointer'}} target={'_blank'} href={this.project.projectURL}>Visit site</texts.blueLink>
                                : null}
                            </projects.header>
                            <ReactMarkdown transformImageUri={uri => `${window.env.API_URL}${uri}`} source={this.project.content}/>
                        </projects.markdownContainer>
                    </React.Fragment>
                )}
            </MainConsummer>
        )
    }
}
