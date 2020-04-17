import React, { Component } from 'react';
import axios from 'axios';

export const AppContext = React.createContext();

export default class AppProvider extends Component {
    state = {
        onlyCatchers: [],
        catchers: JSON.parse(localStorage.getItem('catchers')) || [],
        onlyFirstBase: [],
        firstBase: JSON.parse(localStorage.getItem('firstBase')) || [],
        onlySecondBase: [],
        secondBase: JSON.parse(localStorage.getItem('secondBase')) || [],
        onlyThirdBase: [],
        thirdBase: JSON.parse(localStorage.getItem('thirdBase')) || [],
        onlyShortStop: [],
        shortStop: JSON.parse(localStorage.getItem('shortStop')) || [],
        onlyOutfield: [],
        outfield: JSON.parse(localStorage.getItem('outfield')) || [],
        onlyDesignatedHitters: [],
        designatedHitters: JSON.parse(localStorage.getItem('designatedHitters')) || [],
        onlyStartingPitchers: [],
        startingPitchers: JSON.parse(localStorage.getItem('startingPitchers')) || [],
        onlyReliefPitchers: [],
        reliefPitchers: JSON.parse(localStorage.getItem('reliefPitchers')) || [],
    };

    render() {

        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    getOnlyCatchers: () => {
                        const endpoint = '/catchers';
                        axios
                            .get(endpoint)
                            .then(res => {
                                const catchers = res.data;
                                localStorage.setItem('catchers', JSON.stringify(catchers));
                                this.setState({
                                    catchers
                                });
                            })
                            .catch(err => {
                                console.log('error getting catchers', err)
                            });
                    },
                    getOnlyFirstBase: () => {
                        const endpoint = '/firstBase';
                        axios
                            .get(endpoint)
                            .then(res => {
                                const firstBase = res.data;
                                localStorage.setItem('firstBase', JSON.stringify(firstBase));
                                this.setState({
                                    firstBase
                                });
                            })
                            .catch(err => {
                                console.log('error getting firstBase', err)
                            });
                    },
                    getOnlySecondBase: () => {
                        const endpoint = '/secondBase';
                        axios
                            .get(endpoint)
                            .then(res => {
                                const secondBase = res.data;
                                localStorage.setItem('secondBase', JSON.stringify(secondBase));
                                this.setState({
                                    secondBase
                                });
                            })
                            .catch(err => {
                                console.log('error getting secondBase', err)
                            });
                    },
                    getOnlyThirdBase: () => {
                        const endpoint = '/thirdBase';
                        axios
                            .get(endpoint)
                            .then(res => {
                                const thirdBase = res.data;
                                localStorage.setItem('thirdBase', JSON.stringify(thirdBase));
                                this.setState({
                                    thirdBase
                                });
                            })
                            .catch(err => {
                                console.log('error getting thirdBase', err)
                            });
                    },
                    getOnlyShortStop: () => {
                        const endpoint = '/shortStop';
                        axios
                            .get(endpoint)
                            .then(res => {
                                const shortStop = res.data;
                                localStorage.setItem('shortStop', JSON.stringify(shortStop));
                                this.setState({
                                    shortStop
                                });
                            })
                            .catch(err => {
                                console.log('error getting shortStop', err)
                            });
                    },
                    getOnlyOutfield: () => {
                        const endpoint = '/outfield';
                        axios
                            .get(endpoint)
                            .then(res => {
                                const outfield = res.data;
                                localStorage.setItem('outfield', JSON.stringify(outfield));
                                this.setState({
                                    outfield
                                });
                            })
                            .catch(err => {
                                console.log('error getting outfield', err)
                            });
                    },
                    getOnlyDesignatedHitters: () => {
                        const endpoint = '/designatedHitter';
                        axios
                            .get(endpoint)
                            .then(res => {
                                const designatedHitters = res.data;
                                localStorage.setItem('designatedHitters', JSON.stringify(designatedHitters));
                                this.setState({
                                    designatedHitters
                                });
                            })
                            .catch(err => {
                                console.log('error getting designatedHitters', err)
                            });
                    },
                    getOnlyStartingPitchers: () => {
                        const endpoint = '/startingPitcher';
                        axios
                            .get(endpoint)
                            .then(res => {
                                const startingPitchers = res.data;
                                localStorage.setItem('startingPitchers', JSON.stringify(startingPitchers));
                                this.setState({
                                    startingPitchers
                                });
                            })
                            .catch(err => {
                                console.log('error getting startingPitchers', err)
                            });
                    },
                    getOnlyReliefPitchers: () => {
                        const endpoint = '/reliefPitcher';
                        axios
                            .get(endpoint)
                            .then(res => {
                                const reliefPitchers = res.data;
                                localStorage.setItem('reliefPitchers', JSON.stringify(reliefPitchers));
                                this.setState({
                                    reliefPitchers
                                });
                            })
                            .catch(err => {
                                console.log('error getting reliefPitchers', err)
                            });
                    },
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
