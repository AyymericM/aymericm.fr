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
                    showContent: false,
                    activeProject: -1,
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
            setActiveProject: this.setActiveProject.bind(this),
            refreshRef: this.refreshRef.bind(this)
        }
    }

    componentDidMount() {
        this.getDataFromApi()

        this.props.history.listen(() => {
            this.checkForParams()
        })

        console.log(this.state.data)
    }

    refreshRef(pos) {
        console.log('POS DATA: ', pos)
        this.setState({
            ui: {
                ...this.state.ui,
                projects: {
                    ...this.state.ui.projects,
                    elPos: {
                        ...pos,
                        init: true
                    }
                }
            }
        })

        console.log('EL POS (RR):', this.state.ui.projects.elPos)
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

        axios.get(`${window.env.API_URL}/data`).then(res => {
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
                        firstLoad: false,
                        activeProjectData: {},
                        projects: {
                            ...this.state.ui.projects,
                            showContent: false,
                        }
                    }
                })
                setTimeout(() => {
                    this.props.history.push(`/projects`)
                }, 500);
                setTimeout(() => {
                    this.setState({
                        ui: {
                            ...this.state.ui,
                            projects: {
                                ...this.state.ui.projects,
                                expandActive: false,
                            }
                        }
                    })
                }, 1050);
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
                }, 1400);
            } else { // Project selected
                if (!this.state.ui.projects.expandActive) {
                    this.setState({
                        ui: {
                            ...this.state.ui,
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
                                    expandActive: true
                                }
                            }
                        })
                    }, 450);
                    setTimeout(() => {
                        this.props.history.push(`/projects/${i}`)
                        this.setState({
                            ui: {
                                ...this.state.ui,
                                projects: {
                                    ...this.state.ui.projects,
                                    showContent: true
                                }
                            }
                        })
                    }, 1200);
                }
            }
        }
        console.log('FIRST LOAD:', this.state.ui.firstLoad)
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