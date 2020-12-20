import React from 'react';
import Navbar from '../navbar';
import Links from '../navbar/links.js';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';
import ALWestStandingsTable from './standingsTables/ALWestStandingsTable.js';
import ALCentralStandingsTable from './standingsTables/ALCentralStandingsTable.js';
import ALEastStandingsTable from './standingsTables/ALEastStandingsTable.js';
import NLWestStandingsTable from './standingsTables/NLWestStandingsTable.js';
import NLCentralStandingsTable from './standingsTables/NLCentralStandingsTable.js';
import NLEastStandingsTable from './standingsTables/NLEastStandingsTable.js';

const styles = (theme) => ({
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

class Standings extends React.Component {
    state = {
        teams: [],
        ALWest: [],
        ALCentral: [],
        ALEast: [],
        NLWest: [],
        NLCentral: [],
        NLEast: [],
    };

    componentDidMount() {
        if (this.props.teams !== []) {
            let teams = this.props.teams;
            let ALWest =  [];
            let ALCentral = [];
            let ALEast = [];
            let NLWest = [];
            let NLCentral = [];
            let NLEast = [];

            Object.entries(this.props.teams).map(([key, value], index) => {
                if(value['division'] === 'AL West') {
                    ALWest = ALWest.concat(value)   
                }
                else if(value['division'] === 'AL Central') {
                    ALCentral = ALCentral.concat(value)
                }
                else if(value['division'] === 'AL East') {
                    ALEast = ALEast.concat(value)
                }
                else if(value['division'] === 'NL West') {
                    NLWest = NLWest.concat(value)
                }
                else if(value['division'] === 'NL Central') {
                    NLCentral = NLCentral.concat(value)
                }
                else if(value['division'] === 'NL East') {
                    NLEast = NLEast.concat(value)
                }
                return null;
            })
            this.setState({
                teams,
                ALWest,
                ALCentral,
                ALEast,
                NLWest,
                NLCentral,
                NLEast
            })
        }
    }

    render() {
        const { classes } = this.props;
        const { ALWest, ALCentral, ALEast, NLWest, NLCentral, NLEast } = this.state;

        return (
            <div className={classes.positionDiv}>
                <Navbar />
                <div className={classes.positionSpacingDiv}>
                    <Links />

                    <h1 className={classes.positionText}>
                        <ALWestStandingsTable teams={ALWest} />
                        <ALCentralStandingsTable teams={ALCentral} />
                        <ALEastStandingsTable teams={ALEast} />
                        <NLWestStandingsTable teams={NLWest} />
                        <NLCentralStandingsTable teams={NLCentral} />
                        <NLEastStandingsTable teams={NLEast} />
                    </h1>
                    <Links />
                </div>
            </div>
        );
    }
}

Standings.contextType = AppContext;

export default withStyles(styles)(Standings);
