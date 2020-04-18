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
                        let catchers = this.state.primaryCatchers;

                        this.state.primaryFirstBase.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Catcher')) {
                                console.log('Yes', player.id)
                                catchers.concat(player)
                            }
                        })

                        this.state.primarySecondBase.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Catcher')) {
                                console.log('Yes', player.id)
                                catchers.concat(player)
                            }
                        })

                        this.state.primaryShortStop.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Catcher')) {
                                console.log('Yes', player.id)
                                catchers.concat(player)
                            }
                        })

                        this.state.primaryThirdBase.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Catcher')) {
                                console.log('Yes', player.id)
                                catchers.concat(player)
                            }
                        })

                        this.state.primaryOutfield.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Catcher')) {
                                console.log('Yes', player.id)
                                catchers.concat(player)
                            }
                        })
                        this.state.primaryDesignatedHitters.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Catcher')) {
                                console.log('Yes', player.id)
                                catchers.concat(player)
                            }
                        })
                        localStorage.setItem('catchers', JSON.stringify(catchers));
                        this.setState({
                            catchers
                        });
                    },
                    getAllFirstBase: () => {
                        let firstBase = this.state.primaryFirstBase;

                        this.state.primaryCatchers.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('First Base')) {
                                console.log('Yes', player.id)
                                firstBase.concat(player)
                            }
                        })

                        this.state.primarySecondBase.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('First Base')) {
                                console.log('Yes', player.id)
                                firstBase.concat(player)
                            }
                        })

                        this.state.primaryShortStop.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('First Base')) {
                                console.log('Yes', player.id)
                                firstBase.concat(player)
                            }
                        })

                        this.state.primaryThirdBase.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('First Base')) {
                                console.log('Yes', player.id)
                                firstBase.concat(player)
                            }
                        })

                        this.state.primaryOutfield.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('First Base')) {
                                console.log('Yes', player.id)
                                firstBase.concat(player)
                            }
                        })
                        this.state.primaryDesignatedHitters.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('First Base')) {
                                console.log('Yes', player.id)
                                firstBase.concat(player)
                            }
                        })
                        localStorage.setItem('firstBase', JSON.stringify(firstBase));
                        this.setState({
                            firstBase
                        });
                    },
                    getAllSecondBase: () => {
                        let secondBase = this.state.primarySecondBase;

                        this.state.primaryCatchers.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Second Base')) {
                                console.log('Yes', player.id)
                                secondBase.concat(player)
                            }
                        })

                        this.state.primaryFirstBase.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Second Base')) {
                                console.log('Yes', player.id)
                                secondBase.concat(player)
                            }
                        })

                        this.state.primaryShortStop.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Second Base')) {
                                console.log('Yes', player.id)
                                secondBase.concat(player)
                            }
                        })

                        this.state.primaryThirdBase.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Second Base')) {
                                console.log('Yes', player.id)
                                secondBase.concat(player)
                            }
                        })

                        this.state.primaryOutfield.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Second Base')) {
                                console.log('Yes', player.id)
                                secondBase.concat(player)
                            }
                        })
                        this.state.primaryDesignatedHitters.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Second Base')) {
                                console.log('Yes', player.id)
                                secondBase.concat(player)
                            }
                        })
                        localStorage.setItem('secondBase', JSON.stringify(secondBase));
                        this.setState({
                            secondBase
                        });
                    },
                    getAllShortStop: () => {
                        let shortStop = this.state.primaryShortStop;

                        this.state.primaryCatchers.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Shortstop')) {
                                console.log('Yes', player.id)
                                shortStop.concat(player)
                            }
                        })

                        this.state.primaryFirstBase.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Shortstop')) {
                                console.log('Yes', player.id)
                                shortStop.concat(player)
                            }
                        })

                        this.state.primarySecondBase.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Shortstop')) {
                                console.log('Yes', player.id)
                                shortStop.concat(player)
                            }
                        })

                        this.state.primaryThirdBase.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Shortstop')) {
                                console.log('Yes', player.id)
                                shortStop.concat(player)
                            }
                        })

                        this.state.primaryOutfield.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Shortstop')) {
                                console.log('Yes', player.id)
                                shortStop.concat(player)
                            }
                        })
                        this.state.primaryDesignatedHitters.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Shortstop')) {
                                console.log('Yes', player.id)
                                shortStop.concat(player)
                            }
                        })
                        localStorage.setItem('shortStop', JSON.stringify(shortStop));
                        this.setState({
                            shortStop
                        });
                    },
                    getAllThirdBase: () => {
                        let thirdBase = this.state.primaryThirdBase;

                        this.state.primaryCatchers.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Third Base')) {
                                console.log('Yes', player.id)
                                thirdBase.concat(player)
                            }
                        })

                        this.state.primaryFirstBase.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Third Base')) {
                                console.log('Yes', player.id)
                                thirdBase.concat(player)
                            }
                        })

                        this.state.primarySecondBase.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Third Base')) {
                                console.log('Yes', player.id)
                                thirdBase.concat(player)
                            }
                        })

                        this.state.primaryShortStop.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Third Base')) {
                                console.log('Yes', player.id)
                                thirdBase.concat(player)
                            }
                        })

                        this.state.primaryOutfield.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Third Base')) {
                                console.log('Yes', player.id)
                                thirdBase.concat(player)
                            }
                        })
                        this.state.primaryDesignatedHitters.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Third Base')) {
                                console.log('Yes', player.id)
                                thirdBase.concat(player)
                            }
                        })
                        localStorage.setItem('thirdBase', JSON.stringify(thirdBase));
                        this.setState({
                            thirdBase
                        });
                    },
                    getAllOutfield: () => {
                        let outfield = this.state.primaryOutfield;

                        this.state.primaryCatchers.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Outfield')) {
                                console.log('Yes', player.id)
                                outfield.concat(player)
                            }
                        })

                        this.state.primaryFirstBase.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Outfield')) {
                                console.log('Yes', player.id)
                                outfield.concat(player)
                            }
                        })

                        this.state.primarySecondBase.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Outfield')) {
                                console.log('Yes', player.id)
                                outfield.concat(player)
                            }
                        })

                        this.state.primaryShortStop.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Outfield')) {
                                console.log('Yes', player.id)
                                outfield.concat(player)
                            }
                        })

                        this.state.primaryThirdBase.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Outfield')) {
                                console.log('Yes', player.id)
                                outfield.concat(player)
                            }
                        })

                        this.state.primaryDesignatedHitters.forEach((player, index) => {
                            console.log(player)
                            if (player.otherPositions.contains('Outfield')) {
                                console.log('Yes', player.id)
                                outfield.concat(player)
                            }
                        })
                        localStorage.setItem('outfield', JSON.stringify(outfield));
                        this.setState({
                            outfield
                        });
                    },
                    getAllDesignatedHitters: () => {
                        let designatedHitters = this.state.primaryDesignatedHitters;

                        localStorage.setItem('designatedHitters', JSON.stringify(designatedHitters));
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
