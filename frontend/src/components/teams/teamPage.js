import React from 'react';
import Navbar from '../navbar';
import Links from '../navbar/links.js';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { AppContext } from '../context/appContext.js';
import EnhancedPitcherTableProjections from './enhancedPitcherTableProjections.js';
import EnhancedTableProjections from './enhancedTableProjections.js';

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
        marginTop: 5,
        marginBottom: 20,
        paddingLeft: 50,
        width: '100%',
    },
    tableContainer: {
        width: '100%',
    },
    positionTextContainer: {
        width: '100%',
        marginBottom: 20,
    }
});

class TeamsPage extends React.Component {
    state = {
        teamName: '',
        players: [],
        hitters: [],
        pitchers: [],
        hitterFWAR: 0.0,
        pitcherFWAR: 0.0,
        displayHitters: true,
        displayPitchers: false,
    };

    changePlayers = (event) => {
        event.preventDefault();
        this.setState({
            displayHitters: !this.state.displayHitters,
            displayPitchers: !this.state.displayPitchers,
        });
    };

    componentDidMount() {
        if(this.props.location.state.team.redirectTeamName) {
            this.setState({
                teamName: this.props.location.state.team.redirectTeamName,
                players: this.props.location.state.players.redirectTeamPlayers,
                hitters: this.props.location.state.hitters.redirectTeamHitters,
                pitchers: this.props.location.state.pitchers.redirectTeamPitchers,
                hitterFWAR: this.props.location.state.hitterFWAR.redirectTeamHitterFWAR,
                pitcherFWAR: this.props.location.state.pitcherFWAR.redirectTeamPitcherFWAR,
            })
        }
    }

    render() {
        const { classes } = this.props;
        const { displayHitters, displayPitchers } = this.state;

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
                    <div className={classes.tableContainer}>
                        <h1 className={classes.positionText}>
                            {this.state.teamName} Hitters - {this.state.hitterFWAR} FWAR
                        </h1>
                        <EnhancedTableProjections players={this.state.hitters} />
                    </div>
                ) : null}

                {displayPitchers ? (
                    <div className={classes.tableContainer}>
                        <h1 className={classes.positionText}>
                            {this.state.teamName} Pitchers - {this.state.pitcherFWAR} FWAR
                        </h1>
                        <EnhancedPitcherTableProjections players={this.state.pitchers} />
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

                    <h1 className={classes.positionTextContainer}>{data}</h1>
                    <Links />
                </div>
            </div>
        );
    }
}

TeamsPage.contextType = AppContext;

export default withStyles(styles)(TeamsPage);
