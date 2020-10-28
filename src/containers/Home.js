import React, { Component } from 'react'
import { home as h } from '../styles/index'
import { Link } from 'react-router-dom'
import { BottomLinks } from '../components'
import { MainConsummer } from '../stores/MainStore'

export default class Home extends Component {
    constructor() {
        super()

        this.parseText = this.parseText.bind(this)
    }

    parseText(str) {
        const reg_url = /(?<=\[URL=")(.*?)(?="\])/
        const reg_txt = /(?<=\])(.*?)(?=\[)/
        const reg_txt_before = /^.*(?=(\[URL=))/
        const reg_txt_after = /(?<=\[\/URL]).*/

        if (str.match(reg_url)) {
            const data = {
                url_link: str.match(reg_url)[0],
                url_text: str.match(reg_txt)[0],
                text_before: str.match(reg_txt_before)[0],
                text_after: str.match(reg_txt_after)[0]
            }

            if (data.url_link.includes('http://') || data.url_link.includes('https://')) {
                return {__html: `${data.text_before}<a target={'blank'} href="${data.url_link}">${data.url_text}</a>${data.text_after}` }
            } else {
                return {__html: `${data.text_before}<a href="${data.url_link}">${data.url_text}</a>${data.text_after}`}
            }
        } else {
            return {__html: str}
        }
    }

	render() {
		return (
			<MainConsummer>
				{state => (
					<React.Fragment>
						<h.container>
                            {state.home.text.map((text, index) => {
                                return <h.text key={index} dangerouslySetInnerHTML={this.parseText(text)} />
                            })}
						</h.container>
                        <BottomLinks/>
					</React.Fragment>
				)}
			</MainConsummer>
		)
	}
}



