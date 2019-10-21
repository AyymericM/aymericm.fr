import React, { Component } from 'react'
import { home as h } from '../styles/index'
import { MainButton, Parallax, Announcement } from '../components/index'
import { Projects } from './index'
import * as cfg from '../config'

export default class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<Announcement />
				<Parallax>
					<h.container>
						<h.title>{cfg.strings.home_title}</h.title>
						<h.text>{cfg.strings.home_text_1}</h.text>
						<h.text>{cfg.strings.home_text_2}</h.text>
						<h.text>{cfg.strings.home_text_3}</h.text>
						<h.stitle style={{marginTop: '100px'}}>{cfg.strings.home_stitle}</h.stitle>
						<h.btnsContainer>
							{cfg.links.map((link, index) => {
								return <MainButton exitSite key={index} linkUrl={link.url} linkTitle={link.title} />
							})}
						</h.btnsContainer>
					</h.container>
				</Parallax>
				{/* <Projects /> COMMING SOON */}
			</React.Fragment>
		)
	}
}
