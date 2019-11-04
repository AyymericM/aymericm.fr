import React, { Component } from 'react'
import { home as h } from '../styles/index'
import { MainButton, Parallax, Announcement } from '../components/index'
import { MainConsummer } from '../stores/MainStore'

export default class Home extends Component {
	render() {
		return (
			<MainConsummer>
				{(state) => (
					<React.Fragment>
						{state.data.show_tooltip ?
							<Announcement />
						: null}
						<Parallax>
							<h.container>
								<h.title>{state.data.strings.home_title}</h.title>
								<h.text>{state.data.strings.home_text_1}</h.text>
								<h.text>{state.data.strings.home_text_2}</h.text>
								<h.text>{state.data.strings.home_text_3}</h.text>
								<h.stitle style={{marginTop: '100px'}}>{state.data.strings.home_stitle}</h.stitle>
								<h.btnsContainer>
									{state.data.links.map((link, index) => {
										return <MainButton exitSite key={index} linkUrl={link.url} linkTitle={link.title} />
									})}
								</h.btnsContainer>
							</h.container>
						</Parallax>
						{/* <Projects /> COMMING SOON */}
					</React.Fragment>
				)}
			</MainConsummer>
		)
	}
}
