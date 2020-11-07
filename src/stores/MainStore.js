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
        axios.get(cfg.API_URL).then(res => {
            this.setState({ error: false, data: res.data })
            console.log('api data', this.state)
        }).catch(e => {
            this.setState({ error: true, data: cfg })
            console.log('backup data', this.state)
        })


        // TODO: replace with real loading
        setTimeout(() => {
            console.log('hello');
            this.setState({
                willBeLoaded: true
            })
        }, 2000)
        setTimeout(() => {
            this.setState({
                loaded: true
            })
        }, 2800)
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