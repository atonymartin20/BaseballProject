import React from 'react';
import Navbar from '../navbar';
import Links from '../navbar/links.js';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { AppContext } from '../context/appContext.js';
import OBPTableProjections from '../positionTable/overallTables/OBP/enhancedTableProjections.js';
import OBPTable2021 from '../positionTable/overallTables/OBP/enhancedTable2021.js';
import OBPTable2020 from '../positionTable/overallTables/OBP/enhancedTable2020.js';
import OBPTable2019 from '../positionTable/overallTables/OBP/enhancedTable2019.js';
import OBPTable2018 from '../positionTable/overallTables/OBP/enhancedTable2018.js';
import OBPTable2017 from '../positionTable/overallTables/OBP/enhancedTable2017.js';
import AVGTableProjections from '../positionTable/overallTables/AVG/enhancedTableProjections.js';
import AVGTable2021 from '../positionTable/overallTables/AVG/enhancedTable2021.js';
import AVGTable2020 from '../positionTable/overallTables/AVG/enhancedTable2020.js';
import AVGTable2019 from '../positionTable/overallTables/AVG/enhancedTable2019.js';
import AVGTable2018 from '../positionTable/overallTables/AVG/enhancedTable2018.js';
import AVGTable2017 from '../positionTable/overallTables/AVG/enhancedTable2017.js';

const styles = (theme) => ({
    AVGOBPButtonsList: {
        display: 'flex',
        marginTop: 0,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    AVGOBPButtonsListItem: {
        paddingLeft: 8,
        paddingRight: 8,
        width: 'auto',
    },
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

class Overall extends React.Component {
    state = {
        display2017: false,
        display2018: false,
        display2019: false,
        display2020: false,
        display2021: false,
        displayProjections: true,
        overall: [],
        useAVG: true,
        useOBP: false,
    };

    changeYear2017 = (event) => {
        event.preventDefault();
        this.setState({
            display2017: true,
            display2018: false,
            display2019: false,
            display2020: false,
            display2021: false,
            displayProjections: false,
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
            displayProjections: false,
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
            displayProjections: false,
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
            displayProjections: false,
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
            displayProjections: false,
        });
    };

    changeToProjections = (event) => {
        event.preventDefault();
        this.setState({
            display2017: false,
            display2018: false,
            display2019: false,
            display2020: false,
            display2021: false,
            displayProjections: true,
        });
    }

    useAVGTable = (event) => {
        event.preventDefault();
        this.setState({
            useAVG: true,
            useOBP: false,
        });
    };

    useOBPTable = (event) => {
        event.preventDefault();
        this.setState({
            useAVG: false,
            useOBP: true,
        });
    };

    componentDidMount() {
        if (this.context.state.overall === []) {
            this.context.getAllPlayers();
            this.setState({
                overall: this.context.state.overall,
            });
        } else {
            this.setState({
                overall: this.context.state.overall,
            });
        }
    }

    render() {
        const { classes } = this.props;
        const { display2017, display2018, display2019, display2020, display2021, displayProjections, useAVG, useOBP } = this.state;

        const flipDataButton = {
            fontSize: '1.6rem',
            backgroundColor: '#9AA297',
        };

        const flipDataButtonSelected = {
            fontSize: '1.6rem',
            color: 'white',
            backgroundColor: '#000080',
        };

        const AVGOBPButtonStyling = {
            fontSize: '1.6rem',
            backgroundColor: '#9AA297',
        };

        const AVGOBPButtonStylingSelected = {
            fontSize: '1.6rem',
            color: 'white',
            backgroundColor: '#000080',
        };

        const data = (
            <div className={classes.dataDiv}>
                {display2017 === true && useAVG === true ? (
                    <div>
                        <AVGTable2017 players={this.state.overall} />
                    </div>
                ) : null}

                {display2017 === true && useOBP === true ? (
                    <div>
                        <OBPTable2017 players={this.state.overall} />
                    </div>
                ) : null}

                {display2018 === true && useAVG === true ? (
                    <div>
                        <AVGTable2018 players={this.state.overall} />
                    </div>
                ) : null}

                {display2018 === true && useOBP === true ? (
                    <div>
                        <OBPTable2018 players={this.state.overall} />
                    </div>
                ) : null}

                {display2019 === true && useAVG === true ? (
                    <div>
                        <AVGTable2019 players={this.state.overall} />
                    </div>
                ) : null}

                {display2019 === true && useOBP === true ? (
                    <div>
                        <OBPTable2019 players={this.state.overall} />
                    </div>
                ) : null}

                {display2020 === true && useAVG === true ? (
                    <div>
                        <AVGTable2020 players={this.state.overall} />
                    </div>
                ) : null}

                {display2020 === true && useOBP === true ? (
                    <div>
                        <OBPTable2020 players={this.state.overall} />
                    </div>
                ) : null}

                {display2021 === true && useAVG === true ? (
                    <div>
                        <AVGTable2021 players={this.state.overall} />
                    </div>
                ) : null}

                {display2021 === true && useOBP === true ? (
                    <div>
                        <OBPTable2021 players={this.state.overall} />
                    </div>
                ) : null}

                {displayProjections === true && useAVG === true? (
                    <div>
                        <h1 className={classes.positionText}>
                            2022 Projected Stats from{' '}
                            <a
                                href='https://www.fangraphs.com/projections.aspx?pos=all&stats=pit&type=thebat&team=0&lg=all&players=0'
                                className={classes.websiteLinks}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                The Bat
                            </a> and <a
                                href='https://www.fangraphs.com/projections.aspx?pos=all&stats=pit&type=thebatx&team=0&lg=all&players=0'
                                className={classes.websiteLinks}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                The Bat X
                            </a>. Last Update: 3/27/2022
                        </h1>
                        <AVGTableProjections players={this.state.overall} />
                    </div>
                ) : null}

                {displayProjections === true && useOBP === true ? (
                    <div>
                        <h1 className={classes.positionText}>
                            2022 Projected Stats from{' '}
                            <a
                                href='https://www.fangraphs.com/projections.aspx?pos=all&stats=pit&type=thebat&team=0&lg=all&players=0'
                                className={classes.websiteLinks}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                The Bat
                            </a> and <a
                                href='https://www.fangraphs.com/projections.aspx?pos=all&stats=pit&type=thebatx&team=0&lg=all&players=0'
                                className={classes.websiteLinks}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                The Bat X
                            </a>. Last Update: 2/20/2022
                        </h1>
                        <OBPTableProjections players={this.state.overall} />
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
                    <ListItem className={classes.flipDataListItem} onClick={this.changeToProjections}>
                        <Button style={displayProjections ? flipDataButtonSelected : flipDataButton}>2022 Projections</Button>
                    </ListItem>
                </List>
            </div>
        );

        const AVGOBPButtons = (
            <div>
                <List className={classes.AVGOBPButtonsList}>
                    <ListItem className={classes.AVGOBPButtonsListItem} onClick={this.useAVGTable}>
                        <Button style={this.state.useAVG ? AVGOBPButtonStylingSelected : AVGOBPButtonStyling}>Use AVG</Button>
                    </ListItem>
                    <ListItem className={classes.AVGOBPButtonsListItem} onClick={this.useOBPTable}>
                        <Button style={this.state.useOBP ? AVGOBPButtonStylingSelected : AVGOBPButtonStyling}>Use OBP</Button>
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
                    {AVGOBPButtons}

                    <h1 className={classes.positionText}>{data}</h1>
                    <Links />
                </div>
            </div>
        );
    }
}

Overall.contextType = AppContext;

export default withStyles(styles)(Overall);