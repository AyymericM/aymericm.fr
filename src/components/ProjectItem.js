import React, { Component } from 'react'
import { projects } from '../styles'

export default class ProjectItem extends Component {
    render() {
        return (
            <projects.itembox>
                <projects.thumb thumb={this.props.data.thumb}></projects.thumb>
                <projects.content>
                    <projects.title>{this.props.data.title}</projects.title>
                    <projects.text>{this.props.data.description}</projects.text>
                </projects.content>
                <projects.link href={this.props.data.url} target={'_blank'}>
                    Visit project
                </projects.link>
            </projects.itembox>
        )
    }
}
