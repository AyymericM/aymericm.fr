import React, { Component } from 'react'
import axios from 'axios'
import { withRouter, matchPath } from 'react-router-dom'
import * as cfg from 'config'

const MainContext = React.createContext('Main')
const MainConsummer = MainContext.Consumer

class MainProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ui: {
                willBeLoaded: false,
                firstLoad: true,
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

    containsProject(hash) {
        for (let i = 0; i < this.state.data.projects.length; i++) {
            const element = this.state.data.projects[i]

            if (element.hash == hash) {
                return true
            }
        }

        return false
    }
    
    checkForParams() {
        const match = matchPath(this.props.history.location.pathname, {
            path: '/projects/:slug',
            exact: true,
            strict: false
        })

        if (match) {
            if(match.params.slug) {
                if (this.containsProject(match.params.slug)) {
                    this.setActiveProject(match.params.slug)
                } else {
                    this.setActiveProject(-1)
                    this.props.history.push('/projects')
                }
            } else {
                this.setActiveProject(-1)
            }
        } else {
            this.setActiveProject(-1)
        }
    }

    componentDidMount() {
        this.getDataFromApi()

        this.props.history.listen(() => {
            this.checkForParams()
        })
    }

    showUi() {
        this.setState({
            ui: {
                ...this.state.ui,
                willBeLoaded: true,
                firstLoad: this.state.ui.projects.activeProject == -1 ? false : true
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

        axios.get(`${cfg.API_URL}/data`).then(res => {
            this.setState({
                error: false,
                data: res.data
            })

            this.checkForParams()
            this.showUi()
            
            console.log('online')
        }).catch(e => {
            this.setState({
                error: true,
                data: cfg.home
            })
            
            this.checkForParams()
            this.showUi()
            console.log('offline')
        })
    }

    setActiveProject(i) {
        if (i !== this.state.ui.projects.activeProject) {
            if (i == -1) {
                this.setState({
                    ui: {
                        ...this.state.ui,
                        firstLoad: false,
                        projects: {
                            ...this.state.ui.projects,
                            expandActive: false,
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
                if (!this.state.ui.projects.expandActive) {     
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
    }

    render() {
        return (
            <MainContext.Provider value={{state: this.state, actions: this.actions}}>
                {this.props.children}
            </MainContext.Provider>
        )
    }
}

export default withRouter(MainProvider)

export {
    MainConsummer
}