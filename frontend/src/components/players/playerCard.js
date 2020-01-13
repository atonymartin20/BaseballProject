import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
// import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom';
import { AppContext } from '../context/appContext.js';
import CloseIcon from "@material-ui/icons/Close";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

const styles = theme => ({
    closeIconStyling: {
        width: '20px',
        height: '20px',
        cursor: "pointer",
        marginRight: '2%',
        alignSelf: 'flex-end',
    },
    container: {
        position: 'fixed',
        zIndex: 1,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'auto',
        backgroundColor: 'rgba(43, 43, 43, 0.3)',
    },
    linkStyling: {
        width: '100%',
        textDecoration: 'none',
        color: 'black',
        display: 'inline-block',
    },
    name: {
        fontSize: '3.5rem',
        width: '100%',
        height: 55,
        margin: 0,
        padding: 0,
        paddingLeft: 60,
        paddingBottom: 15,
        [theme.breakpoints.down(550)]: {
            paddingBottom: 0,
            paddingLeft: 0,
        },
    },
    playerCardContainer: {
        width: '98%',
        border: '1px solid #888888',
        borderRadius: '4px',
        backgroundColor: '#FEFEFE',
        margin: '20vh auto',
        padding: 20,
        zIndex: 20000,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        [theme.breakpoints.down(750)]: {
            width: '100%'
        },
    },
    playerPhoto: {
        height: 180,
    },
    traditionalCardInfoDiv: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    traditionalCardInfoText: {
        paddingLeft: '2%',
        height: 180,
        width: '80%',
        lineHeight: '1.5',
        marginBottom: 25,
    },
});

class PlayerCard extends React.Component {
    state = {
        id: this.props.id,
        firstName: '',
        lastName: '',
        birthday: '',
        bats: '',
        throws: '',
        currentTeam: '',
        imageURL: '',
        primaryPosition: '',
        otherPositions: '',
        GamesPlayed2017: '',
        BA2017: '',
        OBP2017: '',
        SLG2017: '',
        PA2017: '',
        Doubles2017: '',
        HR2017: '',
        Runs2017: '',
        RBI2017: '',
        LineupSlot2017: '',
        GBPercent2017: '',
        LDPercent2017: '',
        FBPercent2017: '',
        PullPercent2017: '',
        CenterPercent2017: '',
        OppoPercent2017: '',
        HRPERFB2017: '',
        HardHitPercent2017: '',
        ExitVelo2017: '',
        FlyBallLineDriveExitVelo2017: '',
        LaunchAngle2017: '',
        BarrelPercent2017: '',
        BABIP2017: '',
        WOBA2017: '',
        xWOBA2017: '',
        xBA2017: '',
        AvgHRDistance2017: '',
        WRCPlus2017: '',
        OPSPlus2017: '',
        BBPercent2017: '',
        KPercent2017: '',
        ChaseRate2017: '',
        ContactPercent2017: '',
        SprintSpeed2017: '',
        StolenBases2017: '',
        StolenBasePercent2017: '',
        FWAR2017: '',
        GamesPlayed2018: '',
        BA2018: '',
        OBP2018: '',
        SLG2018: '',
        PA2018: '',
        Doubles2018: '',
        HR2018: '',
        Runs2018: '',
        RBI2018: '',
        LineupSlot2018: '',
        GBPercent2018: '',
        LDPercent2018: '',
        FBPercent2018: '',
        PullPercent2018: '',
        CenterPercent2018: '',
        OppoPercent2018: '',
        HRPERFB2018: '',
        HardHitPercent2018: '',
        ExitVelo2018: '',
        FlyBallLineDriveExitVelo2018: '',
        LaunchAngle2018: '',
        BarrelPercent2018: '',
        BABIP2018: '',
        WOBA2018: '',
        xWOBA2018: '',
        xBA2018: '',
        AvgHRDistance2018: '',
        WRCPlus2018: '',
        OPSPlus2018: '',
        BBPercent2018: '',
        KPercent2018: '',
        ChaseRate2018: '',
        ContactPercent2018: '',
        SprintSpeed2018: '',
        StolenBases2018: '',
        StolenBasePercent2018: '',
        FWAR2018: '',
        GamesPlayed2019: '',
        BA2019: '',
        OBP2019: '',
        SLG2019: '',
        PA2019: '',
        Doubles2019: '',
        HR2019: '',
        Runs2019: '',
        RBI2019: '',
        LineupSlot2019: '',
        GBPercent2019: '',
        LDPercent2019: '',
        FBPercent2019: '',
        PullPercent2019: '',
        CenterPercent2019: '',
        OppoPercent2019: '',
        HRPERFB2019: '',
        HardHitPercent2019: '',
        ExitVelo2019: '',
        FlyBallLineDriveExitVelo2019: '',
        LaunchAngle2019: '',
        BarrelPercent2019: '',
        BABIP2019: '',
        WOBA2019: '',
        xWOBA2019: '',
        xBA2019: '',
        AvgHRDistance2019: '',
        WRCPlus2019: '',
        OPSPlus2019: '',
        BBPercent2019: '',
        KPercent2019: '',
        ChaseRate2019: '',
        ContactPercent2019: '',
        SprintSpeed2019: '',
        StolenBases2019: '',
        StolenBasePercent2019: '',
        FWAR2019: '',
        SteamerPAProjection: '',
        SteamerAVGProjection: '',
        SteamerOBPProjection: '',
        SteamerSLGProjection: '',
        SteamerHRProjection: '',
        SteamerRunsProjection: '',
        SteamerRBIProjection: '',
        SteamerSBProjection: '',
        SteamerFWARProjection: '',
        traditionalStats: true,
        battedBallStats: false,
        expectedStats: false,
        baseRunningStats: false,
    }

