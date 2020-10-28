import React, { Component } from 'react'
import { home as h } from '../styles/index'
import { HomeLink } from '../components/index'

export default class NoMatch extends Component {
	render() {
		return (
			<h.container>
				<h.title>{'404'}</h.title>
				<HomeLink linkUrl={'/'} linkTitle={'Go home'} />
			</h.container>
		)
	}
}
