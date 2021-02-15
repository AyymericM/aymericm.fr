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
                loaded: false,
                canInteract: false,
                projects: {
                    hideMozaic: false,
                    showContent: false,
                    activeProject: -1,
                    showLoader: false,
                    activeProjectData: -1,
                    elPos: {
                        init: false,
                        top: 0,
                        left: 0,
                        relTop: 0,
                        relLeft: 0
                    }
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
                    console.log('CFP 1');
                } else {
                    this.setActiveProject(-1)
                    this.props.history.push('/projects')
                    console.log('CFP 2');
                }
            } else {
                this.setActiveProject(-1)
                console.log('CFP 3');
            }
        } else {
            this.setActiveProject(-1)
            console.log('CFP 4');
        }
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
                    loaded: true,
                    canInteract: true
                }
            })
        }, 500)
    }

    getDataFromApi() {
        // TODO: make images lazy load

        axios.get(`${process.env.REACT_APP_API_URL}/data`).then(res => {
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
            if (i == -1) { // No project selected
                this.setState({
                    ui: {
                        ...this.state.ui,
                        canInteract: false,
                        projects: {
                            ...this.state.ui.projects,
                            showContent: false,
                        }
                    }
                })
                setTimeout(() => {
                    this.setState({
                        ui: {
                            ...this.state.ui,
                            projects: {
                                ...this.state.ui.projects,
                                showLoader: true,
                            }
                        }
                    })
                }, 500);
                setTimeout(() => {
                    this.props.history.push(`/projects`)
                }, 800);
                setTimeout(() => {
                    this.setState({
                        ui: {
                            ...this.state.ui,
                            projects: {
                                ...this.state.ui.projects,
                                showLoader: false,
                            }
                        }
                    })
                }, 1500);
                setTimeout(() => {
                    this.setState({
                        ui: {
                            ...this.state.ui,
                            canInteract: true,
                            projects: {
                                ...this.state.ui.projects,
                                activeProject: -1,
                                hideMozaic: false,
                                activeProjectData: -1
                            }
                        }
                    })
                }, 2000);
                console.log('1')
            } else { // Project selected
                this.setState({
                    ui: {
                        ...this.state.ui,
                        canInteract: false,
                        projects: {
                            ...this.state.ui.projects,
                            hideMozaic: true,
                            activeProject: i,
                            activeProjectData: this.state.data.projects.filter(project => project.hash == i)[0]
                        }
                    }
                })
                setTimeout(() => {
                    this.setState({
                        ui: {
                            ...this.state.ui,
                            projects: {
                                ...this.state.ui.projects,
                                showLoader: true,
                            }
                        }
                    })
                }, 500);
                setTimeout(() => {
                    this.props.history.push(`/projects/${i}`)
                }, 800);
                setTimeout(() => {
                    this.setState({
                        ui: {
                            ...this.state.ui,
                            projects: {
                                ...this.state.ui.projects,
                                showLoader: false,
                            }
                        }
                    })
                }, 1500);
                setTimeout(() => {
                    this.setState({
                        ui: {
                            ...this.state.ui,
                            canInteract: true,
                            projects: {
                                ...this.state.ui.projects,
                                showContent: true
                            }
                        }
                    })
                }, 1500);
                console.log('2')
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