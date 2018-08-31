import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { mainBtn } from '../styles'

export default class MainButton extends Component {
    render() {
        return (
            <mainBtn.ctnr>
                {(this.props.exitSite) ?
                    <a href={this.props.linkUrl} target={'_blank'}>{this.props.linkTitle}</a>
                :
                    <Link to={this.props.linkUrl}>{this.props.linkTitle}</Link>
                }
            </mainBtn.ctnr>
        )
    }
}
