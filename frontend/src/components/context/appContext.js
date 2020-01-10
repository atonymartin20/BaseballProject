import React, { Component } from 'react';
import axios from 'axios';

export const AppContext = React.createContext();

export default class AppProvider extends Component {
    state = {
        catchers: JSON.parse(localStorage.getItem('catchers')) || [],
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
