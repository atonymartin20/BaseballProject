import React, { Component } from 'react';
import axios from 'axios';

export const AppContext = React.createContext();

export default class AppProvider extends Component {
    state = {
        primaryCatchers: JSON.parse(localStorage.getItem('primaryCatchers')) || [],
        catchers: JSON.parse(localStorage.getItem('catchers')) || [],
        primaryFirstBase: JSON.parse(localStorage.getItem('primaryFirstBase')) || [],
        firstBase: JSON.parse(localStorage.getItem('firstBase')) || [],
        primarySecondBase: JSON.parse(localStorage.getItem('primarySecondBase')) || [],
        secondBase: JSON.parse(localStorage.getItem('secondBase')) || [],
        primaryThirdBase: JSON.parse(localStorage.getItem('primaryThirdBase')) || [],
        thirdBase: JSON.parse(localStorage.getItem('thirdBase')) || [],
        primaryShortStop: JSON.parse(localStorage.getItem('primaryShortStop')) || [],
        shortStop: JSON.parse(localStorage.getItem('shortStop')) || [],
        primaryOutfield: JSON.parse(localStorage.getItem('primaryOutfield')) || [],
        outfield: JSON.parse(localStorage.getItem('outfield')) || [],
        primaryDesignatedHitters: JSON.parse(localStorage.getItem('primaryDesignatedHitters')) || [],
        designatedHitters: JSON.parse(localStorage.getItem('designatedHitters')) || [],
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
                    getPrimaryCatchers: () => {
                        const endpoint = '/catchers';
                        axios
                            .get(endpoint)
                            .then(res => {
                                const primaryCatchers = res.data;
                                localStorage.setItem('primaryCatchers', JSON.stringify(primaryCatchers));
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
                                localStorage.setItem('primaryFirstBase', JSON.stringify(primaryFirstBase));
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
                                localStorage.setItem('primarySecondBase', JSON.stringify(primarySecondBase));
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
                                localStorage.setItem('primaryThirdBase', JSON.stringify(primaryThirdBase));
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
                                localStorage.setItem('primaryShortStop', JSON.stringify(primaryShortStop));
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
                                localStorage.setItem('primaryOutfield', JSON.stringify(primaryOutfield));
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
                                localStorage.setItem('primaryDesignatedHitters', JSON.stringify(primaryDesignatedHitters));
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
                        let hitters = []
                        console.log('Empty', hitters)
                        hitters = hitters.concat(this.state.primaryCatchers)
                        console.log(hitters)
                        console.log('After Catchers')
                        hitters = hitters.concat(this.state.primaryFirstBase)
                        console.log(hitters)
                        console.log('After 1B')
                        hitters = hitters.concat(this.state.primarySecondBase)
                        console.log(hitters)
                        console.log('After 2B')
                        // this.state.primaryShortStop.forEach(player => {
                        //     hitters.concat(player)
                        // })
                        hitters = hitters.concat(this.state.primaryShortStop)
                        console.log(hitters)
                        console.log('After SS')
                        // this.state.primaryThirdBase.forEach(player => {
                        //     hitters.concat(player)
                        // })
                        hitters = hitters.concat(this.state.primaryThirdBase)
                        console.log(hitters)
                        console.log('After 3B')
                        // this.state.primaryOutfield.forEach(player => {
                        //     hitters.concat(player)
                        // })
                        hitters = hitters.concat(this.state.primaryOutfield)
                        console.log(hitters)
                        console.log('After OF')
                        // this.state.primaryDesignatedHitters.forEach(player => {
                        //     hitters.concat(player)
                        // })
                        hitters = hitters.concat(this.state.primaryDesignatedHitters)
                        console.log(hitters)
                        console.log('After DH')
                        localStorage.setItem('hitters', JSON.stringify(hitters));
                        this.setState({
                            hitters
                        });
                    },
                    getAllCatchers: () => {
                        let catchers = this.state.primaryCatchers;

                        this.state.primaryFirstBase.forEach(player => {
                            if (player.otherPositions.includes('Catcher')) {
                                catchers.concat(player)
                            }
                        })

                        this.state.primarySecondBase.forEach(player => {
                            if (player.otherPositions.includes('Catcher')) {
                                catchers.concat(player)
                            }
                        })

                        this.state.primaryShortStop.forEach(player => {
                            if (player.otherPositions.includes('Catcher')) {
                                catchers.concat(player)
                            }
                        })

                        this.state.primaryThirdBase.forEach(player => {
                            if (player.otherPositions.includes('Catcher')) {
                                catchers.concat(player)
                            }
                        })

                        this.state.primaryOutfield.forEach(player => {
                            if (player.otherPositions.includes('Catcher')) {
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
                        console.log('C')
                        this.state.primaryCatchers.forEach(player => {
                            console.log(player, player.otherPositions)
                            if (player.otherPositions.includes('First Base')) {
                                console.log('Yes', player.id)
                                firstBase = firstBase.concat(player)
                            }
                        })
                        console.log('2B')
                        this.state.primarySecondBase.forEach(player => {
                            console.log(player, player.otherPositions)
                            if (player.otherPositions.includes('First Base')) {
                                console.log('Yes', player.id)
                                firstBase = firstBase.concat(player)
                            }
                        })
                        console.log('SS')
                        this.state.primaryShortStop.forEach(player => {
                            console.log(player, player.otherPositions)
                            if (player.otherPositions.includes('First Base')) {
                                console.log('Yes', player.id)
                                firstBase = firstBase.concat(player)
                            }
                        })
                        console.log('3B')
                        this.state.primaryThirdBase.forEach(player => {
                            console.log(player, player.otherPositions)
                            if (player.otherPositions.includes('First Base')) {
                                console.log('Yes', player.id)
                                firstBase = firstBase.concat(player)
                            }
                        })
                        console.log('OF')
                        this.state.primaryOutfield.forEach(player => {
                            console.log(player, player.otherPositions)
                            if (player.otherPositions.includes('First Base')) {
                                console.log('Yes', player.id)
                                firstBase = firstBase.concat(player)
                            }
                        })
                        console.log(this.state.primaryFirstBase)
                        console.log(firstBase)
                        localStorage.setItem('firstBase', JSON.stringify(firstBase));
                        this.setState({
                            firstBase
                        });
                    },
                    getAllSecondBase: () => {
                        let secondBase = this.state.primarySecondBase;
                        console.log('C')
                        this.state.primaryCatchers.forEach(player => {
                            console.log(player, player.otherPositions)
                            if (player.otherPositions.includes('Second Base')) {
                                console.log('Yes', player.id)
                                secondBase = secondBase.concat(player)
                            }
                        })
                        console.log('1B')
                        this.state.primaryFirstBase.forEach(player => {
                            console.log(player, player.otherPositions)
                            if (player.otherPositions.includes('Second Base')) {
                                console.log('Yes', player.id)
                                secondBase = secondBase.concat(player)
                            }
                        })
                        console.log('SS')
                        this.state.primaryShortStop.forEach(player => {
                            console.log(player, player.otherPositions)
                            if (player.otherPositions.includes('Second Base')) {
                                console.log('Yes', player.id)
                                secondBase = secondBase.concat(player)
                            }
                        })
                        console.log('3B')
                        this.state.primaryThirdBase.forEach(player => {
                            console.log(player, player.otherPositions)
                            if (player.otherPositions.includes('Second Base')) {
                                console.log('Yes', player.id)
                                secondBase = secondBase.concat(player)
                            }
                        })
                        console.log('OF')
                        this.state.primaryOutfield.forEach(player => {
                            console.log(player, player.otherPositions)
                            if (player.otherPositions.includes('Second Base')) {
                                console.log('Yes', player.id)
                                secondBase = secondBase.concat(player)
                            }
                        })
                        console.log(this.state.primarySecondBase)
                        console.log(secondBase)
                        localStorage.setItem('secondBase', JSON.stringify(secondBase));
                        this.setState({
                            secondBase
                        });
                    },
                    getAllShortStop: () => {
                        let shortStop = this.state.primaryShortStop;
                        console.log('C')
                        this.state.primaryCatchers.forEach(player => {
                            console.log(player, player.otherPositions)
                            if (player.otherPositions.includes('Shortstop')) {
                                console.log('Yes', player.id)
                                shortStop = shortStop.concat(player)
                            }
                        })
                        console.log('1B')
                        this.state.primaryFirstBase.forEach(player => {
                            console.log(player, player.otherPositions)
                            if (player.otherPositions.includes('Shortstop')) {
                                console.log('Yes', player.id)
                                shortStop = shortStop.concat(player)
                            }
                        })
                        console.log('2B')
                        this.state.primarySecondBase.forEach(player => {
                            console.log(player, player.otherPositions)
                            if (player.otherPositions.includes('Shortstop')) {
                                console.log('Yes', player.id)
                                shortStop = shortStop.concat(player)
                            }
                        })
                        console.log('3B')
                        this.state.primaryThirdBase.forEach(player => {
                            console.log(player, player.otherPositions)
                            if (player.otherPositions.includes('Shortstop')) {
                                console.log('Yes', player.id)
                                shortStop = shortStop.concat(player)
                            }
                        })
                        console.log('OF')
                        this.state.primaryOutfield.forEach(player => {
                            console.log(player, player.otherPositions)
                            if (player.otherPositions.includes('Shortstop')) {
                                console.log('Yes', player.id)
                                shortStop = shortStop.concat(player)
                            }
                        })

                        localStorage.setItem('shortStop', JSON.stringify(shortStop));
                        this.setState({
                            shortStop
                        });
                    },
                    getAllThirdBase: () => {
                        let thirdBase = this.state.primaryThirdBase;
                        console.log('C')
                        this.state.primaryCatchers.forEach(player => {
                            console.log(player, player.otherPositions)
                            if (player.otherPositions.includes('Third Base')) {
                                console.log('Yes', player.id)
                                thirdBase = thirdBase.concat(player)
                            }
                        })
                        console.log('1B')
                        this.state.primaryFirstBase.forEach(player => {
                            console.log(player, player.otherPositions)
                            if (player.otherPositions.includes('Third Base')) {
                                console.log('Yes', player.id)
                                thirdBase = thirdBase.concat(player)
                            }
                        })
                        console.log('2B')
                        this.state.primarySecondBase.forEach(player => {
                            console.log(player, player.otherPositions)
                            if (player.otherPositions.includes('Third Base')) {
                                console.log('Yes', player.id)
                                thirdBase = thirdBase.concat(player)
                            }
                        })
                        console.log('SS')
                        this.state.primaryShortStop.forEach(player => {
                            console.log(player, player.otherPositions)
                            if (player.otherPositions.includes('Third Base')) {
                                console.log('Yes', player.id)
                                thirdBase = thirdBase.concat(player)
                            }
                        })
                        console.log('OF')
                        this.state.primaryOutfield.forEach(player => {
                            console.log(player, player.otherPositions)
                            if (player.otherPositions.includes('Third Base')) {
                                console.log('Yes', player.id)
                                thirdBase = thirdBase.concat(player)
                            }
                        })

                        localStorage.setItem('thirdBase', JSON.stringify(thirdBase));
                        this.setState({
                            thirdBase
                        });
                    },
                    getAllOutfield: () => {
                        let outfield = this.state.primaryOutfield;
                        console.log('C')
                        this.state.primaryCatchers.forEach(player => {
                            console.log(player, player.otherPositions)
                            if (player.otherPositions.includes('Outfield')) {
                                console.log('Yes', player.id)
                                outfield = outfield.concat(player)
                            }
                        })
                        console.log('1B')
                        this.state.primaryFirstBase.forEach(player => {
                            console.log(player, player.otherPositions)
                            if (player.otherPositions.includes('Outfield')) {
                                console.log('Yes', player.id)
                                outfield = outfield.concat(player)
                            }
                        })
                        console.log('2B')
                        this.state.primarySecondBase.forEach(player => {
                            console.log(player, player.otherPositions)
                            if (player.otherPositions.includes('Outfield')) {
                                console.log('Yes', player.id)
                                outfield = outfield.concat(player)
                            }
                        })
                        console.log('SS')
                        this.state.primaryShortStop.forEach(player => {
                            console.log(player, player.otherPositions)
                            if (player.otherPositions.includes('Outfield')) {
                                console.log('Yes', player.id)
                                outfield = outfield.concat(player)
                            }
                        })
                        console.log('3B')
                        this.state.primaryThirdBase.forEach(player => {
                            console.log(player, player.otherPositions)
                            if (player.otherPositions.includes('Outfield')) {
                                console.log('Yes', player.id)
                                outfield = outfield.concat(player)
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
