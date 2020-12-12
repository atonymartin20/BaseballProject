import React from 'react';
import Navbar from '../navbar';
import Links from '../navbar/links.js';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { AppContext } from '../context/appContext.js';
import EnhancedPitcherTable2021 from '../positionTable/pitcherTables/enhancedPitcherTable2021.js';
import EnhancedHitterTable2021 from '../positionTable/hitterTables/enhancedTable2021.js';

const styles = (theme) => ({
    flipDataList: {
        display: 'flex',
        marginTop: 0,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    flipDataListItem: {
        paddingLeft: 8,
        paddingRight: 8,
        width: 'auto',
    },
    positionDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    positionSpacingDiv: {
        marginTop: 70,
        width: '97%',
        borderRadius: '4px',
        backgroundColor: '#f8fbfd',
        minHeight: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 20,
        fontSize: '2.0rem',
        lineHeight: 1.25,
    },
    positionText: {
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
    },
});

class TeamsPage extends React.Component {
    state = {
        displayHitters: true,
        displayPitchers: false,
        display2017: false,
        display2018: false,
        display2019: false,
        display2020: false,
        display2021: true,
        pitchers: [],
        hitters: [],
    };

    changePlayers = (event) => {
        event.preventDefault();
        this.setState({
            displayHitters: !this.state.displayHitters,
            displayPitchers: !this.state.displayPitchers,
        });
    };

    grabHitters = () => {

    }

    grabPitchers = () => {

    }

    componentDidMount() {
        this.grabHitters();
        this.grabPitchers();
    }

    render() {
        const { classes } = this.props;
        const { displayHitters, displayPitchers } = this.state;
        console.log(props)

        const flipDataButton = {
            fontSize: '1.6rem',
            backgroundColor: '#9AA297',
        };

        const flipDataButtonSelected = {
            fontSize: '1.6rem',
            color: 'white',
            backgroundColor: '#000080',
        };

        const data = (
            <div className={classes.dataDiv}>
                {displayHitters ? (
                    <div>
                        <h1 className={classes.positionText}>
                            {props.team.teamName} Hitters
                        </h1>
                        <EnhancedHitterTable2021 players={this.state.hitters} />
                    </div>
                ) : null}

                {displayPitchers ? (
                    <div>
                        <h1 className={classes.positionText}>
                            {props.team.teamName} Pitchers
                        </h1>
                        <EnhancedPitcherTable2021 players={this.state.pitchers} />
                    </div>
                ) : null}
            </div>
        );

        const flipData = (
            <div>
                <List className={classes.flipDataList}>
                    <ListItem className={classes.flipDataListItem} onClick={this.changePlayers}>
                        <Button style={displayHitters ? flipDataButtonSelected : flipDataButton}>Hitters</Button>
                    </ListItem>
                    <ListItem className={classes.flipDataListItem} onClick={this.changePlayers}>
                        <Button style={displayPitchers ? flipDataButtonSelected : flipDataButton}>Pitchers</Button>
                    </ListItem>
                </List>
            </div>
        );
        return (
            <div className={classes.positionDiv}>
                <Navbar />
                <div className={classes.positionSpacingDiv}>
                    <Links />
                    {flipData}

                    <h1 className={classes.positionText}>{data}</h1>
                    <Links />
                </div>
            </div>
        );
    }
}

TeamsPage.contextType = AppContext;

export default withStyles(styles)(TeamsPage);
