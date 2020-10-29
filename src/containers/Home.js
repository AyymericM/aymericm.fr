import React, { Component } from 'react'
import { home as h } from '../styles'
import { Link } from 'react-router-dom'
import { BottomLinks } from '../components'
import { MainConsummer } from '../stores/MainStore'

export default class Home extends Component {
    constructor() {
        super()

        this.regs = {
            reg_url: /(?<=\[URL=")(.*?)(?="\])/,
            reg_txt: /(?<=\])(.*?)(?=\[)/,
            reg_txt_before: /^.*(?=(\[URL=))/,
            reg_txt_after: /(?<=\[\/URL]).*/
        }

        this.parseText = this.parseText.bind(this)
    }

    parseText(str) {
        const data = {
            internal: true,
            url_link: str.match(this.regs.reg_url)[0],
            url_text: str.match(this.regs.reg_txt)[0],
            text_before: str.match(this.regs.reg_txt_before)[0],
            text_after: str.match(this.regs.reg_txt_after)[0]
        }

        if (data.url_link.includes('http://') || data.url_link.includes('https://')) {
            data.internal = false
        }

        return data
    }

	render() {
		return (
			<MainConsummer>
				{state => (
					<React.Fragment>
						<h.container>
                            {state.home.text.map((text, i) => {
                                if (text.match(this.regs.reg_url)) {
                                    const data = this.parseText(text)

                                    if (data.internal) {
                                        return <h.text delay={(i + 1) * 100} key={i}>{data.text_before}<Link to={data.url_link}>{data.url_text}</Link>{data.text_after}</h.text> 
                                    } else {
                                        return <h.text delay={(i + 1) * 100} key={i}>{data.text_before}<a target={'blank'} href={data.url_link}>{data.url_text}</a>{data.text_after}</h.text>
                                    }
                                } else {
                                    return <h.text delay={(i + 1) * 100} key={i}>{text}</h.text>
                                }
                            })}
						</h.container>
                        <BottomLinks/>
					</React.Fragment>
				)}
			</MainConsummer>
		)
	}
}



