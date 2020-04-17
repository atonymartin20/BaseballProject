import React, { Component } from 'react';
import axios from 'axios';

export const AppContext = React.createContext();

export default class AppProvider extends Component {
    state = {
        primaryCatchers: [],
        catchers: JSON.parse(localStorage.getItem('catchers')) || [],
        primaryFirstBase: [],
        firstBase: JSON.parse(localStorage.getItem('firstBase')) || [],
        primarySecondBase: [],
        secondBase: JSON.parse(localStorage.getItem('secondBase')) || [],
        primaryThirdBase: [],
        thirdBase: JSON.parse(localStorage.getItem('thirdBase')) || [],
        primaryShortStop: [],
        shortStop: JSON.parse(localStorage.getItem('shortStop')) || [],
        primaryOutfield: [],
        outfield: JSON.parse(localStorage.getItem('outfield')) || [],
        primaryDesignatedHitters: [],
        designatedHitters: JSON.parse(localStorage.getItem('designatedHitters')) || [],
        primaryStartingPitchers: [],
        startingPitchers: JSON.parse(localStorage.getItem('startingPitchers')) || [],
        primaryReliefPitchers: [],
        reliefPitchers: JSON.parse(localStorage.getItem('reliefPitchers')) || [],
        hitters: JSON.parse(localStorage.getItem('hitters')) || [],
        pitchers: JSON.parse(localStorage.getItem('pitchers')) || [],
        allPlayers: JSON.parse(localStorage.getItem('allPlayers')) || [],
    };

    render() {

        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    getPrimaryCatchers: () => {
                        const endpoint = '/catchers';
                        axios
                            .get(endpoint)
                            .then(res => {
                                const primaryCatchers = res.data;
                                // localStorage.setItem('catchers', JSON.stringify(catchers));
                                this.setState({
                                    primaryCatchers
                                });
                            })
                            .catch(err => {
                                console.log('error getting catchers', err)
                            });
                    },
                    getPrimaryFirstBase: () => {
                        const endpoint = '/firstBase';
                        axios
                            .get(endpoint)
                            .then(res => {
                                const primaryFirstBase = res.data;
                                // localStorage.setItem('firstBase', JSON.stringify(firstBase));
                                this.setState({
                                    primaryFirstBase
                                });
                            })
                            .catch(err => {
                                console.log('error getting firstBase', err)
                            });
                    },
                    getPrimarySecondBase: () => {
                        const endpoint = '/secondBase';
                        axios
                            .get(endpoint)
                            .then(res => {
                                const primarySecondBase = res.data;
                                // localStorage.setItem('secondBase', JSON.stringify(secondBase));
                                this.setState({
                                    primarySecondBase
                                });
                            })
                            .catch(err => {
                                console.log('error getting secondBase', err)
                            });
                    },
                    getPrimaryThirdBase: () => {
                        const endpoint = '/thirdBase';
                        axios
                            .get(endpoint)
                            .then(res => {
                                const primaryThirdBase = res.data;
                                // localStorage.setItem('thirdBase', JSON.stringify(thirdBase));
                                this.setState({
                                    primaryThirdBase
                                });
                            })
                            .catch(err => {
                                console.log('error getting thirdBase', err)
                            });
                    },
                    getPrimaryShortStop: () => {
                        const endpoint = '/shortStop';
                        axios
                            .get(endpoint)
                            .then(res => {
                                const primaryShortStop = res.data;
                                // localStorage.setItem('shortStop', JSON.stringify(shortStop));
                                this.setState({
                                    primaryShortStop
                                });
                            })
                            .catch(err => {
                                console.log('error getting shortStop', err)
                            });
                    },
                    getPrimaryOutfield: () => {
                        const endpoint = '/outfield';
                        axios
                            .get(endpoint)
                            .then(res => {
                                const primaryOutfield = res.data;
                                // localStorage.setItem('outfield', JSON.stringify(outfield));
                                this.setState({
                                    primaryOutfield
                                });
                            })
                            .catch(err => {
                                console.log('error getting outfield', err)
                            });
                    },
                    getPrimaryDesignatedHitters: () => {
                        const endpoint = '/designatedHitter';
                        axios
                            .get(endpoint)
                            .then(res => {
                                const primaryDesignatedHitters = res.data;
                                // localStorage.setItem('designatedHitters', JSON.stringify(designatedHitters));
                                this.setState({
                                    primaryDesignatedHitters
                                });
                            })
                            .catch(err => {
                                console.log('error getting designatedHitters', err)
                            });
                    },
                    getPrimaryStartingPitchers: () => {
                        const endpoint = '/startingPitcher';
                        axios
                            .get(endpoint)
                            .then(res => {
                                const primaryStartingPitchers = res.data;
                                // localStorage.setItem('startingPitchers', JSON.stringify(startingPitchers));
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
                                // localStorage.setItem('reliefPitchers', JSON.stringify(reliefPitchers));
                                this.setState({
                                    primaryReliefPitchers
                                });
                            })
                            .catch(err => {
                                console.log('error getting reliefPitchers', err)
                            });
                    },
                    getHitters: () => {
                        const hitters = []
                        console.log(hitters)
                        hitters.concat(this.state.primaryCatchers)
                        console.log(hitters)
                        hitters.concat(this.state.primaryFirstBase)
                        console.log(hitters)
                        hitters.concat(this.state.primarySecondBase)
                        console.log(hitters)
                        hitters.concat(this.state.getPrimaryShortStop)
                        console.log(hitters)
                        hitters.concat(this.state.getPrimaryThirdBase)
                        console.log(hitters)
                        hitters.concat(this.state.getPrimaryOutfield)
                        console.log(hitters)
                        hitters.concat(this.state.getPrimaryDesignatedHitters)
                        console.log(hitters)
                        localStorage.setItem('hitters', JSON.stringify(hitters));
                        this.setState({
                            hitters
                        });
                    },
                    getAllCatchers: () => {
                        catchers = this.state.primaryCatchers;
                        this.state.primaryFirstBase.forEach(player, index) {
                            console.log(player)
                        }
                    }
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
