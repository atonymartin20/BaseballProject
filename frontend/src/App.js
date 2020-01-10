import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage';
import { AppContext } from './components/context/appContext.js';
import Catchers from './components/positions/catchers.js';
import PlayerCard from './components/players/playerCard.js';

class App extends React.Component {
    componentDidMount() {
        this.context.getCatchers();
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/'>
                        <Homepage />
                    </Route>
                    <Route exact path='/catchers'>
                        <Catchers />
                    </Route>
                    <Route path='/catchers/:id' render={props => 
                        <PlayerCard {...props} />
                    } />
                    <Route>
                        <Homepage />
                    </Route>
                </Switch>
            </div>
        );
    }
}

App.contextType = AppContext;
export default App;