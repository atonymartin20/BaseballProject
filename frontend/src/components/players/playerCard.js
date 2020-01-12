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
    email: {
        width: '22.5%',
        textAlign: 'center',
        fontSize: '1.5rem',
        overflowWrap: 'break-word',
        padding: '5px 10px',
        [theme.breakpoints.down(1400)]: {
            width: '30%'
        },
        [theme.breakpoints.down(1052)]: {
            display: 'none',
        },
    },
    icons: {
        width: '5%',
        textAlign: 'center',
        padding: '5px 10px',
        [theme.breakpoints.down(1400)]: {
            width: '7.5%'
        },
        [theme.breakpoints.down(1052)]: {
            width: '10%',
        },
        [theme.breakpoints.down(950)]: {
            display: 'none',
        },
    },
    iconStyling: {
        width: 25,
        height: 25,
    },
    linkStyling: {
        width: '100%',
        textDecoration: 'none',
        color: 'black',
        display: 'inline-block',
    },
    playerCardContainer: {
        width: '85%',
        border: '1px solid #888888',
        borderRadius: '4px',
        backgroundColor: '#FEFEFE',
        margin: '20vh auto',
        padding: 20,
        zIndex: 20000,
        [theme.breakpoints.down(750)]: {
            width: '100%'
        },
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
        console.log(`Index: ${foundIndex} ID: ${this.props.id}`);
        this.setState({
            firstName: this.context.state.catchers[this.props.index].firstName,
            lastName: this.context.state.catchers[this.props.index].lastName,
            birthday: this.context.state.catchers[this.props.index].birthday,
            bats: this.context.state.catchers[this.props.index].bats,
            throws: this.context.state.catchers[this.props.index].throws,
            currentTeam: this.context.state.catchers[this.props.index].currentTeam,
            imageURL: this.context.state.catchers[this.props.index].imageURL,
            primaryPosition: this.context.state.catchers[this.props.index].primaryPosition,
            otherPositions: this.context.state.catchers[this.props.index].otherPositions,
            GamesPlayed2017: this.context.state.catchers[this.props.index].GamesPlayed2017,
            BA2017: this.context.state.catchers[this.props.index].BA2017,
            OBP2017: this.context.state.catchers[this.props.index].OBP2017,
            SLG2017: this.context.state.catchers[this.props.index].SLG2017,
            PA2017: this.context.state.catchers[this.props.index].PA2017,
            Doubles2017: this.context.state.catchers[this.props.index].Doubles2017,
            HR2017: this.context.state.catchers[this.props.index].HR2017,
            Runs2017: this.context.state.catchers[this.props.index].Runs2017,
            RBI2017: this.context.state.catchers[this.props.index].RBI2017,
            LineupSlot2017: this.context.state.catchers[this.props.index].LineupSlot2017,
            GBPercent2017: this.context.state.catchers[this.props.index].GBPercent2017,
            LDPercent2017: this.context.state.catchers[this.props.index].LDPercent2017,
            FBPercent2017: this.context.state.catchers[this.props.index].FBPercent2017,
            PullPercent2017: this.context.state.catchers[this.props.index].PullPercent2017,
            CenterPercent2017: this.context.state.catchers[this.props.index].CenterPercent2017,
            OppoPercent2017: this.context.state.catchers[this.props.index].OppoPercent2017,
            HRPERFB2017: this.context.state.catchers[this.props.index].HRPerFB2017,
            HardHitPercent2017: this.context.state.catchers[this.props.index].HardHitPercent2017,
            ExitVelo2017: this.context.state.catchers[this.props.index].ExitVelo2017,
            FlyBallLineDriveExitVelo2017: this.context.state.catchers[this.props.index].FlyBallLineDriveExitVelo2017,
            LaunchAngle2017: this.context.state.catchers[this.props.index].LaunchAngle2017,
            BarrelPercent2017: this.context.state.catchers[this.props.index].BarrelPercent2017,
            BABIP2017: this.context.state.catchers[this.props.index].BABIP2017,
            WOBA2017: this.context.state.catchers[this.props.index].WOBA2017,
            xWOBA2017: this.context.state.catchers[this.props.index].xWOBA2017,
            xBA2017: this.context.state.catchers[this.props.index].xBA2017,
            AvgHRDistance2017: this.context.state.catchers[this.props.index].AvgHRDistance2017,
            WRCPlus2017: this.context.state.catchers[this.props.index].WRCPlus2017,
            OPSPlus2017: this.context.state.catchers[this.props.index].OPSPlus2017,
            BBPercent2017: this.context.state.catchers[this.props.index].BBPercent2017,
            KPercent2017: this.context.state.catchers[this.props.index].KPercent2017,
            ChaseRate2017: this.context.state.catchers[this.props.index].ChaseRate2017,
            ContactPercent2017: this.context.state.catchers[this.props.index].ContactPercent2017,
            SprintSpeed2017: this.context.state.catchers[this.props.index].SprintSpeed2017,
            StolenBases2017: this.context.state.catchers[this.props.index].StolenBases2017,
            StolenBasePercent2017: this.context.state.catchers[this.props.index].StolenBasePercent2017,
            FWAR2017: this.context.state.catchers[this.props.index].FWAR2017,
            GamesPlayed2018: this.context.state.catchers[this.props.index].GamesPlayed2018,
            BA2018: this.context.state.catchers[this.props.index].BA2018,
            OBP2018: this.context.state.catchers[this.props.index].OBP2018,
            SLG2018: this.context.state.catchers[this.props.index].SLG2018,
            PA2018: this.context.state.catchers[this.props.index].PA2018,
            Doubles2018: this.context.state.catchers[this.props.index].Doubles2018,
            HR2018: this.context.state.catchers[this.props.index].HR2018,
            Runs2018: this.context.state.catchers[this.props.index].Runs2018,
            RBI2018: this.context.state.catchers[this.props.index].RBI2018,
            LineupSlot2018: this.context.state.catchers[this.props.index].LineupSlot2018,
            GBPercent2018: this.context.state.catchers[this.props.index].GBPercent2018,
            LDPercent2018: this.context.state.catchers[this.props.index].LDPercent2018,
            FBPercent2018: this.context.state.catchers[this.props.index].FBPercent2018,
            PullPercent2018: this.context.state.catchers[this.props.index].PullPercent2018,
            CenterPercent2018: this.context.state.catchers[this.props.index].CenterPercent2018,
            OppoPercent2018: this.context.state.catchers[this.props.index].OppoPercent2018,
            HRPERFB2018: this.context.state.catchers[this.props.index].HRPERFB2018,
            HardHitPercent2018: this.context.state.catchers[this.props.index].HardHitPercent2018,
            ExitVelo2018: this.context.state.catchers[this.props.index].ExitVelo2018,
            FlyBallLineDriveExitVelo2018: this.context.state.catchers[this.props.index].FlyBallLineDriveExitVelo2018,
            LaunchAngle2018: this.context.state.catchers[this.props.index].LaunchAngle2018,
            BarrelPercent2018: this.context.state.catchers[this.props.index].BarrelPercent2018,
            BABIP2018: this.context.state.catchers[this.props.index].BABIP2018,
            WOBA2018: this.context.state.catchers[this.props.index].WOBA2018,
            xWOBA2018: this.context.state.catchers[this.props.index].xWOBA2018,
            xBA2018: this.context.state.catchers[this.props.index].xBA2018,
            AvgHRDistance2018: this.context.state.catchers[this.props.index].AvgHRDistance2018,
            WRCPlus2018: this.context.state.catchers[this.props.index].WRCPlus2018,
            OPSPlus2018: this.context.state.catchers[this.props.index].OPSPlus2018,
            BBPercent2018: this.context.state.catchers[this.props.index].BBPercent2018,
            KPercent2018: this.context.state.catchers[this.props.index].KPercent2018,
            ChaseRate2018: this.context.state.catchers[this.props.index].ChaseRate2018,
            ContactPercent2018: this.context.state.catchers[this.props.index].ContactPercent2018,
            SprintSpeed2018: this.context.state.catchers[this.props.index].SprintSpeed2018,
            StolenBases2018: this.context.state.catchers[this.props.index].StolenBases2018,
            StolenBasePercent2018: this.context.state.catchers[this.props.index].StolenBasePercent2018,
            FWAR2018: this.context.state.catchers[this.props.index].FWAR2018,
            GamesPlayed2019: this.context.state.catchers[this.props.index].GamesPlayed2019,
            BA2019: this.context.state.catchers[this.props.index].BA2019,
            OBP2019: this.context.state.catchers[this.props.index].OBP2019,
            SLG2019: this.context.state.catchers[this.props.index].SLG2019,
            PA2019: this.context.state.catchers[this.props.index].PA2019,
            Doubles2019: this.context.state.catchers[this.props.index].Doubles2019,
            HR2019: this.context.state.catchers[this.props.index].HR2019,
            Runs2019: this.context.state.catchers[this.props.index].Runs2019,
            RBI2019: this.context.state.catchers[this.props.index].RBI2019,
            LineupSlot2019: this.context.state.catchers[this.props.index].LineupSlot2019,
            GBPercent2019: this.context.state.catchers[this.props.index].GBPercent2019,
            LDPercent2019: this.context.state.catchers[this.props.index].LDPercent2019,
            FBPercent2019: this.context.state.catchers[this.props.index].FBPercent2019,
            PullPercent2019: this.context.state.catchers[this.props.index].PullPercent2019,
            CenterPercent2019: this.context.state.catchers[this.props.index].CenterPercent2019,
            OppoPercent2019: this.context.state.catchers[this.props.index].OppoPercent2019,
            HRPERFB2019: this.context.state.catchers[this.props.index].HRPERFB2019,
            HardHitPercent2019: this.context.state.catchers[this.props.index].HardHitPercent2019,
            ExitVelo2019: this.context.state.catchers[this.props.index].ExitVelo2019,
            FlyBallLineDriveExitVelo2019: this.context.state.catchers[this.props.index].FlyBallLineDriveExitVelo2019,
            LaunchAngle2019: this.context.state.catchers[this.props.index].LaunchAngle2019,
            BarrelPercent2019: this.context.state.catchers[this.props.index].BarrelPercent2019,
            BABIP2019: this.context.state.catchers[this.props.index].BABIP2019,
            WOBA2019: this.context.state.catchers[this.props.index].WOBA2019,
            xWOBA2019: this.context.state.catchers[this.props.index].xWOBA2019,
            xBA2019: this.context.state.catchers[this.props.index].xBA2019,
            AvgHRDistance2019: this.context.state.catchers[this.props.index].AvgHRDistance2019,
            WRCPlus2019: this.context.state.catchers[this.props.index].WRCPlus2019,
            OPSPlus2019: this.context.state.catchers[this.props.index].OPSPlus2019,
            BBPercent2019: this.context.state.catchers[this.props.index].BBPercent2019,
            KPercent2019: this.context.state.catchers[this.props.index].KPercent2019,
            ChaseRate2019: this.context.state.catchers[this.props.index].ChaseRate2019,
            ContactPercent2019: this.context.state.catchers[this.props.index].ContactPercent2019,
            SprintSpeed2019: this.context.state.catchers[this.props.index].SprintSpeed2019,
            StolenBases2019: this.context.state.catchers[this.props.index].StolenBases2019,
            StolenBasePercent2019: this.context.state.catchers[this.props.index].StolenBasePercent2019,
            FWAR2019: this.context.state.catchers[this.props.index].FWAR2019,
            SteamerPAProjection: this.context.state.catchers[this.props.index].SteamerPAProjection,
            SteamerAVGProjection: this.context.state.catchers[this.props.index].SteamerAVGProjection,
            SteamerOBPProjection: this.context.state.catchers[this.props.index].SteamerOBPProjection,
            SteamerSLGProjection: this.context.state.catchers[this.props.index].SteamerSLGProjection,
            SteamerHRProjection: this.context.state.catchers[this.props.index].SteamerHRProjection,
            SteamerRunsProjection: this.context.state.catchers[this.props.index].SteamerRunsProjection,
            SteamerRBIProjection: this.context.state.catchers[this.props.index].SteamerRBIProjection,
            SteamerSBProjection: this.context.state.catchers[this.props.index].SteamerSBProjection,
            SteamerFWARProjection: this.context.state.catchers[this.props.index].SteamerFWARProjection,
        })
        console.log(this.context.state.catchers[this.state.index])
    }

    render() {
        const { classes } = this.props;
        const { id, firstName, lastName, birthday, bats, throws, currentTeam, imageURL, primaryPosition, otherPositions, GamesPlayed2017, BA2017, OBP2017, SLG2017, PA2017, Doubles2017, HR2017, Runs2017, RBI2017, LineupSlot2017, GBPercent2017, LDPercent2017, FBPercent2017, PullPercent2017, CenterPercent2017, OppoPercent2017, HRPERFB2017, HardHitPercent2017, ExitVelo2017, FlyBallLineDriveExitVelo2017, LaunchAngle2017, BarrelPercent2017, BABIP2017, WOBA2017, xWOBA2017, xBA2017, AvgHRDistance2017, WRC2017, OPS2017, BBPercent2017, KPercent2017, ChaseRate2017, ContactPercent2017, SprintSpeed2017, StolenBases2017, StolenBasePercent2017, FWAR2017, GamesPlayed2018, BA2018, OBP2018, SLG2018, PA2018, Doubles2018, HR2018, Runs2018, RBI2018, LineupSlot2018, GBPercent2018, LDPercent2018, FBPercent2018, PullPercent2018, CenterPercent2018, OppoPercent2018, HRPERFB2018, HardHitPercent2018, ExitVelo2018, FlyBallLineDriveExitVelo2018, LaunchAngle2018, BarrelPercent2018, BABIP2018, WOBA2018, xWOBA2018, xBA2018, AvgHRDistance2018, WRC2018, OPS2018, BBPercent2018, KPercent2018, ChaseRate2018, ContactPercent2018, SprintSpeed2018, StolenBases2018, StolenBasePercent2018, FWAR2018, GamesPlayed2019, BA2019, OBP2019, SLG2019, PA2019, Doubles2019, HR2019, Runs2019, RBI2019, LineupSlot2019, GBPercent2019, LDPercent2019, FBPercent2019, PullPercent2019, CenterPercent2019, OppoPercent2019, HRPERFB2019, HardHitPercent2019, ExitVelo2019, FlyBallLineDriveExitVelo2019, LaunchAngle2019, BarrelPercent2019, BABIP2019, WOBA2019, xWOBA2019, xBA2019, AvgHRDistance2019, WRC2019, OPS2019, BBPercent2019, KPercent2019, ChaseRate2019, ContactPercent2019, SprintSpeed2019, StolenBases2019, StolenBasePercent2019, FWAR2019, SteamerPAProjection, SteamerAVGProjection, SteamerOBPProjection, SteamerSLGProjection, SteamerHRProjection, SteamerRunsProjection, SteamerRBIProjection, SteamerSBProjection, SteamerFWARProjection, index, traditionalStats, battedBallStats, expectedStats, baseRunningStats } = this.state;

        console.log(this.props.index, this.state.index, this.state.id, this.state.firstName, this.state.StolenBasePercent2019)

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
            <div>
                <h1>{firstName} {lastName} - {id} - {index}</h1>
                <h3>Bats: {bats} Throws: {throws}</h3>
                <h1>Primary Position: {primaryPosition}</h1>
                <h1>Other Positions: {otherPositions || 'None'}</h1>
                <h1>Birthday: {birthday}</h1>
                <h1>Current Team: {currentTeam}</h1>
                <img src={imageURL} />
                {/* 
                    imageURL
                    birthday
                    currentTeam
                */}
            </div>
        )

        return (
            <>
                <Card className={classes.container}>
                    <div className={classes.playerCardContainer}>
                        <CloseIcon onClick={() => { this.props.close() }} className={classes.closeIconStyling} />
                        {traditionalCardInfo}
                        {playerCard}
                        {/* <TableContainer> */}
                            {/* <Table
                                className={classes.table}
                                aria-labelledby="tableTitle"
                                size={'small'}
                                aria-label="enhanced table"
                            >
                                <TableHead>
                                    <TableRow>
                                        {headCells.map(headCell => (
                                            <TableCell
                                                key={headCell.id}
                                                align={headCell.numeric ? 'right' : 'left'}
                                                sortDirection={orderBy === headCell.id ? order : false}
                                                className={classes.tableCell}
                                            >
                                                <TableSortLabel>
                                                    {headCell.label}
                                                </TableSortLabel>
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        // <TableRow
                                        //     hover
                                        //     tabIndex={-1}
                                        //     key={row.name}
                                        //     className={classes.tableRow}
                                        // >
                                        //     <TableCell component="th" id={labelId} scope="row" className={classes.tableRow}>
                                        //         {firstName} {lastName}
                                        //     </TableCell>
                                        //     <TableCell align="right" className={classes.tableCell}>{row.PAs}</TableCell>
                                        //     <TableCell align="right" className={classes.tableCell}>{row.AVG}</TableCell>
                                        //     <TableCell align="right" className={classes.tableCell}>{row.OBP}</TableCell>
                                        //     <TableCell align="right" className={classes.tableCell}>{row.HR}</TableCell>
                                        //     <TableCell align="right" className={classes.tableCell}>{row.runs}</TableCell>
                                        //     <TableCell align="right" className={classes.tableCell}>{row.RBIs}</TableCell>
                                        //     <TableCell align="right" className={classes.tableCell}>{row.SBs}</TableCell>
                                        //     <TableCell align="right" className={classes.tableCell}>{row.FWAR}</TableCell>
                                        // </TableRow>

                                    }
                                </TableBody>
                            </Table> */}
                        {/* </TableContainer> */}
                    </div>
                </Card>
            </>
        )
    }
}

PlayerCard.contextType = AppContext;

export default withStyles(styles)(PlayerCard);