import React, { Component } from 'react'
import axios from 'axios'
import * as cfg from '../config'

const MainContext = React.createContext('Main')
const MainConsummer = MainContext.Consumer

export default class MainProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: false,
            data: cfg
        }

        axios.get(cfg.API_URL).then(res => {
            this.setState({ error: false, data: res.data })
            console.log(this.state)
        }).catch(e => {
            console.error(e)
            this.setState({ error: true, data: cfg })
            console.log(this.state)
        })
    }

    render() {
        return (
            <MainContext.Provider value={this.state.data}>
                {this.props.children}
            </MainContext.Provider>
        )
    }
}

export {
    MainConsummer,
    MainProvider
}