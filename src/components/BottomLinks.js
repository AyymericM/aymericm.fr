import React, { Component } from 'react'
import { MainConsummer } from 'stores'
import { home, texts } from 'styles'

export default class BottomLinks extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <MainConsummer>
				{({state}) => (
                    <home.bottomLinks visible={state.ui.canInteract}>
                        <texts.blueLink target={'_blank'} href={state.data.links.mail}>my email</texts.blueLink>
                        <texts.blueLink target={'_blank'} href={state.data.links.resumee}>my resume</texts.blueLink>
                    </home.bottomLinks>
                )}
            </MainConsummer>
        )
    }
}
