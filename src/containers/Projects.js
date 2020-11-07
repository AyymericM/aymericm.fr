import React, { Component } from 'react'
import { home as h, texts as t } from '../styles'
import { Redirect } from 'react-router-dom'
import { BottomLinks } from '../components'
import { MainConsummer } from '../stores/MainStore'

export default class Projects extends Component {
    constructor() {
        super()

        this.state = {
            willRedirect: false,
            redirect: false,
            redirectURL: '/'
        }

        this.redirect = this.redirect.bind(this)
    }

    redirect(redirect, length = 1) {
        this.setState({ willRedirect: true })

        setTimeout(() => {
            this.setState({
                redirect: true,
                redirectURL: redirect
            })
        }, length * 200)
    }

	render() {
		return (
			<MainConsummer>
				{state => (
                    !state.loaded ?
                        <t.loadScreen willBeLoaded={state.willBeLoaded}>Loading :)</t.loadScreen>
                    :
                        <React.Fragment>
                            <React.Fragment>
                                {this.state.redirect ? <Redirect to={this.state.redirectURL} />: null}
                            </React.Fragment>
                            <h.container>
								<t.main willRedirect={this.state.willRedirect}>Here is my work. You can <br/><a onClick={() => this.redirect('/')}>go back</a> at any time !</t.main>
                            </h.container>
                            <BottomLinks/>
                        </React.Fragment>
				)}
			</MainConsummer>
		)
	}
}



