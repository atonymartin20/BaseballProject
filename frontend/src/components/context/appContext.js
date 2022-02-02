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
        teams: {
            Angels: {
                teamName: 'Angels',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'AL West',
            },
            Astros: {
                teamName: 'Astros',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'AL West',
            },
            Athletics: {
                teamName: 'Athletics',
                players: [],
                hitters: [],
                pitchers: [],
                teamFWAR: 0.0,
                division: 'AL West',
            },
            BlueJays: {
                teamName: 'Blue Jays',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'AL East',
            },
            Braves: {
                teamName: 'Braves',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'NL East',
            },
            Brewers: {
                teamName: 'Brewers',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'NL Central',
            },
            Cardinals: {
                teamName: 'Cardinals',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'NL Central',
            },
            Cubs: {
                teamName: 'Cubs',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'NL Central',
            },
            Diamondbacks: {
                teamName: 'Diamondbacks',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'NL West',
            },
            Dodgers: {
                teamName: 'Dodgers',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'NL West',
            },
            Giants: {
                teamName: 'Giants',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'NL West',
            },
            Guardians: {
                teamName: 'Guardians',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'AL Central',
            },
            Mariners: {
                teamName: 'Mariners',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'AL West',
            },
            Marlins: {
                teamName: 'Marlins',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'NL East',
            },
            Mets: {
                teamName: 'Mets',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'NL East',
            },
            Nationals: {
                teamName: 'Nationals',
                players: [],
                hitters: [],
                pitchers: [],
                teamFWAR: 0.0,
                division: 'NL East',
            },
            Orioles: {
                teamName: 'Orioles',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'AL East',
            },
            Padres: {
                teamName: 'Padres',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'NL West',
            },
            Phillies: {
                teamName: 'Phillies',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'NL East',
            },
            Pirates: {
                teamName: 'Pirates',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'NL Central',
            },
            Rangers: {
                teamName: 'Rangers',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'AL West',
            },
            Rays: {
                teamName: 'Rays',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'AL East',
            },
            RedSox: {
                teamName: 'Red Sox',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'AL East',
            },
            Reds: {
                teamName: 'Reds',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'NL Central',
            },
            Rockies: {
                teamName: 'Rockies',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'NL West',
            },
            Royals: {
                teamName: 'Royals',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'AL Central',
            },
            Tigers: {
                teamName: 'Tigers',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'AL Central',
            },
            Twins: {
                teamName: 'Twins',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'AL Central',
            },
            WhiteSox: {
                teamName: 'White Sox',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'AL Central',
            },
            Yankees: {
                teamName: 'Yankees',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
                division: 'AL East',
            },
            FreeAgents: {
                teamName: 'Free Agents',
                players: [],
                hitters: [],
                pitchers: [],
                hitterFWAR: 0.0,
                pitcherFWAR: 0.0,
                teamFWAR: 0.0,
            },
        },
        NoTeams: [],
        NoTeamsFWAR: 0.0,
        RetiredForeignPlayers: [],
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
                    divideIntoTeams: () => {
                        let teams = {
                            Angels: {
                                teamName: 'Angels',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'AL West',
                            },
                            Astros: {
                                teamName: 'Astros',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'AL West',
                            },
                            Athletics: {
                                teamName: 'Athletics',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'AL West',
                            },
                            BlueJays: {
                                teamName: 'Blue Jays',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'AL East',
                            },
                            Braves: {
                                teamName: 'Braves',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'NL East',
                            },
                            Brewers: {
                                teamName: 'Brewers',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'NL Central',
                            },
                            Cardinals: {
                                teamName: 'Cardinals',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'NL Central',
                            },
                            Cubs: {
                                teamName: 'Cubs',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'NL Central',
                            },
                            Diamondbacks: {
                                teamName: 'Diamondbacks',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'NL West',
                            },
                            Dodgers: {
                                teamName: 'Dodgers',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'NL West',
                            },
                            Giants: {
                                teamName: 'Giants',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'NL West',
                            },
                            Guardians: {
                                teamName: 'Guardians',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'AL Central',
                            },
                            Mariners: {
                                teamName: 'Mariners',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'AL West',
                            },
                            Marlins: {
                                teamName: 'Marlins',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'NL East',
                            },
                            Mets: {
                                teamName: 'Mets',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'NL East',
                            },
                            Nationals: {
                                teamName: 'Nationals',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'NL East',
                            },
                            Orioles: {
                                teamName: 'Orioles',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'AL East',
                            },
                            Padres: {
                                teamName: 'Padres',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'NL West',
                            },
                            Phillies: {
                                teamName: 'Phillies',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'NL East',
                            },
                            Pirates: {
                                teamName: 'Pirates',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'NL Central',
                            },
                            Rangers: {
                                teamName: 'Rangers',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'AL West',
                            },
                            Rays: {
                                teamName: 'Rays',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'AL East',
                            },
                            RedSox: {
                                teamName: 'Red Sox',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'AL East',
                            },
                            Reds: {
                                teamName: 'Reds',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'NL Central',
                            },
                            Rockies: {
                                teamName: 'Rockies',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'NL West',
                            },
                            Royals: {
                                teamName: 'Royals',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'AL Central',
                            },
                            Tigers: {
                                teamName: 'Tigers',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'AL Central',
                            },
                            Twins: {
                                teamName: 'Twins',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'AL Central',
                            },
                            WhiteSox: {
                                teamName: 'White Sox',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'AL Central',
                            },
                            Yankees: {
                                teamName: 'Yankees',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                                division: 'AL East',
                            },
                            FreeAgents: {
                                teamName: 'Free Agents',
                                players: [],
                                hitters: [],
                                pitchers: [],
                                hitterFWAR: 0.0,
                                pitcherFWAR: 0.0,
                                teamFWAR: 0.0,
                            },
                        }

                        let NoTeams = [];
                        let NoTeamsFWAR = 0.0;

                        let RetiredForeignPlayers = [];

                        this.state.overall.forEach(player => {
                            if(player.currentTeam.includes('Angels')) {
                                teams['Angels']['players'] = teams['Angels']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['Angels']['hitters'] = teams['Angels']['hitters'].concat(player)
                                    teams['Angels']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['Angels']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['Angels']['pitchers'] = teams['Angels']['pitchers'].concat(player)
                                    teams['Angels']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['Angels']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }
                            }
                            else if(player.currentTeam.includes('Astros')) {
                                teams['Astros']['players'] = teams['Astros']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['Astros']['hitters'] = teams['Astros']['hitters'].concat(player)
                                    teams['Astros']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['Astros']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['Astros']['pitchers'] = teams['Astros']['pitchers'].concat(player)
                                    teams['Astros']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['Astros']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Athletics')) {
                                teams['Athletics']['players'] = teams['Athletics']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['Athletics']['hitters'] = teams['Athletics']['hitters'].concat(player)
                                    teams['Athletics']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['Athletics']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['Athletics']['pitchers'] = teams['Athletics']['pitchers'].concat(player)
                                    teams['Athletics']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['Athletics']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Blue Jays')) {
                                teams['BlueJays']['players'] = teams['BlueJays']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['BlueJays']['hitters'] = teams['BlueJays']['hitters'].concat(player)
                                    teams['BlueJays']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['BlueJays']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['BlueJays']['pitchers'] = teams['BlueJays']['pitchers'].concat(player)
                                    teams['BlueJays']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['BlueJays']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Braves')) {
                                teams['Braves']['players'] = teams['Braves']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['Braves']['hitters'] = teams['Braves']['hitters'].concat(player)
                                    teams['Braves']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['Braves']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['Braves']['pitchers'] = teams['Braves']['pitchers'].concat(player)
                                    teams['Braves']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['Braves']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Brewers')) {
                                teams['Brewers']['players'] = teams['Brewers']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['Brewers']['hitters'] = teams['Brewers']['hitters'].concat(player)
                                    teams['Brewers']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['Brewers']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['Brewers']['pitchers'] = teams['Brewers']['pitchers'].concat(player)
                                    teams['Brewers']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['Brewers']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Cardinals')) {
                                teams['Cardinals']['players'] = teams['Cardinals']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['Cardinals']['hitters'] = teams['Cardinals']['hitters'].concat(player)
                                    teams['Cardinals']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['Cardinals']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['Cardinals']['pitchers'] = teams['Cardinals']['pitchers'].concat(player)
                                    teams['Cardinals']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['Cardinals']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Cubs')) {
                                teams['Cubs']['players'] = teams['Cubs']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['Cubs']['hitters'] = teams['Cubs']['hitters'].concat(player)
                                    teams['Cubs']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['Cubs']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['Cubs']['pitchers'] = teams['Cubs']['pitchers'].concat(player)
                                    teams['Cubs']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['Cubs']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Diamondbacks')) {
                                teams['Diamondbacks']['players'] = teams['Diamondbacks']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['Diamondbacks']['hitters'] = teams['Diamondbacks']['hitters'].concat(player)
                                    teams['Diamondbacks']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['Diamondbacks']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['Diamondbacks']['pitchers'] = teams['Diamondbacks']['pitchers'].concat(player)
                                    teams['Diamondbacks']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['Diamondbacks']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Dodgers')) {
                                teams['Dodgers']['players'] = teams['Dodgers']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['Dodgers']['hitters'] = teams['Dodgers']['hitters'].concat(player)
                                    teams['Dodgers']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['Dodgers']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['Dodgers']['pitchers'] = teams['Dodgers']['pitchers'].concat(player)
                                    teams['Dodgers']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['Dodgers']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Giants')) {
                                teams['Giants']['players'] = teams['Giants']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['Giants']['hitters'] = teams['Giants']['hitters'].concat(player)
                                    teams['Giants']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['Giants']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['Giants']['pitchers'] = teams['Giants']['pitchers'].concat(player)
                                    teams['Giants']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['Giants']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Guardians')) {
                                teams['Guardians']['players'] = teams['Guardians']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['Guardians']['hitters'] = teams['Guardians']['hitters'].concat(player)
                                    teams['Guardians']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['Guardians']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['Guardians']['pitchers'] = teams['Guardians']['pitchers'].concat(player)
                                    teams['Guardians']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['Guardians']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Mariners')) {
                                teams['Mariners']['players'] = teams['Mariners']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['Mariners']['hitters'] = teams['Mariners']['hitters'].concat(player)
                                    teams['Mariners']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['Mariners']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['Mariners']['pitchers'] = teams['Mariners']['pitchers'].concat(player)
                                    teams['Mariners']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['Mariners']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Marlins')) {
                                teams['Marlins']['players'] = teams['Marlins']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['Marlins']['hitters'] = teams['Marlins']['hitters'].concat(player)
                                    teams['Marlins']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['Marlins']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['Marlins']['pitchers'] = teams['Marlins']['pitchers'].concat(player)
                                    teams['Marlins']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['Marlins']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Mets')) {
                                teams['Mets']['players'] = teams['Mets']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['Mets']['hitters'] = teams['Mets']['hitters'].concat(player)
                                    teams['Mets']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['Mets']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['Mets']['pitchers'] = teams['Mets']['pitchers'].concat(player)
                                    teams['Mets']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['Mets']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Nationals')) {
                                teams['Nationals']['players'] = teams['Nationals']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['Nationals']['hitters'] = teams['Nationals']['hitters'].concat(player)
                                    teams['Nationals']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['Nationals']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['Nationals']['pitchers'] = teams['Nationals']['pitchers'].concat(player)
                                    teams['Nationals']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['Nationals']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Orioles')) {
                                teams['Orioles']['players'] = teams['Orioles']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['Orioles']['hitters'] = teams['Orioles']['hitters'].concat(player)
                                    teams['Orioles']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['Orioles']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['Orioles']['pitchers'] = teams['Orioles']['pitchers'].concat(player)
                                    teams['Orioles']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['Orioles']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Padres')) {
                                teams['Padres']['players'] = teams['Padres']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['Padres']['hitters'] = teams['Padres']['hitters'].concat(player)
                                    teams['Padres']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['Padres']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['Padres']['pitchers'] = teams['Padres']['pitchers'].concat(player)
                                    teams['Padres']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['Padres']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Phillies')) {
                                teams['Phillies']['players'] = teams['Phillies']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['Phillies']['hitters'] = teams['Phillies']['hitters'].concat(player)
                                    teams['Phillies']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['Phillies']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['Phillies']['pitchers'] = teams['Phillies']['pitchers'].concat(player)
                                    teams['Phillies']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['Phillies']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Pirates')) {
                                teams['Pirates']['players'] = teams['Pirates']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['Pirates']['hitters'] = teams['Pirates']['hitters'].concat(player)
                                    teams['Pirates']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['Pirates']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['Pirates']['pitchers'] = teams['Pirates']['pitchers'].concat(player)
                                    teams['Pirates']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['Pirates']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Rangers')) {
                                teams['Rangers']['players'] = teams['Rangers']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['Rangers']['hitters'] = teams['Rangers']['hitters'].concat(player)
                                    teams['Rangers']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['Rangers']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['Rangers']['pitchers'] = teams['Rangers']['pitchers'].concat(player)
                                    teams['Rangers']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['Rangers']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Rays')) {
                                teams['Rays']['players'] = teams['Rays']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['Rays']['hitters'] = teams['Rays']['hitters'].concat(player)
                                    teams['Rays']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['Rays']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['Rays']['pitchers'] = teams['Rays']['pitchers'].concat(player)
                                    teams['Rays']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['Rays']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Red Sox')) {
                                teams['RedSox']['players'] = teams['RedSox']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['RedSox']['hitters'] = teams['RedSox']['hitters'].concat(player)
                                    teams['RedSox']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['RedSox']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }

                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['RedSox']['pitchers'] = teams['RedSox']['pitchers'].concat(player)
                                    teams['RedSox']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['RedSox']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Reds')) {
                                teams['Reds']['players'] = teams['Reds']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['Reds']['hitters'] = teams['Reds']['hitters'].concat(player)
                                    teams['Reds']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['Reds']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['Reds']['pitchers'] = teams['Reds']['pitchers'].concat(player)
                                    teams['Reds']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['Reds']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Rockies')) {
                                teams['Rockies']['players'] = teams['Rockies']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['Rockies']['hitters'] = teams['Rockies']['hitters'].concat(player)
                                    teams['Rockies']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['Rockies']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['Rockies']['pitchers'] = teams['Rockies']['pitchers'].concat(player)
                                    teams['Rockies']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['Rockies']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Royals')) {
                                teams['Royals']['players'] = teams['Royals']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['Royals']['hitters'] = teams['Royals']['hitters'].concat(player)
                                    teams['Royals']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['Royals']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['Royals']['pitchers'] = teams['Royals']['pitchers'].concat(player)
                                    teams['Royals']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['Royals']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Tigers')) {
                                teams['Tigers']['players'] = teams['Tigers']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['Tigers']['hitters'] = teams['Tigers']['hitters'].concat(player)
                                    teams['Tigers']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['Tigers']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['Tigers']['pitchers'] = teams['Tigers']['pitchers'].concat(player)
                                    teams['Tigers']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['Tigers']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Twins')) {
                                teams['Twins']['players'] = teams['Twins']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['Twins']['hitters'] = teams['Twins']['hitters'].concat(player)
                                    teams['Twins']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['Twins']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['Twins']['pitchers'] = teams['Twins']['pitchers'].concat(player)
                                    teams['Twins']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['Twins']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('White Sox')) {
                                teams['WhiteSox']['players'] = teams['WhiteSox']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['WhiteSox']['hitters'] = teams['WhiteSox']['hitters'].concat(player)
                                    teams['WhiteSox']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['WhiteSox']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['WhiteSox']['pitchers'] = teams['WhiteSox']['pitchers'].concat(player)
                                    teams['WhiteSox']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['WhiteSox']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Yankees')) {
                                teams['Yankees']['players'] = teams['Yankees']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['Yankees']['hitters'] = teams['Yankees']['hitters'].concat(player)
                                    teams['Yankees']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['Yankees']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['Yankees']['pitchers'] = teams['Yankees']['pitchers'].concat(player)
                                    teams['Yankees']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['Yankees']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }
                            else if(player.currentTeam.includes('Free Agent')) {
                                teams['FreeAgents']['players'] = teams['FreeAgents']['players'].concat(player)
                                if(player.otherPositions.includes('C') || player.primaryPosition.includes('C') || player.otherPositions.includes('1B') || player.primaryPosition.includes('1B') || player.otherPositions.includes('2B') || player.primaryPosition.includes('2B') || player.otherPositions.includes('SS') || player.primaryPosition.includes('SS') || player.otherPositions.includes('3B') || player.primaryPosition.includes('3B') || player.otherPositions.includes('OF') || player.primaryPosition.includes('OF') || player.otherPositions.includes('DH') || player.primaryPosition.includes('DH')) {
                                    teams['FreeAgents']['hitters'] = teams['FreeAgents']['hitters'].concat(player)
                                    teams['FreeAgents']['hitterFWAR'] += Number(player.TheBatXFWARProjection)
                                    teams['FreeAgents']['teamFWAR'] += Number(player.TheBatXFWARProjection)
                                }
                                
                                if(player.otherPositions.includes('SP') || player.primaryPosition.includes('SP') || player.otherPositions.includes('RP') || player.primaryPosition.includes('RP')) {
                                    teams['FreeAgents']['pitchers'] = teams['FreeAgents']['pitchers'].concat(player)
                                    teams['FreeAgents']['pitcherFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                    teams['FreeAgents']['teamFWAR'] += Number(player.PitcherTheBatFWARProjection)
                                }                            }

                            else if(player.currentTeam.includes('Retired') || player.currentTeam.includes('Korea') || player.currentTeam.includes('Japan') || player.currentTeam.includes('Mexico') || player.currentTeam.includes('Taiwan')) {
                                RetiredForeignPlayers = RetiredForeignPlayers.concat(player)
                            }
                            else {
                                NoTeams = NoTeams.concat(player)
                                NoTeamsFWAR += player
                            }
                        })

                        if(NoTeams.length > 0) {
                            console.log(NoTeams)
                        }

                        this.setState({
                            teams,
                            NoTeams,
                            NoTeamsFWAR,
                            RetiredForeignPlayers,
                        })
                    }
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}