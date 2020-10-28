import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { homelink } from '../styles'

export default class HomeLink extends Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        return (
            <homelink.ctnr>
                {(this.props.exitSite) ?
                    <a href={this.props.linkUrl} target={'_blank'}>{this.props.linkTitle}</a>
                :
                    <Link to={this.props.linkUrl}>{this.props.linkTitle}</Link>
                }
            </homelink.ctnr>
        )
    }
}
