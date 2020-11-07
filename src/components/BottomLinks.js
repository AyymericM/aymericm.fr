import React, { Component } from 'react'
import { MainConsummer } from '../stores/MainStore'
import { homelink as hlinks } from '../styles'

export default class BottomLinks extends Component {
    constructor() {
        super()

        this.state = {
            visible: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ visible: true })
        }, 200)
    }

    render() {
        return (
            <MainConsummer>
				{(state) => (
                    <hlinks.ctnr visible={this.state.visible && !this.props.willRedirect}>
                        <hlinks.txt target={'_blank'} href={state.data.home.links.mail}>my email</hlinks.txt>
                        <hlinks.txt target={'_blank'} href={state.data.home.links.resumee}>my resume</hlinks.txt>
                    </hlinks.ctnr>
                )}
            </MainConsummer>
        )
    }
}
