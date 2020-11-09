import React, { Component } from 'react'
import axios from 'axios'
import * as cfg from '../config'

const MainContext = React.createContext('Main')
const MainConsummer = MainContext.Consumer

export default class MainProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            willBeLoaded: false,
            loaded: false,
            error: false,
            data: cfg
        }      
    }

    componentDidMount() {
        this.getDataFromApi()
    }

    getDataFromApi() {
        // TODO: make images lazy load

        axios.get(cfg.API_URL).then(res => {
            this.setState({
                willBeLoaded: true,
                error: false,
                data: res.data
            })
            setTimeout(() => {
                this.setState({
                    loaded: true
                })
            }, 800)
            console.log('api data', this.state)
        }).catch(e => {
            this.setState({
                willBeLoaded: true,
                error: true,
                data: cfg.home
            })
            setTimeout(() => {
                this.setState({
                    loaded: true
                })
            }, 800)
            console.log('backup data', this.state)
        })        
    }

    render() {
        return (
            <MainContext.Provider value={this.state}>
                {this.props.children}
            </MainContext.Provider>
        )
    }
}

export {
    MainConsummer,
    MainProvider
}