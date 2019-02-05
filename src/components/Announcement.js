import React, { Component } from 'react'
import { announcement as ad } from '../styles'
import * as cfg from '../config'

export default class Announcement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showBox: false
        }
    }

    closeBox() {
        this.setState({ showBox: false })
    }

    componentDidMount() {
        setTimeout(() => this.setState({ showBox: true }), 1000)
    }

    render() {
        return (
            <ad.container>
                <ad.box showBox={this.state.showBox}>
                    <ad.closebox onClick={() => this.closeBox()}></ad.closebox>
                    <p>{cfg.strings.home_ad_txt}</p>
                    <a href={cfg.strings.home_ad_link} target={'_blank'}>{cfg.strings.home_ad_btn}</a>
                </ad.box>
            </ad.container>
        )
    }
}
