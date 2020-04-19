import React, { Component } from 'react';
import axios from 'axios';

export const AppContext = React.createContext();

export default class AppProvider extends Component {
    state = {
        catchers: [],
        firstBase: [],
        secondBase: [],
        shortStop: [],
        thirdBase: [],
        middleInfield: [],
        cornerInfield: [],
        outfield: [],
        designatedHitters: [],
        hitters: JSON.parse(localStorage.getItem('hitters')) || [],
        startingPitchers: [],
        reliefPitchers: [],
        pitchers: JSON.parse(localStorage.getItem('pitchers')) || [],
        allPlayers: JSON.parse(localStorage.getItem('allPlayers')) || [],
    };

    render() {

        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    getAllPlayers: () => {
                        const endpoint ='/overall';
                        axios
                            .get(endpoint)
                            .then(res => {
                                const allPlayers = res.data;
                                localStorage.setItem('allPlayers', JSON.stringify(allPlayers));
                                this.setState({
                                    allPlayers
                                })
                            })
                            .catch(err => {
                                console.log('error getting all players', err)
                            });
                    },
                    getHitters: () => {
                        let hitters = [];

                        this.state.allPlayers.forEach(player => {
                            if(player.otherPositions.includes('Catcher') || player.primaryPosition.includes('Catcher') || player.otherPositions.includes('First Base') || player.primaryPosition.includes('First Base') || player.otherPositions.includes('Second Base') || player.primaryPosition.includes('Second Base') || player.otherPositions.includes('Shortstop') || player.primaryPosition.includes('Shortstop') || player.otherPositions.includes('Third Base') || player.primaryPosition.includes('Third Base') || player.otherPositions.includes('Outfield') || player.primaryPosition.includes('Outfield') || player.otherPositions.includes('Designated Hitter') || player.primaryPosition.includes('Designated Hitter')) {
                                hitters = hitters.concat(player)
                            }
                        })

                        localStorage.setItem('hitters', JSON.stringify(hitters));
                        this.setState({
                            hitters
                        })
                    },
                    getPitchers: () => {
                        let pitchers = [];

                        this.state.allPlayers.forEach(player => {
                            if(player.otherPositions.includes('Starting Pitcher') || player.primaryPosition.includes('Starting Pitcher') || player.otherPositions.includes('Relief Pitcher') || player.primaryPosition.includes('Relief Pitcher')) {
                                pitchers = pitchers.concat(player)
                            }
                        })

                        localStorage.setItem('pitchers', JSON.stringify(pitchers));
                        this.setState({
                            pitchers
                        })
                    },
                    getCatchers: () => {
                        let catchers = [];

                        this.state.allPlayers.forEach(player => {
                            if (player.otherPositions.includes('Catcher') || player.primaryPosition.includes('Catcher')) {
                                catchers = catchers.concat(player)
                            }
                        })

                        this.setState({
                            catchers
                        });
                    },
                    getFirstBase: () => {
                        let firstBase = [];

                        this.state.allPlayers.forEach(player => {
                            if (player.otherPositions.includes('First Base') || player.primaryPosition.includes('First Base')) {
                                firstBase = firstBase.concat(player)
                            }
                        })

                        this.setState({
                            firstBase
                        });
                    },
                    getSecondBase: () => {
                        let secondBase = [];

                        this.state.allPlayers.forEach(player => {
                            if (player.otherPositions.includes('Second Base') || player.primaryPosition.includes('Second Base')) {
                                secondBase = secondBase.concat(player)
                            }
                        })

                        this.setState({
                            secondBase
                        });
                    },
                    getShortStop: () => {
                        let shortStop = [];

                        this.state.allPlayers.forEach(player => {
                            if (player.otherPositions.includes('Shortstop') || player.primaryPosition.includes('Shortstop')) {
                                shortStop = shortStop.concat(player)
                            }
                        })

                        this.setState({
                            shortStop
                        });
                    },
                    getThirdBase: () => {
                        let thirdBase = [];

                        this.state.allPlayers.forEach(player => {
                            if (player.otherPositions.includes('Third Base') || player.primaryPosition.includes('Third Base')) {
                                thirdBase = thirdBase.concat(player)
                            }
                        })

                        this.setState({
                            thirdBase
                        });
                    },

                    getMiddleInfield: () => {
                        let middleInfield = [];

                        this.state.allPlayers.forEach(player => {
                            if (player.otherPositions.includes('Second Base') || player.primaryPosition.includes('Second Base') || player.otherPositions.includes('Shortstop') || player.primaryPosition.includes('Shortstop')) {
                                middleInfield = middleInfield.concat(player)
                            }
                        })

                        this.setState({
                            middleInfield
                        });
                    },

                    getCornerInfield: () => {
                        let cornerInfield = [];

                        this.state.allPlayers.forEach(player => {
                            if (player.otherPositions.includes('First Base') || player.primaryPosition.includes('First Base') || player.otherPositions.includes('Third Base') || player.primaryPosition.includes('Third Base')) {
                                cornerInfield = cornerInfield.concat(player)
                            }
                        })

                        this.setState({
                            cornerInfield
                        });
                    },

                    getOutfield: () => {
                        let outfield = [];

                        this.state.allPlayers.forEach(player => {
                            if (player.otherPositions.includes('Outfield') || player.primaryPosition.includes('Outfield')) {
                                outfield = outfield.concat(player)
                            }
                        })

                        this.setState({
                            outfield
                        });
                    },
                    getDesignatedHitters: () => {
                        let designatedHitters = [];

                        this.state.allPlayers.forEach(player => {
                            if (player.otherPositions.includes('Designated Hitter') || player.primaryPosition.includes('Designated Hitter')) {
                                designatedHitters = designatedHitters.concat(player)
                            }
                        })

                        this.setState({
                            designatedHitters
                        });
                    },
                    getStartingPitchers: () => {
                        let startingPitchers = [];

                        this.state.allPlayers.forEach(player => {
                            if(player.otherPositions.includes('Starting Pitcher') || player.primaryPosition.includes('Starting Pitcher')) {
                                startingPitchers = startingPitchers.concat(player)
                            }
                        })

                        this.setState({
                            startingPitchers
                        })
                    },
                    getReliefPitchers: () => {
                        let reliefPitchers = [];

                        this.state.allPlayers.forEach(player => {
                            if(player.otherPositions.includes('Relief Pitcher') || player.primaryPosition.includes('Relief Pitcher')) {
                                reliefPitchers = reliefPitchers.concat(player)
                            }
                        })

                        this.setState({
                            reliefPitchers
                        })
                    },
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