    componentDidMount() {
        const foundIndex = this.context.state.catchers.findIndex(x => x.id === this.props.id);
        this.setState({
            firstName: this.context.state.catchers[foundIndex].firstName,
            lastName: this.context.state.catchers[foundIndex].lastName,
            birthday: this.context.state.catchers[foundIndex].birthday,
            bats: this.context.state.catchers[foundIndex].bats,
            throws: this.context.state.catchers[foundIndex].throws,
            currentTeam: this.context.state.catchers[foundIndex].currentTeam,
            imageURL: this.context.state.catchers[foundIndex].imageURL,
            primaryPosition: this.context.state.catchers[foundIndex].primaryPosition,
            otherPositions: this.context.state.catchers[foundIndex].otherPositions,
            GamesPlayed2017: this.context.state.catchers[foundIndex].GamesPlayed2017,
            BA2017: this.context.state.catchers[foundIndex].BA2017,
            OBP2017: this.context.state.catchers[foundIndex].OBP2017,
            SLG2017: this.context.state.catchers[foundIndex].SLG2017,
            PA2017: this.context.state.catchers[foundIndex].PA2017,
            Doubles2017: this.context.state.catchers[foundIndex].Doubles2017,
            HR2017: this.context.state.catchers[foundIndex].HR2017,
            Runs2017: this.context.state.catchers[foundIndex].Runs2017,
            RBI2017: this.context.state.catchers[foundIndex].RBI2017,
            LineupSlot2017: this.context.state.catchers[foundIndex].LineupSlot2017,
            GBPercent2017: this.context.state.catchers[foundIndex].GBPercent2017,
            LDPercent2017: this.context.state.catchers[foundIndex].LDPercent2017,
            FBPercent2017: this.context.state.catchers[foundIndex].FBPercent2017,
            PullPercent2017: this.context.state.catchers[foundIndex].PullPercent2017,
            CenterPercent2017: this.context.state.catchers[foundIndex].CenterPercent2017,
            OppoPercent2017: this.context.state.catchers[foundIndex].OppoPercent2017,
            HRPERFB2017: this.context.state.catchers[foundIndex].HRPerFB2017,
            HardHitPercent2017: this.context.state.catchers[foundIndex].HardHitPercent2017,
            ExitVelo2017: this.context.state.catchers[foundIndex].ExitVelo2017,
            FlyBallLineDriveExitVelo2017: this.context.state.catchers[foundIndex].FlyBallLineDriveExitVelo2017,
            LaunchAngle2017: this.context.state.catchers[foundIndex].LaunchAngle2017,
            BarrelPercent2017: this.context.state.catchers[foundIndex].BarrelPercent2017,
            BABIP2017: this.context.state.catchers[foundIndex].BABIP2017,
            WOBA2017: this.context.state.catchers[foundIndex].WOBA2017,
            xWOBA2017: this.context.state.catchers[foundIndex].xWOBA2017,
            xBA2017: this.context.state.catchers[foundIndex].xBA2017,
            AvgHRDistance2017: this.context.state.catchers[foundIndex].AvgHRDistance2017,
            WRCPlus2017: this.context.state.catchers[foundIndex].WRCPlus2017,
            OPSPlus2017: this.context.state.catchers[foundIndex].OPSPlus2017,
            BBPercent2017: this.context.state.catchers[foundIndex].BBPercent2017,
            KPercent2017: this.context.state.catchers[foundIndex].KPercent2017,
            ChaseRate2017: this.context.state.catchers[foundIndex].ChaseRate2017,
            ContactPercent2017: this.context.state.catchers[foundIndex].ContactPercent2017,
            SprintSpeed2017: this.context.state.catchers[foundIndex].SprintSpeed2017,
            StolenBases2017: this.context.state.catchers[foundIndex].StolenBases2017,
            StolenBasePercent2017: this.context.state.catchers[foundIndex].StolenBasePercent2017,
            FWAR2017: this.context.state.catchers[foundIndex].FWAR2017,
            GamesPlayed2018: this.context.state.catchers[foundIndex].GamesPlayed2018,
            BA2018: this.context.state.catchers[foundIndex].BA2018,
            OBP2018: this.context.state.catchers[foundIndex].OBP2018,
            SLG2018: this.context.state.catchers[foundIndex].SLG2018,
            PA2018: this.context.state.catchers[foundIndex].PA2018,
            Doubles2018: this.context.state.catchers[foundIndex].Doubles2018,
            HR2018: this.context.state.catchers[foundIndex].HR2018,
            Runs2018: this.context.state.catchers[foundIndex].Runs2018,
            RBI2018: this.context.state.catchers[foundIndex].RBI2018,
            LineupSlot2018: this.context.state.catchers[foundIndex].LineupSlot2018,
            GBPercent2018: this.context.state.catchers[foundIndex].GBPercent2018,
            LDPercent2018: this.context.state.catchers[foundIndex].LDPercent2018,
            FBPercent2018: this.context.state.catchers[foundIndex].FBPercent2018,
            PullPercent2018: this.context.state.catchers[foundIndex].PullPercent2018,
            CenterPercent2018: this.context.state.catchers[foundIndex].CenterPercent2018,
            OppoPercent2018: this.context.state.catchers[foundIndex].OppoPercent2018,
            HRPERFB2018: this.context.state.catchers[foundIndex].HRPERFB2018,
            HardHitPercent2018: this.context.state.catchers[foundIndex].HardHitPercent2018,
            ExitVelo2018: this.context.state.catchers[foundIndex].ExitVelo2018,
            FlyBallLineDriveExitVelo2018: this.context.state.catchers[foundIndex].FlyBallLineDriveExitVelo2018,
            LaunchAngle2018: this.context.state.catchers[foundIndex].LaunchAngle2018,
            BarrelPercent2018: this.context.state.catchers[foundIndex].BarrelPercent2018,
            BABIP2018: this.context.state.catchers[foundIndex].BABIP2018,
            WOBA2018: this.context.state.catchers[foundIndex].WOBA2018,
            xWOBA2018: this.context.state.catchers[foundIndex].xWOBA2018,
            xBA2018: this.context.state.catchers[foundIndex].xBA2018,
            AvgHRDistance2018: this.context.state.catchers[foundIndex].AvgHRDistance2018,
            WRCPlus2018: this.context.state.catchers[foundIndex].WRCPlus2018,
            OPSPlus2018: this.context.state.catchers[foundIndex].OPSPlus2018,
            BBPercent2018: this.context.state.catchers[foundIndex].BBPercent2018,
            KPercent2018: this.context.state.catchers[foundIndex].KPercent2018,
            ChaseRate2018: this.context.state.catchers[foundIndex].ChaseRate2018,
            ContactPercent2018: this.context.state.catchers[foundIndex].ContactPercent2018,
            SprintSpeed2018: this.context.state.catchers[foundIndex].SprintSpeed2018,
            StolenBases2018: this.context.state.catchers[foundIndex].StolenBases2018,
            StolenBasePercent2018: this.context.state.catchers[foundIndex].StolenBasePercent2018,
            FWAR2018: this.context.state.catchers[foundIndex].FWAR2018,
            GamesPlayed2019: this.context.state.catchers[foundIndex].GamesPlayed2019,
            BA2019: this.context.state.catchers[foundIndex].BA2019,
            OBP2019: this.context.state.catchers[foundIndex].OBP2019,
            SLG2019: this.context.state.catchers[foundIndex].SLG2019,
            PA2019: this.context.state.catchers[foundIndex].PA2019,
            Doubles2019: this.context.state.catchers[foundIndex].Doubles2019,
            HR2019: this.context.state.catchers[foundIndex].HR2019,
            Runs2019: this.context.state.catchers[foundIndex].Runs2019,
            RBI2019: this.context.state.catchers[foundIndex].RBI2019,
            LineupSlot2019: this.context.state.catchers[foundIndex].LineupSlot2019,
            GBPercent2019: this.context.state.catchers[foundIndex].GBPercent2019,
            LDPercent2019: this.context.state.catchers[foundIndex].LDPercent2019,
            FBPercent2019: this.context.state.catchers[foundIndex].FBPercent2019,
            PullPercent2019: this.context.state.catchers[foundIndex].PullPercent2019,
            CenterPercent2019: this.context.state.catchers[foundIndex].CenterPercent2019,
            OppoPercent2019: this.context.state.catchers[foundIndex].OppoPercent2019,
            HRPERFB2019: this.context.state.catchers[foundIndex].HRPERFB2019,
            HardHitPercent2019: this.context.state.catchers[foundIndex].HardHitPercent2019,
            ExitVelo2019: this.context.state.catchers[foundIndex].ExitVelo2019,
            FlyBallLineDriveExitVelo2019: this.context.state.catchers[foundIndex].FlyBallLineDriveExitVelo2019,
            LaunchAngle2019: this.context.state.catchers[foundIndex].LaunchAngle2019,
            BarrelPercent2019: this.context.state.catchers[foundIndex].BarrelPercent2019,
            BABIP2019: this.context.state.catchers[foundIndex].BABIP2019,
            WOBA2019: this.context.state.catchers[foundIndex].WOBA2019,
            xWOBA2019: this.context.state.catchers[foundIndex].xWOBA2019,
            xBA2019: this.context.state.catchers[foundIndex].xBA2019,
            AvgHRDistance2019: this.context.state.catchers[foundIndex].AvgHRDistance2019,
            WRCPlus2019: this.context.state.catchers[foundIndex].WRCPlus2019,
            OPSPlus2019: this.context.state.catchers[foundIndex].OPSPlus2019,
            BBPercent2019: this.context.state.catchers[foundIndex].BBPercent2019,
            KPercent2019: this.context.state.catchers[foundIndex].KPercent2019,
            ChaseRate2019: this.context.state.catchers[foundIndex].ChaseRate2019,
            ContactPercent2019: this.context.state.catchers[foundIndex].ContactPercent2019,
            SprintSpeed2019: this.context.state.catchers[foundIndex].SprintSpeed2019,
            StolenBases2019: this.context.state.catchers[foundIndex].StolenBases2019,
            StolenBasePercent2019: this.context.state.catchers[foundIndex].StolenBasePercent2019,
            FWAR2019: this.context.state.catchers[foundIndex].FWAR2019,
            SteamerPAProjection: this.context.state.catchers[foundIndex].SteamerPAProjection,
            SteamerAVGProjection: this.context.state.catchers[foundIndex].SteamerAVGProjection,
            SteamerOBPProjection: this.context.state.catchers[foundIndex].SteamerOBPProjection,
            SteamerSLGProjection: this.context.state.catchers[foundIndex].SteamerSLGProjection,
            SteamerHRProjection: this.context.state.catchers[foundIndex].SteamerHRProjection,
            SteamerRunsProjection: this.context.state.catchers[foundIndex].SteamerRunsProjection,
            SteamerRBIProjection: this.context.state.catchers[foundIndex].SteamerRBIProjection,
            SteamerSBProjection: this.context.state.catchers[foundIndex].SteamerSBProjection,
            SteamerFWARProjection: this.context.state.catchers[foundIndex].SteamerFWARProjection,
        })
    }

