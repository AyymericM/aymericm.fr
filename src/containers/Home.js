import React, { Component } from 'react'
import MetaTags from 'react-meta-tags'
import { home as h, texts as t } from 'styles'
import { withRouter } from 'react-router-dom'
import { BottomLinks } from 'components'
import { MainConsummer } from 'stores'

class Home extends Component {
    constructor() {
        super()

        this.state = {
            willRedirect: false
        }

        this.regs = {
            reg_url: /(?<=\[URL=")(.*?)(?="\])/,
            reg_txt: /(?<=\])(.*?)(?=\[)/,
            reg_txt_before: /^.*(?=(\[URL=))/,
            reg_txt_after: /(?<=\[\/URL]).*/
        }

        this.parseText = this.parseText.bind(this)
        this.redirect = this.redirect.bind(this)
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

    redirect(redirect, length = 1) {
        this.setState({ willRedirect: true })

        setTimeout(() => {
            console.log(redirect)
            this.props.history.push(redirect)
        }, length * 100)
    }

	render() {
		return (
			<MainConsummer>
				{({state}) => (
                    !state.ui.loaded ?
                        <t.loadScreen willBeLoaded={state.ui.willBeLoaded}>Loading :)</t.loadScreen>
                    :
                        <React.Fragment>
                            <MetaTags>
                                <title>Aymeric Moehn - Creative developper and freelance</title>
                                <meta name="description" content="Hello I'm Aymeric Moehn, a creative web developper and freelance based on Paris !"/>

                                <meta property="og:title" content="Aymeric Moehn - Creative developper and freelance"/>
                                <meta property="og:description" content="Hello I'm Aymeric Moehn, a creative web developper and freelance based on Paris !"/>
                                <meta property="og:image" content="https://aymericm.fr/images/SEO/og-image.png"/>

                                <meta name="twitter:title" content="Aymeric Moehn - Creative developper and freelance"/>
                                <meta name="twitter:description" content="Hello I'm Aymeric Moehn, a creative web developper and freelance based on Paris !"/>
                                <meta name="twitter:image" content="https://aymericm.fr/images/SEO/twitter-image.png"/>
                            </MetaTags>
                            <h.container isHome={true}>
                                {state.data.text.map((text, i) => {
                                    if (text.match(this.regs.reg_url)) {
                                        const data = this.parseText(text)

                                        if (data.internal) {
                                            return <t.main willRedirect={this.state.willRedirect} delay={i * 100} key={i}>{data.text_before}<a onClick={() => this.redirect(data.url_link, state.data.text.length + 1)}>{data.url_text}</a>{data.text_after}</t.main> 
                                        } else {
                                            return <t.main willRedirect={this.state.willRedirect} delay={i * 100} key={i}>{data.text_before}<a target={'blank'} href={data.url_link}>{data.url_text}</a>{data.text_after}</t.main>
                                        }
                                    } else {
                                        return <t.main willRedirect={this.state.willRedirect} delay={i * 100} key={i}>{text}</t.main>
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

export default withRouter(Home)