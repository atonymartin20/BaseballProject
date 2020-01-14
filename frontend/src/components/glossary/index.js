import React from 'react';
import Navbar from '../navbar';
import Links from '../navbar/links.js';
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
    glossaryText: {
        textAlign: 'left',
        paddingLeft: 20,
        width: '100%',
        marginBottom: 10,
    },
    glossaryWelcomeText: {
        marginTop: 20,
        marginBottom: 20,
    },
    homepageDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    homepageSpacingDiv: {
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
    table: {
        width: 'auto',
        marginBottom: 10,
        marginTop: 10,
    },
    tableCell: {
        fontSize: '1.4rem',
        padding: 0,
        margin: 0,
        paddingLeft: '8px',
        paddingRight: '8px',
        width: 'fit-content',
        textAlign: 'center',
        [theme.breakpoints.up(850)]: {
            fontSize: '1.7rem',
        },
    },
    tableRow: {
        fontSize: '1.4rem',
        margin: 0,
        padding: 0,
        height: '25px',
        '&:nth-of-type(even)': {
            backgroundColor: '#e0e3df',
        },
    },
});

class Homepage extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.homepageDiv}>
                <Navbar />
                <div className={classes.homepageSpacingDiv}>
                    <Links />
                    <h1 className={classes.glossaryWelcomeText}>Glossary:</h1>
                    <h1 className={classes.glossaryText}>Traditional Stats</h1>

                    <TableContainer>
                        <Table
                            className={classes.table}
                            aria-labelledby="traditionalStatsTable"
                            aria-label="traditinal stats table"
                        >
                            <TableHead>
                                <TableRow className={classes.tableRow}>
                                    <TableCell
                                        key='Abbreviation'
                                        className={classes.tableCell}
                                    >
                                        Abbreviation
                                        </TableCell>

                                    <TableCell
                                        key='Full Term'
                                        className={classes.tableCell}
                                    >
                                        Full Term
                                        </TableCell>

                                    <TableCell
                                        key='Meaning'
                                        className={classes.tableCell}
                                    >
                                        Meaning
                                        </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                <TableRow
                                    tabIndex={-1}
                                    key='GamesPlayed'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>Games Played</TableCell>
                                    <TableCell className={classes.tableCell}>Games Played</TableCell>
                                    <TableCell className={classes.tableCell}>Games a player appeared in within a given season.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='PAs'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>PAs</TableCell>
                                    <TableCell className={classes.tableCell}>Plate Appearances</TableCell>
                                    <TableCell className={classes.tableCell}>The amount of times a player completes a turn batting.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='BA'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>BA</TableCell>
                                    <TableCell className={classes.tableCell}>Batting Average</TableCell>
                                    <TableCell className={classes.tableCell}>The amount of hits divided by a player's at bats.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='OBP'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>OBP</TableCell>
                                    <TableCell className={classes.tableCell}>On Base Percentage</TableCell>
                                    <TableCell className={classes.tableCell}>How often a player reaches base.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='SLG'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>SLG</TableCell>
                                    <TableCell className={classes.tableCell}>Slugging Percentage</TableCell>
                                    <TableCell className={classes.tableCell}>The total number of bases a player has per a player's at bats.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <h1 className={classes.glossaryText}>Batted Ball Data</h1>

                    <TableContainer>
                        <Table
                            className={classes.table}
                            aria-labelledby="battedBallDataTable"
                            aria-label="Batted Ball Data table"
                        >
                            <TableHead>
                                <TableRow className={classes.tableRow}>
                                    <TableCell
                                        key='Abbreviation'
                                        className={classes.tableCell}
                                    >
                                        Abbreviation
                                        </TableCell>

                                    <TableCell
                                        key='Full Term'
                                        className={classes.tableCell}
                                    >
                                        Full Term
                                        </TableCell>

                                    <TableCell
                                        key='Meaning'
                                        className={classes.tableCell}
                                    >
                                        Meaning
                                        </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <h1 className={classes.glossaryText}>Expected Stats</h1>

                    <TableContainer>
                        <Table
                            className={classes.table}
                            aria-labelledby="expectedStatsTable"
                            aria-label="Expected Stats table"
                        >
                            <TableHead>
                                <TableRow className={classes.tableRow}>
                                    <TableCell
                                        key='Abbreviation'
                                        className={classes.tableCell}
                                    >
                                        Abbreviation
                                        </TableCell>

                                    <TableCell
                                        key='Full Term'
                                        className={classes.tableCell}
                                    >
                                        Full Term
                                        </TableCell>

                                    <TableCell
                                        key='Meaning'
                                        className={classes.tableCell}
                                    >
                                        Meaning
                                        </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <h1 className={classes.glossaryText}>Base Running Stats</h1>

                    <TableContainer>
                        <Table
                            className={classes.table}
                            aria-labelledby="BaseRunningStatsTable"
                            aria-label="Base Running Stats table"
                        >
                            <TableHead>
                                <TableRow className={classes.tableRow}>
                                    <TableCell
                                        key='Abbreviation'
                                        className={classes.tableCell}
                                    >
                                        Abbreviation
                                        </TableCell>

                                    <TableCell
                                        key='Full Term'
                                        className={classes.tableCell}
                                    >
                                        Full Term
                                        </TableCell>

                                    <TableCell
                                        key='Meaning'
                                        className={classes.tableCell}
                                    >
                                        Meaning
                                        </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key=''
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                    <TableCell className={classes.tableCell}></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Links />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Homepage);