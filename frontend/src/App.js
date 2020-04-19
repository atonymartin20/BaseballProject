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
import CatcherCard from './components/players/catcherCard.js';
import FirstBaseCard from './components/players/firstBaseCard.js';
import SecondBaseCard from './components/players/secondBaseCard.js';
import ShortStopCard from './components/players/shortStopCard.js';
import ThirdBaseCard from './components/players/thirdBaseCard.js';
import OutfieldCard from './components/players/outfieldCard.js';
import DesignatedHitterCard from './components/players/designatedHitterCard.js';
import StartingPitcherCard from './components/players/startingPitcherCard.js';
import ReliefPitcherCard from './components/players/reliefPitcherCard.js';
import Glossary from './components/glossary';

class App extends React.Component {
    componentDidMount() {
        this.context.getHitters();
        this.context.getPrimaryStartingPitchers();
        this.context.getPrimaryReliefPitchers();
        this.context.getCatchers();
        this.context.getFirstBase();
        this.context.getSecondBase();
        this.context.getThirdBase();
        this.context.getShortStop();
        this.context.getCornerInfield();
        this.context.getMiddleInfield();
        this.context.getOutfield();
        this.context.getDesignatedHitters();
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
                        <CatcherCard {...props} />
                    } />
                    <Route exact path='/firstBase'>
                        <FirstBase />
                    </Route>
                    <Route path='/firstBase/:id' render={props =>
                        <FirstBaseCard {...props} />
                    } />
                    <Route exact path='/secondBase'>
                        <SecondBase />
                    </Route>
                    <Route path='/secondBase/:id' render={props =>
                        <SecondBaseCard {...props} />
                    } />
                    <Route exact path='/thirdBase'>
                        <ThirdBase />
                    </Route>
                    <Route path='/thirdBase/:id' render={props =>
                        <ThirdBaseCard {...props} />
                    } />
                    <Route exact path='/shortStop'>
                        <ShortStop />
                    </Route>
                    <Route path='/shortStop/:id' render={props =>
                        <ShortStopCard {...props} />
                    } />
                    <Route exact path='/outfield'>
                        <Outfield />
                    </Route>
                    <Route path='/outfield/:id' render={props =>
                        <OutfieldCard {...props} />
                    } />
                    <Route exact path='/designatedHitter'>
                        <DesignatedHitter />
                    </Route>
                    <Route path='/designatedHitter/:id' render={props =>
                        <DesignatedHitterCard {...props} />
                    } />
                    <Route exact path='/startingPitcher'>
                        <StartingPitchers />
                    </Route>
                    <Route path='/startingPitcher/:id' render={props =>
                        <StartingPitcherCard {...props} />
                    } />
                    <Route exact path='/reliefPitcher'>
                        <ReliefPitchers />
                    </Route>
                    <Route path='/reliefPitcher/:id' render={props =>
                        <ReliefPitcherCard {...props} />
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