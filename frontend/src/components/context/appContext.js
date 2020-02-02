import React, { Component } from 'react';
import axios from 'axios';

export const AppContext = React.createContext();

export default class AppProvider extends Component {
    state = {
        catchers: JSON.parse(localStorage.getItem('catchers')) || [],
        firstBase: JSON.parse(localStorage.getItem('firstBase')) || [],
        secondBase: JSON.parse(localStorage.getItem('secondBase')) || [],
        thirdBase: JSON.parse(localStorage.getItem('thirdBase')) || [],
        shortStop: JSON.parse(localStorage.getItem('shortStop')) || [],
        outfield: JSON.parse(localStorage.getItem('outfield')) || [],
        designatedHitters: JSON.parse(localStorage.getItem('designatedHitters')) || [],
        startingPitchers: JSON.parse(localStorage.getItem('startingPitchers')) || [],
        reliefPitchers: JSON.parse(localStorage.getItem('reliefPitchers')) || [],
    };

    render() {

        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    getCatchers: () => {
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
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
