import React, { Component } from 'react'
import { home as h } from '../styles/index'
import { MainButton, Parallax } from '../components/index'

export default class NoMatch extends Component {
	render() {
		return (
			<Parallax>
				<h.container>
					<h.title>{'404'}</h.title>
					<MainButton linkUrl={'/'} linkTitle={'Go home'} />
				</h.container>
			</Parallax>
		)
	}
}
