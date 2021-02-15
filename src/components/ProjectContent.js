import React, { Component } from 'react'
import { projects, texts } from 'styles'
import { BottomLinks } from 'components'
import ReactMarkdown from "react-markdown"
import { MainConsummer } from 'stores'

export default class ProjectContent extends Component {
    constructor(props) {
        super(props)

        this.project = this.props.data.project

        this.state = {
            showContent: false,
            isClosing: false
        }
    }

    componentDidUpdate() {
        if (this.props.showContent != this.state.showContent) {
            if (this.props.showContent) {
                setTimeout(() => {
                    this.setState({ showContent: true })
                }, 600)
                setTimeout(() => {
                    this.setState({ isClosing: true })
                }, 1050)
            } else {
                this.setState({ showContent: false, isClosing: true })
            }
        }
    }

    componentDidMount() {
        console.log(this.project)
    }

    render() {
        return (
            <MainConsummer>
                {({state}) => (
                    <React.Fragment>
                        <texts.projectLoader showLoader={state.ui.projects.showLoader}>{this.props.data.name}</texts.projectLoader>
                        {this.project.banner.url ?
                            <projects.banner showContent={this.state.showContent} isClosing={this.state.isClosing} source={`${process.env.REACT_APP_API_URL}${this.project.banner.url}`}></projects.banner>
                        : null}
                        <projects.markdownContainer showContent={this.state.showContent} isClosing={this.state.isClosing} useMargin={this.project.banner}>
                            <projects.header>
                                <texts.projectTitle>{this.project.name}</texts.projectTitle>
                                {this.project.projectURL ? 
                                    <texts.blueLink style={{cursor: 'pointer'}} target={'_blank'} href={this.project.projectURL}>Visit site</texts.blueLink>
                                : null}
                            </projects.header>
                            <ReactMarkdown transformImageUri={uri => `${process.env.REACT_APP_API_URL}${uri}`} source={this.project.content}/>
                        </projects.markdownContainer>
                        <BottomLinks/>
                    </React.Fragment>
                )}
            </MainConsummer>
        )
    }
}
