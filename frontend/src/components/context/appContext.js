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
        primaryStartingPitchers: JSON.parse(localStorage.getItem('primaryStartingPitchers')) || [],
        startingPitchers: JSON.parse(localStorage.getItem('startingPitchers')) || [],
        primaryReliefPitchers: JSON.parse(localStorage.getItem('primaryReliefPitchers')) || [],
        reliefPitchers: JSON.parse(localStorage.getItem('reliefPitchers')) || [],
        pitchers: JSON.parse(localStorage.getItem('pitchers')) || [],
        allPlayers: JSON.parse(localStorage.getItem('allPlayers')) || [],
    };

    render() {

        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    getPrimaryStartingPitchers: () => {
                        const endpoint = '/startingPitcher';
                        axios
                            .get(endpoint)
                            .then(res => {
                                const primaryStartingPitchers = res.data;
                                localStorage.setItem('primaryStartingPitchers', JSON.stringify(primaryStartingPitchers));
                                this.setState({
                                    primaryStartingPitchers
                                });
                            })
                            .catch(err => {
                                console.log('error getting startingPitchers', err)
                            });
                    },
                    getPrimaryReliefPitchers: () => {
                        const endpoint = '/reliefPitcher';
                        axios
                            .get(endpoint)
                            .then(res => {
                                const primaryReliefPitchers = res.data;
                                localStorage.setItem('primaryReliefPitchers', JSON.stringify(primaryReliefPitchers));
                                this.setState({
                                    primaryReliefPitchers
                                });
                            })
                            .catch(err => {
                                console.log('error getting reliefPitchers', err)
                            });
                    },
                    getHitters: () => {
                        const endpoint = '/hitters';
                        axios
                            .get(endpoint)
                            .then(res => {
                                const hitters = res.data;
                                localStorage.setItem('hitters', JSON.stringify(hitters));
                                this.setState({
                                    hitters
                                });
                            })
                            .catch(err => {
                                console.log('error getting hitters', err)
                            });
                    },
                    getCatchers: () => {
                        let catchers = [];

                        this.state.hitters.forEach(player => {
                            if (player.otherPositions.includes('Catcher') || player.primaryPosition.includes('Catcher')) {
                                catchers = catchers.concat(player)
                            }
                        })
                        console.log(`Catchers: ${catchers}`)
                        this.setState({
                            catchers
                        });
                    },
                    getFirstBase: () => {
                        let firstBase = [];

                        this.state.hitters.forEach(player => {
                            if (player.otherPositions.includes('First Base') || player.primaryPosition.includes('First Base')) {
                                firstBase = firstBase.concat(player)
                            }
                        })
                        console.log(`First Base: ${firstBase}`)
                        this.setState({
                            firstBase
                        });
                    },
                    getSecondBase: () => {
                        let secondBase = [];

                        this.state.hitters.forEach(player => {
                            if (player.otherPositions.includes('Second Base') || player.primaryPosition.includes('Second Base')) {
                                secondBase = secondBase.concat(player)
                            }
                        })
                        console.log(`Second Base: ${secondBase}`)
                        this.setState({
                            secondBase
                        });
                    },
                    getShortStop: () => {
                        let shortStop = [];

                        this.state.hitters.forEach(player => {
                            if (player.otherPositions.includes('Shortstop') || player.primaryPosition.includes('Shortstop')) {
                                shortStop = shortStop.concat(player)
                            }
                        })
                        console.log(`Shortstop: ${shortStop}`)
                        this.setState({
                            shortStop
                        });
                    },
                    getThirdBase: () => {
                        let thirdBase = [];

                        this.state.hitters.forEach(player => {
                            if (player.otherPositions.includes('Third Base') || player.primaryPosition.includes('Third Base')) {
                                thirdBase = thirdBase.concat(player)
                            }
                        })
                        console.log(`Third Base:${thirdBase}`)
                        this.setState({
                            thirdBase
                        });
                    },

                    getMiddleInfield: () => {
                        let middleInfield = [];

                        this.state.hitters.forEach(player => {
                            if (player.otherPositions.includes('Second Base') || player.primaryPosition.includes('Second Base') || player.otherPositions.includes('Shortstop') || player.primaryPosition.includes('Shortstop')) {
                                middleInfield = middleInfield.concat(player)
                            }
                        })
                        console.log(`Middle Infield: ${middleInfield}`)
                        this.setState({
                            middleInfield
                        });
                    },

                    getCornerInfield: () => {
                        let cornerInfield = [];

                        this.state.hitters.forEach(player => {
                            if (player.otherPositions.includes('First Base') || player.primaryPosition.includes('First Base') || player.otherPositions.includes('Third Base') || player.primaryPosition.includes('Third Base')) {
                                cornerInfield = cornerInfield.concat(player)
                            }
                        })
                        console.log(`Corner Infield: ${cornerInfield}`)
                        this.setState({
                            cornerInfield
                        });
                    },

                    getOutfield: () => {
                        let outfield = [];

                        this.state.hitters.forEach(player => {
                            if (player.otherPositions.includes('Outfield') || player.primaryPosition.includes('Outfield')) {
                                outfield = outfield.concat(player)
                            }
                        })
                        console.log(`Outfield: ${outfield}`)
                        this.setState({
                            outfield
                        });
                    },
                    getDesignatedHitters: () => {
                        let designatedHitters = [];

                        this.state.hitters.forEach(player => {
                            if (player.otherPositions.includes('Designated Hitter') || player.primaryPosition.includes('Designated Hitter')) {
                                designatedHitters = designatedHitters.concat(player)
                            }
                        })
                        console.log(`Designated Hitters: ${designatedHitters}`)
                        this.setState({
                            designatedHitters
                        });
                    },
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