    render() {
        const { classes } = this.props;
        const { id, firstName, lastName, birthday, bats, throws, currentTeam, imageURL, primaryPosition, otherPositions, GamesPlayed2017, BA2017, OBP2017, SLG2017, PA2017, Doubles2017, HR2017, Runs2017, RBI2017, LineupSlot2017, GBPercent2017, LDPercent2017, FBPercent2017, PullPercent2017, CenterPercent2017, OppoPercent2017, HRPERFB2017, HardHitPercent2017, ExitVelo2017, FlyBallLineDriveExitVelo2017, LaunchAngle2017, BarrelPercent2017, BABIP2017, WOBA2017, xWOBA2017, xBA2017, AvgHRDistance2017, WRC2017, OPS2017, BBPercent2017, KPercent2017, ChaseRate2017, ContactPercent2017, SprintSpeed2017, StolenBases2017, StolenBasePercent2017, FWAR2017, GamesPlayed2018, BA2018, OBP2018, SLG2018, PA2018, Doubles2018, HR2018, Runs2018, RBI2018, LineupSlot2018, GBPercent2018, LDPercent2018, FBPercent2018, PullPercent2018, CenterPercent2018, OppoPercent2018, HRPERFB2018, HardHitPercent2018, ExitVelo2018, FlyBallLineDriveExitVelo2018, LaunchAngle2018, BarrelPercent2018, BABIP2018, WOBA2018, xWOBA2018, xBA2018, AvgHRDistance2018, WRC2018, OPS2018, BBPercent2018, KPercent2018, ChaseRate2018, ContactPercent2018, SprintSpeed2018, StolenBases2018, StolenBasePercent2018, FWAR2018, GamesPlayed2019, BA2019, OBP2019, SLG2019, PA2019, Doubles2019, HR2019, Runs2019, RBI2019, LineupSlot2019, GBPercent2019, LDPercent2019, FBPercent2019, PullPercent2019, CenterPercent2019, OppoPercent2019, HRPERFB2019, HardHitPercent2019, ExitVelo2019, FlyBallLineDriveExitVelo2019, LaunchAngle2019, BarrelPercent2019, BABIP2019, WOBA2019, xWOBA2019, xBA2019, AvgHRDistance2019, WRC2019, OPS2019, BBPercent2019, KPercent2019, ChaseRate2019, ContactPercent2019, SprintSpeed2019, StolenBases2019, StolenBasePercent2019, FWAR2019, SteamerPAProjection, SteamerAVGProjection, SteamerOBPProjection, SteamerSLGProjection, SteamerHRProjection, SteamerRunsProjection, SteamerRBIProjection, SteamerSBProjection, SteamerFWARProjection, traditionalStats, battedBallStats, expectedStats, baseRunningStats } = this.state;

        const playerCard = (
            <div className={classes.internalPlayerCard}>
                {traditionalStats ? (
                    <div>
                        <TableContainer>
                            <Table
                                className={classes.table}
                                aria-labelledby="tableTitle"
                                size={'small'}
                                aria-label="traditinal stats table"
                            >
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            key='traditionalStatsYear'
                                            className={classes.tableCell}
                                        >
                                            <TableSortLabel>Year</TableSortLabel>
                                        </TableCell>

                                        <TableCell
                                            key='traditionalStatsGamesPlayed'
                                            className={classes.tableCell}
                                        >
                                            <TableSortLabel>Games Played</TableSortLabel>
                                        </TableCell>

                                        <TableCell
                                            key='traditionalStatsBA'
                                            className={classes.tableCell}
                                        >
                                            <TableSortLabel>BA</TableSortLabel>
                                        </TableCell>

                                        <TableCell
                                            key='traditionalStatsOBP'
                                            className={classes.tableCell}
                                        >
                                            <TableSortLabel>OBP</TableSortLabel>
                                        </TableCell>

                                        <TableCell
                                            key='traditionalStatsSLG'
                                            className={classes.tableCell}
                                        >
                                            <TableSortLabel>SLG</TableSortLabel>
                                        </TableCell>

                                        <TableCell
                                            key='traditionalStatsPAs'
                                            className={classes.tableCell}
                                        >
                                            <TableSortLabel>PAs</TableSortLabel>
                                        </TableCell>

                                        <TableCell
                                            key='traditionalStatsDoubles'
                                            className={classes.tableCell}
                                        >
                                            <TableSortLabel>Doubles</TableSortLabel>
                                        </TableCell>

                                        <TableCell
                                            key='traditionalStatsHRs'
                                            className={classes.tableCell}
                                        >
                                            <TableSortLabel>HRs</TableSortLabel>
                                        </TableCell>

                                        <TableCell
                                            key='traditionalStatsRuns'
                                            className={classes.tableCell}
                                        >
                                            <TableSortLabel>Runs</TableSortLabel>
                                        </TableCell>

                                        <TableCell
                                            key='traditionalStatsRBIs'
                                            className={classes.tableCell}
                                        >
                                            <TableSortLabel>RBIs</TableSortLabel>
                                        </TableCell>

                                        <TableCell
                                            key='traditionalStatsSBs'
                                            className={classes.tableCell}
                                        >
                                            <TableSortLabel>SBs</TableSortLabel>
                                        </TableCell>

                                        <TableCell
                                            key='traditionalStatsFWAR'
                                            className={classes.tableCell}
                                        >
                                            <TableSortLabel>FWAR</TableSortLabel>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {
                                        <TableRow
                                            hover
                                            tabIndex={-1}
                                            key=''
                                            className={classes.tableRow}
                                        >
                                            {/* <TableCell component="th" id={labelId} scope="row" className={classes.tableRow}>
                                                {firstName} {lastName}
                                            </TableCell>
                                            <TableCell align="right" className={classes.tableCell}>{row.PAs}</TableCell>
                                            <TableCell align="right" className={classes.tableCell}>{row.AVG}</TableCell>
                                            <TableCell align="right" className={classes.tableCell}>{row.OBP}</TableCell>
                                            <TableCell align="right" className={classes.tableCell}>{row.HR}</TableCell>
                                            <TableCell align="right" className={classes.tableCell}>{row.runs}</TableCell>
                                            <TableCell align="right" className={classes.tableCell}>{row.RBIs}</TableCell>
                                            <TableCell align="right" className={classes.tableCell}>{row.SBs}</TableCell>
                                            <TableCell align="right" className={classes.tableCell}>{row.FWAR}</TableCell> */}
                                        </TableRow>

                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                ) : null
                }

                {battedBallStats ? (
                    <div>
                        {/* 
                            GBPercent2017
                            LDPercent2017
                            FBPercent2017
                            PullPercent2017
                            CenterPercent2017
                            OppoPercent2017
                            HRPERFB2017
                            HardHitPercent2017
                            ExitVelo2017
                            FlyBallLineDriveExitVelo2017
                            LaunchAngle2017
                            BarrelPercent2017
                            AvgHRDistance2017
                            ChaseRate2017
                            ContactPercent2017
                        */}
                    </div>
                ) : null
                }

                {expectedStats ? (
                    <div>
                        {/* 
                            BA
                            xBA
                            BABIP
                            OBP
                            SLG
                            WOBA2017
                            xWOBA2017
                            LineupSlot2017
                            WRC2017
                            OPS2017
                            BBPercent2017
                            KPercent2017
                        */}
                    </div>
                ) : null
                }

                {baseRunningStats ? (
                    <div>
                        {/* 
                            SprintSpeed2017
                            StolenBases2017
                            StolenBasePercent2017
                        */}
                    </div>
                ) : null
                }


            </div>
        )

        const traditionalCardInfo = (
            <div className={classes.traditionalCardInfoDiv}>
                <h1 className={classes.name}>{firstName} {lastName}</h1>
                <img src={imageURL} className={classes.playerPhoto} />
                <h3 className={classes.traditionalCardInfoText}>Bats: {bats} Throws: {throws}<br/>Primary Position: {primaryPosition}<br/>Other Positions: {otherPositions || 'None'}<br/>Birthday: {birthday}<br/>Current Team: {currentTeam}</h3>
                {/* <h1 className={classes.traditionalCardInfoText}>Primary Position: {primaryPosition}</h1>
                <h1 className={classes.traditionalCardInfoText}>Other Positions: {otherPositions || 'None'}</h1>
                <h1 className={classes.traditionalCardInfoText}>Birthday: {birthday}</h1>
                <h1 className={classes.traditionalCardInfoText}>Current Team: {currentTeam}</h1> */}
            </div>
        )

        return (
            <>
                <Card className={classes.container}>
                    <div className={classes.playerCardContainer}>
                        <CloseIcon onClick={() => { this.props.close() }} className={classes.closeIconStyling} />
                        {traditionalCardInfo}
                        {playerCard}
                    </div>
                </Card>
            </>
        )
    }
}

PlayerCard.contextType = AppContext;

export default withStyles(styles)(PlayerCard);