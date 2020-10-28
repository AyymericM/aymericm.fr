import React, { Component } from 'react'
import { MainConsummer } from '../stores/MainStore'

export default class BottomLinks extends Component {
    render() {
        return (
            <MainConsummer>
				{(state) => (
                    <div>
                        <a target={'_blank'} href={state.home.links.mail}>my email</a>
                        <a target={'_blank'} href={state.home.links.resumee}>my resumee</a>
                    </div>
                )}
            </MainConsummer>
        )
    }
}
