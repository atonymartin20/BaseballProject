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
                teamFWAR: 0.0,
            },
            Astros: {
                teamName: 'Astros',
                players: [],
                teamFWAR: 0.0,
            },
            Athletics: {
                teamName: 'Athletics',
                players: [],
                teamFWAR: 0.0,
            },
            BlueJays: {
                teamName: 'Blue Jays',
                players: [],
                teamFWAR: 0.0,
            },
            Braves: {
                teamName: 'Braves',
                players: [],
                teamFWAR: 0.0,
            },
            Brewers: {
                teamName: 'Brewers',
                players: [],
                teamFWAR: 0.0,
            },
            Cardinals: {
                teamName: 'Cardinals',
                players: [],
                teamFWAR: 0.0,
            },
            Cubs: {
                teamName: 'Cubs',
                players: [],
                teamFWAR: 0.0,
            },
            Diamondbacks: {
                teamName: 'Diamondbacks',
                players: [],
                teamFWAR: 0.0,
            },
            Dodgers: {
                teamName: 'Dodgers',
                players: [],
                teamFWAR: 0.0,
            },
            Giants: {
                teamName: 'Giants',
                players: [],
                teamFWAR: 0.0,
            },
            Indians: {
                teamName: 'Indians',
                players: [],
                teamFWAR: 0.0,
            },
            Mariners: {
                teamName: 'Mariners',
                players: [],
                teamFWAR: 0.0,
            },
            Marlins: {
                teamName: 'Marlins',
                players: [],
                teamFWAR: 0.0,
            },
            Mets: {
                teamName: 'Mets',
                players: [],
                teamFWAR: 0.0,
            },
            Nationals: {
                teamName: 'Nationals',
                players: [],
                teamFWAR: 0.0,
            },
            Orioles: {
                teamName: 'Orioles',
                players: [],
                teamFWAR: 0.0,
            },
            Padres: {
                teamName: 'Padres',
                players: [],
                teamFWAR: 0.0,
            },
            Phillies: {
                teamName: 'Phillies',
                players: [],
                teamFWAR: 0.0,
            },
            Pirates: {
                teamName: 'Pirates',
                players: [],
                teamFWAR: 0.0,
            },
            Rangers: {
                teamName: 'Rangers',
                players: [],
                teamFWAR: 0.0,
            },
            Rays: {
                teamName: 'Rays',
                players: [],
                teamFWAR: 0.0,
            },
            RedSox: {
                teamName: 'Red Sox',
                players: [],
                teamFWAR: 0.0,
            },
            Reds: {
                teamName: 'Reds',
                players: [],
                teamFWAR: 0.0,
            },
            Rockies: {
                teamName: 'Rockies',
                players: [],
                teamFWAR: 0.0,
            },
            Royals: {
                teamName: 'Royals',
                players: [],
                teamFWAR: 0.0,
            },
            Tigers: {
                teamName: 'Tigers',
                players: [],
                teamFWAR: 0.0,
            },
            Twins: {
                teamName: 'Twins',
                players: [],
                teamFWAR: 0.0,
            },
            WhiteSox: {
                teamName: 'White Sox',
                players: [],
                teamFWAR: 0.0,
            },
            Yankees: {
                teamName: 'Yankees',
                players: [],
                teamFWAR: 0.0,
            },
            FreeAgents: {
                teamName: 'Free Agents',
                players: [],
                teamFWAR: 0.0,
            },
        },
        NoTeams: [],
        NoTeamsFWAR: 0.0,
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
                                teamFWAR: 0.0,
                            },
                            Astros: {
                                teamName: 'Astros',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            Athletics: {
                                teamName: 'Athletics',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            BlueJays: {
                                teamName: 'Blue Jays',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            Braves: {
                                teamName: 'Braves',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            Brewers: {
                                teamName: 'Brewers',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            Cardinals: {
                                teamName: 'Cardinals',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            Cubs: {
                                teamName: 'Cubs',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            Diamondbacks: {
                                teamName: 'Diamondbacks',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            Dodgers: {
                                teamName: 'Dodgers',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            Giants: {
                                teamName: 'Giants',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            Indians: {
                                teamName: 'Indians',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            Mariners: {
                                teamName: 'Mariners',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            Marlins: {
                                teamName: 'Marlins',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            Mets: {
                                teamName: 'Mets',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            Nationals: {
                                teamName: 'Nationals',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            Orioles: {
                                teamName: 'Orioles',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            Padres: {
                                teamName: 'Padres',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            Phillies: {
                                teamName: 'Phillies',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            Pirates: {
                                teamName: 'Pirates',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            Rangers: {
                                teamName: 'Rangers',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            Rays: {
                                teamName: 'Rays',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            RedSox: {
                                teamName: 'Red Sox',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            Reds: {
                                teamName: 'Reds',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            Rockies: {
                                teamName: 'Rockies',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            Royals: {
                                teamName: 'Royals',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            Tigers: {
                                teamName: 'Tigers',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            Twins: {
                                teamName: 'Twins',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            WhiteSox: {
                                teamName: 'White Sox',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            Yankees: {
                                teamName: 'Yankees',
                                players: [],
                                teamFWAR: 0.0,
                            },
                            FreeAgents: {
                                teamName: 'Free Agents',
                                players: [],
                                teamFWAR: 0.0,
                            },
                        }

                        let NoTeams = [];
                        let NoTeamsFWAR = 0.0;

                        this.state.overall.forEach(player => {
                            if(player.currentTeam.includes('Angels')) {
                                teams['Angels']['players'] = teams['Angels']['players'].concat(player)
                                teams['Angels']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Astros')) {
                                teams['Astros']['players'] = teams['Astros']['players'].concat(player)
                                teams['Astros']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Athletics')) {
                                teams['Athletics']['players'] = teams['Athletics']['players'].concat(player)
                                teams['Athletics']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Blue Jays')) {
                                teams['BlueJays']['players'] = teams['BlueJays']['players'].concat(player)
                                teams['BlueJays']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Braves')) {
                                teams['Braves']['players'] = teams['Braves']['players'].concat(player)
                                teams['Braves']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Brewers')) {
                                teams['Brewers']['players'] = teams['Brewers']['players'].concat(player)
                                teams['Brewers']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Cardinals')) {
                                teams['Cardinals']['players'] = teams['Cardinals']['players'].concat(player)
                                teams['Cardinals']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Cubs')) {
                                teams['Cubs']['players'] = teams['Cubs']['players'].concat(player)
                                teams['Cubs']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Diamondbacks')) {
                                teams['Diamondbacks']['players'] = teams['Diamondbacks']['players'].concat(player)
                                teams['Diamondbacks']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Dodgers')) {
                                teams['Dodgers']['players'] = teams['Dodgers']['players'].concat(player)
                                teams['Dodgers']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Giants')) {
                                teams['Giants']['players'] = teams['Giants']['players'].concat(player)
                                teams['Giants']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Indians')) {
                                teams['Indians']['players'] = teams['Indians']['players'].concat(player)
                                teams['Indians']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Mariners')) {
                                teams['Mariners']['players'] = teams['Mariners']['players'].concat(player)
                                teams['Mariners']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Marlins')) {
                                teams['Marlins']['players'] = teams['Marlins']['players'].concat(player)
                                teams['Marlins']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Mets')) {
                                teams['Mets']['players'] = teams['Mets']['players'].concat(player)
                                teams['Mets']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Nationals')) {
                                teams['Nationals']['players'] = teams['National']['players'].concat(player)
                                teams['Nationals']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Orioles')) {
                                teams['Orioles']['players'] = teams['Orioles']['players'].concat(player)
                                teams['Orioles']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Padres')) {
                                teams['Padres']['players'] = teams['Padres']['players'].concat(player)
                                teams['Padres']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Phillies')) {
                                teams['Phillies']['players'] = teams['Phillies']['players'].concat(player)
                                teams['Phillies']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Pirates')) {
                                teams['Pirates']['players'] = teams['Pirates']['players'].concat(player)
                                teams['Pirates']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Rangers')) {
                                teams['Rangers']['players'] = teams['Rangers']['players'].concat(player)
                                teams['Rangers']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Rays')) {
                                teams['Rays']['players'] = teams['Rays']['players'].concat(player)
                                teams['Rays']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Red Sox')) {
                                teams['RedSox']['players'] = teams['RedSox']['players'].concat(player)
                                teams['RedSox']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Reds')) {
                                teams['Reds']['players'] = teams['Reds']['players'].concat(player)
                                teams['Reds']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Rockies')) {
                                teams['Rockies']['players'] = teams['Rockies']['players'].concat(player)
                                teams['Rockies']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Royals')) {
                                teams['Royals']['players'] = teams['Royals']['players'].concat(player)
                                teams['Royals']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Tigers')) {
                                teams['Tigers']['players'] = teams['Tigers']['players'].concat(player)
                                teams['Tigers']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Twins')) {
                                teams['Twins']['players'] = teams['Twins']['players'].concat(player)
                                teams['Twins']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('White Sox')) {
                                teams['WhiteSox']['players'] = teams['WhiteSox']['players'].concat(player)
                                teams['WhiteSox']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Yankees')) {
                                teams['Yankees']['players'] = teams['Yankees']['players'].concat(player)
                                teams['Yankees']['teamFWAR'] += player
                            }
                            else if(player.currentTeam.includes('Free Agent')) {
                                teams['FreeAgents']['players'] = teams['FreeAgents']['players'].concat(player)
                                teams['FreeAgents']['teamFWAR'] += player
                            }
                            else {
                                NoTeams = NoTeams.concat(player)
                                NoTeamsFWAR += player
                            }
                        })

                        if(NoTeams !== []) {
                            console.log(NoTeams)
                        }

                        console.log(teams)

                        this.setState({
                            teams,
                            NoTeams,
                            NoTeamsFWAR
                        })
                    }
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}