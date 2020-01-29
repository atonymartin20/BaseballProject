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
                                    <TableCell className={classes.tableCell}>On-Base Percentage</TableCell>
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
                                    key='Doubles'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>Doubles</TableCell>
                                    <TableCell className={classes.tableCell}>Doubles</TableCell>
                                    <TableCell className={classes.tableCell}>The amount of times a batter has hit a ball into play and reached second base.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='HRs'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>HRs</TableCell>
                                    <TableCell className={classes.tableCell}>Home Runs</TableCell>
                                    <TableCell className={classes.tableCell}>When a batter hits the ball and is able to circle the bases and reach home safely.  Typically this is when the batter hits a fly ball over the outfield fence.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='Runs'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>Runs</TableCell>
                                    <TableCell className={classes.tableCell}>Runs</TableCell>
                                    <TableCell className={classes.tableCell}>Awarded when a player corsses home plate to score his team a run.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='RBIs'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>RBIs</TableCell>
                                    <TableCell className={classes.tableCell}>Runs Batted In</TableCell>
                                    <TableCell className={classes.tableCell}>When a batter's plate appearance results in a run being scored.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='SBs'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>SBs</TableCell>
                                    <TableCell className={classes.tableCell}>Stolen Bases</TableCell>
                                    <TableCell className={classes.tableCell}>A stolen base occurs when a runner advances to a base to which he is not entitled, and the official scorer rules that the advance should be credited to the action of the runner.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='FWAR'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>FWAR</TableCell>
                                    <TableCell className={classes.tableCell}>Fangraphs Wins Above Replacement</TableCell>
                                    <TableCell className={classes.tableCell}>Fangraphs version of the WAR statistic.  WAR is a non-standard sabermetric baseaball statistic that trys to total a player's total contributions to their team.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='PAVG'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>PAVG</TableCell>
                                    <TableCell className={classes.tableCell}>Fangraphs Wins Above Replacement</TableCell>
                                    <TableCell className={classes.tableCell}>Fangraphs version of the WAR statistic.  WAR is a non-standard sabermetric baseaball statistic that trys to total a player's total contributions to their team.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='POBP'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>POBP</TableCell>
                                    <TableCell className={classes.tableCell}>Fangraphs Wins Above Replacement</TableCell>
                                    <TableCell className={classes.tableCell}>Fangraphs version of the WAR statistic.  WAR is a non-standard sabermetric baseaball statistic that trys to total a player's total contributions to their team.</TableCell>
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
                                    key='GB%'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>GB%</TableCell>
                                    <TableCell className={classes.tableCell}>Ground Ball Percentage</TableCell>
                                    <TableCell className={classes.tableCell}>The percentage of batted balls a player hits on the ground.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='LD%'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>LD%</TableCell>
                                    <TableCell className={classes.tableCell}>Line Drive Percentage</TableCell>
                                    <TableCell className={classes.tableCell}>The percentage of batted balls a player hits in the air at a close to 0 degree angle.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='FB%'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>FB%</TableCell>
                                    <TableCell className={classes.tableCell}>Fly Ball Percentage</TableCell>
                                    <TableCell className={classes.tableCell}>The percentage of batted balls a player hits on the fly.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='Pull%'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>Pull%</TableCell>
                                    <TableCell className={classes.tableCell}>Pull Percentage</TableCell>
                                    <TableCell className={classes.tableCell}>The percentage of batted balls a player hits to the side of the field they bat from.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='Center%'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>Center%</TableCell>
                                    <TableCell className={classes.tableCell}>Center Percentage</TableCell>
                                    <TableCell className={classes.tableCell}>The percentage of batted balls a player hits to the center of the field.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='Oppo%'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>Oppo%</TableCell>
                                    <TableCell className={classes.tableCell}>Opposite Field Percentage</TableCell>
                                    <TableCell className={classes.tableCell}>The percentage of batted balls a player hits to the opposite side of the field they bat from.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='HR/FB'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>HR/FB</TableCell>
                                    <TableCell className={classes.tableCell}>Homers per Fly Ball Percentage</TableCell>
                                    <TableCell className={classes.tableCell}>The percentage of fly balls a player hits that results in home runs.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='Hard Hit%'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>Hard Hit%</TableCell>
                                    <TableCell className={classes.tableCell}>Hard Hit Percentage</TableCell>
                                    <TableCell className={classes.tableCell}>A ball that Baseball Info Solutions grades as a hard hit ball.  Balls are categorized as soft, medium, or hard.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='Exit Velo'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>Exit Velo</TableCell>
                                    <TableCell className={classes.tableCell}>Exit Velocity</TableCell>
                                    <TableCell className={classes.tableCell}>How fast in miles per hour the player hits a pitched ball.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='FB/LD Exit Velo'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>FB/LD Exit Velo</TableCell>
                                    <TableCell className={classes.tableCell}>Fly Ball and Line Drive Exit Velocity</TableCell>
                                    <TableCell className={classes.tableCell}>How fast in miles per hour the player hits a pitched ball for a line drive or fly ball.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='Launch Angle'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>Launch Angle</TableCell>
                                    <TableCell className={classes.tableCell}>Launch Angle</TableCell>
                                    <TableCell className={classes.tableCell}>How high in degrees a ball is hit by the player on average.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='Barrel %'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>Barrel %</TableCell>
                                    <TableCell className={classes.tableCell}>Barrel Percentage</TableCell>
                                    <TableCell className={classes.tableCell}>The percentage of times a player's batted ball is barreled.  A barrel is the perfect combination of exit velocity and launch angle.  A barrel must have an exit velocity of at least 98 miles per hour and a launch angle of about 20 to 35 degrees.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='AVG HR Dist'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>AVG HR Dist</TableCell>
                                    <TableCell className={classes.tableCell}>Average Home Run Distance</TableCell>
                                    <TableCell className={classes.tableCell}>The average distance a player's home runs traveled in a given season.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='Chase%'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>Chase %</TableCell>
                                    <TableCell className={classes.tableCell}>Chase Rate</TableCell>
                                    <TableCell className={classes.tableCell}>The percentage of times a player swang at a pitch outside the strike zone in a given season.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='Contact %'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>Contact %</TableCell>
                                    <TableCell className={classes.tableCell}>Contact Percentage</TableCell>
                                    <TableCell className={classes.tableCell}>The percentage of times a batter makes contact when they swing in a given season.</TableCell>
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
                                    key='BA'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>BA</TableCell>
                                    <TableCell className={classes.tableCell}>Batting Average</TableCell>
                                    <TableCell className={classes.tableCell}>The amount of hits divided by a player's at bats.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='xBA'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>xBA</TableCell>
                                    <TableCell className={classes.tableCell}>Expected Batting Average</TableCell>
                                    <TableCell className={classes.tableCell}>The likelihood that a batted ball becomes a hit.  This is based on exit velocity, launch angle, batted ball type, and sprint speed.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='BABIP'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>BABIP</TableCell>
                                    <TableCell className={classes.tableCell}>Batting Average on Balls In Play</TableCell>
                                    <TableCell className={classes.tableCell}>The batting average on balls put in play.  This excludes strike outs and home runs to give a better understanding of a player's results on balls hit in play.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='OBP'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>OBP</TableCell>
                                    <TableCell className={classes.tableCell}>On-Base Percentage</TableCell>
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
                                    key='WOBA'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>WOBA</TableCell>
                                    <TableCell className={classes.tableCell}>Weighted On-Base Average</TableCell>
                                    <TableCell className={classes.tableCell}>A statistic created by Tom Tango that attempts to measure a player's offensive contributions per plate appearance.  WOBA values how a player reached base and not just if the player reached base.  An extra base hit is more valuable than a single or a walk.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='xWOBA'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>xWOBA</TableCell>
                                    <TableCell className={classes.tableCell}>expected Weighted On-Base Average</TableCell>
                                    <TableCell className={classes.tableCell}>The likelihood that a player reaches base based on exit velocity, launch angle, batted ball type, and sprint Speed. </TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='Lineup Slot'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>Lineup Slot</TableCell>
                                    <TableCell className={classes.tableCell}>Primary Lineup Slot</TableCell>
                                    <TableCell className={classes.tableCell}>The primary lineup slot a player appeared in during a given season.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='WRC+'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>WRC+</TableCell>
                                    <TableCell className={classes.tableCell}>Weighted Runs Created Plus</TableCell>
                                    <TableCell className={classes.tableCell}>A weighted statistic where 100 is average.  This takes the runs created statistic, adjusts it for external factors including ballpark and era, and then adjusts it to fit the scale.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='OPS+'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>OPS+</TableCell>
                                    <TableCell className={classes.tableCell}>On-Base Plus Slugging Plus</TableCell>
                                    <TableCell className={classes.tableCell}>A weighted statistic where 100 is average.  This adds a batter's on-base percentage and slugging percentage, adjusts it for external factors including ballpark and era, and then adjusts it to fit the scale.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='BB%'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>BB%</TableCell>
                                    <TableCell className={classes.tableCell}>Walk Percentage</TableCell>
                                    <TableCell className={classes.tableCell}>The percentage of plate appearances where the batter walked in a given year.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='K%'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>K%</TableCell>
                                    <TableCell className={classes.tableCell}>Strikeout Percentage</TableCell>
                                    <TableCell className={classes.tableCell}>The percentage of plate appearances where the batter struck out in a given year.</TableCell>
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
                                    key='Sprint Speed'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>Sprint Speed</TableCell>
                                    <TableCell className={classes.tableCell}>Sprint Speed</TableCell>
                                    <TableCell className={classes.tableCell}>A measurement of a player's top speed in feet per second.  This is determined in a player's fastest one second window.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='SBs'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>SBs</TableCell>
                                    <TableCell className={classes.tableCell}>Stolen Bases</TableCell>
                                    <TableCell className={classes.tableCell}>A stolen base occurs when a runner advances to a base to which he is not entitled, and the official scorer rules that the advance should be credited to the action of the runner.</TableCell>
                                </TableRow>

                                <TableRow
                                    tabIndex={-1}
                                    key='SB%'
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" scope="row" className={classes.tableCell}>SB%</TableCell>
                                    <TableCell className={classes.tableCell}>Stolen Base Percentage</TableCell>
                                    <TableCell className={classes.tableCell}>The percentage of attempts that a baserunner attempts that are successful in a given year.</TableCell>
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