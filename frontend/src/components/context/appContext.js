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
        hitters: [],
        startingPitchers: [],
        reliefPitchers: [],
        pitchers: [],
        overall: [],
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
                                const overall = res.data;
                                console.log('Overall players set')
                                this.setState({
                                    overall
                                })
                            })
                            .catch(err => {
                                console.log('error getting all players', err)
                            });
                    },
                    getHitters: () => {
                        let hitters = [];

                        this.state.overall.forEach(player => {
                            if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                hitters = hitters.concat(player)
                            }
                        })
                        if(hitters !== []) {
                            console.log('Hitters acquired')
                        }
                        this.setState({
                            hitters
                        })
                    },
                    getPitchers: () => {
                        let pitchers = [];

                        this.state.overall.forEach(player => {
                            if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                pitchers = pitchers.concat(player)
                            }
                        })
                        if(pitchers !== []) {
                            console.log('Pitchers acquired')
                        }
                        this.setState({
                            pitchers
                        })
                    },
                    getCatchers: () => {
                        let catchers = [];

                        this.state.overall.forEach(player => {
                            if (player.otherPositions.includes('C') || player.primaryPosition.includes('C')) {
                                catchers = catchers.concat(player)
                            }
                        })
                        if(catchers !== []) {
                            console.log('Catchers acquired')
                        }
                        this.setState({
                            catchers
                        });
                    },
                    getFirstBase: () => {
                        let firstBase = [];

                        this.state.overall.forEach(player => {
                            if (player.otherPositions.includes('1B') || player.primaryPosition.includes('1B')) {
                                firstBase = firstBase.concat(player)
                            }
                        })
                        if(firstBase !== []) {
                            console.log('1B acquired')
                        }
                        this.setState({
                            firstBase
                        });
                    },
                    getSecondBase: () => {
                        let secondBase = [];

                        this.state.overall.forEach(player => {
                            if (player.otherPositions.includes('2B') || player.primaryPosition.includes('2B')) {
                                secondBase = secondBase.concat(player)
                            }
                        })
                        if(secondBase !== []) {
                            console.log('2B acquired')
                        }
                        this.setState({
                            secondBase
                        });
                    },
                    getShortStop: () => {
                        let shortStop = [];

                        this.state.overall.forEach(player => {
                            if (player.otherPositions.includes('SS') || player.primaryPosition.includes('SS')) {
                                shortStop = shortStop.concat(player)
                            }
                        })
                        if(shortStop !== []) {
                            console.log('Shortstops acquired')
                        }
                        this.setState({
                            shortStop
                        });
                    },
                    getThirdBase: () => {
                        let thirdBase = [];

                        this.state.overall.forEach(player => {
                            if (player.otherPositions.includes('3B') || player.primaryPosition.includes('3B')) {
                                thirdBase = thirdBase.concat(player)
                            }
                        })
                        if(thirdBase !== []) {
                            console.log('3B acquired')
                        }
                        this.setState({
                            thirdBase
                        });
                    },

                    getMiddleInfield: () => {
                        let middleInfield = [];

                        this.state.overall.forEach(player => {
                            if (player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS')) {
                                middleInfield = middleInfield.concat(player)
                            }
                        })
                        if(middleInfield !== []) {
                            console.log('Middle Infielders acquired')
                        }
                        this.setState({
                            middleInfield
                        });
                    },

                    getCornerInfield: () => {
                        let cornerInfield = [];

                        this.state.overall.forEach(player => {
                            if (player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B')) {
                                cornerInfield = cornerInfield.concat(player)
                            }
                        })
                        if(cornerInfield !== []) {
                            console.log('Corner Infielders acquired')
                        }
                        this.setState({
                            cornerInfield
                        });
                    },

                    getOutfield: () => {
                        let outfield = [];

                        this.state.overall.forEach(player => {
                            if (player.otherPositions.includes('OF') || player.primaryPosition.includes('OF')) {
                                outfield = outfield.concat(player)
                            }
                        })
                        if(outfield !== []) {
                            console.log('Outfielders acquired')
                        }
                        this.setState({
                            outfield
                        });
                    },
                    getDesignatedHitters: () => {
                        let designatedHitters = [];

                        this.state.overall.forEach(player => {
                            if (player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                designatedHitters = designatedHitters.concat(player)
                            }
                        })
                        if(designatedHitters !== []) {
                            console.log('DHs acquired')
                        }
                        this.setState({
                            designatedHitters
                        });
                    },
                    getStartingPitchers: () => {
                        let startingPitchers = [];

                        this.state.overall.forEach(player => {
                            if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP')) {
                                startingPitchers = startingPitchers.concat(player)
                            }
                        })
                        if(startingPitchers !== []) {
                            console.log('Starting Pitchers acquired')
                        }
                        this.setState({
                            startingPitchers
                        })
                    },
                    getReliefPitchers: () => {
                        let reliefPitchers = [];

                        this.state.overall.forEach(player => {
                            if(player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                reliefPitchers = reliefPitchers.concat(player)
                            }
                        })
                        if(reliefPitchers !== []) {
                            console.log('Relief Pitchers acquired')
                        }
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
