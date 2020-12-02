import React, { Component } from 'react'
import { MainConsummer } from 'stores'
import { home, texts } from 'styles'

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
				{({state}) => (
                    <home.bottomLinks visible={this.state.visible && !this.props.willRedirect}>
                        <texts.blueLink target={'_blank'} href={state.data.links.mail}>my email</texts.blueLink>
                        <texts.blueLink target={'_blank'} href={state.data.links.resumee}>my resume</texts.blueLink>
                    </home.bottomLinks>
                )}
            </MainConsummer>
        )
    }
}
