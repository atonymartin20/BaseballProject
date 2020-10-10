import React from 'react';
import Navbar from '../navbar';
import Links from '../navbar/links.js';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { AppContext } from '../context/appContext.js';
import EnhancedPitcherTable2021 from '../positionTable/pitcherTables/enhancedPitcherTable2021.js';
import EnhancedPitcherTable2020 from '../positionTable/pitcherTables/enhancedPitcherTable2020.js';
import EnhancedPitcherTable2019 from '../positionTable/pitcherTables/enhancedPitcherTable2019.js';
import EnhancedPitcherTable2018 from '../positionTable/pitcherTables/enhancedPitcherTable2018.js';
import EnhancedPitcherTable2017 from '../positionTable/pitcherTables/enhancedPitcherTable2017.js';

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
    websiteLinks: {
        textDecoration: 'none',
        color: 'black',
    },
});

class StartingPitchers extends React.Component {
    state = {
        display2017: false,
        display2018: false,
        display2019: false,
        display2020: false,
        display2021: true,
        startingPitchers: [],
    };

    changeYear2017 = (event) => {
        event.preventDefault();
        this.setState({
            display2017: true,
            display2018: false,
            display2019: false,
            display2020: false,
            display2021: false,
        });
    };

    changeYear2018 = (event) => {
        event.preventDefault();
        this.setState({
            display2017: false,
            display2018: true,
            display2019: false,
            display2020: false,
            display2021: false,
        });
    };

    changeYear2019 = (event) => {
        event.preventDefault();
        this.setState({
            display2017: false,
            display2018: false,
            display2019: true,
            display2020: false,
            display2021: false,
        });
    };

    changeYear2020 = (event) => {
        event.preventDefault();
        this.setState({
            display2017: false,
            display2018: false,
            display2019: false,
            display2020: true,
            display2021: false,
        });
    };

    changeYear2021 = (event) => {
        event.preventDefault();
        this.setState({
            display2017: false,
            display2018: false,
            display2019: false,
            display2020: false,
            display2021: true,
        });
    };

    componentDidMount() {
        if (this.context.state.startingPitchers === []) {
            this.context.getStartingPitchers();
            this.setState({
                startingPitchers: this.context.state.startingPitchers,
            });
        } else {
            this.setState({
                startingPitchers: this.context.state.startingPitchers,
            });
        }
    }

    render() {
        const { classes } = this.props;
        const { display2017, display2018, display2019, display2020, display2021 } = this.state;
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
                {display2017 ? (
                    <div>
                        <EnhancedPitcherTable2017 players={this.state.startingPitchers} />
                    </div>
                ) : null}

                {display2018 ? (
                    <div>
                        <EnhancedPitcherTable2018 players={this.state.startingPitchers} />
                    </div>
                ) : null}

                {display2019 ? (
                    <div>
                        <EnhancedPitcherTable2019 players={this.state.startingPitchers} />
                    </div>
                ) : null}

                {display2020 ? (
                    <div>
                        <EnhancedPitcherTable2020 players={this.state.startingPitchers} />
                    </div>
                ) : null}

                {display2021 ? (
                    <div>
                        <h1 className={classes.positionText}>
                            2021 Projected Stats from{' '}
                            <a
                                href='https://www.fangraphs.com/projections.aspx?pos=all&stats=bat&type=steamer&team=0&lg=all&players=0'
                                className={classes.websiteLinks}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Steamer
                            </a>
                            . These will be updated when available.
                        </h1>
                        <EnhancedPitcherTable2021 players={this.state.startingPitchers} />
                    </div>
                ) : null}
            </div>
        );

        const flipData = (
            <div>
                <List className={classes.flipDataList}>
                    <ListItem className={classes.flipDataListItem} onClick={this.changeYear2017}>
                        <Button style={display2017 ? flipDataButtonSelected : flipDataButton}>2017 Stats</Button>
                    </ListItem>
                    <ListItem className={classes.flipDataListItem} onClick={this.changeYear2018}>
                        <Button style={display2018 ? flipDataButtonSelected : flipDataButton}>2018 Stats</Button>
                    </ListItem>
                    <ListItem className={classes.flipDataListItem} onClick={this.changeYear2019}>
                        <Button style={display2019 ? flipDataButtonSelected : flipDataButton}>2019 Stats</Button>
                    </ListItem>
                    <ListItem className={classes.flipDataListItem} onClick={this.changeYear2020}>
                        <Button style={display2020 ? flipDataButtonSelected : flipDataButton}>2020 Stats</Button>
                    </ListItem>
                    <ListItem className={classes.flipDataListItem} onClick={this.changeYear2021}>
                        <Button style={display2021 ? flipDataButtonSelected : flipDataButton}>2021 Stats</Button>
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

StartingPitchers.contextType = AppContext;

export default withStyles(styles)(StartingPitchers);
