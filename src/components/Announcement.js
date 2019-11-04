import React, { Component } from 'react'
import { announcement as ad } from '../styles'
import { MainConsummer } from '../stores/MainStore'

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
            <MainConsummer>
				{(state) => (
                    <ad.container>
                        <ad.box showBox={this.state.showBox}>
                            <ad.closebox onClick={() => this.closeBox()}></ad.closebox>
                            <p>{state.data.tooltip.home_ad_txt}</p>
                            <a href={state.data.tooltip.home_ad_link} target={'_blank'}>{state.data.tooltip.home_ad_btn}</a>
                        </ad.box>
                    </ad.container>
                )}
            </MainConsummer>
        )
    }
}
