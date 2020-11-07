import React, { Component } from 'react'
import { home as h, texts as t } from '../styles/index'
import { HomeLink } from '../components/index'

export default class NoMatch extends Component {
	render() {
		return (
			<h.container>
				<t.main>{'404'}</t.main>
				<HomeLink linkUrl={'/'} linkTitle={'Go home'} />
			</h.container>
		)
	}
}
