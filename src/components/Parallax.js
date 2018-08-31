import React, { Component } from 'react'
import { parallax } from '../styles/index'

export default class Parallax extends Component {
    constructor(props) {
        super(props)
        this.state = {
            txtConsts: {
                angle: 1,
                offset: 3,
                gravityPoint: 0.2,
                spread: 100
            },
            bgConsts: {
                angle: 0,
                offset: 2,
                gravityPoint: 0.5,
                spread: -50
            },
            txtCoords: '',
            bgCoords: ''
        }
    }

    updatePosition(Y, X) {
        const body = document.getElementsByTagName('body')[0]
        const tconsts = this.state.txtConsts
        const bgconsts = this.state.bgConsts
        
        this.setState({
            ...this.state,
            txtCoords: `
                rotate3d(
                    ${(((Y/body.clientHeight)-tconsts.gravityPoint)*-1)/tconsts.offset},
                    ${((X/body.clientWidth)-tconsts.gravityPoint)/(tconsts.offset*2)},
                    ${(
                        (((Y/body.clientHeight)-tconsts.gravityPoint)*-1) + 
                        ((X/body.clientWidth)-tconsts.gravityPoint))
                    /(tconsts.offset*8)},
                    ${tconsts.angle}deg
                )
                translate(
                    ${(((X/body.clientWidth)-tconsts.gravityPoint)/tconsts.offset)*tconsts.spread}px,
                    ${(((Y/body.clientHeight)-tconsts.gravityPoint)/tconsts.offset)*tconsts.spread}px
                )
            `,
            bgCoords: `
                rotate3d(
                    ${(((Y/body.clientHeight)-bgconsts.gravityPoint)*-1)/bgconsts.offset},
                    ${((X/body.clientWidth)-bgconsts.gravityPoint)/(bgconsts.offset*2)},
                    ${(
                        (((Y/body.clientHeight)-bgconsts.gravityPoint)*-1) + 
                        ((X/body.clientWidth)-bgconsts.gravityPoint))
                    /(bgconsts.offset*8)},
                    ${bgconsts.angle}deg
                )
                translate(
                    ${(((X/body.clientWidth)-bgconsts.gravityPoint)/bgconsts.offset)*bgconsts.spread}px,
                    ${(((Y/body.clientHeight)-bgconsts.gravityPoint)/bgconsts.offset)*bgconsts.spread}px
                )
            `,
            transition: 'all 0.2s ease-out'
        })
    }
        
    handleMouse(e) {
        this.updatePosition(e.clientY, e.clientX)
    }

    reset() {
        const body = document.getElementsByTagName('body')[0]
        this.updatePosition(body.clientHeight/2, body.clientWidth/2)
    }

    componentDidMount() {
        const body = document.getElementsByTagName('body')[0]
        body.addEventListener("mousemove", e => this.handleMouse(e));
        body.addEventListener("mouseleave", () => this.reset());
    }

    render() {
        return (
            <parallax.container>
                <parallax.content style={{
                    transform: this.state.txtCoords,
                    transition: this.state.transition
                }}>
                {this.props.children}</parallax.content>

                <parallax.starbg style={{
                    transform: this.state.bgCoords,
                    transition: this.state.transition
                }}></parallax.starbg>
            </parallax.container>
        )
    }
}
