import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage';
import { AppContext } from './components/context/appContext.js';
import Catchers from './components/positions/catchers.js';
import FirstBase from './components/positions/firstBase.js';
import SecondBase from './components/positions/secondBase.js';
import ShortStop from './components/positions/shortStop.js';
import ThirdBase from './components/positions/thirdBase.js';
import MiddleInfield from './components/positions/middleInfield.js';
import CornerInfield from './components/positions/cornerInfield.js';
import Outfield from './components/positions/outfield.js';
import DesignatedHitter from './components/positions/designatedHitter.js';
import Hitters from './components/positions/hitters.js';
import StartingPitchers from './components/positions/startingPitchers.js';
import ReliefPitchers from './components/positions/reliefPitchers.js';
import Pitchers from './components/positions/pitchers.js';
import Overall from './components/positions/overall.js';
import PlayerCard from './components/players/playerCard.js';
import Glossary from './components/glossary';

class App extends React.Component {
    componentDidMount() {
        this.context.getAllPlayers();
        setTimeout(() => {
            this.context.getHitters();
        }, 4000)
        setTimeout(() => {
            this.context.getPitchers();
        }, 4000)
        setTimeout(() => {
            this.context.getCatchers();
        }, 4000)
        setTimeout(() => {
            this.context.getFirstBase();
        }, 4000)
        setTimeout(() => {
            this.context.getSecondBase();
        }, 4000)
        setTimeout(() => {
            this.context.getShortStop();
        }, 4000)
        setTimeout(() => {
            this.context.getThirdBase();
        }, 4000)
        setTimeout(() => {
            this.context.getMiddleInfield();
        }, 4000)
        setTimeout(() => {
            this.context.getCornerInfield();
        }, 4000)
        setTimeout(() => {
            this.context.getOutfield();
        }, 4000)
        setTimeout(() => {
            this.context.getDesignatedHitters();
        }, 4000)
        setTimeout(() => {
            this.context.getStartingPitchers();
        }, 4000)
        setTimeout(() => {
            this.context.getReliefPitchers();
        }, 4000)
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
                    <Route exact path='/shortStop'>
                        <ShortStop />
                    </Route>
                    <Route path='/shortStop/:id' render={props =>
                        <PlayerCard {...props} />
                    } />
                    <Route exact path='/thirdBase'>
                        <ThirdBase />
                    </Route>
                    <Route path='/thirdBase/:id' render={props =>
                        <PlayerCard {...props} />
                    } />
                    <Route exact path='/middleInfield'>
                        <MiddleInfield />
                    </Route>
                    <Route path='/middleInfield/:id' render={props =>
                        <PlayerCard {...props} />
                    } />
                    <Route exact path='/cornerInfield'>
                        <CornerInfield />
                    </Route>
                    <Route path='/cornerInfield/:id' render={props =>
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
                    <Route exact path='/hitters'>
                        <Hitters />
                    </Route>
                    <Route path='/hitters/:id' render={props =>
                        <PlayerCard {...props} />
                    } />
                    <Route exact path='/startingPitcher'>
                        <StartingPitchers />
                    </Route>
                    <Route path='/startingPitcher/:id' render={props =>
                        <PlayerCard {...props} />
                    } />
                    <Route exact path='/reliefPitcher'>
                        <ReliefPitchers />
                    </Route>
                    <Route path='/reliefPitcher/:id' render={props =>
                        <PlayerCard {...props} />
                    } />
                    <Route exact path='/pitchers'>
                        <Pitchers />
                    </Route>
                    <Route path='/pitchers/:id' render={props =>
                        <PlayerCard {...props} />
                    } />
                    <Route exact path='/overall'>
                        <Overall />
                    </Route>
                    <Route path='/overall/:id' render={props =>
                        <PlayerCard {...props} />
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