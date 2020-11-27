import React, { Component } from 'react'
import { home as h, texts as t } from 'styles'
import { HomeLink } from 'components'

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
