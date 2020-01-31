import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage';
import { AppContext } from './components/context/appContext.js';
import Catchers from './components/positions/catchers.js';
import FirstBase from './components/positions/firstBase.js';
import SecondBase from './components/positions/secondBase.js';
import ThirdBase from './components/positions/thirdBase.js';
import ShortStop from './components/positions/shortStop.js';
import Outfield from './components/positions/outfield.js';
import DesignatedHitter from './components/positions/designatedHitter.js';
import StartingPitchers from './components/positions/startingPitchers.js';
import ReliefPitchers from './components/positions/reliefPitchers.js';
import PlayerCard from './components/players/playerCard.js';
import PitcherPlayerCard from './components/players/pitcherPlayerCard.js';
import Glossary from './components/glossary';

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
                    <Route exact path='/firstBase'>
                        <FirstBase />
                    </Route>
                    <Route path='/firstBase/:id' render={props =>
                        <PlayerCard {...props} />
                    } />
                    <Route exact path='/secondBase'>
                        <SecondBase />
                    </Route>
                    <Route path='/secondBase/:id' render={props =>
                        <PlayerCard {...props} />
                    } />
                    <Route exact path='/thirdBase'>
                        <ThirdBase />
                    </Route>
                    <Route path='/thirdBase/:id' render={props =>
                        <PlayerCard {...props} />
                    } />
                    <Route exact path='/shortStop'>
                        <ShortStop />
                    </Route>
                    <Route path='/shortStop/:id' render={props =>
                        <PlayerCard {...props} />
                    } />
                    <Route exact path='/outfield'>
                        <Outfield />
                    </Route>
                    <Route path='/outfield/:id' render={props =>
                        <PlayerCard {...props} />
                    } />
                    <Route exact path='/designatedHitter'>
                        <DesignatedHitter />
                    </Route>
                    <Route path='/designatedHitter/:id' render={props =>
                        <PlayerCard {...props} />
                    } />
                    <Route exact path='/startingPitcher'>
                        <StartingPitchers />
                    </Route>
                    <Route path='/startingPitcher/:id' render={props =>
                        <PitcherPlayerCard {...props} />
                    } />
                    <Route exact path='/glossary'>
                        <Glossary />
                    </Route>
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