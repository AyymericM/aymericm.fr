import React, { Component } from 'react'
import axios from 'axios'
import * as cfg from '../config'

const MainContext = React.createContext('Main')
const MainConsummer = MainContext.Consumer

export default class MainProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ui: {
                willBeLoaded: false,
                loaded: false,
                projects: {
                    hideMozaic: false,
                    expandActive: false,
                    activeProject: -1
                }
            },
            error: false,
            data: cfg
        }

        this.actions = {
            setActiveProject: this.setActiveProject.bind(this)
        }
    }

    componentDidMount() {
        this.getDataFromApi()
    }

    showUi() {
        this.setState({
            ui: {
                ...this.state.ui,
                willBeLoaded: true
            }
        })
        setTimeout(() => {
            this.setState({
                ui: {
                    ...this.state.ui,
                    loaded: true
                }
            })
        }, 800)
    }

    getDataFromApi() {
        // TODO: make images lazy load

        axios.get(cfg.API_URL).then(res => {
            this.setState({
                error: false,
                data: res.data
            })

            this.showUi()
            
            console.log('api data', this.state)
        }).catch(e => {
            this.setState({
                error: true,
                data: cfg.home
            })
            
            this.showUi()
            console.log('backup data', this.state)
        })
    }

    setActiveProject(i) {
        if (i !== this.state.ui.projects.activeProject) {
            if (i == -1) {
                this.setState({
                    ui: {
                        ...this.state.ui,
                        projects: {
                            ...this.state.ui.projects,
                            expandActive: false
                        }
                    }
                })
                setTimeout(() => {
                    this.setState({
                        ui: {
                            ...this.state.ui,
                            projects: {
                                ...this.state.ui.projects,
                                activeProject: i,
                                hideMozaic: false
                            }
                        }
                    })
                }, 325);
            } else {
                this.setState({
                    ui: {
                        ...this.state.ui,
                        projects: {
                            ...this.state.ui.projects,
                            hideMozaic: true,
                            activeProject: i
                        }
                    }
                })
                setTimeout(() => {
                    this.setState({
                        ui: {
                            ...this.state.ui,
                            projects: {
                                ...this.state.ui.projects,
                                expandActive: true
                            }
                        }
                    })
                }, 450);
            }
        }
    }

    render() {
        return (
            <MainContext.Provider value={{state: this.state, actions: this.actions}}>
                {this.props.children}
            </MainContext.Provider>
        )
    }
}

export {
    MainConsummer,
    MainProvider
}