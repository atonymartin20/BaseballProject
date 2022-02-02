import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import { AppContext } from '../context/appContext.js';
import CloseIcon from "@material-ui/icons/Close";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from "@material-ui/core/Button";

const styles = theme => ({
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        width: '100%',
        height: 'auto',
        marginTop: '15px',
    },
    closeIconStyling: {
        width: '20px',
        height: '20px',
        cursor: "pointer",
        marginRight: '2%',
        alignSelf: 'flex-end',
        marginLeft: '10px',
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
    internalPlayerCard: {
        marginTop: 10,
    },
    name: {
        fontSize: '3.5rem',
        width: '100%',
        height: 55,
        margin: 0,
        padding: 0,
        paddingLeft: 25,
        paddingBottom: 15,
        [theme.breakpoints.down(550)]: {
            paddingBottom: 0,
            paddingLeft: 0,
        },
    },
    playerCardContainer: {
        width: 'fit-content',
        minWidth: 650,
        border: '1px solid #888888',
        borderRadius: '4px',
        backgroundColor: '#FEFEFE',
        margin: '20vh auto',
        padding: 20,
        zIndex: 20000,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
    },
    playerPhoto: {
        height: 180,
    },
    selectText: {
        fontSize: '1.5rem',
        backgroundColor: '#F1F1F1',
        fontFamily: 'Roboto, sans-serif',
        paddingRight: 0,
        letterSpacing: '1px',
        paddingLeft: 10,
    },
    table: {
        width: 'auto',
    },
    tableCell: {
        fontSize: '1.4rem',
        borderLeft: '1px solid black',
        padding: 0,
        margin: 0,
        paddingLeft: '8px',
        paddingRight: '8px',
        width: 'fit-content',
        textAlign: 'center',
        '&:last-child': {
            borderRight: '1px solid black',
        },
        [theme.breakpoints.up(850)]: {
            fontSize: '1.7rem',
        },
    },
    tableCellNoPA: {
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
    traditionalCardInfoDiv: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    traditionalCardInfoInnerDiv: {
        display: 'flex',
        width: '100%',
    },
    traditionalCardInfoText: {
        paddingLeft: '2%',
        height: 180,
        width: '100%',
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
        GamesPlayed2020: '',
        BA2020: '',
        OBP2020: '',
        SLG2020: '',
        PA2020: '',
        Doubles2020: '',
        HR2020: '',
        Runs2020: '',
        RBI2020: '',
        LineupSlot2020: '',
        GBPercent2020: '',
        LDPercent2020: '',
        FBPercent2020: '',
        PullPercent2020: '',
        CenterPercent2020: '',
        OppoPercent2020: '',
        HRPERFB2020: '',
        HardHitPercent2020: '',
        ExitVelo2020: '',
        FlyBallLineDriveExitVelo2020: '',
        LaunchAngle2020: '',
        BarrelPercent2020: '',
        BABIP2020: '',
        WOBA2020: '',
        xWOBA2020: '',
        xBA2020: '',
        AvgHRDistance2020: '',
        WRCPlus2020: '',
        OPSPlus2020: '',
        BBPercent2020: '',
        KPercent2020: '',
        ChaseRate2020: '',
        ContactPercent2020: '',
        SprintSpeed2020: '',
        StolenBases2020: '',
        StolenBasePercent2020: '',
        FWAR2020: '',
        GamesPlayed2021: '',
        BA2021: '',
        OBP2021: '',
        SLG2021: '',
        PA2021: '',
        Doubles2021: '',
        HR2021: '',
        Runs2021: '',
        RBI2021: '',
        LineupSlot2021: '',
        GBPercent2021: '',
        LDPercent2021: '',
        FBPercent2021: '',
        PullPercent2021: '',
        CenterPercent2021: '',
        OppoPercent2021: '',
        HRPERFB2021: '',
        HardHitPercent2021: '',
        ExitVelo2021: '',
        FlyBallLineDriveExitVelo2021: '',
        LaunchAngle2021: '',
        BarrelPercent2021: '',
        BABIP2021: '',
        WOBA2021: '',
        xWOBA2021: '',
        xBA2021: '',
        AvgHRDistance2021: '',
        WRCPlus2021: '',
        OPSPlus2021: '',
        BBPercent2021: '',
        KPercent2021: '',
        ChaseRate2021: '',
        ContactPercent2021: '',
        SprintSpeed2021: '',
        StolenBases2021: '',
        StolenBasePercent2021: '',
        FWAR2021: '',
        TheBatXPAProjection: '',
        TheBatXAVGProjection: '',
        TheBatXOBPProjection: '',
        TheBatXSLGProjection: '',
        TheBatXDoublesProjection: '',
        TheBatXHRProjection: '',
        TheBatXRunsProjection: '',
        TheBatXRBIProjection: '',
        TheBatXSBProjection: '',
        TheBatXFWARProjection: '',
        Games2017: 0,
        GamesStarted2017: 0,
        InningsPitched2017: 0.0,
        InningsPitchedPerGameStarted2017: 0.0,
        QS2017: 0,
        ERA2017: 0.0,
        ERAPlus2017: 0,
        FIP2017: 0.0,
        xFIP2017: 0.0,
        SIERA2017: 0.0,
        WHIP2017: 0.0,
        RawKs2017: 0,
        HitsPer92017: 0.0,
        HRsPer92017: 0.0,
        BBPer92017: 0.0,
        KPer92017: 0.0,
        KDividedByBB2017: 0.0,
        Saves2017: 0,
        PitcherKPercent2017: '',
        PitcherBBPercent2017: '',
        KMinusBBPercent2017: '',
        PitcherBABIP2017: .0,
        LOBPercent2017: '',
        HRPerFBPercent2017: '',
        PitcherGBPercent2017: '',
        PitcherLDPercent2017: '',
        PitcherFBPercent2017: '',
        IFFBPercent2017: '',
        SoftContactPercent2017: '',
        MediumContactPercent2017: '',
        HardContactPercent2017: '',
        FirstStrikePercent2017: '',
        PitcherExitVelo2017: 0.0,
        PitcherFlyBallLineDriveExitVelo2017: 0.0,
        PitcherBarrelPercent2017: '',
        PitcherLaunchAngle2017: 0.0,
        AVGFastballVelo2017: 0.0,
        MaxFastballVelo2017: 0.0,
        FourSeamFastballUsagePercent2017: '',
        SinkerUsagePercent2017: '',
        CutterUsagePercent2017: '',
        SliderUsagePercent2017: '',
        ChangeupUsagePercent2017: '',
        CurveUsagePercent2017: '',
        SplitterUsagePercent2017: '',
        KnuckleCurveUsagePercent2017: '',
        PitcherFWAR2017: 0.0,
        Games2018: 0,
        GamesStarted2018: 0,
        InningsPitched2018: 0.0,
        InningsPitchedPerGameStarted2018: 0.0,
        QS2018: 0,
        ERA2018: 0.0,
        ERAPlus2018: 0,
        FIP2018: 0.0,
        xFIP2018: 0.0,
        SIERA2018: 0.0,
        WHIP2018: 0.0,
        RawKs2018: 0,
        HitsPer92018: 0.0,
        HRsPer92018: 0.0,
        BBPer92018: 0.0,
        KPer92018: 0.0,
        KDividedByBB2018: 0.0,
        Saves2018: 0,
        PitcherKPercent2018: '',
        PitcherBBPercent2018: '',
        KMinusBBPercent2018: '',
        PitcherBABIP2018: .0,
        LOBPercent2018: '',
        HRPerFBPercent2018: '',
        PitcherGBPercent2018: '',
        PitcherLDPercent2018: '',
        PitcherFBPercent2018: '',
        IFFBPercent2018: '',
        SoftContactPercent2018: '',
        MediumContactPercent2018: '',
        HardContactPercent2018: '',
        FirstStrikePercent2018: '',
        PitcherExitVelo2018: 0.0,
        PitcherFlyBallLineDriveExitVelo2018: 0.0,
        PitcherBarrelPercent2018: '',
        PitcherLaunchAngle2018: 0.0,
        AVGFastballVelo2018: 0.0,
        MaxFastballVelo2018: 0.0,
        FourSeamFastballUsagePercent2018: '',
        SinkerUsagePercent2018: '',
        CutterUsagePercent2018: '',
        SliderUsagePercent2018: '',
        ChangeupUsagePercent2018: '',
        CurveUsagePercent2018: '',
        SplitterUsagePercent2018: '',
        KnuckleCurveUsagePercent2018: '',
        PitcherFWAR2018: 0.0,
        Games2019: 0,
        GamesStarted2019: 0,
        InningsPitched2019: 0.0,
        InningsPitchedPerGameStarted2019: 0.0,
        QS2019: 0,
        ERA2019: 0.0,
        ERAPlus2019: 0,
        FIP2019: 0.0,
        xFIP2019: 0.0,
        SIERA2019: 0.0,
        WHIP2019: 0.0,
        RawKs2019: 0,
        HitsPer92019: 0.0,
        HRsPer92019: 0.0,
        BBPer92019: 0.0,
        KPer92019: 0.0,
        KDividedByBB2019: 0.0,
        Saves2019: 0,
        PitcherKPercent2019: '',
        PitcherBBPercent2019: '',
        KMinusBBPercent2019: '',
        PitcherBABIP2019: .0,
        LOBPercent2019: '',
        HRPerFBPercent2019: '',
        PitcherGBPercent2019: '',
        PitcherLDPercent2019: '',
        PitcherFBPercent2019: '',
        IFFBPercent2019: '',
        SoftContactPercent2019: '',
        MediumContactPercent2019: '',
        HardContactPercent2019: '',
        FirstStrikePercent2019: '',
        PitcherExitVelo2019: 0.0,
        PitcherFlyBallLineDriveExitVelo2019: 0.0,
        PitcherBarrelPercent2019: '',
        PitcherLaunchAngle2019: 0.0,
        AVGFastballVelo2019: 0.0,
        MaxFastballVelo2019: 0.0,
        FourSeamFastballUsagePercent2019: '',
        SinkerUsagePercent2019: '',
        CutterUsagePercent2019: '',
        SliderUsagePercent2019: '',
        ChangeupUsagePercent2019: '',
        CurveUsagePercent2019: '',
        SplitterUsagePercent2019: '',
        KnuckleCurveUsagePercent2019: '',
        PitcherFWAR2019: 0.0,
        Games2020: 0,
        GamesStarted2020: 0,
        InningsPitched2020: 0.0,
        InningsPitchedPerGameStarted2020: 0.0,
        QS2020: 0,
        ERA2020: 0.0,
        ERAPlus2020: 0,
        FIP2020: 0.0,
        xFIP2020: 0.0,
        SIERA2020: 0.0,
        WHIP2020: 0.0,
        RawKs2020: 0,
        HitsPer92020: 0.0,
        HRsPer92020: 0.0,
        BBPer92020: 0.0,
        KPer92020: 0.0,
        KDividedByBB2020: 0.0,
        Saves2020: 0,
        PitcherKPercent2020: '',
        PitcherBBPercent2020: '',
        KMinusBBPercent2020: '',
        PitcherBABIP2020: .0,
        LOBPercent2020: '',
        HRPerFBPercent2020: '',
        PitcherGBPercent2020: '',
        PitcherLDPercent2020: '',
        PitcherFBPercent2020: '',
        IFFBPercent2020: '',
        SoftContactPercent2020: '',
        MediumContactPercent2020: '',
        HardContactPercent2020: '',
        FirstStrikePercent2020: '',
        PitcherExitVelo2020: 0.0,
        PitcherFlyBallLineDriveExitVelo2020: 0.0,
        PitcherBarrelPercent2020: '',
        PitcherLaunchAngle2020: 0.0,
        AVGFastballVelo2020: 0.0,
        MaxFastballVelo2020: 0.0,
        FourSeamFastballUsagePercent2020: '',
        SinkerUsagePercent2020: '',
        CutterUsagePercent2020: '',
        SliderUsagePercent2020: '',
        ChangeupUsagePercent2020: '',
        CurveUsagePercent2020: '',
        SplitterUsagePercent2020: '',
        KnuckleCurveUsagePercent2020: '',
        PitcherFWAR2020: 0.0,
        Games2021: 0,
        GamesStarted2021: 0,
        InningsPitched2021: 0.0,
        InningsPitchedPerGameStarted2021: 0.0,
        QS2021: 0,
        ERA2021: 0.0,
        ERAPlus2021: 0,
        FIP2021: 0.0,
        xFIP2021: 0.0,
        SIERA2021: 0.0,
        WHIP2021: 0.0,
        RawKs2021: 0,
        HitsPer92021: 0.0,
        HRsPer92021: 0.0,
        BBPer92021: 0.0,
        KPer92021: 0.0,
        KDividedByBB2021: 0.0,
        Saves2021: 0,
        PitcherKPercent2021: '',
        PitcherBBPercent2021: '',
        KMinusBBPercent2021: '',
        PitcherBABIP2021: .0,
        LOBPercent2021: '',
        HRPerFBPercent2021: '',
        PitcherGBPercent2021: '',
        PitcherLDPercent2021: '',
        PitcherFBPercent2021: '',
        IFFBPercent2021: '',
        SoftContactPercent2021: '',
        MediumContactPercent2021: '',
        HardContactPercent2021: '',
        FirstStrikePercent2021: '',
        PitcherExitVelo2021: 0.0,
        PitcherFlyBallLineDriveExitVelo2021: 0.0,
        PitcherBarrelPercent2021: '',
        PitcherLaunchAngle2021: 0.0,
        AVGFastballVelo2021: 0.0,
        MaxFastballVelo2021: 0.0,
        FourSeamFastballUsagePercent2021: '',
        SinkerUsagePercent2021: '',
        CutterUsagePercent2021: '',
        SliderUsagePercent2021: '',
        ChangeupUsagePercent2021: '',
        CurveUsagePercent2021: '',
        SplitterUsagePercent2021: '',
        KnuckleCurveUsagePercent2021: '',
        PitcherFWAR2021: 0.0,
        TheBatGamesProjection: 0,
        TheBatGamesStartedProjection: 0,
        TheBatInningsPitchedProjection: 0.0,
        TheBatQSProjection: 0.0,
        TheBatERAProjection: 0.0,
        TheBatFIPProjection: 0.0,
        TheBatWHIPProjection: 0.0,
        TheBatRawKsProjection: 0,
        TheBatKPer9Projection: 0.0,
        TheBatSavesProjection: 0,
        PitcherTheBatFWARProjection: 0.0,
        traditionalStats: true,
        battedBallStats: false,
        expectedStats: false,
        baseRunningStats: false,
        advancedStats: false,
        opponentContactStats: false,
        pitchUsageStats: false,
        labelValue: 'traditionalStats',
        showHitterCard: false,
        showPitcherCard: false,
    }

    componentDidMount() {
        const foundIndex = this.context.state.overall.findIndex(x => x.id === this.props.id);
        this.setState({
            firstName: this.context.state.overall[foundIndex].firstName,
            lastName: this.context.state.overall[foundIndex].lastName,
            birthday: this.context.state.overall[foundIndex].birthday,
            bats: this.context.state.overall[foundIndex].bats,
            throws: this.context.state.overall[foundIndex].throws,
            currentTeam: this.context.state.overall[foundIndex].currentTeam,
            imageURL: this.context.state.overall[foundIndex].imageURL,
            primaryPosition: this.context.state.overall[foundIndex].primaryPosition,
            otherPositions: this.context.state.overall[foundIndex].otherPositions,
            GamesPlayed2017: this.context.state.overall[foundIndex].GamesPlayed2017,
            BA2017: this.context.state.overall[foundIndex].BA2017,
            OBP2017: this.context.state.overall[foundIndex].OBP2017,
            SLG2017: this.context.state.overall[foundIndex].SLG2017,
            PA2017: this.context.state.overall[foundIndex].PA2017,
            Doubles2017: this.context.state.overall[foundIndex].Doubles2017,
            HR2017: this.context.state.overall[foundIndex].HR2017,
            Runs2017: this.context.state.overall[foundIndex].Runs2017,
            RBI2017: this.context.state.overall[foundIndex].RBI2017,
            LineupSlot2017: this.context.state.overall[foundIndex].LineupSlot2017,
            GBPercent2017: this.context.state.overall[foundIndex].GBPercent2017,
            LDPercent2017: this.context.state.overall[foundIndex].LDPercent2017,
            FBPercent2017: this.context.state.overall[foundIndex].FBPercent2017,
            PullPercent2017: this.context.state.overall[foundIndex].PullPercent2017,
            CenterPercent2017: this.context.state.overall[foundIndex].CenterPercent2017,
            OppoPercent2017: this.context.state.overall[foundIndex].OppoPercent2017,
            HRPerFB2017: this.context.state.overall[foundIndex].HRPerFB2017,
            HardHitPercent2017: this.context.state.overall[foundIndex].HardHitPercent2017,
            ExitVelo2017: this.context.state.overall[foundIndex].ExitVelo2017,
            FlyBallLineDriveExitVelo2017: this.context.state.overall[foundIndex].FlyBallLineDriveExitVelo2017,
            LaunchAngle2017: this.context.state.overall[foundIndex].LaunchAngle2017,
            BarrelPercent2017: this.context.state.overall[foundIndex].BarrelPercent2017,
            BABIP2017: this.context.state.overall[foundIndex].BABIP2017,
            WOBA2017: this.context.state.overall[foundIndex].WOBA2017,
            xWOBA2017: this.context.state.overall[foundIndex].xWOBA2017,
            xBA2017: this.context.state.overall[foundIndex].xBA2017,
            AvgHRDistance2017: this.context.state.overall[foundIndex].AvgHRDistance2017,
            WRCPlus2017: this.context.state.overall[foundIndex].WRCPlus2017,
            OPSPlus2017: this.context.state.overall[foundIndex].OPSPlus2017,
            BBPercent2017: this.context.state.overall[foundIndex].BBPercent2017,
            KPercent2017: this.context.state.overall[foundIndex].KPercent2017,
            ChaseRate2017: this.context.state.overall[foundIndex].ChaseRate2017,
            ContactPercent2017: this.context.state.overall[foundIndex].ContactPercent2017,
            SprintSpeed2017: this.context.state.overall[foundIndex].SprintSpeed2017,
            StolenBases2017: this.context.state.overall[foundIndex].StolenBases2017,
            StolenBasePercent2017: this.context.state.overall[foundIndex].StolenBasePercent2017,
            FWAR2017: this.context.state.overall[foundIndex].FWAR2017,
            GamesPlayed2018: this.context.state.overall[foundIndex].GamesPlayed2018,
            BA2018: this.context.state.overall[foundIndex].BA2018,
            OBP2018: this.context.state.overall[foundIndex].OBP2018,
            SLG2018: this.context.state.overall[foundIndex].SLG2018,
            PA2018: this.context.state.overall[foundIndex].PA2018,
            Doubles2018: this.context.state.overall[foundIndex].Doubles2018,
            HR2018: this.context.state.overall[foundIndex].HR2018,
            Runs2018: this.context.state.overall[foundIndex].Runs2018,
            RBI2018: this.context.state.overall[foundIndex].RBI2018,
            LineupSlot2018: this.context.state.overall[foundIndex].LineupSlot2018,
            GBPercent2018: this.context.state.overall[foundIndex].GBPercent2018,
            LDPercent2018: this.context.state.overall[foundIndex].LDPercent2018,
            FBPercent2018: this.context.state.overall[foundIndex].FBPercent2018,
            PullPercent2018: this.context.state.overall[foundIndex].PullPercent2018,
            CenterPercent2018: this.context.state.overall[foundIndex].CenterPercent2018,
            OppoPercent2018: this.context.state.overall[foundIndex].OppoPercent2018,
            HRPerFB2018: this.context.state.overall[foundIndex].HRPerFB2018,
            HardHitPercent2018: this.context.state.overall[foundIndex].HardHitPercent2018,
            ExitVelo2018: this.context.state.overall[foundIndex].ExitVelo2018,
            FlyBallLineDriveExitVelo2018: this.context.state.overall[foundIndex].FlyBallLineDriveExitVelo2018,
            LaunchAngle2018: this.context.state.overall[foundIndex].LaunchAngle2018,
            BarrelPercent2018: this.context.state.overall[foundIndex].BarrelPercent2018,
            BABIP2018: this.context.state.overall[foundIndex].BABIP2018,
            WOBA2018: this.context.state.overall[foundIndex].WOBA2018,
            xWOBA2018: this.context.state.overall[foundIndex].xWOBA2018,
            xBA2018: this.context.state.overall[foundIndex].xBA2018,
            AvgHRDistance2018: this.context.state.overall[foundIndex].AvgHRDistance2018,
            WRCPlus2018: this.context.state.overall[foundIndex].WRCPlus2018,
            OPSPlus2018: this.context.state.overall[foundIndex].OPSPlus2018,
            BBPercent2018: this.context.state.overall[foundIndex].BBPercent2018,
            KPercent2018: this.context.state.overall[foundIndex].KPercent2018,
            ChaseRate2018: this.context.state.overall[foundIndex].ChaseRate2018,
            ContactPercent2018: this.context.state.overall[foundIndex].ContactPercent2018,
            SprintSpeed2018: this.context.state.overall[foundIndex].SprintSpeed2018,
            StolenBases2018: this.context.state.overall[foundIndex].StolenBases2018,
            StolenBasePercent2018: this.context.state.overall[foundIndex].StolenBasePercent2018,
            FWAR2018: this.context.state.overall[foundIndex].FWAR2018,
            GamesPlayed2019: this.context.state.overall[foundIndex].GamesPlayed2019,
            BA2019: this.context.state.overall[foundIndex].BA2019,
            OBP2019: this.context.state.overall[foundIndex].OBP2019,
            SLG2019: this.context.state.overall[foundIndex].SLG2019,
            PA2019: this.context.state.overall[foundIndex].PA2019,
            Doubles2019: this.context.state.overall[foundIndex].Doubles2019,
            HR2019: this.context.state.overall[foundIndex].HR2019,
            Runs2019: this.context.state.overall[foundIndex].Runs2019,
            RBI2019: this.context.state.overall[foundIndex].RBI2019,
            LineupSlot2019: this.context.state.overall[foundIndex].LineupSlot2019,
            GBPercent2019: this.context.state.overall[foundIndex].GBPercent2019,
            LDPercent2019: this.context.state.overall[foundIndex].LDPercent2019,
            FBPercent2019: this.context.state.overall[foundIndex].FBPercent2019,
            PullPercent2019: this.context.state.overall[foundIndex].PullPercent2019,
            CenterPercent2019: this.context.state.overall[foundIndex].CenterPercent2019,
            OppoPercent2019: this.context.state.overall[foundIndex].OppoPercent2019,
            HRPerFB2019: this.context.state.overall[foundIndex].HRPerFB2019,
            HardHitPercent2019: this.context.state.overall[foundIndex].HardHitPercent2019,
            ExitVelo2019: this.context.state.overall[foundIndex].ExitVelo2019,
            FlyBallLineDriveExitVelo2019: this.context.state.overall[foundIndex].FlyBallLineDriveExitVelo2019,
            LaunchAngle2019: this.context.state.overall[foundIndex].LaunchAngle2019,
            BarrelPercent2019: this.context.state.overall[foundIndex].BarrelPercent2019,
            BABIP2019: this.context.state.overall[foundIndex].BABIP2019,
            WOBA2019: this.context.state.overall[foundIndex].WOBA2019,
            xWOBA2019: this.context.state.overall[foundIndex].xWOBA2019,
            xBA2019: this.context.state.overall[foundIndex].xBA2019,
            AvgHRDistance2019: this.context.state.overall[foundIndex].AvgHRDistance2019,
            WRCPlus2019: this.context.state.overall[foundIndex].WRCPlus2019,
            OPSPlus2019: this.context.state.overall[foundIndex].OPSPlus2019,
            BBPercent2019: this.context.state.overall[foundIndex].BBPercent2019,
            KPercent2019: this.context.state.overall[foundIndex].KPercent2019,
            ChaseRate2019: this.context.state.overall[foundIndex].ChaseRate2019,
            ContactPercent2019: this.context.state.overall[foundIndex].ContactPercent2019,
            SprintSpeed2019: this.context.state.overall[foundIndex].SprintSpeed2019,
            StolenBases2019: this.context.state.overall[foundIndex].StolenBases2019,
            StolenBasePercent2019: this.context.state.overall[foundIndex].StolenBasePercent2019,
            FWAR2019: this.context.state.overall[foundIndex].FWAR2019,
            GamesPlayed2020: this.context.state.overall[foundIndex].GamesPlayed2020,
            BA2020: this.context.state.overall[foundIndex].BA2020,
            OBP2020: this.context.state.overall[foundIndex].OBP2020,
            SLG2020: this.context.state.overall[foundIndex].SLG2020,
            PA2020: this.context.state.overall[foundIndex].PA2020,
            Doubles2020: this.context.state.overall[foundIndex].Doubles2020,
            HR2020: this.context.state.overall[foundIndex].HR2020,
            Runs2020: this.context.state.overall[foundIndex].Runs2020,
            RBI2020: this.context.state.overall[foundIndex].RBI2020,
            LineupSlot2020: this.context.state.overall[foundIndex].LineupSlot2020,
            GBPercent2020: this.context.state.overall[foundIndex].GBPercent2020,
            LDPercent2020: this.context.state.overall[foundIndex].LDPercent2020,
            FBPercent2020: this.context.state.overall[foundIndex].FBPercent2020,
            PullPercent2020: this.context.state.overall[foundIndex].PullPercent2020,
            CenterPercent2020: this.context.state.overall[foundIndex].CenterPercent2020,
            OppoPercent2020: this.context.state.overall[foundIndex].OppoPercent2020,
            HRPerFB2020: this.context.state.overall[foundIndex].HRPerFB2020,
            HardHitPercent2020: this.context.state.overall[foundIndex].HardHitPercent2020,
            ExitVelo2020: this.context.state.overall[foundIndex].ExitVelo2020,
            FlyBallLineDriveExitVelo2020: this.context.state.overall[foundIndex].FlyBallLineDriveExitVelo2020,
            LaunchAngle2020: this.context.state.overall[foundIndex].LaunchAngle2020,
            BarrelPercent2020: this.context.state.overall[foundIndex].BarrelPercent2020,
            BABIP2020: this.context.state.overall[foundIndex].BABIP2020,
            WOBA2020: this.context.state.overall[foundIndex].WOBA2020,
            xWOBA2020: this.context.state.overall[foundIndex].xWOBA2020,
            xBA2020: this.context.state.overall[foundIndex].xBA2020,
            AvgHRDistance2020: this.context.state.overall[foundIndex].AvgHRDistance2020,
            WRCPlus2020: this.context.state.overall[foundIndex].WRCPlus2020,
            OPSPlus2020: this.context.state.overall[foundIndex].OPSPlus2020,
            BBPercent2020: this.context.state.overall[foundIndex].BBPercent2020,
            KPercent2020: this.context.state.overall[foundIndex].KPercent2020,
            ChaseRate2020: this.context.state.overall[foundIndex].ChaseRate2020,
            ContactPercent2020: this.context.state.overall[foundIndex].ContactPercent2020,
            SprintSpeed2020: this.context.state.overall[foundIndex].SprintSpeed2020,
            StolenBases2020: this.context.state.overall[foundIndex].StolenBases2020,
            StolenBasePercent2020: this.context.state.overall[foundIndex].StolenBasePercent2020,
            FWAR2020: this.context.state.overall[foundIndex].FWAR2020,
            GamesPlayed2021: this.context.state.overall[foundIndex].GamesPlayed2021,
            BA2021: this.context.state.overall[foundIndex].BA2021,
            OBP2021: this.context.state.overall[foundIndex].OBP2021,
            SLG2021: this.context.state.overall[foundIndex].SLG2021,
            PA2021: this.context.state.overall[foundIndex].PA2021,
            Doubles2021: this.context.state.overall[foundIndex].Doubles2021,
            HR2021: this.context.state.overall[foundIndex].HR2021,
            Runs2021: this.context.state.overall[foundIndex].Runs2021,
            RBI2021: this.context.state.overall[foundIndex].RBI2021,
            LineupSlot2021: this.context.state.overall[foundIndex].LineupSlot2021,
            GBPercent2021: this.context.state.overall[foundIndex].GBPercent2021,
            LDPercent2021: this.context.state.overall[foundIndex].LDPercent2021,
            FBPercent2021: this.context.state.overall[foundIndex].FBPercent2021,
            PullPercent2021: this.context.state.overall[foundIndex].PullPercent2021,
            CenterPercent2021: this.context.state.overall[foundIndex].CenterPercent2021,
            OppoPercent2021: this.context.state.overall[foundIndex].OppoPercent2021,
            HRPerFB2021: this.context.state.overall[foundIndex].HRPerFB2021,
            HardHitPercent2021: this.context.state.overall[foundIndex].HardHitPercent2021,
            ExitVelo2021: this.context.state.overall[foundIndex].ExitVelo2021,
            FlyBallLineDriveExitVelo2021: this.context.state.overall[foundIndex].FlyBallLineDriveExitVelo2021,
            LaunchAngle2021: this.context.state.overall[foundIndex].LaunchAngle2021,
            BarrelPercent2021: this.context.state.overall[foundIndex].BarrelPercent2021,
            BABIP2021: this.context.state.overall[foundIndex].BABIP2021,
            WOBA2021: this.context.state.overall[foundIndex].WOBA2021,
            xWOBA2021: this.context.state.overall[foundIndex].xWOBA2021,
            xBA2021: this.context.state.overall[foundIndex].xBA2021,
            AvgHRDistance2021: this.context.state.overall[foundIndex].AvgHRDistance2021,
            WRCPlus2021: this.context.state.overall[foundIndex].WRCPlus2021,
            OPSPlus2021: this.context.state.overall[foundIndex].OPSPlus2021,
            BBPercent2021: this.context.state.overall[foundIndex].BBPercent2021,
            KPercent2021: this.context.state.overall[foundIndex].KPercent2021,
            ChaseRate2021: this.context.state.overall[foundIndex].ChaseRate2021,
            ContactPercent2021: this.context.state.overall[foundIndex].ContactPercent2021,
            SprintSpeed2021: this.context.state.overall[foundIndex].SprintSpeed2021,
            StolenBases2021: this.context.state.overall[foundIndex].StolenBases2021,
            StolenBasePercent2021: this.context.state.overall[foundIndex].StolenBasePercent2021,
            FWAR2021: this.context.state.overall[foundIndex].FWAR2021,
            TheBatXPAProjection: this.context.state.overall[foundIndex].TheBatXPAProjection,
            TheBatXAVGProjection: this.context.state.overall[foundIndex].TheBatXAVGProjection,
            TheBatXOBPProjection: this.context.state.overall[foundIndex].TheBatXOBPProjection,
            TheBatXSLGProjection: this.context.state.overall[foundIndex].TheBatXSLGProjection,
            TheBatXDoublesProjection: this.context.state.overall[foundIndex].TheBatXDoublesProjection,
            TheBatXHRProjection: this.context.state.overall[foundIndex].TheBatXHRProjection,
            TheBatXRunsProjection: this.context.state.overall[foundIndex].TheBatXRunsProjection,
            TheBatXRBIProjection: this.context.state.overall[foundIndex].TheBatXRBIProjection,
            TheBatXSBProjection: this.context.state.overall[foundIndex].TheBatXSBProjection,
            TheBatXFWARProjection: this.context.state.overall[foundIndex].TheBatXFWARProjection,
            Games2017: this.context.state.overall[foundIndex].Games2017,
            GamesStarted2017: this.context.state.overall[foundIndex].GamesStarted2017,
            InningsPitched2017: this.context.state.overall[foundIndex].InningsPitched2017,
            InningsPitchedPerGameStarted2017: this.context.state.overall[foundIndex].InningsPitchedPerGameStarted2017,
            QS2017: this.context.state.overall[foundIndex].QS2017,
            ERA2017: this.context.state.overall[foundIndex].ERA2017,
            ERAPlus2017: this.context.state.overall[foundIndex].ERAPlus2017,
            FIP2017: this.context.state.overall[foundIndex].FIP2017,
            xFIP2017: this.context.state.overall[foundIndex].xFIP2017,
            SIERA2017: this.context.state.overall[foundIndex].SIERA2017,
            WHIP2017: this.context.state.overall[foundIndex].WHIP2017,
            RawKs2017: this.context.state.overall[foundIndex].RawKs2017,
            HitsPer92017: this.context.state.overall[foundIndex].HitsPer92017,
            HRsPer92017: this.context.state.overall[foundIndex].HRsPer92017,
            BBPer92017: this.context.state.overall[foundIndex].BBPer92017,
            KPer92017: this.context.state.overall[foundIndex].KPer92017,
            KDividedByBB2017: this.context.state.overall[foundIndex].KDividedByBB2017,
            Saves2017: this.context.state.overall[foundIndex].Saves2017,
            PitcherKPercent2017: this.context.state.overall[foundIndex].PitcherKPercent2017,
            PitcherBBPercent2017: this.context.state.overall[foundIndex].PitcherBBPercent2017,
            KMinusBBPercent2017: this.context.state.overall[foundIndex].KMinusBBPercent2017,
            PitcherBABIP2017: this.context.state.overall[foundIndex].PitcherBABIP2017,
            LOBPercent2017: this.context.state.overall[foundIndex].LOBPercent2017,
            HRPerFBPercent2017: this.context.state.overall[foundIndex].HRPerFBPercent2017,
            PitcherGBPercent2017: this.context.state.overall[foundIndex].PitcherGBPercent2017,
            PitcherLDPercent2017: this.context.state.overall[foundIndex].PitcherLDPercent2017,
            PitcherFBPercent2017: this.context.state.overall[foundIndex].PitcherFBPercent2017,
            IFFBPercent2017: this.context.state.overall[foundIndex].IFFBPercent2017,
            SoftContactPercent2017: this.context.state.overall[foundIndex].SoftContactPercent2017,
            MediumContactPercent2017: this.context.state.overall[foundIndex].MediumContactPercent2017,
            HardContactPercent2017: this.context.state.overall[foundIndex].HardContactPercent2017,
            FirstStrikePercent2017: this.context.state.overall[foundIndex].FirstStrikePercent2017,
            PitcherExitVelo2017: this.context.state.overall[foundIndex].PitcherExitVelo2017,
            PitcherFlyBallLineDriveExitVelo2017: this.context.state.overall[foundIndex].PitcherFlyBallLineDriveExitVelo2017,
            PitcherBarrelPercent2017: this.context.state.overall[foundIndex].PitcherBarrelPercent2017,
            PitcherLaunchAngle2017: this.context.state.overall[foundIndex].PitcherLaunchAngle2017,
            AVGFastballVelo2017: this.context.state.overall[foundIndex].AVGFastballVelo2017,
            MaxFastballVelo2017: this.context.state.overall[foundIndex].MaxFastballVelo2017,
            FourSeamFastballUsagePercent2017: this.context.state.overall[foundIndex].FourSeamFastballUsagePercent2017,
            SinkerUsagePercent2017: this.context.state.overall[foundIndex].SinkerUsagePercent2017,
            CutterUsagePercent2017: this.context.state.overall[foundIndex].CutterUsagePercent2017,
            SliderUsagePercent2017: this.context.state.overall[foundIndex].SliderUsagePercent2017,
            ChangeupUsagePercent2017: this.context.state.overall[foundIndex].ChangeupUsagePercent2017,
            CurveUsagePercent2017: this.context.state.overall[foundIndex].CurveUsagePercent2017,
            SplitterUsagePercent2017: this.context.state.overall[foundIndex].SplitterUsagePercent2017,
            KnuckleCurveUsagePercent2017: this.context.state.overall[foundIndex].KnuckleCurveUsagePercent2017,
            PitcherFWAR2017: this.context.state.overall[foundIndex].PitcherFWAR2017,
            Games2018: this.context.state.overall[foundIndex].Games2018,
            GamesStarted2018: this.context.state.overall[foundIndex].GamesStarted2018,
            InningsPitched2018: this.context.state.overall[foundIndex].InningsPitched2018,
            InningsPitchedPerGameStarted2018: this.context.state.overall[foundIndex].InningsPitchedPerGameStarted2018,
            QS2018: this.context.state.overall[foundIndex].QS2018,
            ERA2018: this.context.state.overall[foundIndex].ERA2018,
            ERAPlus2018: this.context.state.overall[foundIndex].ERAPlus2018,
            FIP2018: this.context.state.overall[foundIndex].FIP2018,
            xFIP2018: this.context.state.overall[foundIndex].xFIP2018,
            SIERA2018: this.context.state.overall[foundIndex].SIERA2018,
            WHIP2018: this.context.state.overall[foundIndex].WHIP2018,
            RawKs2018: this.context.state.overall[foundIndex].RawKs2018,
            HitsPer92018: this.context.state.overall[foundIndex].HitsPer92018,
            HRsPer92018: this.context.state.overall[foundIndex].HRsPer92018,
            BBPer92018: this.context.state.overall[foundIndex].BBPer92018,
            KPer92018: this.context.state.overall[foundIndex].KPer92018,
            KDividedByBB2018: this.context.state.overall[foundIndex].KDividedByBB2018,
            Saves2018: this.context.state.overall[foundIndex].Saves2018,
            PitcherKPercent2018: this.context.state.overall[foundIndex].PitcherKPercent2018,
            PitcherBBPercent2018: this.context.state.overall[foundIndex].PitcherBBPercent2018,
            KMinusBBPercent2018: this.context.state.overall[foundIndex].KMinusBBPercent2018,
            PitcherBABIP2018: this.context.state.overall[foundIndex].PitcherBABIP2018,
            LOBPercent2018: this.context.state.overall[foundIndex].LOBPercent2018,
            HRPerFBPercent2018: this.context.state.overall[foundIndex].HRPerFBPercent2018,
            PitcherGBPercent2018: this.context.state.overall[foundIndex].PitcherGBPercent2018,
            PitcherLDPercent2018: this.context.state.overall[foundIndex].PitcherLDPercent2018,
            PitcherFBPercent2018: this.context.state.overall[foundIndex].PitcherFBPercent2018,
            IFFBPercent2018: this.context.state.overall[foundIndex].IFFBPercent2018,
            SoftContactPercent2018: this.context.state.overall[foundIndex].SoftContactPercent2018,
            MediumContactPercent2018: this.context.state.overall[foundIndex].MediumContactPercent2018,
            HardContactPercent2018: this.context.state.overall[foundIndex].HardContactPercent2018,
            FirstStrikePercent2018: this.context.state.overall[foundIndex].FirstStrikePercent2018,
            PitcherExitVelo2018: this.context.state.overall[foundIndex].PitcherExitVelo2018,
            PitcherFlyBallLineDriveExitVelo2018: this.context.state.overall[foundIndex].PitcherFlyBallLineDriveExitVelo2018,
            PitcherBarrelPercent2018: this.context.state.overall[foundIndex].PitcherBarrelPercent2018,
            PitcherLaunchAngle2018: this.context.state.overall[foundIndex].PitcherLaunchAngle2018,
            AVGFastballVelo2018: this.context.state.overall[foundIndex].AVGFastballVelo2018,
            MaxFastballVelo2018: this.context.state.overall[foundIndex].MaxFastballVelo2018,
            FourSeamFastballUsagePercent2018: this.context.state.overall[foundIndex].FourSeamFastballUsagePercent2018,
            SinkerUsagePercent2018: this.context.state.overall[foundIndex].SinkerUsagePercent2018,
            CutterUsagePercent2018: this.context.state.overall[foundIndex].CutterUsagePercent2018,
            SliderUsagePercent2018: this.context.state.overall[foundIndex].SliderUsagePercent2018,
            ChangeupUsagePercent2018: this.context.state.overall[foundIndex].ChangeupUsagePercent2018,
            CurveUsagePercent2018: this.context.state.overall[foundIndex].CurveUsagePercent2018,
            SplitterUsagePercent2018: this.context.state.overall[foundIndex].SplitterUsagePercent2018,
            KnuckleCurveUsagePercent2018: this.context.state.overall[foundIndex].KnuckleCurveUsagePercent2018,
            PitcherFWAR2018: this.context.state.overall[foundIndex].PitcherFWAR2018,
            Games2019: this.context.state.overall[foundIndex].Games2019,
            GamesStarted2019: this.context.state.overall[foundIndex].GamesStarted2019,
            InningsPitched2019: this.context.state.overall[foundIndex].InningsPitched2019,
            InningsPitchedPerGameStarted2019: this.context.state.overall[foundIndex].InningsPitchedPerGameStarted2019,
            QS2019: this.context.state.overall[foundIndex].QS2019,
            ERA2019: this.context.state.overall[foundIndex].ERA2019,
            ERAPlus2019: this.context.state.overall[foundIndex].ERAPlus2019,
            FIP2019: this.context.state.overall[foundIndex].FIP2019,
            xFIP2019: this.context.state.overall[foundIndex].xFIP2019,
            SIERA2019: this.context.state.overall[foundIndex].SIERA2019,
            WHIP2019: this.context.state.overall[foundIndex].WHIP2019,
            RawKs2019: this.context.state.overall[foundIndex].RawKs2019,
            HitsPer92019: this.context.state.overall[foundIndex].HitsPer92019,
            HRsPer92019: this.context.state.overall[foundIndex].HRsPer92019,
            BBPer92019: this.context.state.overall[foundIndex].BBPer92019,
            KPer92019: this.context.state.overall[foundIndex].KPer92019,
            KDividedByBB2019: this.context.state.overall[foundIndex].KDividedByBB2019,
            Saves2019: this.context.state.overall[foundIndex].Saves2019,
            PitcherKPercent2019: this.context.state.overall[foundIndex].PitcherKPercent2019,
            PitcherBBPercent2019: this.context.state.overall[foundIndex].PitcherBBPercent2019,
            KMinusBBPercent2019: this.context.state.overall[foundIndex].KMinusBBPercent2019,
            PitcherBABIP2019: this.context.state.overall[foundIndex].PitcherBABIP2019,
            LOBPercent2019: this.context.state.overall[foundIndex].LOBPercent2019,
            HRPerFBPercent2019: this.context.state.overall[foundIndex].HRPerFBPercent2019,
            PitcherGBPercent2019: this.context.state.overall[foundIndex].PitcherGBPercent2019,
            PitcherLDPercent2019: this.context.state.overall[foundIndex].PitcherLDPercent2019,
            PitcherFBPercent2019: this.context.state.overall[foundIndex].PitcherFBPercent2019,
            IFFBPercent2019: this.context.state.overall[foundIndex].IFFBPercent2019,
            SoftContactPercent2019: this.context.state.overall[foundIndex].SoftContactPercent2019,
            MediumContactPercent2019: this.context.state.overall[foundIndex].MediumContactPercent2019,
            HardContactPercent2019: this.context.state.overall[foundIndex].HardContactPercent2019,
            FirstStrikePercent2019: this.context.state.overall[foundIndex].FirstStrikePercent2019,
            PitcherExitVelo2019: this.context.state.overall[foundIndex].PitcherExitVelo2019,
            PitcherFlyBallLineDriveExitVelo2019: this.context.state.overall[foundIndex].PitcherFlyBallLineDriveExitVelo2019,
            PitcherBarrelPercent2019: this.context.state.overall[foundIndex].PitcherBarrelPercent2019,
            PitcherLaunchAngle2019: this.context.state.overall[foundIndex].PitcherLaunchAngle2019,
            AVGFastballVelo2019: this.context.state.overall[foundIndex].AVGFastballVelo2019,
            MaxFastballVelo2019: this.context.state.overall[foundIndex].MaxFastballVelo2019,
            FourSeamFastballUsagePercent2019: this.context.state.overall[foundIndex].FourSeamFastballUsagePercent2019,
            SinkerUsagePercent2019: this.context.state.overall[foundIndex].SinkerUsagePercent2019,
            CutterUsagePercent2019: this.context.state.overall[foundIndex].CutterUsagePercent2019,
            SliderUsagePercent2019: this.context.state.overall[foundIndex].SliderUsagePercent2019,
            ChangeupUsagePercent2019: this.context.state.overall[foundIndex].ChangeupUsagePercent2019,
            CurveUsagePercent2019: this.context.state.overall[foundIndex].CurveUsagePercent2019,
            SplitterUsagePercent2019: this.context.state.overall[foundIndex].SplitterUsagePercent2019,
            KnuckleCurveUsagePercent2019: this.context.state.overall[foundIndex].KnuckleCurveUsagePercent2019,
            PitcherFWAR2019: this.context.state.overall[foundIndex].PitcherFWAR2019,
            Games2020: this.context.state.overall[foundIndex].Games2020,
            GamesStarted2020: this.context.state.overall[foundIndex].GamesStarted2020,
            InningsPitched2020: this.context.state.overall[foundIndex].InningsPitched2020,
            InningsPitchedPerGameStarted2020: this.context.state.overall[foundIndex].InningsPitchedPerGameStarted2020,
            QS2020: this.context.state.overall[foundIndex].QS2020,
            ERA2020: this.context.state.overall[foundIndex].ERA2020,
            ERAPlus2020: this.context.state.overall[foundIndex].ERAPlus2020,
            FIP2020: this.context.state.overall[foundIndex].FIP2020,
            xFIP2020: this.context.state.overall[foundIndex].xFIP2020,
            SIERA2020: this.context.state.overall[foundIndex].SIERA2020,
            WHIP2020: this.context.state.overall[foundIndex].WHIP2020,
            RawKs2020: this.context.state.overall[foundIndex].RawKs2020,
            HitsPer92020: this.context.state.overall[foundIndex].HitsPer92020,
            HRsPer92020: this.context.state.overall[foundIndex].HRsPer92020,
            BBPer92020: this.context.state.overall[foundIndex].BBPer92020,
            KPer92020: this.context.state.overall[foundIndex].KPer92020,
            KDividedByBB2020: this.context.state.overall[foundIndex].KDividedByBB2020,
            Saves2020: this.context.state.overall[foundIndex].Saves2020,
            PitcherKPercent2020: this.context.state.overall[foundIndex].PitcherKPercent2020,
            PitcherBBPercent2020: this.context.state.overall[foundIndex].PitcherBBPercent2020,
            KMinusBBPercent2020: this.context.state.overall[foundIndex].KMinusBBPercent2020,
            PitcherBABIP2020: this.context.state.overall[foundIndex].PitcherBABIP2020,
            LOBPercent2020: this.context.state.overall[foundIndex].LOBPercent2020,
            HRPerFBPercent2020: this.context.state.overall[foundIndex].HRPerFBPercent2020,
            PitcherGBPercent2020: this.context.state.overall[foundIndex].PitcherGBPercent2020,
            PitcherLDPercent2020: this.context.state.overall[foundIndex].PitcherLDPercent2020,
            PitcherFBPercent2020: this.context.state.overall[foundIndex].PitcherFBPercent2020,
            IFFBPercent2020: this.context.state.overall[foundIndex].IFFBPercent2020,
            SoftContactPercent2020: this.context.state.overall[foundIndex].SoftContactPercent2020,
            MediumContactPercent2020: this.context.state.overall[foundIndex].MediumContactPercent2020,
            HardContactPercent2020: this.context.state.overall[foundIndex].HardContactPercent2020,
            FirstStrikePercent2020: this.context.state.overall[foundIndex].FirstStrikePercent2020,
            PitcherExitVelo2020: this.context.state.overall[foundIndex].PitcherExitVelo2020,
            PitcherFlyBallLineDriveExitVelo2020: this.context.state.overall[foundIndex].PitcherFlyBallLineDriveExitVelo2020,
            PitcherBarrelPercent2020: this.context.state.overall[foundIndex].PitcherBarrelPercent2020,
            PitcherLaunchAngle2020: this.context.state.overall[foundIndex].PitcherLaunchAngle2020,
            AVGFastballVelo2020: this.context.state.overall[foundIndex].AVGFastballVelo2020,
            MaxFastballVelo2020: this.context.state.overall[foundIndex].MaxFastballVelo2020,
            FourSeamFastballUsagePercent2020: this.context.state.overall[foundIndex].FourSeamFastballUsagePercent2020,
            SinkerUsagePercent2020: this.context.state.overall[foundIndex].SinkerUsagePercent2020,
            CutterUsagePercent2020: this.context.state.overall[foundIndex].CutterUsagePercent2020,
            SliderUsagePercent2020: this.context.state.overall[foundIndex].SliderUsagePercent2020,
            ChangeupUsagePercent2020: this.context.state.overall[foundIndex].ChangeupUsagePercent2020,
            CurveUsagePercent2020: this.context.state.overall[foundIndex].CurveUsagePercent2020,
            SplitterUsagePercent2020: this.context.state.overall[foundIndex].SplitterUsagePercent2020,
            KnuckleCurveUsagePercent2020: this.context.state.overall[foundIndex].KnuckleCurveUsagePercent2020,
            PitcherFWAR2020: this.context.state.overall[foundIndex].PitcherFWAR2020,
            Games2021: this.context.state.overall[foundIndex].Games2021,
            GamesStarted2021: this.context.state.overall[foundIndex].GamesStarted2021,
            InningsPitched2021: this.context.state.overall[foundIndex].InningsPitched2021,
            InningsPitchedPerGameStarted2021: this.context.state.overall[foundIndex].InningsPitchedPerGameStarted2021,
            QS2021: this.context.state.overall[foundIndex].QS2021,
            ERA2021: this.context.state.overall[foundIndex].ERA2021,
            ERAPlus2021: this.context.state.overall[foundIndex].ERAPlus2021,
            FIP2021: this.context.state.overall[foundIndex].FIP2021,
            xFIP2021: this.context.state.overall[foundIndex].xFIP2021,
            SIERA2021: this.context.state.overall[foundIndex].SIERA2021,
            WHIP2021: this.context.state.overall[foundIndex].WHIP2021,
            RawKs2021: this.context.state.overall[foundIndex].RawKs2021,
            HitsPer92021: this.context.state.overall[foundIndex].HitsPer92021,
            HRsPer92021: this.context.state.overall[foundIndex].HRsPer92021,
            BBPer92021: this.context.state.overall[foundIndex].BBPer92021,
            KPer92021: this.context.state.overall[foundIndex].KPer92021,
            KDividedByBB2021: this.context.state.overall[foundIndex].KDividedByBB2021,
            Saves2021: this.context.state.overall[foundIndex].Saves2021,
            PitcherKPercent2021: this.context.state.overall[foundIndex].PitcherKPercent2021,
            PitcherBBPercent2021: this.context.state.overall[foundIndex].PitcherBBPercent2021,
            KMinusBBPercent2021: this.context.state.overall[foundIndex].KMinusBBPercent2021,
            PitcherBABIP2021: this.context.state.overall[foundIndex].PitcherBABIP2021,
            LOBPercent2021: this.context.state.overall[foundIndex].LOBPercent2021,
            HRPerFBPercent2021: this.context.state.overall[foundIndex].HRPerFBPercent2021,
            PitcherGBPercent2021: this.context.state.overall[foundIndex].PitcherGBPercent2021,
            PitcherLDPercent2021: this.context.state.overall[foundIndex].PitcherLDPercent2021,
            PitcherFBPercent2021: this.context.state.overall[foundIndex].PitcherFBPercent2021,
            IFFBPercent2021: this.context.state.overall[foundIndex].IFFBPercent2021,
            SoftContactPercent2021: this.context.state.overall[foundIndex].SoftContactPercent2021,
            MediumContactPercent2021: this.context.state.overall[foundIndex].MediumContactPercent2021,
            HardContactPercent2021: this.context.state.overall[foundIndex].HardContactPercent2021,
            FirstStrikePercent2021: this.context.state.overall[foundIndex].FirstStrikePercent2021,
            PitcherExitVelo2021: this.context.state.overall[foundIndex].PitcherExitVelo2021,
            PitcherFlyBallLineDriveExitVelo2021: this.context.state.overall[foundIndex].PitcherFlyBallLineDriveExitVelo2021,
            PitcherBarrelPercent2021: this.context.state.overall[foundIndex].PitcherBarrelPercent2021,
            PitcherLaunchAngle2021: this.context.state.overall[foundIndex].PitcherLaunchAngle2021,
            AVGFastballVelo2021: this.context.state.overall[foundIndex].AVGFastballVelo2021,
            MaxFastballVelo2021: this.context.state.overall[foundIndex].MaxFastballVelo2021,
            FourSeamFastballUsagePercent2021: this.context.state.overall[foundIndex].FourSeamFastballUsagePercent2021,
            SinkerUsagePercent2021: this.context.state.overall[foundIndex].SinkerUsagePercent2021,
            CutterUsagePercent2021: this.context.state.overall[foundIndex].CutterUsagePercent2021,
            SliderUsagePercent2021: this.context.state.overall[foundIndex].SliderUsagePercent2021,
            ChangeupUsagePercent2021: this.context.state.overall[foundIndex].ChangeupUsagePercent2021,
            CurveUsagePercent2021: this.context.state.overall[foundIndex].CurveUsagePercent2021,
            SplitterUsagePercent2021: this.context.state.overall[foundIndex].SplitterUsagePercent2021,
            KnuckleCurveUsagePercent2021: this.context.state.overall[foundIndex].KnuckleCurveUsagePercent2021,
            PitcherFWAR2021: this.context.state.overall[foundIndex].PitcherFWAR2021,
            TheBatGamesProjection: this.context.state.overall[foundIndex].TheBatGamesProjection,
            TheBatGamesStartedProjection: this.context.state.overall[foundIndex].TheBatGamesStartedProjection,
            TheBatInningsPitchedProjection: this.context.state.overall[foundIndex].TheBatInningsPitchedProjection,
            TheBatQSProjection: this.context.state.overall[foundIndex].TheBatQSProjection,
            TheBatERAProjection: this.context.state.overall[foundIndex].TheBatERAProjection,
            TheBatFIPProjection: this.context.state.overall[foundIndex].TheBatFIPProjection,
            TheBatWHIPProjection: this.context.state.overall[foundIndex].TheBatWHIPProjection,
            TheBatRawKsProjection: this.context.state.overall[foundIndex].TheBatRawKsProjection,
            TheBatKPer9Projection: this.context.state.overall[foundIndex].TheBatKPer9Projection,
            TheBatSavesProjection: this.context.state.overall[foundIndex].TheBatSavesProjection,
            PitcherTheBatFWARProjection: this.context.state.overall[foundIndex].PitcherTheBatFWARProjection,
            showHitterCard: true,
            showPitcherCard: false,
        })
    }

    cardDataChange = (event) => {
        event.preventDefault();
        this.setState({
            traditionalStats: false,
            battedBallStats: false,
            expectedStats: false,
            baseRunningStats: false,
            advancedStats: false,
            opponentContactStats: false,
            pitchUsageStats: false,   
        })
        this.setState({
            labelValue: [event.target.value],
            [event.target.value]: true,
        })
    }

    showHitterCard = (event) => {
        this.setState({
            showHitterCard: true,
            showPitcherCard: false,
            traditionalStats: true,
            battedBallStats: false,
            expectedStats: false,
            baseRunningStats: false,
            advancedStats: false,
            opponentContactStats: false,
            pitchUsageStats: false,   
        })
    }

    showPitcherCard = (event) => {
        this.setState({
            showHitterCard: false,
            showPitcherCard: true,
            traditionalStats: true,
            battedBallStats: false,
            expectedStats: false,
            baseRunningStats: false,
            advancedStats: false,
            opponentContactStats: false,
            pitchUsageStats: false,   
        })
    }
    render() {
        const { classes } = this.props;

        const { firstName, lastName, birthday, bats, throws, currentTeam, imageURL, primaryPosition, otherPositions, GamesPlayed2017, BA2017, OBP2017, SLG2017, PA2017, Doubles2017, HR2017, Runs2017, RBI2017, LineupSlot2017, GBPercent2017, LDPercent2017, FBPercent2017, PullPercent2017, CenterPercent2017, OppoPercent2017, HRPerFB2017, HardHitPercent2017, ExitVelo2017, FlyBallLineDriveExitVelo2017, LaunchAngle2017, BarrelPercent2017, BABIP2017, WOBA2017, xWOBA2017, xBA2017, AvgHRDistance2017, WRCPlus2017, OPSPlus2017, BBPercent2017, KPercent2017, ChaseRate2017, ContactPercent2017, SprintSpeed2017, StolenBases2017, StolenBasePercent2017, FWAR2017, GamesPlayed2018, BA2018, OBP2018, SLG2018, PA2018, Doubles2018, HR2018, Runs2018, RBI2018, LineupSlot2018, GBPercent2018, LDPercent2018, FBPercent2018, PullPercent2018, CenterPercent2018, OppoPercent2018, HRPerFB2018, HardHitPercent2018, ExitVelo2018, FlyBallLineDriveExitVelo2018, LaunchAngle2018, BarrelPercent2018, BABIP2018, WOBA2018, xWOBA2018, xBA2018, AvgHRDistance2018, WRCPlus2018, OPSPlus2018, BBPercent2018, KPercent2018, ChaseRate2018, ContactPercent2018, SprintSpeed2018, StolenBases2018, StolenBasePercent2018, FWAR2018, GamesPlayed2019, BA2019, OBP2019, SLG2019, PA2019, Doubles2019, HR2019, Runs2019, RBI2019, LineupSlot2019, GBPercent2019, LDPercent2019, FBPercent2019, PullPercent2019, CenterPercent2019, OppoPercent2019, HRPerFB2019, HardHitPercent2019, ExitVelo2019, FlyBallLineDriveExitVelo2019, LaunchAngle2019, BarrelPercent2019, BABIP2019, WOBA2019, xWOBA2019, xBA2019, AvgHRDistance2019, WRCPlus2019, OPSPlus2019, BBPercent2019, KPercent2019, ChaseRate2019, ContactPercent2019, SprintSpeed2019, StolenBases2019, StolenBasePercent2019, FWAR2019, GamesPlayed2020, BA2020, OBP2020, SLG2020, PA2020, Doubles2020, HR2020, Runs2020, RBI2020, LineupSlot2020, GBPercent2020, LDPercent2020, FBPercent2020, PullPercent2020, CenterPercent2020, OppoPercent2020, HRPerFB2020, HardHitPercent2020, ExitVelo2020, FlyBallLineDriveExitVelo2020, LaunchAngle2020, BarrelPercent2020, BABIP2020, WOBA2020, xWOBA2020, xBA2020, AvgHRDistance2020, WRCPlus2020, OPSPlus2020, BBPercent2020, KPercent2020, ChaseRate2020, ContactPercent2020, SprintSpeed2020, StolenBases2020, StolenBasePercent2020, FWAR2020, GamesPlayed2021, BA2021, OBP2021, SLG2021, PA2021, Doubles2021, HR2021, Runs2021, RBI2021, LineupSlot2021, GBPercent2021, LDPercent2021, FBPercent2021, PullPercent2021, CenterPercent2021, OppoPercent2021, HRPerFB2021, HardHitPercent2021, ExitVelo2021, FlyBallLineDriveExitVelo2021, LaunchAngle2021, BarrelPercent2021, BABIP2021, WOBA2021, xWOBA2021, xBA2021, AvgHRDistance2021, WRCPlus2021, OPSPlus2021, BBPercent2021, KPercent2021, ChaseRate2021, ContactPercent2021, SprintSpeed2021, StolenBases2021, StolenBasePercent2021, FWAR2021, TheBatXPAProjection, TheBatXAVGProjection, TheBatXOBPProjection, TheBatXSLGProjection, TheBatXDoublesProjection, TheBatXHRProjection, TheBatXRunsProjection, TheBatXRBIProjection, TheBatXSBProjection, TheBatXFWARProjection, Games2017, GamesStarted2017, InningsPitched2017, InningsPitchedPerGameStarted2017, QS2017, ERA2017, ERAPlus2017, FIP2017, xFIP2017, SIERA2017, WHIP2017, RawKs2017, HitsPer92017, HRsPer92017, BBPer92017, KPer92017, KDividedByBB2017, Saves2017, PitcherKPercent2017, PitcherBBPercent2017, KMinusBBPercent2017, PitcherBABIP2017, LOBPercent2017, HRPerFBPercent2017, PitcherGBPercent2017, PitcherLDPercent2017, PitcherFBPercent2017, IFFBPercent2017, SoftContactPercent2017, MediumContactPercent2017, HardContactPercent2017, FirstStrikePercent2017, PitcherExitVelo2017, PitcherFlyBallLineDriveExitVelo2017, PitcherBarrelPercent2017, PitcherLaunchAngle2017, AVGFastballVelo2017, MaxFastballVelo2017, FourSeamFastballUsagePercent2017, SinkerUsagePercent2017, CutterUsagePercent2017, SliderUsagePercent2017, ChangeupUsagePercent2017, CurveUsagePercent2017, SplitterUsagePercent2017, KnuckleCurveUsagePercent2017, PitcherFWAR2017, Games2018, GamesStarted2018, InningsPitched2018, InningsPitchedPerGameStarted2018, QS2018, ERA2018, ERAPlus2018, FIP2018, xFIP2018, SIERA2018, WHIP2018, RawKs2018, HitsPer92018, HRsPer92018, BBPer92018, KPer92018, KDividedByBB2018, Saves2018, PitcherKPercent2018, PitcherBBPercent2018, KMinusBBPercent2018, PitcherBABIP2018, LOBPercent2018, HRPerFBPercent2018, PitcherGBPercent2018, PitcherLDPercent2018, PitcherFBPercent2018, IFFBPercent2018, SoftContactPercent2018, MediumContactPercent2018, HardContactPercent2018, FirstStrikePercent2018, PitcherExitVelo2018, PitcherFlyBallLineDriveExitVelo2018, PitcherBarrelPercent2018, PitcherLaunchAngle2018, AVGFastballVelo2018, MaxFastballVelo2018, FourSeamFastballUsagePercent2018, SinkerUsagePercent2018, CutterUsagePercent2018, SliderUsagePercent2018, ChangeupUsagePercent2018, CurveUsagePercent2018, SplitterUsagePercent2018, KnuckleCurveUsagePercent2018, PitcherFWAR2018, Games2019, GamesStarted2019, InningsPitched2019, InningsPitchedPerGameStarted2019, QS2019, ERA2019, ERAPlus2019, FIP2019, xFIP2019, SIERA2019, WHIP2019, RawKs2019, HitsPer92019, HRsPer92019, BBPer92019, KPer92019, KDividedByBB2019, Saves2019, PitcherKPercent2019, PitcherBBPercent2019, KMinusBBPercent2019, PitcherBABIP2019, LOBPercent2019, HRPerFBPercent2019, PitcherGBPercent2019, PitcherLDPercent2019, PitcherFBPercent2019, IFFBPercent2019, SoftContactPercent2019, MediumContactPercent2019, HardContactPercent2019, FirstStrikePercent2019, PitcherExitVelo2019, PitcherFlyBallLineDriveExitVelo2019, PitcherBarrelPercent2019, PitcherLaunchAngle2019, AVGFastballVelo2019, MaxFastballVelo2019, FourSeamFastballUsagePercent2019, SinkerUsagePercent2019, CutterUsagePercent2019, SliderUsagePercent2019, ChangeupUsagePercent2019, CurveUsagePercent2019, SplitterUsagePercent2019, KnuckleCurveUsagePercent2019, PitcherFWAR2019, Games2020, GamesStarted2020, InningsPitched2020, InningsPitchedPerGameStarted2020, QS2020, ERA2020, ERAPlus2020, FIP2020, xFIP2020, SIERA2020, WHIP2020, RawKs2020, HitsPer92020, HRsPer92020, BBPer92020, KPer92020, KDividedByBB2020, Saves2020, PitcherKPercent2020, PitcherBBPercent2020, KMinusBBPercent2020, PitcherBABIP2020, LOBPercent2020, HRPerFBPercent2020, PitcherGBPercent2020, PitcherLDPercent2020, PitcherFBPercent2020, IFFBPercent2020, SoftContactPercent2020, MediumContactPercent2020, HardContactPercent2020, FirstStrikePercent2020, PitcherExitVelo2020, PitcherFlyBallLineDriveExitVelo2020, PitcherBarrelPercent2020, PitcherLaunchAngle2020, AVGFastballVelo2020, MaxFastballVelo2020, FourSeamFastballUsagePercent2020, SinkerUsagePercent2020, CutterUsagePercent2020, SliderUsagePercent2020, ChangeupUsagePercent2020, CurveUsagePercent2020, SplitterUsagePercent2020, KnuckleCurveUsagePercent2020, PitcherFWAR2020, Games2021, GamesStarted2021, InningsPitched2021, InningsPitchedPerGameStarted2021, QS2021, ERA2021, ERAPlus2021, FIP2021, xFIP2021, SIERA2021, WHIP2021, RawKs2021, HitsPer92021, HRsPer92021, BBPer92021, KPer92021, KDividedByBB2021, Saves2021, PitcherKPercent2021, PitcherBBPercent2021, KMinusBBPercent2021, PitcherBABIP2021, LOBPercent2021, HRPerFBPercent2021, PitcherGBPercent2021, PitcherLDPercent2021, PitcherFBPercent2021, IFFBPercent2021, SoftContactPercent2021, MediumContactPercent2021, HardContactPercent2021, FirstStrikePercent2021, PitcherExitVelo2021, PitcherFlyBallLineDriveExitVelo2021, PitcherBarrelPercent2021, PitcherLaunchAngle2021, AVGFastballVelo2021, MaxFastballVelo2021, FourSeamFastballUsagePercent2021, SinkerUsagePercent2021, CutterUsagePercent2021, SliderUsagePercent2021, ChangeupUsagePercent2021, CurveUsagePercent2021, SplitterUsagePercent2021, KnuckleCurveUsagePercent2021, PitcherFWAR2021,
            TheBatGamesProjection, TheBatGamesStartedProjection, TheBatInningsPitchedProjection, TheBatQSProjection, TheBatERAProjection, TheBatFIPProjection, TheBatWHIPProjection, TheBatRawKsProjection, TheBatKPer9Projection, TheBatSavesProjection, PitcherTheBatFWARProjection, traditionalStats, advancedStats, opponentContactStats, pitchUsageStats, labelValue, battedBallStats, expectedStats, baseRunningStats } = this.state;

        if (primaryPosition.includes('SP') || otherPositions.includes('SP') || otherPositions.includes('RP') || primaryPosition.includes('RP')) {
            if(otherPositions.includes('C') || primaryPosition.includes('C') || otherPositions.includes('1B') || primaryPosition.includes('1B') || otherPositions.includes('2B') || primaryPosition.includes('2B') || otherPositions.includes('SS') || primaryPosition.includes('SS') || otherPositions.includes('3B') || primaryPosition.includes('3B') || otherPositions.includes('OF') || primaryPosition.includes('OF') || otherPositions.includes('DH') || primaryPosition.includes('DH')) {
                const playerCardPitcher = (
                    <div className={classes.internalPlayerCard}>
                        {traditionalStats ? (
                            <div>
                                <TableContainer>
                                    <Table
                                        className={classes.table}
                                        aria-labelledby="traditionalStatsTable"
                                        aria-label="traditinal stats table"
                                    >
                                        <TableHead>
                                            <TableRow className={classes.tableRow}>
                                                <TableCell
                                                    key='traditionalStatsYear'
                                                    className={classes.tableCell}
                                                >
                                                    Year
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsGamesPlayed'
                                                    className={classes.tableCell}
                                                >
                                                    Games Played
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsStarts'
                                                    className={classes.tableCell}
                                                >
                                                    Starts
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsInningsPitched'
                                                    className={classes.tableCell}
                                                >
                                                    Innings Pitched
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsQS'
                                                    className={classes.tableCell}
                                                >
                                                    QS
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsRawKs'
                                                    className={classes.tableCell}
                                                >
                                                    Ks
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsERA'
                                                    className={classes.tableCell}
                                                >
                                                    ERA
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsWHIP'
                                                    className={classes.tableCell}
                                                >
                                                    WHIP
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsLOBPercent'
                                                    className={classes.tableCell}
                                                >
                                                    LOB%
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalSaves'
                                                    className={classes.tableCell}
                                                >
                                                    Saves
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsFWAR'
                                                    className={classes.tableCell}
                                                >
                                                    FWAR
                                                </TableCell>
        
        
                                                <TableCell
                                                    key='traditionalStatsPTotal'
                                                    className={classes.tableCell}
                                                >
                                                    PTotal
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
        
                                        <TableBody>
                                            {(Games2017 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2017'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2017</TableCell>
                                                    <TableCell className={classes.tableCell}>{Games2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{GamesStarted2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitched2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{QS2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{RawKs2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERA2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WHIP2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{LOBPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{Saves2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFWAR2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{(
                                                        (10 * QS2017 +
                                                            1.2 * RawKs2017 +
                                                            9 * Saves2017 +
                                                            (4 * Number(InningsPitched2017) * Number(1.32 - WHIP2017)) +
                                                            Number(InningsPitched2017) * Number(4.47 - ERA2017)) / 10).toFixed(1)}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2018 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2018'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2018</TableCell>
                                                    <TableCell className={classes.tableCell}>{Games2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{GamesStarted2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitched2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{QS2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{RawKs2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERA2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WHIP2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{LOBPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{Saves2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFWAR2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{(
                                                            (10 * QS2018 +
                                                                1.2 * RawKs2018 +
                                                                9 * Saves2018 +
                                                                4 * Number(InningsPitched2018) * Number(1.32 - WHIP2018) +
                                                                Number(InningsPitched2018) * Number(4.47 - ERA2018)) /
                                                            10).toFixed(1)}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2018 === 0 && Games2017 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2018'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2018</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Innings</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2019 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2019'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2019</TableCell>
                                                    <TableCell className={classes.tableCell}>{Games2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{GamesStarted2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitched2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{QS2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{RawKs2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERA2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WHIP2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{LOBPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{Saves2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFWAR2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{(
                                                            (10 * QS2019 +
                                                                1.2 * RawKs2019 +
                                                                9 * Saves2019 +
                                                                4 * Number(InningsPitched2019) * Number(1.32 - WHIP2019) +
                                                                Number(InningsPitched2019) * Number(4.47 - ERA2019)) /
                                                            10).toFixed(1)}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2019 === 0 && (Games2018 > 0 || Games2017 > 0)) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2019'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2019</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Innings</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(Games2020 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2020'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2020</TableCell>
                                                    <TableCell className={classes.tableCell}>{Games2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{GamesStarted2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitched2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{QS2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{RawKs2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERA2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WHIP2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{LOBPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{Saves2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFWAR2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{(
                                                            (10 * QS2020 +
                                                                1.2 * RawKs2020 +
                                                                9 * Saves2020 +
                                                                4 * Number(InningsPitched2020) * Number(1.32 - WHIP2020) +
                                                                Number(InningsPitched2020) * Number(4.47 - ERA2020)) /
                                                            10).toFixed(1)}</TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(Games2020 === 0 && (Games2019 > 0 || Games2018 > 0 || Games2017 > 0)) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2020'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2020</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Innings</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(Games2021 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2021'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2021</TableCell>
                                                    <TableCell className={classes.tableCell}>{Games2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{GamesStarted2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitched2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{QS2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{RawKs2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERA2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WHIP2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{LOBPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{Saves2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFWAR2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{(
                                                            (10 * QS2021 +
                                                                1.2 * RawKs2021 +
                                                                9 * Saves2021 +
                                                                4 * Number(InningsPitched2021) * Number(1.32 - WHIP2021) +
                                                                Number(InningsPitched2021) * Number(4.47 - ERA2021)) /
                                                            10).toFixed(1)}</TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(Games2021 === 0 && (Games2020 > 0 || Games2019 > 0 || Games2018 > 0 || Games2017 > 0)) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2021'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2021</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Innings</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}

                                            <TableRow
                                                tabIndex={-1}
                                                key='Projected 2022'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCell}>2021 Projections</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatGamesProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatGamesStartedProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatInningsPitchedProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatQSProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatRawKsProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatERAProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatWHIPProjection}</TableCell>
                                                <TableCell className={classes.tableCell}></TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatSavesProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{PitcherTheBatFWARProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{(
                                                    (10 * Number(TheBatQSProjection) +
                                                        1.2 * TheBatRawKsProjection +
                                                        9 * TheBatSavesProjection +
                                                        4 * Number(TheBatInningsPitchedProjection) * Number(1.32 - TheBatWHIPProjection) +
                                                        Number(TheBatInningsPitchedProjection) * Number(4.47 - TheBatERAProjection)) / 
                                                    8).toFixed(1)}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        ) : null
                        }
        
                        {advancedStats ? (
                            <div>
                                <TableContainer>
                                    <Table
                                        className={classes.table}
                                        aria-labelledby="Advanced Stats Table"
                                        aria-label="Advanced Stats Table"
                                    >
                                        <TableHead>
                                            <TableRow className={classes.tableRow}>
                                                <TableCell
                                                    key='advancedStatsYear'
                                                    className={classes.tableCell}
                                                >
                                                    Year
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsInningsPitched'
                                                    className={classes.tableCell}
                                                >
                                                    Innings
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsInningsPitchedPerGameStarted'
                                                    className={classes.tableCell}
                                                >
                                                    IP per Start
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsERA'
                                                    className={classes.tableCell}
                                                >
                                                    ERA
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsERAPlus'
                                                    className={classes.tableCell}
                                                >
                                                    ERA+
                                                </TableCell>
        
                                                <TableCell
                                                    key='tadvancedStatsFIP'
                                                    className={classes.tableCell}
                                                >
                                                    FIP
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsxFIP'
                                                    className={classes.tableCell}
                                                >
                                                    xFIP
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsSIERA'
                                                    className={classes.tableCell}
                                                >
                                                    SIERA
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsWHIP'
                                                    className={classes.tableCell}
                                                >
                                                    WHIP
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsHitsPer9'
                                                    className={classes.tableCell}
                                                >
                                                    H/9
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsHRsPer9'
                                                    className={classes.tableCell}
                                                >
                                                    HR/9
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsBBPer9'
                                                    className={classes.tableCell}
                                                >
                                                    BB/9
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsKPer9'
                                                    className={classes.tableCell}
                                                >
                                                    K/9
                                                </TableCell>
                                                <TableCell
                                                    key='advancedStatsKDividedByBB'
                                                    className={classes.tableCell}
                                                >
                                                    K/BB
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsKPercent'
                                                    className={classes.tableCell}
                                                >
                                                    K%
                                                </TableCell>
                                                <TableCell
                                                    key='advancedStatsBBPercent'
                                                    className={classes.tableCell}
                                                >
                                                    BB%
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsKMinusBBPercent'
                                                    className={classes.tableCell}
                                                >
                                                    K-BB%
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsFirstStrikePercent'
                                                    className={classes.tableCell}
                                                >
                                                    First Strike%
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
        
                                        <TableBody>
                                            {(Games2017 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2017'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2017</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitched2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitchedPerGameStarted2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERA2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERAPlus2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FIP2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{xFIP2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SIERA2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WHIP2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HitsPer92017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HRsPer92017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BBPer92017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KPer92017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KDividedByBB2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherKPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBBPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KMinusBBPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FirstStrikePercent2017}</TableCell>
        
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2018 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2018'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2018</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitched2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitchedPerGameStarted2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERA2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERAPlus2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FIP2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{xFIP2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SIERA2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WHIP2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HitsPer92018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HRsPer92018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BBPer92018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KPer92018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KDividedByBB2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherKPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBBPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KMinusBBPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FirstStrikePercent2018}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2018 === 0 && Games2017 > 0) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2018'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2018</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Innings</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2019 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2019'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2019</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitched2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitchedPerGameStarted2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERA2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERAPlus2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FIP2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{xFIP2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SIERA2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WHIP2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HitsPer92019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HRsPer92019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BBPer92019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KPer92019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KDividedByBB2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherKPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBBPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KMinusBBPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FirstStrikePercent2019}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2019 === 0 && (Games2018 > 0 || Games2017 > 0)) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2019'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2019</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Innings</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(Games2020 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2020'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2020</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitched2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitchedPerGameStarted2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERA2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERAPlus2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FIP2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{xFIP2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SIERA2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WHIP2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HitsPer92020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HRsPer92020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BBPer92020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KPer92020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KDividedByBB2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherKPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBBPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KMinusBBPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FirstStrikePercent2020}</TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(Games2020 === 0 && (Games2019 > 0 || Games2018 > 0 || Games2017 > 0)) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2020'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2020</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Innings</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(Games2021 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2021'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2021</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitched2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitchedPerGameStarted2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERA2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERAPlus2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FIP2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{xFIP2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SIERA2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WHIP2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HitsPer92021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HRsPer92021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BBPer92021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KPer92021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KDividedByBB2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherKPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBBPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KMinusBBPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FirstStrikePercent2021}</TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(Games2021 === 0 && (Games2020 > 0 || Games2019 > 0 || Games2018 > 0 || Games2017 > 0)) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2021'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2021</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Innings</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}

                                            <TableRow
                                                tabIndex={-1}
                                                key='Projected 2022'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCell}>2022 Projections</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatInningsPitchedProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{}</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatERAProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{}</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatFIPProjection}</TableCell>
                                                <TableCell className={classes.tableCell}></TableCell>
                                                <TableCell className={classes.tableCell}></TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatWHIPProjection}</TableCell>
                                                <TableCell className={classes.tableCell}></TableCell>
                                                <TableCell className={classes.tableCell}></TableCell>
                                                <TableCell className={classes.tableCell}></TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatKPer9Projection}</TableCell>
                                                <TableCell className={classes.tableCell}>{}</TableCell>
                                                <TableCell className={classes.tableCell}>{}</TableCell>
                                                <TableCell className={classes.tableCell}>{}</TableCell>
                                                <TableCell className={classes.tableCell}>{}</TableCell>
                                                <TableCell className={classes.tableCell}>{}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        ) : null
                        }
        
                        {opponentContactStats ? (
                            <div>
                                <TableContainer>
                                    <Table
                                        className={classes.table}
                                        aria-labelledby="Opponent Contact Stats Table"
                                        aria-label="Opponent Contact Stats Table"
                                    >
                                        <TableHead>
                                            <TableRow className={classes.tableRow}>
                                                <TableCell
                                                    key='opponentContactStatsYear'
                                                    className={classes.tableCell}
                                                >
                                                    Year
                                                </TableCell>
        
                                                <TableCell
                                                    key='opponentContactStatsGBPercent'
                                                    className={classes.tableCell}
                                                >
                                                    GB%
                                                </TableCell>
        
                                                <TableCell
                                                    key='opponentContactStatsLDPercent'
                                                    className={classes.tableCell}
                                                >
                                                    LD%
                                                </TableCell>
        
                                                <TableCell
                                                    key='opponentContactStatsFBPercent'
                                                    className={classes.tableCell}
                                                >
                                                    FB%
                                                </TableCell>
        
                                                <TableCell
                                                    key='opponentContactStatsIFFBPercent'
                                                    className={classes.tableCell}
                                                >
                                                    IFFB%
                                                </TableCell>
        
                                                <TableCell
                                                    key='opponentContactStatsHRPerFB'
                                                    className={classes.tableCell}
                                                >
                                                    HR/FB
                                                </TableCell>
        
                                                <TableCell
                                                    key='opponentContactStatsSoftContactPercent'
                                                    className={classes.tableCell}
                                                >
                                                    Soft Contact %
                                                </TableCell>
        
                                                <TableCell
                                                    key='opponentContactStatsMediumContactPercent'
                                                    className={classes.tableCell}
                                                >
                                                    Medium Contact%
                                                </TableCell>
        
                                                <TableCell
                                                    key='opponentContactStatsHardContactPercent'
                                                    className={classes.tableCell}
                                                >
                                                    Hard Contact%
                                                </TableCell>
        
                                                <TableCell
                                                    key='opponentContactStatsExitVelo'
                                                    className={classes.tableCell}
                                                >
                                                    Exit Velo
                                                </TableCell>
        
                                                <TableCell
                                                    key='opponentContactStatsFlyBallLineDriveExitVelo'
                                                    className={classes.tableCell}
                                                >
                                                    FB/LD Exit Velo
                                                </TableCell>
        
                                                <TableCell
                                                    key='opponentContactStatsLaunchAngle'
                                                    className={classes.tableCell}
                                                >
                                                    Launch Angle
                                                </TableCell>
        
                                                <TableCell
                                                    key='opponentContactStatsBarrelPercent'
                                                    className={classes.tableCell}
                                                >
                                                    Barrel%
                                                </TableCell>
        
                                                <TableCell
                                                    key='opponentContactStatsBABIP'
                                                    className={classes.tableCell}
                                                >
                                                    BABIP
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
        
                                        <TableBody>
                                            {(Games2017 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2017'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2017</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherGBPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherLDPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFBPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{IFFBPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HRPerFBPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SoftContactPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{MediumContactPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HardContactPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherExitVelo2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFlyBallLineDriveExitVelo2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherLaunchAngle2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBarrelPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBABIP2017}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2018 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2018'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2018</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherGBPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherLDPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFBPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{IFFBPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HRPerFBPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SoftContactPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{MediumContactPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HardContactPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherExitVelo2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFlyBallLineDriveExitVelo2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherLaunchAngle2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBarrelPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBABIP2018}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2018 === 0 && Games2017 > 0) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2018'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2018</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Innings</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2019 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2019'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2019</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherGBPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherLDPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFBPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{IFFBPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HRPerFBPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SoftContactPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{MediumContactPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HardContactPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherExitVelo2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFlyBallLineDriveExitVelo2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherLaunchAngle2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBarrelPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBABIP2019}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2019 === 0 && (Games2018 > 0 || Games2017 > 0)) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2019'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2019</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(Games2020 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2020'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2020</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherGBPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherLDPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFBPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{IFFBPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HRPerFBPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SoftContactPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{MediumContactPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HardContactPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherExitVelo2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFlyBallLineDriveExitVelo2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherLaunchAngle2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBarrelPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBABIP2020}</TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(Games2020 === 0 && (Games2019 > 0 || Games2018 > 0 || Games2017 > 0)) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2020'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2020</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(Games2021 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2021'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2021</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherGBPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherLDPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFBPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{IFFBPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HRPerFBPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SoftContactPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{MediumContactPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HardContactPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherExitVelo2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFlyBallLineDriveExitVelo2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherLaunchAngle2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBarrelPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBABIP2021}</TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(Games2021 === 0 && (Games2020 > 0 || Games2019 > 0 || Games2018 > 0 || Games2017 > 0)) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2021'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2021</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        ) : null
                        }
        
                        {pitchUsageStats ? (
                            <div>
                                <TableContainer>
                                    <Table
                                        className={classes.table}
                                        aria-labelledby="Pitch Usage Stats Table"
                                        aria-label="Pitch Usage Stats Table"
                                    >
                                        <TableHead>
                                            <TableRow className={classes.tableRow}>
                                                <TableCell
                                                    key='pitchUsageStatsYear'
                                                    className={classes.tableCell}
                                                >
                                                    Year
                                                </TableCell>
        
                                                <TableCell
                                                    key='pitchUsageStatsAVGFastballVelo'
                                                    className={classes.tableCell}
                                                >
                                                    AVG FB Velo
                                                </TableCell>
        
                                                <TableCell
                                                    key='pitchUsageStatsMaxFastballVelo'
                                                    className={classes.tableCell}
                                                >
                                                    Max FB Velo
                                                </TableCell>
        
                                                <TableCell
                                                    key='pitchUsageStatsFourSeamFastballUsagePercent'
                                                    className={classes.tableCell}
                                                >
                                                    4FB Usage%
                                                </TableCell>
        
                                                <TableCell
                                                    key='pitchUsageStatsSinkerUsagePercent'
                                                    className={classes.tableCell}
                                                >
                                                    SI Usage%
                                                </TableCell>
        
                                                <TableCell
                                                    key='pitchUsageStatsCutterUsagePercent'
                                                    className={classes.tableCell}
                                                >
                                                    CU Usage%
                                                </TableCell>
        
                                                <TableCell
                                                    key='pitchUsageStatsSliderUsagePercent'
                                                    className={classes.tableCell}
                                                >
                                                    SL Usage%
                                                </TableCell>
        
                                                <TableCell
                                                    key='pitchUsageStatsChangeupUsagePercent'
                                                    className={classes.tableCell}
                                                >
                                                    CH Usage%
                                                </TableCell>
        
                                                <TableCell
                                                    key='pitchUsageStatsCurveUsagePercent'
                                                    className={classes.tableCell}
                                                >
                                                    CB Usage%
                                                </TableCell>
        
                                                <TableCell
                                                    key='pitchUsageStatsSplitterUsagePercent'
                                                    className={classes.tableCell}
                                                >
                                                    SP Usage%
                                                </TableCell>
        
                                                <TableCell
                                                    key='pitchUsageStatsKnuckleCurveUsagePercent'
                                                    className={classes.tableCell}
                                                >
                                                    KC Usage%
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
        
                                        <TableBody>
                                            {(Games2017 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2017'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2017</TableCell>
                                                    <TableCell className={classes.tableCell}>{AVGFastballVelo2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{MaxFastballVelo2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FourSeamFastballUsagePercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SinkerUsagePercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{CutterUsagePercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SliderUsagePercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ChangeupUsagePercent2017
                                                    }</TableCell>
                                                    <TableCell className={classes.tableCell}>{CurveUsagePercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SplitterUsagePercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KnuckleCurveUsagePercent2017}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2018 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2018'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2018</TableCell>
                                                    <TableCell className={classes.tableCell}>{AVGFastballVelo2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{MaxFastballVelo2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FourSeamFastballUsagePercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SinkerUsagePercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{CutterUsagePercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SliderUsagePercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ChangeupUsagePercent2018
                                                    }</TableCell>
                                                    <TableCell className={classes.tableCell}>{CurveUsagePercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SplitterUsagePercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KnuckleCurveUsagePercent2018}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2018 === 0 && Games2017 > 0) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2018'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2018</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCell}>Innings</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2019 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2019'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2019</TableCell>
                                                    <TableCell className={classes.tableCell}>{AVGFastballVelo2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{MaxFastballVelo2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FourSeamFastballUsagePercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SinkerUsagePercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{CutterUsagePercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SliderUsagePercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ChangeupUsagePercent2019
                                                    }</TableCell>
                                                    <TableCell className={classes.tableCell}>{CurveUsagePercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SplitterUsagePercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KnuckleCurveUsagePercent2019}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2019 === 0 && (Games2018 > 0 || Games2017 > 0)) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2019'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2019</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCell}>Innings</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(Games2020 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2020'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2020</TableCell>
                                                    <TableCell className={classes.tableCell}>{AVGFastballVelo2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{MaxFastballVelo2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FourSeamFastballUsagePercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SinkerUsagePercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{CutterUsagePercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SliderUsagePercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ChangeupUsagePercent2020
                                                    }</TableCell>
                                                    <TableCell className={classes.tableCell}>{CurveUsagePercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SplitterUsagePercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KnuckleCurveUsagePercent2020}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2020 === 0 && (Games2019 > 0 || Games2018 > 0 || Games2017 > 0)) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2020'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2020</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCell}>Innings</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(Games2021 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2021'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2021</TableCell>
                                                    <TableCell className={classes.tableCell}>{AVGFastballVelo2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{MaxFastballVelo2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FourSeamFastballUsagePercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SinkerUsagePercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{CutterUsagePercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SliderUsagePercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ChangeupUsagePercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{CurveUsagePercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SplitterUsagePercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KnuckleCurveUsagePercent2021}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2021 === 0 && (Games2020 > 0 || Games2019 > 0 || Games2018 > 0 || Games2017 > 0)) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2021'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2021</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCell}>Innings</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                </TableRow>
                                            ) : null}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        ) : null
                        }
                    </div>
                )
        
                const traditionalCardInfo = (
                    <div className={classes.traditionalCardInfoDiv}>
                        <h1 className={classes.name}>{firstName} {lastName}</h1>
                        <div className={classes.traditionalCardInfoInnerDiv}>
                            <img src={imageURL} className={classes.playerPhoto} alt='Player' />
                            <h3 className={classes.traditionalCardInfoText}>Bats: {bats} Throws: {throws}<br />Primary Position: {primaryPosition}<br />Other Positions: {otherPositions || 'None'}<br />Birthday: {birthday}<br />Current Team: {currentTeam}</h3>
                        </div>
                    </div>
                )
                
                const playerCardHitter = (
                    <div className={classes.internalPlayerCard}>
                        {traditionalStats ? (
                            <div>
                                <TableContainer>
                                    <Table
                                        className={classes.table}
                                        aria-labelledby="traditionalStatsTable"
                                        aria-label="traditinal stats table"
                                    >
                                        <TableHead>
                                            <TableRow className={classes.tableRow}>
                                                <TableCell
                                                    key='traditionalStatsYear'
                                                    className={classes.tableCell}
                                                >
                                                    Year
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsGamesPlayed'
                                                    className={classes.tableCell}
                                                >
                                                    Games Played
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsPAs'
                                                    className={classes.tableCell}
                                                >
                                                    PAs
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsBA'
                                                    className={classes.tableCell}
                                                >
                                                    BA
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsOBP'
                                                    className={classes.tableCell}
                                                >
                                                    OBP
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsSLG'
                                                    className={classes.tableCell}
                                                >
                                                    SLG
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsDoubles'
                                                    className={classes.tableCell}
                                                >
                                                    Doubles
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsHRs'
                                                    className={classes.tableCell}
                                                >
                                                    HRs
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsRuns'
                                                    className={classes.tableCell}
                                                >
                                                    Runs
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsRBIs'
                                                    className={classes.tableCell}
                                                >
                                                    RBIs
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsSBs'
                                                    className={classes.tableCell}
                                                >
                                                    SBs
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsFWAR'
                                                    className={classes.tableCell}
                                                >
                                                    FWAR
                                                </TableCell>
                                                <TableCell
                                                    key='traditionalStatsPAVG'
                                                    className={classes.tableCell}
                                                >
                                                    PAVG
                                                </TableCell>
                                                <TableCell
                                                    key='traditionalStatsPOBP'
                                                    className={classes.tableCell}
                                                >
                                                    POBP
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
        
                                        <TableBody>
                                            {(PA2017 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2017'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2017</TableCell>
                                                    <TableCell className={classes.tableCell}>{GamesPlayed2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PA2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BA2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{OBP2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SLG2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{Doubles2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HR2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{Runs2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{RBI2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{StolenBases2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FWAR2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{((1.75 * (Runs2017 + RBI2017) + 5.65 * HR2017 + 6 * StolenBases2017 + (4 * PA2017 * (BA2017 - 0.250))) / 6).toFixed(1)}</TableCell>
                                                    <TableCell className={classes.tableCell}>{((1.75 * (Runs2017 + RBI2017) + 5.65 * HR2017 + 6 * StolenBases2017 + (4 * PA2017 * (OBP2017 - 0.320))) / 6).toFixed(1)}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(PA2018 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2018'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2018</TableCell>
                                                    <TableCell className={classes.tableCell}>{GamesPlayed2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PA2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BA2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{OBP2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SLG2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{Doubles2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HR2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{Runs2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{RBI2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{StolenBases2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FWAR2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{((1.75 * (Runs2018 + RBI2018) + 5.65 * HR2018 + 6 * StolenBases2018 + (4 * PA2018 * (BA2018 - 0.250))) / 6).toFixed(1)}</TableCell>
                                                    <TableCell className={classes.tableCell}>{((1.75 * (Runs2018 + RBI2018) + 5.65 * HR2018 + 6 * StolenBases2018 + (4 * PA2018 * (OBP2018 - 0.320))) / 6).toFixed(1)}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(PA2018 === 0 && PA2017 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2018'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2018</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(PA2019 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2019'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2019</TableCell>
                                                    <TableCell className={classes.tableCell}>{GamesPlayed2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PA2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BA2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{OBP2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SLG2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{Doubles2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HR2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{Runs2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{RBI2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{StolenBases2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FWAR2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{((1.75 * (Runs2019 + RBI2019) + 5.65 * HR2019 + 6 * StolenBases2019 + (4 * PA2019 * (BA2019 - 0.250))) / 6).toFixed(1)}</TableCell>
                                                    <TableCell className={classes.tableCell}>{((1.75 * (Runs2019 + RBI2019) + 5.65 * HR2019 + 6 * StolenBases2019 + (4 * PA2019 * (OBP2019 - 0.32))) / 6).toFixed(1)}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(PA2019 === 0 && (PA2018 > 0 || PA2017 > 0)) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2019'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2019</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(PA2020 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2020'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2020</TableCell>
                                                    <TableCell className={classes.tableCell}>{GamesPlayed2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PA2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BA2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{OBP2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SLG2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{Doubles2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HR2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{Runs2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{RBI2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{StolenBases2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FWAR2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{((1.75 * (Runs2020 + RBI2020) + 5.65 * HR2020 + 6 * StolenBases2020 + (4 * PA2020 * (BA2020 - 0.250))) / 6).toFixed(1)}</TableCell>
                                                    <TableCell className={classes.tableCell}>{((1.75 * (Runs2020 + RBI2020) + 5.65 * HR2020 + 6 * StolenBases2020 + (4 * PA2020 * (OBP2020 - 0.32))) / 6).toFixed(1)}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(PA2020 === 0 && (PA2019 > 0 || PA2018 > 0 || PA2017 > 0)) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2020'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2020</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(PA2021 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2021'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2021</TableCell>
                                                    <TableCell className={classes.tableCell}>{GamesPlayed2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PA2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BA2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{OBP2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SLG2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{Doubles2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HR2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{Runs2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{RBI2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{StolenBases2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FWAR2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{((1.75 * (Runs2021 + RBI2021) + 5.65 * HR2021 + 6 * StolenBases2021 + (4 * PA2021 * (BA2021 - 0.250))) / 6).toFixed(1)}</TableCell>
                                                    <TableCell className={classes.tableCell}>{((1.75 * (Runs2021 + RBI2021) + 5.65 * HR2021 + 6 * StolenBases2021 + (4 * PA2021 * (OBP2021 - 0.32))) / 6).toFixed(1)}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(PA2021 === 0 && (PA2020 > 0 || PA2019 > 0 || PA2018 > 0 || PA2017 > 0)) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2021'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2021</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}

                                            <TableRow
                                                tabIndex={-1}
                                                key='Projected 2022'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCell}>2022</TableCell>
                                                <TableCell className={classes.tableCell}>Projections</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatXPAProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatXAVGProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatXOBPProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatXSLGProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatXDoublesProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatXHRProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatXRunsProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatXRBIProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatXSBProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatXFWARProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{((1.75 * (TheBatXRunsProjection + TheBatXRBIProjection) +
                                5.65 * TheBatXHRProjection +
                                6 * TheBatXSBProjection +
                                4 * TheBatXPAProjection * (TheBatXAVGProjection - 0.250)) /
                                6).toFixed(1)}</TableCell>
                                                <TableCell className={classes.tableCell}>{((1.75 * (TheBatXRunsProjection + TheBatXRBIProjection) +
                                5.65 * TheBatXHRProjection +
                                6 * TheBatXSBProjection +
                                4 * TheBatXPAProjection * (TheBatXOBPProjection - 0.320)) /
                                6).toFixed(1)}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        ) : null
                        }
        
                        {battedBallStats ? (
                            <div>
                                <TableContainer>
                                    <Table
                                        className={classes.table}
                                        aria-labelledby="Batted Ball Data Table"
                                        aria-label="Batted Ball Data Table"
                                    >
                                        <TableHead>
                                            <TableRow className={classes.tableRow}>
                                                <TableCell
                                                    key='battedBallStatsYear'
                                                    className={classes.tableCell}
                                                >
                                                    Year
                                                </TableCell>
        
                                                <TableCell
                                                    key='battedBallStatsGBPercent'
                                                    className={classes.tableCell}
                                                >
                                                    GB%
                                                </TableCell>
        
                                                <TableCell
                                                    key='battedBallStatsLDPercent'
                                                    className={classes.tableCell}
                                                >
                                                    LD%
                                                </TableCell>
        
                                                <TableCell
                                                    key='battedBallStatsFBPercent'
                                                    className={classes.tableCell}
                                                >
                                                    FB%
                                                </TableCell>
        
                                                <TableCell
                                                    key='battedBallStatsPullPercent'
                                                    className={classes.tableCell}
                                                >
                                                    Pull%
                                                </TableCell>
        
                                                <TableCell
                                                    key='tbattedBallStatsCenterPercent'
                                                    className={classes.tableCell}
                                                >
                                                    Center%
                                                </TableCell>
        
                                                <TableCell
                                                    key='battedBallStatsOppoPercent'
                                                    className={classes.tableCell}
                                                >
                                                    Oppo%
                                                </TableCell>
        
                                                <TableCell
                                                    key='battedBallStatsHRPerFB'
                                                    className={classes.tableCell}
                                                >
                                                    HR/FB
                                                </TableCell>
        
                                                <TableCell
                                                    key='battedBallStatsHardHitPercent'
                                                    className={classes.tableCell}
                                                >
                                                    Hard Hit%
                                                </TableCell>
        
                                                <TableCell
                                                    key='battedBallStatsExitVelo'
                                                    className={classes.tableCell}
                                                >
                                                    Exit Velo
                                                </TableCell>
        
                                                <TableCell
                                                    key='battedBallStatsFlyBallLineDriveExitVelo'
                                                    className={classes.tableCell}
                                                >
                                                    FB/LD Exit Velo
                                                </TableCell>
        
                                                <TableCell
                                                    key='battedBallStatsLaunchAngle'
                                                    className={classes.tableCell}
                                                >
                                                    Launch Angle
                                                </TableCell>
        
                                                <TableCell
                                                    key='battedBallStatsBarrelPercent'
                                                    className={classes.tableCell}
                                                >
                                                    Barrel%
                                                </TableCell>
        
                                                <TableCell
                                                    key='battedBallStatsAvgHRDistance'
                                                    className={classes.tableCell}
                                                >
                                                    AVG HR Dist
                                                </TableCell>
        
                                                <TableCell
                                                    key='battedBallStatsChaseRate'
                                                    className={classes.tableCell}
                                                >
                                                    Chase%
                                                </TableCell>
        
                                                <TableCell
                                                    key='battedBallStatsContactPercent'
                                                    className={classes.tableCell}
                                                >
                                                    Contact%
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
        
                                        <TableBody>
                                            {(PA2017 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2017'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2017</TableCell>
                                                    <TableCell className={classes.tableCell}>{GBPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{LDPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FBPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PullPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{CenterPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{OppoPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HRPerFB2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HardHitPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ExitVelo2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FlyBallLineDriveExitVelo2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{LaunchAngle2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BarrelPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{AvgHRDistance2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ChaseRate2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ContactPercent2017}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(PA2018 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2018'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2018</TableCell>
                                                    <TableCell className={classes.tableCell}>{GBPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{LDPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FBPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PullPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{CenterPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{OppoPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HRPerFB2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HardHitPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ExitVelo2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FlyBallLineDriveExitVelo2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{LaunchAngle2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BarrelPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{AvgHRDistance2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ChaseRate2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ContactPercent2018}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(PA2018 === 0 && PA2017 > 0) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2018'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2018</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(PA2019 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2019'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2019</TableCell>
                                                    <TableCell className={classes.tableCell}>{GBPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{LDPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FBPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PullPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{CenterPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{OppoPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HRPerFB2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HardHitPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ExitVelo2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FlyBallLineDriveExitVelo2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{LaunchAngle2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BarrelPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{AvgHRDistance2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ChaseRate2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ContactPercent2019}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(PA2019 === 0 && (PA2018 > 0 || PA2017 > 0)) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2019'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2019</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(PA2020 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2020'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2020</TableCell>
                                                    <TableCell className={classes.tableCell}>{GBPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{LDPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FBPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PullPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{CenterPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{OppoPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HRPerFB2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HardHitPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ExitVelo2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FlyBallLineDriveExitVelo2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{LaunchAngle2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BarrelPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{AvgHRDistance2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ChaseRate2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ContactPercent2020}</TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(PA2020 === 0 && (PA2019 > 0 || PA2018 > 0 || PA2017 > 0)) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2020'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2020</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(PA2021 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2021'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2021</TableCell>
                                                    <TableCell className={classes.tableCell}>{GBPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{LDPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FBPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PullPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{CenterPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{OppoPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HRPerFB2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HardHitPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ExitVelo2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FlyBallLineDriveExitVelo2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{LaunchAngle2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BarrelPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{AvgHRDistance2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ChaseRate2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ContactPercent2021}</TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(PA2021 === 0 && (PA2020 > 0 || PA2019 > 0 || PA2018 > 0 || PA2017 > 0)) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2021'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2021</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        ) : null
                        }
        
                        {expectedStats ? (
                            <div>
                                <TableContainer>
                                    <Table
                                        className={classes.table}
                                        aria-labelledby="Expected Stats Table"
                                        aria-label="Expected Stats Table"
                                    >
                                        <TableHead>
                                            <TableRow className={classes.tableRow}>
                                                <TableCell
                                                    key='expectedStatsYear'
                                                    className={classes.tableCell}
                                                >
                                                    Year
                                                </TableCell>
        
                                                <TableCell
                                                    key='expectedStatsBA'
                                                    className={classes.tableCell}
                                                >
                                                    BA
                                                </TableCell>
        
                                                <TableCell
                                                    key='expectedStatsxBA'
                                                    className={classes.tableCell}
                                                >
                                                    xBA
                                                </TableCell>
        
                                                <TableCell
                                                    key='expectedStatsBABIP'
                                                    className={classes.tableCell}
                                                >
                                                    BABIP
                                                </TableCell>
        
                                                <TableCell
                                                    key='expectedStatsOBP'
                                                    className={classes.tableCell}
                                                >
                                                    OBP
                                                </TableCell>
        
                                                <TableCell
                                                    key='texpectedStatsSLG'
                                                    className={classes.tableCell}
                                                >
                                                    SLG
                                                </TableCell>
        
                                                <TableCell
                                                    key='expectedStatsWOBA'
                                                    className={classes.tableCell}
                                                >
                                                    WOBA
                                                </TableCell>
        
                                                <TableCell
                                                    key='expectedStatsxWOBA'
                                                    className={classes.tableCell}
                                                >
                                                    xWOBA
                                                </TableCell>
        
                                                <TableCell
                                                    key='expectedStatsLineupSlot'
                                                    className={classes.tableCell}
                                                >
                                                    Lineup Slot
                                                </TableCell>
        
                                                <TableCell
                                                    key='expectedStatsWRCPlus'
                                                    className={classes.tableCell}
                                                >
                                                    WRC+
                                                </TableCell>
        
                                                <TableCell
                                                    key='expectedStatsOPSPlus'
                                                    className={classes.tableCell}
                                                >
                                                    OPS+
                                                </TableCell>
        
                                                <TableCell
                                                    key='expectedStatsBBPercent'
                                                    className={classes.tableCell}
                                                >
                                                    BB%
                                                </TableCell>
        
                                                <TableCell
                                                    key='expectedStatsKPercent'
                                                    className={classes.tableCell}
                                                >
                                                    K%
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
        
                                        <TableBody>
                                            {(PA2017 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2017'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2017</TableCell>
                                                    <TableCell className={classes.tableCell}>{BA2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{xBA2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BABIP2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{OBP2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SLG2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WOBA2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{xWOBA2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{LineupSlot2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WRCPlus2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{OPSPlus2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BBPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KPercent2017}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(PA2018 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2018'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2018</TableCell>
                                                    <TableCell className={classes.tableCell}>{BA2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{xBA2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BABIP2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{OBP2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SLG2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WOBA2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{xWOBA2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{LineupSlot2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WRCPlus2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{OPSPlus2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BBPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KPercent2018}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(PA2018 === 0 && PA2017 > 0) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2018'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2018</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(PA2019 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2019'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2019</TableCell>
                                                    <TableCell className={classes.tableCell}>{BA2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{xBA2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BABIP2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{OBP2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SLG2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WOBA2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{xWOBA2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{LineupSlot2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WRCPlus2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{OPSPlus2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BBPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KPercent2019}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(PA2019 === 0 && (PA2018 > 0 || PA2017 > 0)) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2019'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2019</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(PA2020 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2020'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2020</TableCell>
                                                    <TableCell className={classes.tableCell}>{BA2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{xBA2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BABIP2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{OBP2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SLG2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WOBA2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{xWOBA2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{LineupSlot2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WRCPlus2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{OPSPlus2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BBPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KPercent2020}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(PA2020 === 0 && (PA2019 > 0 || PA2018 > 0 || PA2017 > 0)) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2020'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2020</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(PA2021 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2021'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2021</TableCell>
                                                    <TableCell className={classes.tableCell}>{BA2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{xBA2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BABIP2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{OBP2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SLG2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WOBA2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{xWOBA2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{LineupSlot2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WRCPlus2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{OPSPlus2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BBPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KPercent2021}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(PA2021 === 0 && (PA2020 > 0 || PA2019 > 0 || PA2018 > 0 || PA2017 > 0)) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2021'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2021</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        ) : null
                        }
        
                        {baseRunningStats ? (
                            <div>
                                <TableContainer>
                                    <Table
                                        className={classes.table}
                                        aria-labelledby="Base Running Stats Table"
                                        aria-label="Base Running Stats Table"
                                    >
                                        <TableHead>
                                            <TableRow className={classes.tableRow}>
                                                <TableCell
                                                    key='baseRunningStatsYear'
                                                    className={classes.tableCell}
                                                >
                                                    Year
                                                </TableCell>
        
                                                <TableCell
                                                    key='baseRunningStatsSprintSpeed'
                                                    className={classes.tableCell}
                                                >
                                                    SprintSpeed
                                                </TableCell>
        
                                                <TableCell
                                                    key='baseRunningStatsStolenBases'
                                                    className={classes.tableCell}
                                                >
                                                    SBs
                                                </TableCell>
        
                                                <TableCell
                                                    key='baseRunningStatsStolenBasePercent'
                                                    className={classes.tableCell}
                                                >
                                                    SB%
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
        
                                        <TableBody>
                                            {(PA2017 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2017'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2017</TableCell>
                                                    <TableCell className={classes.tableCell}>{SprintSpeed2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{StolenBases2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{StolenBasePercent2017}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(PA2018 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2018'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2018</TableCell>
                                                    <TableCell className={classes.tableCell}>{SprintSpeed2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{StolenBases2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{StolenBasePercent2018}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(PA2018 === 0 && PA2017 > 0) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2018'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2018</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(PA2019 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2019'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2019</TableCell>
                                                    <TableCell className={classes.tableCell}>{SprintSpeed2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{StolenBases2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{StolenBasePercent2019}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(PA2019 === 0 && (PA2018 > 0 || PA2017 > 0)) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2019'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2019</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(PA2020 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2020'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2020</TableCell>
                                                    <TableCell className={classes.tableCell}>{SprintSpeed2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{StolenBases2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{StolenBasePercent2020}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(PA2020 === 0 && (PA2019 > 0 || PA2018 > 0 || PA2017 > 0)) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2020'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2020</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(PA2021 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2021'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2021</TableCell>
                                                    <TableCell className={classes.tableCell}>{SprintSpeed2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{StolenBases2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{StolenBasePercent2021}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(PA2021 === 0 && (PA2020 > 0 || PA2019 > 0 || PA2018 > 0 || PA2017 > 0)) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2021'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2021</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                </TableRow>
                                            ) : null}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        ) : null
                        }
                    </div>
                )

                const cardButton = {
                    fontSize: '1.6rem',
                    backgroundColor: '#9AA297',
                    marginRight: '30px',
                }
        
                const cardButtonSelected = {
                    fontSize: '1.6rem',
                    color: 'white',
                    backgroundColor: '#000080',
                    marginRight: '30px',
                }

                if (this.state.showHitterCard === true ) {
                    return (
                        <>
                            <Card className={classes.container}>
                                <div className={classes.playerCardContainer}>
                                    <CloseIcon onClick={() => { this.props.close() }} className={classes.closeIconStyling} />
                                    <div className={classes.buttonContainer}>
                                        <Button
                                            style={this.state.showHitterCard ? cardButtonSelected : cardButton}
                                            onClick={() => this.showHitterCard()}
                                        >
                                            Hitting Stats
                                        </Button>

                                        <Button
                                            style={this.state.showPitcherCard ? cardButtonSelected : cardButton}
                                            onClick={() => this.showPitcherCard()}
                                        >
                                            Pitching Stats
                                        </Button>
                                    </div>
                                    {traditionalCardInfo}
            
                                    <FormControl>
                                        <Select classes={{ root: classes.selectText }} onChange={this.cardDataChange} value={labelValue}>
                                            <MenuItem classes={{ root: classes.selectText, }} value='traditionalStats'>Traditional Data</MenuItem>
                                            <MenuItem classes={{ root: classes.selectText, }} value="battedBallStats">Batted Ball Data</MenuItem>
                                            <MenuItem classes={{ root: classes.selectText, }} value="expectedStats">Expected Stats</MenuItem>
                                            <MenuItem classes={{ root: classes.selectText, }} value="baseRunningStats">Base Running Stats</MenuItem>
                                        </Select>
                                    </FormControl>
            
                                    {playerCardHitter}
                                    {battedBallStats}
                                    {expectedStats}
                                    {baseRunningStats}
                                </div>
                            </Card>
                        </>
                    )
                }
                else {
                    return (
                        <>
                            <Card className={classes.container}>
                                <div className={classes.playerCardContainer}>
                                    <CloseIcon onClick={() => { this.props.close() }} className={classes.closeIconStyling} />
                                    <div className={classes.buttonContainer}>
                                        <Button
                                            style={this.state.showHitterCard ? cardButtonSelected : cardButton}
                                            onClick={() => this.showHitterCard()}
                                        >
                                            Hitting Stats
                                        </Button>

                                        <Button
                                            style={this.state.showPitcherCard ? cardButtonSelected : cardButton}
                                            onClick={() => this.showPitcherCard()}
                                        >
                                            Pitching Stats
                                        </Button>
                                    </div>
                                    {traditionalCardInfo}
            
                                    <FormControl>
                                        <Select classes={{ root: classes.selectText }} onChange={this.cardDataChange} value={labelValue}>
                                            <MenuItem classes={{ root: classes.selectText, }} value='traditionalStats'>Traditional Data</MenuItem>
                                            <MenuItem classes={{ root: classes.selectText, }} value="advancedStats">Advanced Stats</MenuItem>
                                            <MenuItem classes={{ root: classes.selectText, }} value="opponentContactStats">Opponent Contact Stats</MenuItem>
                                            <MenuItem classes={{ root: classes.selectText, }} value="pitchUsageStats">Pitch Usage Stats</MenuItem>
                                        </Select>
                                    </FormControl>
            
                                    {playerCardPitcher}
                                    {advancedStats}
                                    {opponentContactStats}
                                    {pitchUsageStats}
                                </div>
                            </Card>
                        </>
                    )

                }
            }
            else {
                const playerCard = (
                    <div className={classes.internalPlayerCard}>
                        {traditionalStats ? (
                            <div>
                                <TableContainer>
                                    <Table
                                        className={classes.table}
                                        aria-labelledby="traditionalStatsTable"
                                        aria-label="traditinal stats table"
                                    >
                                        <TableHead>
                                            <TableRow className={classes.tableRow}>
                                                <TableCell
                                                    key='traditionalStatsYear'
                                                    className={classes.tableCell}
                                                >
                                                    Year
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsGamesPlayed'
                                                    className={classes.tableCell}
                                                >
                                                    Games Played
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsStarts'
                                                    className={classes.tableCell}
                                                >
                                                    Starts
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsInningsPitched'
                                                    className={classes.tableCell}
                                                >
                                                    Innings Pitched
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsQS'
                                                    className={classes.tableCell}
                                                >
                                                    QS
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsRawKs'
                                                    className={classes.tableCell}
                                                >
                                                    Ks
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsERA'
                                                    className={classes.tableCell}
                                                >
                                                    ERA
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsWHIP'
                                                    className={classes.tableCell}
                                                >
                                                    WHIP
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsLOBPercent'
                                                    className={classes.tableCell}
                                                >
                                                    LOB%
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalSaves'
                                                    className={classes.tableCell}
                                                >
                                                    Saves
                                                </TableCell>
        
                                                <TableCell
                                                    key='traditionalStatsFWAR'
                                                    className={classes.tableCell}
                                                >
                                                    FWAR
                                                </TableCell>
        
        
                                                <TableCell
                                                    key='traditionalStatsPTotal'
                                                    className={classes.tableCell}
                                                >
                                                    PTotal
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
        
                                        <TableBody>
                                            {(Games2017 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2017'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2017</TableCell>
                                                    <TableCell className={classes.tableCell}>{Games2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{GamesStarted2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitched2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{QS2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{RawKs2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERA2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WHIP2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{LOBPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{Saves2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFWAR2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{(
                                                            (10 * QS2017 +
                                                                1.2 * RawKs2017 +
                                                                9 * Saves2017 +
                                                                4 * Number(InningsPitched2017) * Number(1.32 - WHIP2017) +
                                                                Number(InningsPitched2017) * Number(4.47 - ERA2017)) /
                                                            10).toFixed(1)}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2018 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2018'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2018</TableCell>
                                                    <TableCell className={classes.tableCell}>{Games2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{GamesStarted2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitched2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{QS2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{RawKs2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERA2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WHIP2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{LOBPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{Saves2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFWAR2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{(
                                                            (10 * QS2018 +
                                                                1.2 * RawKs2018 +
                                                                9 * Saves2018 +
                                                                4 * Number(InningsPitched2018) * Number(1.32 - WHIP2018) +
                                                                Number(InningsPitched2018) * Number(4.47 - ERA2018)) /
                                                            10).toFixed(1)}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2018 === 0 && Games2017 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2018'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2018</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Innings</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2019 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2019'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2019</TableCell>
                                                    <TableCell className={classes.tableCell}>{Games2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{GamesStarted2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitched2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{QS2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{RawKs2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERA2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WHIP2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{LOBPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{Saves2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFWAR2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{(
                                                            (10 * QS2019 +
                                                                1.2 * RawKs2019 +
                                                                9 * Saves2019 +
                                                                4 * Number(InningsPitched2019) * Number(1.32 - WHIP2019) +
                                                                Number(InningsPitched2019) * Number(4.47 - ERA2019)) /
                                                            10).toFixed(1)}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2019 === 0 && (Games2018 > 0 || Games2017 > 0)) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2019'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2019</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Innings</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(Games2020 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2020'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2020</TableCell>
                                                    <TableCell className={classes.tableCell}>{Games2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{GamesStarted2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitched2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{QS2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{RawKs2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERA2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WHIP2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{LOBPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{Saves2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFWAR2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{(
                                                            (10 * QS2020 +
                                                                1.2 * RawKs2020 +
                                                                9 * Saves2020 +
                                                                4 * Number(InningsPitched2020) * Number(1.32 - WHIP2020) +
                                                                Number(InningsPitched2020) * Number(4.47 - ERA2020)) /
                                                            10).toFixed(1)}</TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(Games2020 === 0 && (Games2019 > 0 || Games2018 > 0 || Games2017 > 0)) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2020'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2020</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Innings</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(Games2021 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2021'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2021</TableCell>
                                                    <TableCell className={classes.tableCell}>{Games2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{GamesStarted2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitched2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{QS2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{RawKs2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERA2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WHIP2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{LOBPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{Saves2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFWAR2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{(
                                                            (10 * QS2021 +
                                                                1.2 * RawKs2021 +
                                                                9 * Saves2021 +
                                                                4 * Number(InningsPitched2021) * Number(1.32 - WHIP2021) +
                                                                Number(InningsPitched2021) * Number(4.47 - ERA2021)) /
                                                            10).toFixed(1)}</TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(Games2021 === 0 && (Games2020 > 0 || Games2019 > 0 || Games2018 > 0 || Games2017 > 0)) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2021'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2021</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Innings</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}

                                            <TableRow
                                                tabIndex={-1}
                                                key='Projected 2022'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCell}>2022 Projections</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatGamesProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatGamesStartedProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatInningsPitchedProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatQSProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatRawKsProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatERAProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatWHIPProjection}</TableCell>
                                                <TableCell className={classes.tableCell}></TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatSavesProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{PitcherTheBatFWARProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{(
                                                    (10 * Number(TheBatQSProjection) +
                                                        1.2 * TheBatRawKsProjection +
                                                        9 * TheBatSavesProjection +
                                                        4 * Number(TheBatInningsPitchedProjection) * Number(1.32 - TheBatWHIPProjection) +
                                                        Number(TheBatInningsPitchedProjection) * Number(4.47 - TheBatERAProjection)) / 
                                                    8).toFixed(1)}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        ) : null
                        }
        
                        {advancedStats ? (
                            <div>
                                <TableContainer>
                                    <Table
                                        className={classes.table}
                                        aria-labelledby="Advanced Stats Table"
                                        aria-label="Advanced Stats Table"
                                    >
                                        <TableHead>
                                            <TableRow className={classes.tableRow}>
                                                <TableCell
                                                    key='advancedStatsYear'
                                                    className={classes.tableCell}
                                                >
                                                    Year
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsInningsPitched'
                                                    className={classes.tableCell}
                                                >
                                                    Innings
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsInningsPitchedPerGameStarted'
                                                    className={classes.tableCell}
                                                >
                                                    IP per Start
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsERA'
                                                    className={classes.tableCell}
                                                >
                                                    ERA
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsERAPlus'
                                                    className={classes.tableCell}
                                                >
                                                    ERA+
                                                </TableCell>
        
                                                <TableCell
                                                    key='tadvancedStatsFIP'
                                                    className={classes.tableCell}
                                                >
                                                    FIP
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsxFIP'
                                                    className={classes.tableCell}
                                                >
                                                    xFIP
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsSIERA'
                                                    className={classes.tableCell}
                                                >
                                                    SIERA
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsWHIP'
                                                    className={classes.tableCell}
                                                >
                                                    WHIP
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsHitsPer9'
                                                    className={classes.tableCell}
                                                >
                                                    H/9
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsHRsPer9'
                                                    className={classes.tableCell}
                                                >
                                                    HR/9
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsBBPer9'
                                                    className={classes.tableCell}
                                                >
                                                    BB/9
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsKPer9'
                                                    className={classes.tableCell}
                                                >
                                                    K/9
                                                </TableCell>
                                                <TableCell
                                                    key='advancedStatsKDividedByBB'
                                                    className={classes.tableCell}
                                                >
                                                    K/BB
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsKPercent'
                                                    className={classes.tableCell}
                                                >
                                                    K%
                                                </TableCell>
                                                <TableCell
                                                    key='advancedStatsBBPercent'
                                                    className={classes.tableCell}
                                                >
                                                    BB%
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsKMinusBBPercent'
                                                    className={classes.tableCell}
                                                >
                                                    K-BB%
                                                </TableCell>
        
                                                <TableCell
                                                    key='advancedStatsFirstStrikePercent'
                                                    className={classes.tableCell}
                                                >
                                                    First Strike%
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
        
                                        <TableBody>
                                            {(Games2017 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2017'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2017</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitched2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitchedPerGameStarted2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERA2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERAPlus2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FIP2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{xFIP2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SIERA2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WHIP2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HitsPer92017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HRsPer92017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BBPer92017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KPer92017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KDividedByBB2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherKPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBBPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KMinusBBPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FirstStrikePercent2017}</TableCell>
        
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2018 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2018'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2018</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitched2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitchedPerGameStarted2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERA2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERAPlus2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FIP2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{xFIP2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SIERA2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WHIP2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HitsPer92018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HRsPer92018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BBPer92018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KPer92018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KDividedByBB2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherKPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBBPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KMinusBBPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FirstStrikePercent2018}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2018 === 0 && Games2017 > 0) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2018'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2018</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Innings</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2019 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2019'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2019</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitched2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitchedPerGameStarted2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERA2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERAPlus2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FIP2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{xFIP2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SIERA2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WHIP2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HitsPer92019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HRsPer92019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BBPer92019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KPer92019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KDividedByBB2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherKPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBBPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KMinusBBPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FirstStrikePercent2019}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2019 === 0 && (Games2018 > 0 || Games2017 > 0)) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2019'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2019</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Innings</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(Games2020 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2020'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2020</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitched2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitchedPerGameStarted2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERA2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERAPlus2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FIP2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{xFIP2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SIERA2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WHIP2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HitsPer92020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HRsPer92020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BBPer92020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KPer92020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KDividedByBB2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherKPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBBPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KMinusBBPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FirstStrikePercent2020}</TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(Games2020 === 0 && (Games2019 > 0 || Games2018 > 0 || Games2017 > 0)) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2020'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2020</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Innings</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2021 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2021'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2021</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitched2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{InningsPitchedPerGameStarted2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERA2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ERAPlus2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FIP2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{xFIP2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SIERA2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{WHIP2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HitsPer92021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HRsPer92021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{BBPer92021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KPer92021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KDividedByBB2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherKPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBBPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KMinusBBPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FirstStrikePercent2021}</TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(Games2021 === 0 && (Games2020 > 0 || Games2019 > 0 || Games2018 > 0 || Games2017 > 0)) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2021'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2021</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Innings</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}

                                            <TableRow
                                                tabIndex={-1}
                                                key='Projected 2022'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCell}>2022 Projections</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatInningsPitchedProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{}</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatERAProjection}</TableCell>
                                                <TableCell className={classes.tableCell}>{}</TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatFIPProjection}</TableCell>
                                                <TableCell className={classes.tableCell}></TableCell>
                                                <TableCell className={classes.tableCell}></TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatWHIPProjection}</TableCell>
                                                <TableCell className={classes.tableCell}></TableCell>
                                                <TableCell className={classes.tableCell}></TableCell>
                                                <TableCell className={classes.tableCell}></TableCell>
                                                <TableCell className={classes.tableCell}>{TheBatKPer9Projection}</TableCell>
                                                <TableCell className={classes.tableCell}>{}</TableCell>
                                                <TableCell className={classes.tableCell}>{}</TableCell>
                                                <TableCell className={classes.tableCell}>{}</TableCell>
                                                <TableCell className={classes.tableCell}>{}</TableCell>
                                                <TableCell className={classes.tableCell}>{}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        ) : null
                        }
        
                        {opponentContactStats ? (
                            <div>
                                <TableContainer>
                                    <Table
                                        className={classes.table}
                                        aria-labelledby="Opponent Contact Stats Table"
                                        aria-label="Opponent Contact Stats Table"
                                    >
                                        <TableHead>
                                            <TableRow className={classes.tableRow}>
                                                <TableCell
                                                    key='opponentContactStatsYear'
                                                    className={classes.tableCell}
                                                >
                                                    Year
                                                </TableCell>
        
                                                <TableCell
                                                    key='opponentContactStatsGBPercent'
                                                    className={classes.tableCell}
                                                >
                                                    GB%
                                                </TableCell>
        
                                                <TableCell
                                                    key='opponentContactStatsLDPercent'
                                                    className={classes.tableCell}
                                                >
                                                    LD%
                                                </TableCell>
        
                                                <TableCell
                                                    key='opponentContactStatsFBPercent'
                                                    className={classes.tableCell}
                                                >
                                                    FB%
                                                </TableCell>
        
                                                <TableCell
                                                    key='opponentContactStatsIFFBPercent'
                                                    className={classes.tableCell}
                                                >
                                                    IFFB%
                                                </TableCell>
        
                                                <TableCell
                                                    key='opponentContactStatsHRPerFB'
                                                    className={classes.tableCell}
                                                >
                                                    HR/FB
                                                </TableCell>
        
                                                <TableCell
                                                    key='opponentContactStatsSoftContactPercent'
                                                    className={classes.tableCell}
                                                >
                                                    Soft Contact %
                                                </TableCell>
        
                                                <TableCell
                                                    key='opponentContactStatsMediumContactPercent'
                                                    className={classes.tableCell}
                                                >
                                                    Medium Contact%
                                                </TableCell>
        
                                                <TableCell
                                                    key='opponentContactStatsHardContactPercent'
                                                    className={classes.tableCell}
                                                >
                                                    Hard Contact%
                                                </TableCell>
        
                                                <TableCell
                                                    key='opponentContactStatsExitVelo'
                                                    className={classes.tableCell}
                                                >
                                                    Exit Velo
                                                </TableCell>
        
                                                <TableCell
                                                    key='opponentContactStatsFlyBallLineDriveExitVelo'
                                                    className={classes.tableCell}
                                                >
                                                    FB/LD Exit Velo
                                                </TableCell>
        
                                                <TableCell
                                                    key='opponentContactStatsLaunchAngle'
                                                    className={classes.tableCell}
                                                >
                                                    Launch Angle
                                                </TableCell>
        
                                                <TableCell
                                                    key='opponentContactStatsBarrelPercent'
                                                    className={classes.tableCell}
                                                >
                                                    Barrel%
                                                </TableCell>
        
                                                <TableCell
                                                    key='opponentContactStatsBABIP'
                                                    className={classes.tableCell}
                                                >
                                                    BABIP
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
        
                                        <TableBody>
                                            {(Games2017 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2017'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2017</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherGBPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherLDPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFBPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{IFFBPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HRPerFBPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SoftContactPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{MediumContactPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HardContactPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherExitVelo2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFlyBallLineDriveExitVelo2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherLaunchAngle2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBarrelPercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBABIP2017}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2018 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2018'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2018</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherGBPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherLDPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFBPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{IFFBPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HRPerFBPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SoftContactPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{MediumContactPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HardContactPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherExitVelo2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFlyBallLineDriveExitVelo2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherLaunchAngle2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBarrelPercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBABIP2018}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2018 === 0 && Games2017 > 0) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2018'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2018</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Innings</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2019 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2019'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2019</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherGBPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherLDPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFBPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{IFFBPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HRPerFBPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SoftContactPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{MediumContactPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HardContactPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherExitVelo2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFlyBallLineDriveExitVelo2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherLaunchAngle2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBarrelPercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBABIP2019}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2019 === 0 && (Games2018 > 0 || Games2017 > 0)) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2019'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2019</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(Games2020 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2020'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2020</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherGBPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherLDPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFBPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{IFFBPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HRPerFBPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SoftContactPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{MediumContactPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HardContactPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherExitVelo2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFlyBallLineDriveExitVelo2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherLaunchAngle2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBarrelPercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBABIP2020}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2020 === 0 && (Games2019 > 0 || Games2018 > 0 || Games2017 > 0)) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2020'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2020</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(Games2021 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2021'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2021</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherGBPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherLDPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFBPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{IFFBPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HRPerFBPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SoftContactPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{MediumContactPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{HardContactPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherExitVelo2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherFlyBallLineDriveExitVelo2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherLaunchAngle2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBarrelPercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{PitcherBABIP2021}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2021 === 0 && (Games2020 > 0 || Games2019 > 0 || Games2018 > 0 || Games2017 > 0)) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2020'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2021</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                    <TableCell className={classes.tableCellNoPA}></TableCell>
                                                </TableRow>
                                            ) : null}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        ) : null
                        }
        
                        {pitchUsageStats ? (
                            <div>
                                <TableContainer>
                                    <Table
                                        className={classes.table}
                                        aria-labelledby="Pitch Usage Stats Table"
                                        aria-label="Pitch Usage Stats Table"
                                    >
                                        <TableHead>
                                            <TableRow className={classes.tableRow}>
                                                <TableCell
                                                    key='pitchUsageStatsYear'
                                                    className={classes.tableCell}
                                                >
                                                    Year
                                                </TableCell>
        
                                                <TableCell
                                                    key='pitchUsageStatsAVGFastballVelo'
                                                    className={classes.tableCell}
                                                >
                                                    AVG FB Velo
                                                </TableCell>
        
                                                <TableCell
                                                    key='pitchUsageStatsMaxFastballVelo'
                                                    className={classes.tableCell}
                                                >
                                                    Max FB Velo
                                                </TableCell>
        
                                                <TableCell
                                                    key='pitchUsageStatsFourSeamFastballUsagePercent'
                                                    className={classes.tableCell}
                                                >
                                                    4FB Usage%
                                                </TableCell>
        
                                                <TableCell
                                                    key='pitchUsageStatsSinkerUsagePercent'
                                                    className={classes.tableCell}
                                                >
                                                    SI Usage%
                                                </TableCell>
        
                                                <TableCell
                                                    key='pitchUsageStatsCutterUsagePercent'
                                                    className={classes.tableCell}
                                                >
                                                    CU Usage%
                                                </TableCell>
        
                                                <TableCell
                                                    key='pitchUsageStatsSliderUsagePercent'
                                                    className={classes.tableCell}
                                                >
                                                    SL Usage%
                                                </TableCell>
        
                                                <TableCell
                                                    key='pitchUsageStatsChangeupUsagePercent'
                                                    className={classes.tableCell}
                                                >
                                                    CH Usage%
                                                </TableCell>
        
                                                <TableCell
                                                    key='pitchUsageStatsCurveUsagePercent'
                                                    className={classes.tableCell}
                                                >
                                                    CB Usage%
                                                </TableCell>
        
                                                <TableCell
                                                    key='pitchUsageStatsSplitterUsagePercent'
                                                    className={classes.tableCell}
                                                >
                                                    SP Usage%
                                                </TableCell>
        
                                                <TableCell
                                                    key='pitchUsageStatsKnuckleCurveUsagePercent'
                                                    className={classes.tableCell}
                                                >
                                                    KC Usage%
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
        
                                        <TableBody>
                                            {(Games2017 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2017'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2017</TableCell>
                                                    <TableCell className={classes.tableCell}>{AVGFastballVelo2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{MaxFastballVelo2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FourSeamFastballUsagePercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SinkerUsagePercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{CutterUsagePercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SliderUsagePercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ChangeupUsagePercent2017
                                                    }</TableCell>
                                                    <TableCell className={classes.tableCell}>{CurveUsagePercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SplitterUsagePercent2017}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KnuckleCurveUsagePercent2017}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2018 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2018'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2018</TableCell>
                                                    <TableCell className={classes.tableCell}>{AVGFastballVelo2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{MaxFastballVelo2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FourSeamFastballUsagePercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SinkerUsagePercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{CutterUsagePercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SliderUsagePercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ChangeupUsagePercent2018
                                                    }</TableCell>
                                                    <TableCell className={classes.tableCell}>{CurveUsagePercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SplitterUsagePercent2018}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KnuckleCurveUsagePercent2018}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2018 === 0 && Games2017 > 0) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2018'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2018</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCell}>Innings</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2019 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2019'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2019</TableCell>
                                                    <TableCell className={classes.tableCell}>{AVGFastballVelo2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{MaxFastballVelo2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FourSeamFastballUsagePercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SinkerUsagePercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{CutterUsagePercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SliderUsagePercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ChangeupUsagePercent2019
                                                    }</TableCell>
                                                    <TableCell className={classes.tableCell}>{CurveUsagePercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SplitterUsagePercent2019}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KnuckleCurveUsagePercent2019}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2019 === 0 && (Games2018 > 0 || Games2017 > 0)) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2019'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2019</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCell}>Innings</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(Games2020 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2020'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2020</TableCell>
                                                    <TableCell className={classes.tableCell}>{AVGFastballVelo2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{MaxFastballVelo2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FourSeamFastballUsagePercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SinkerUsagePercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{CutterUsagePercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SliderUsagePercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ChangeupUsagePercent2020
                                                    }</TableCell>
                                                    <TableCell className={classes.tableCell}>{CurveUsagePercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SplitterUsagePercent2020}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KnuckleCurveUsagePercent2020}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2020 === 0 && (Games2019> 0 || Games2018 > 0 || Games2017 > 0)) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2020'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2020</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCell}>Innings</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                </TableRow>
                                            ) : null}

                                            {(Games2021 > 0) ? (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key='2021'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCell}>2021</TableCell>
                                                    <TableCell className={classes.tableCell}>{AVGFastballVelo2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{MaxFastballVelo2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{FourSeamFastballUsagePercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SinkerUsagePercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{CutterUsagePercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SliderUsagePercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{ChangeupUsagePercent2021
                                                    }</TableCell>
                                                    <TableCell className={classes.tableCell}>{CurveUsagePercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{SplitterUsagePercent2021}</TableCell>
                                                    <TableCell className={classes.tableCell}>{KnuckleCurveUsagePercent2021}</TableCell>
                                                </TableRow>
                                            ) : null}
        
                                            {(Games2021 === 0 && (Games2020 > 0 || Games2019 > 0 || Games2018 > 0 || Games2017 > 0)) ? (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key='2021'
                                                    className={classes.tableRow}
                                                >
                                                    <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2021</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                    <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                    <TableCell className={classes.tableCell}>Innings</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                    <TableCell className={classes.tableCell}>{}</TableCell>
                                                </TableRow>
                                            ) : null}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        ) : null
                        }
                    </div>
                )
        
                const traditionalCardInfo = (
                    <div className={classes.traditionalCardInfoDiv}>
                        <h1 className={classes.name}>{firstName} {lastName}</h1>
                        <div className={classes.traditionalCardInfoInnerDiv}>
                            <img src={imageURL} className={classes.playerPhoto} alt='Player' />
                            <h3 className={classes.traditionalCardInfoText}>Bats: {bats} Throws: {throws}<br />Primary Position: {primaryPosition}<br />Other Positions: {otherPositions || 'None'}<br />Birthday: {birthday}<br />Current Team: {currentTeam}</h3>
                        </div>
                    </div>
                )
        
                return (
                    <>
                        <Card className={classes.container}>
                            <div className={classes.playerCardContainer}>
                                <CloseIcon onClick={() => { this.props.close() }} className={classes.closeIconStyling} />
                                {traditionalCardInfo}
        
                                <FormControl>
                                    <Select classes={{ root: classes.selectText }} onChange={this.cardDataChange} value={labelValue}>
                                        <MenuItem classes={{ root: classes.selectText, }} value='traditionalStats'>Traditional Data</MenuItem>
                                        <MenuItem classes={{ root: classes.selectText, }} value="advancedStats">Advanced Stats</MenuItem>
                                        <MenuItem classes={{ root: classes.selectText, }} value="opponentContactStats">Opponent Contact Stats</MenuItem>
                                        <MenuItem classes={{ root: classes.selectText, }} value="pitchUsageStats">Pitch Usage Stats</MenuItem>
                                    </Select>
                                </FormControl>
        
                                {playerCard}
                                {advancedStats}
                                {opponentContactStats}
                                {pitchUsageStats}
                            </div>
                        </Card>
                    </>
                )
            }
        }
        
        else {
            const playerCard = (
                <div className={classes.internalPlayerCard}>
                    {traditionalStats ? (
                        <div>
                            <TableContainer>
                                <Table
                                    className={classes.table}
                                    aria-labelledby="traditionalStatsTable"
                                    aria-label="traditinal stats table"
                                >
                                    <TableHead>
                                        <TableRow className={classes.tableRow}>
                                            <TableCell
                                                key='traditionalStatsYear'
                                                className={classes.tableCell}
                                            >
                                                Year
                                            </TableCell>
    
                                            <TableCell
                                                key='traditionalStatsGamesPlayed'
                                                className={classes.tableCell}
                                            >
                                                Games Played
                                            </TableCell>
    
                                            <TableCell
                                                key='traditionalStatsPAs'
                                                className={classes.tableCell}
                                            >
                                                PAs
                                            </TableCell>
    
                                            <TableCell
                                                key='traditionalStatsBA'
                                                className={classes.tableCell}
                                            >
                                                BA
                                            </TableCell>
    
                                            <TableCell
                                                key='traditionalStatsOBP'
                                                className={classes.tableCell}
                                            >
                                                OBP
                                            </TableCell>
    
                                            <TableCell
                                                key='traditionalStatsSLG'
                                                className={classes.tableCell}
                                            >
                                                SLG
                                            </TableCell>
    
                                            <TableCell
                                                key='traditionalStatsDoubles'
                                                className={classes.tableCell}
                                            >
                                                Doubles
                                            </TableCell>
    
                                            <TableCell
                                                key='traditionalStatsHRs'
                                                className={classes.tableCell}
                                            >
                                                HRs
                                            </TableCell>
    
                                            <TableCell
                                                key='traditionalStatsRuns'
                                                className={classes.tableCell}
                                            >
                                                Runs
                                            </TableCell>
    
                                            <TableCell
                                                key='traditionalStatsRBIs'
                                                className={classes.tableCell}
                                            >
                                                RBIs
                                            </TableCell>
    
                                            <TableCell
                                                key='traditionalStatsSBs'
                                                className={classes.tableCell}
                                            >
                                                SBs
                                            </TableCell>
    
                                            <TableCell
                                                key='traditionalStatsFWAR'
                                                className={classes.tableCell}
                                            >
                                                FWAR
                                            </TableCell>
                                            <TableCell
                                                key='traditionalStatsPAVG'
                                                className={classes.tableCell}
                                            >
                                                PAVG
                                            </TableCell>
                                            <TableCell
                                                key='traditionalStatsPOBP'
                                                className={classes.tableCell}
                                            >
                                                POBP
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
    
                                    <TableBody>
                                        {(PA2017 > 0) ? (
                                            <TableRow
                                                tabIndex={-1}
                                                key='2017'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCell}>2017</TableCell>
                                                <TableCell className={classes.tableCell}>{GamesPlayed2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{PA2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{BA2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{OBP2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{SLG2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{Doubles2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{HR2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{Runs2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{RBI2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{StolenBases2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{FWAR2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{((1.75 * (Runs2017 + RBI2017) + 5.65 * HR2017 + 6 * StolenBases2017 + (4 * PA2017 * (BA2017 - 0.250))) / 6).toFixed(1)}</TableCell>
                                                <TableCell className={classes.tableCell}>{((1.75 * (Runs2017 + RBI2017) + 5.65 * HR2017 + 6 * StolenBases2017 + (4 * PA2017 * (OBP2017 - 0.320))) / 6).toFixed(1)}</TableCell>
                                            </TableRow>
                                        ) : null}
    
                                        {(PA2018 > 0) ? (
                                            <TableRow
                                                tabIndex={-1}
                                                key='2018'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCell}>2018</TableCell>
                                                <TableCell className={classes.tableCell}>{GamesPlayed2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{PA2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{BA2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{OBP2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{SLG2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{Doubles2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{HR2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{Runs2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{RBI2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{StolenBases2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{FWAR2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{((1.75 * (Runs2018 + RBI2018) + 5.65 * HR2018 + 6 * StolenBases2018 + (4 * PA2018 * (BA2018 - 0.250))) / 6).toFixed(1)}</TableCell>
                                                <TableCell className={classes.tableCell}>{((1.75 * (Runs2018 + RBI2018) + 5.65 * HR2018 + 6 * StolenBases2018 + (4 * PA2018 * (OBP2018 - 0.320))) / 6).toFixed(1)}</TableCell>
                                            </TableRow>
                                        ) : null}
    
                                        {(PA2018 === 0 && PA2017 > 0) ? (
                                            <TableRow
                                                tabIndex={-1}
                                                key='2018'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2018</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                            </TableRow>
                                        ) : null}
    
                                        {(PA2019 > 0) ? (
                                            <TableRow
                                                tabIndex={-1}
                                                key='2019'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCell}>2019</TableCell>
                                                <TableCell className={classes.tableCell}>{GamesPlayed2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{PA2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{BA2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{OBP2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{SLG2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{Doubles2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{HR2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{Runs2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{RBI2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{StolenBases2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{FWAR2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{((1.75 * (Runs2019 + RBI2019) + 5.65 * HR2019 + 6 * StolenBases2019 + (4 * PA2019 * (BA2019 - 0.250))) / 6).toFixed(1)}</TableCell>
                                                <TableCell className={classes.tableCell}>{((1.75 * (Runs2019 + RBI2019) + 5.65 * HR2019 + 6 * StolenBases2019 + (4 * PA2019 * (OBP2019 - 0.32))) / 6).toFixed(1)}</TableCell>
                                            </TableRow>
                                        ) : null}
    
                                        {(PA2019 === 0 && (PA2018 > 0 || PA2017 > 0)) ? (
                                            <TableRow
                                                tabIndex={-1}
                                                key='2019'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2019</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                            </TableRow>
                                        ) : null}

                                        {(PA2020 > 0) ? (
                                            <TableRow
                                                tabIndex={-1}
                                                key='2020'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCell}>2020</TableCell>
                                                <TableCell className={classes.tableCell}>{GamesPlayed2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{PA2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{BA2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{OBP2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{SLG2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{Doubles2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{HR2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{Runs2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{RBI2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{StolenBases2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{FWAR2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{((1.75 * (Runs2020 + RBI2020) + 5.65 * HR2020 + 6 * StolenBases2020 + (4 * PA2020 * (BA2020 - 0.250))) / 6).toFixed(1)}</TableCell>
                                                <TableCell className={classes.tableCell}>{((1.75 * (Runs2020 + RBI2020) + 5.65 * HR2020 + 6 * StolenBases2020 + (4 * PA2020 * (OBP2020 - 0.32))) / 6).toFixed(1)}</TableCell>
                                            </TableRow>
                                        ) : null}
    
                                        {(PA2020 === 0 && (PA2019 > 0 || PA2018 > 0 || PA2017 > 0)) ? (
                                            <TableRow
                                                tabIndex={-1}
                                                key='2020'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2020</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                            </TableRow>
                                        ) : null}

                                        {(PA2021 > 0) ? (
                                            <TableRow
                                                tabIndex={-1}
                                                key='2021'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCell}>2021</TableCell>
                                                <TableCell className={classes.tableCell}>{GamesPlayed2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{PA2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{BA2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{OBP2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{SLG2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{Doubles2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{HR2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{Runs2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{RBI2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{StolenBases2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{FWAR2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{((1.75 * (Runs2021 + RBI2021) + 5.65 * HR2021 + 6 * StolenBases2021 + (4 * PA2021 * (BA2021 - 0.250))) / 6).toFixed(1)}</TableCell>
                                                <TableCell className={classes.tableCell}>{((1.75 * (Runs2021 + RBI2021) + 5.65 * HR2021 + 6 * StolenBases2021 + (4 * PA2021 * (OBP2021 - 0.32))) / 6).toFixed(1)}</TableCell>
                                            </TableRow>
                                        ) : null}
    
                                        {(PA2021 === 0 && (PA2020 > 0 || PA2019 > 0 || PA2018 > 0 || PA2017 > 0)) ? (
                                            <TableRow
                                                tabIndex={-1}
                                                key='2021'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2021</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                            </TableRow>
                                        ) : null}

                                        <TableRow
                                            tabIndex={-1}
                                            key='Projected 2022'
                                            className={classes.tableRow}
                                        >
                                            <TableCell component="th" scope="row" className={classes.tableCell}>2022</TableCell>
                                            <TableCell className={classes.tableCell}>Projections</TableCell>
                                            <TableCell className={classes.tableCell}>{TheBatXPAProjection}</TableCell>
                                            <TableCell className={classes.tableCell}>{TheBatXAVGProjection}</TableCell>
                                            <TableCell className={classes.tableCell}>{TheBatXOBPProjection}</TableCell>
                                            <TableCell className={classes.tableCell}>{TheBatXSLGProjection}</TableCell>
                                            <TableCell className={classes.tableCell}>{TheBatXDoublesProjection}</TableCell>
                                            <TableCell className={classes.tableCell}>{TheBatXHRProjection}</TableCell>
                                            <TableCell className={classes.tableCell}>{TheBatXRunsProjection}</TableCell>
                                            <TableCell className={classes.tableCell}>{TheBatXRBIProjection}</TableCell>
                                            <TableCell className={classes.tableCell}>{TheBatXSBProjection}</TableCell>
                                            <TableCell className={classes.tableCell}>{TheBatXFWARProjection}</TableCell>
                                            <TableCell className={classes.tableCell}>{((1.75 * (TheBatXRunsProjection + TheBatXRBIProjection) +
                            5.65 * TheBatXHRProjection +
                            6 * TheBatXSBProjection +
                            4 * TheBatXPAProjection * (TheBatXAVGProjection - 0.250)) /
                            6).toFixed(1)}</TableCell>
                                            <TableCell className={classes.tableCell}>{((1.75 * (TheBatXRunsProjection + TheBatXRBIProjection) +
                            5.65 * TheBatXHRProjection +
                            6 * TheBatXSBProjection +
                            4 * TheBatXPAProjection * (TheBatXOBPProjection - 0.320)) /
                            6).toFixed(1)}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    ) : null
                    }
    
                    {battedBallStats ? (
                        <div>
                            <TableContainer>
                                <Table
                                    className={classes.table}
                                    aria-labelledby="Batted Ball Data Table"
                                    aria-label="Batted Ball Data Table"
                                >
                                    <TableHead>
                                        <TableRow className={classes.tableRow}>
                                            <TableCell
                                                key='battedBallStatsYear'
                                                className={classes.tableCell}
                                            >
                                                Year
                                            </TableCell>
    
                                            <TableCell
                                                key='battedBallStatsGBPercent'
                                                className={classes.tableCell}
                                            >
                                                GB%
                                            </TableCell>
    
                                            <TableCell
                                                key='battedBallStatsLDPercent'
                                                className={classes.tableCell}
                                            >
                                                LD%
                                            </TableCell>
    
                                            <TableCell
                                                key='battedBallStatsFBPercent'
                                                className={classes.tableCell}
                                            >
                                                FB%
                                            </TableCell>
    
                                            <TableCell
                                                key='battedBallStatsPullPercent'
                                                className={classes.tableCell}
                                            >
                                                Pull%
                                            </TableCell>
    
                                            <TableCell
                                                key='tbattedBallStatsCenterPercent'
                                                className={classes.tableCell}
                                            >
                                                Center%
                                            </TableCell>
    
                                            <TableCell
                                                key='battedBallStatsOppoPercent'
                                                className={classes.tableCell}
                                            >
                                                Oppo%
                                            </TableCell>
    
                                            <TableCell
                                                key='battedBallStatsHRPerFB'
                                                className={classes.tableCell}
                                            >
                                                HR/FB
                                            </TableCell>
    
                                            <TableCell
                                                key='battedBallStatsHardHitPercent'
                                                className={classes.tableCell}
                                            >
                                                Hard Hit%
                                            </TableCell>
    
                                            <TableCell
                                                key='battedBallStatsExitVelo'
                                                className={classes.tableCell}
                                            >
                                                Exit Velo
                                            </TableCell>
    
                                            <TableCell
                                                key='battedBallStatsFlyBallLineDriveExitVelo'
                                                className={classes.tableCell}
                                            >
                                                FB/LD Exit Velo
                                            </TableCell>
    
                                            <TableCell
                                                key='battedBallStatsLaunchAngle'
                                                className={classes.tableCell}
                                            >
                                                Launch Angle
                                            </TableCell>
    
                                            <TableCell
                                                key='battedBallStatsBarrelPercent'
                                                className={classes.tableCell}
                                            >
                                                Barrel%
                                            </TableCell>
    
                                            <TableCell
                                                key='battedBallStatsAvgHRDistance'
                                                className={classes.tableCell}
                                            >
                                                AVG HR Dist
                                            </TableCell>
    
                                            <TableCell
                                                key='battedBallStatsChaseRate'
                                                className={classes.tableCell}
                                            >
                                                Chase%
                                            </TableCell>
    
                                            <TableCell
                                                key='battedBallStatsContactPercent'
                                                className={classes.tableCell}
                                            >
                                                Contact%
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
    
                                    <TableBody>
                                        {(PA2017 > 0) ? (
                                            <TableRow
                                                tabIndex={-1}
                                                key='2017'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCell}>2017</TableCell>
                                                <TableCell className={classes.tableCell}>{GBPercent2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{LDPercent2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{FBPercent2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{PullPercent2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{CenterPercent2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{OppoPercent2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{HRPerFB2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{HardHitPercent2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{ExitVelo2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{FlyBallLineDriveExitVelo2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{LaunchAngle2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{BarrelPercent2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{AvgHRDistance2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{ChaseRate2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{ContactPercent2017}</TableCell>
                                            </TableRow>
                                        ) : null}
    
                                        {(PA2018 > 0) ? (
                                            <TableRow
                                                tabIndex={-1}
                                                key='2018'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCell}>2018</TableCell>
                                                <TableCell className={classes.tableCell}>{GBPercent2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{LDPercent2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{FBPercent2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{PullPercent2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{CenterPercent2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{OppoPercent2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{HRPerFB2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{HardHitPercent2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{ExitVelo2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{FlyBallLineDriveExitVelo2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{LaunchAngle2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{BarrelPercent2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{AvgHRDistance2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{ChaseRate2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{ContactPercent2018}</TableCell>
                                            </TableRow>
                                        ) : null}
    
                                        {(PA2018 === 0 && PA2017 > 0) ? (
                                            <TableRow
                                                hover
                                                tabIndex={-1}
                                                key='2018'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2018</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                            </TableRow>
                                        ) : null}
    
                                        {(PA2019 > 0) ? (
                                            <TableRow
                                                tabIndex={-1}
                                                key='2019'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCell}>2019</TableCell>
                                                <TableCell className={classes.tableCell}>{GBPercent2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{LDPercent2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{FBPercent2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{PullPercent2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{CenterPercent2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{OppoPercent2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{HRPerFB2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{HardHitPercent2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{ExitVelo2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{FlyBallLineDriveExitVelo2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{LaunchAngle2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{BarrelPercent2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{AvgHRDistance2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{ChaseRate2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{ContactPercent2019}</TableCell>
                                            </TableRow>
                                        ) : null}
    
                                        {(PA2019 === 0 && (PA2018 > 0 || PA2017 > 0)) ? (
                                            <TableRow
                                                hover
                                                tabIndex={-1}
                                                key='2019'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2019</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                            </TableRow>
                                        ) : null}

                                        {(PA2020 > 0) ? (
                                            <TableRow
                                                tabIndex={-1}
                                                key='2020'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCell}>2020</TableCell>
                                                <TableCell className={classes.tableCell}>{GBPercent2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{LDPercent2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{FBPercent2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{PullPercent2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{CenterPercent2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{OppoPercent2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{HRPerFB2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{HardHitPercent2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{ExitVelo2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{FlyBallLineDriveExitVelo2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{LaunchAngle2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{BarrelPercent2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{AvgHRDistance2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{ChaseRate2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{ContactPercent2020}</TableCell>
                                            </TableRow>
                                        ) : null}

                                        {(PA2020 === 0 && (PA2019 > 0 || PA2018 > 0 || PA2017 > 0)) ? (
                                            <TableRow
                                                hover
                                                tabIndex={-1}
                                                key='2020'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2020</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                            </TableRow>
                                        ) : null}

                                        {(PA2021 > 0) ? (
                                            <TableRow
                                                tabIndex={-1}
                                                key='2021'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCell}>2021</TableCell>
                                                <TableCell className={classes.tableCell}>{GBPercent2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{LDPercent2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{FBPercent2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{PullPercent2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{CenterPercent2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{OppoPercent2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{HRPerFB2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{HardHitPercent2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{ExitVelo2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{FlyBallLineDriveExitVelo2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{LaunchAngle2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{BarrelPercent2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{AvgHRDistance2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{ChaseRate2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{ContactPercent2021}</TableCell>
                                            </TableRow>
                                        ) : null}

                                        {(PA2021 === 0 && (PA2020 > 0 || PA2019 > 0 || PA2018 > 0 || PA2017 > 0)) ? (
                                            <TableRow
                                                hover
                                                tabIndex={-1}
                                                key='2021'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2021</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                            </TableRow>
                                        ) : null}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    ) : null
                    }
    
                    {expectedStats ? (
                        <div>
                            <TableContainer>
                                <Table
                                    className={classes.table}
                                    aria-labelledby="Expected Stats Table"
                                    aria-label="Expected Stats Table"
                                >
                                    <TableHead>
                                        <TableRow className={classes.tableRow}>
                                            <TableCell
                                                key='expectedStatsYear'
                                                className={classes.tableCell}
                                            >
                                                Year
                                            </TableCell>
    
                                            <TableCell
                                                key='expectedStatsBA'
                                                className={classes.tableCell}
                                            >
                                                BA
                                            </TableCell>
    
                                            <TableCell
                                                key='expectedStatsxBA'
                                                className={classes.tableCell}
                                            >
                                                xBA
                                            </TableCell>
    
                                            <TableCell
                                                key='expectedStatsBABIP'
                                                className={classes.tableCell}
                                            >
                                                BABIP
                                            </TableCell>
    
                                            <TableCell
                                                key='expectedStatsOBP'
                                                className={classes.tableCell}
                                            >
                                                OBP
                                            </TableCell>
    
                                            <TableCell
                                                key='texpectedStatsSLG'
                                                className={classes.tableCell}
                                            >
                                                SLG
                                            </TableCell>
    
                                            <TableCell
                                                key='expectedStatsWOBA'
                                                className={classes.tableCell}
                                            >
                                                WOBA
                                            </TableCell>
    
                                            <TableCell
                                                key='expectedStatsxWOBA'
                                                className={classes.tableCell}
                                            >
                                                xWOBA
                                            </TableCell>
    
                                            <TableCell
                                                key='expectedStatsLineupSlot'
                                                className={classes.tableCell}
                                            >
                                                Lineup Slot
                                            </TableCell>
    
                                            <TableCell
                                                key='expectedStatsWRCPlus'
                                                className={classes.tableCell}
                                            >
                                                WRC+
                                            </TableCell>
    
                                            <TableCell
                                                key='expectedStatsOPSPlus'
                                                className={classes.tableCell}
                                            >
                                                OPS+
                                            </TableCell>
    
                                            <TableCell
                                                key='expectedStatsBBPercent'
                                                className={classes.tableCell}
                                            >
                                                BB%
                                            </TableCell>
    
                                            <TableCell
                                                key='expectedStatsKPercent'
                                                className={classes.tableCell}
                                            >
                                                K%
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
    
                                    <TableBody>
                                        {(PA2017 > 0) ? (
                                            <TableRow
                                                tabIndex={-1}
                                                key='2017'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCell}>2017</TableCell>
                                                <TableCell className={classes.tableCell}>{BA2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{xBA2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{BABIP2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{OBP2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{SLG2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{WOBA2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{xWOBA2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{LineupSlot2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{WRCPlus2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{OPSPlus2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{BBPercent2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{KPercent2017}</TableCell>
                                            </TableRow>
                                        ) : null}
    
                                        {(PA2018 > 0) ? (
                                            <TableRow
                                                tabIndex={-1}
                                                key='2018'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCell}>2018</TableCell>
                                                <TableCell className={classes.tableCell}>{BA2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{xBA2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{BABIP2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{OBP2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{SLG2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{WOBA2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{xWOBA2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{LineupSlot2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{WRCPlus2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{OPSPlus2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{BBPercent2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{KPercent2018}</TableCell>
                                            </TableRow>
                                        ) : null}
    
                                        {(PA2018 === 0 && PA2017 > 0) ? (
                                            <TableRow
                                                hover
                                                tabIndex={-1}
                                                key='2018'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2018</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                            </TableRow>
                                        ) : null}
    
                                        {(PA2019 > 0) ? (
                                            <TableRow
                                                tabIndex={-1}
                                                key='2019'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCell}>2019</TableCell>
                                                <TableCell className={classes.tableCell}>{BA2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{xBA2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{BABIP2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{OBP2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{SLG2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{WOBA2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{xWOBA2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{LineupSlot2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{WRCPlus2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{OPSPlus2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{BBPercent2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{KPercent2019}</TableCell>
                                            </TableRow>
                                        ) : null}
    
                                        {(PA2019 === 0 && (PA2018 > 0 || PA2017 > 0)) ? (
                                            <TableRow
                                                hover
                                                tabIndex={-1}
                                                key='2019'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2019</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                            </TableRow>
                                        ) : null}

                                        {(PA2020 > 0) ? (
                                            <TableRow
                                                tabIndex={-1}
                                                key='2020'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCell}>2020</TableCell>
                                                <TableCell className={classes.tableCell}>{BA2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{xBA2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{BABIP2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{OBP2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{SLG2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{WOBA2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{xWOBA2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{LineupSlot2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{WRCPlus2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{OPSPlus2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{BBPercent2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{KPercent2020}</TableCell>
                                            </TableRow>
                                        ) : null}
    
                                        {(PA2020 === 0 && (PA2019 > 0 || PA2018 > 0 || PA2017 > 0)) ? (
                                            <TableRow
                                                hover
                                                tabIndex={-1}
                                                key='2020'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2020</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                            </TableRow>
                                        ) : null}

                                        {(PA2021 > 0) ? (
                                            <TableRow
                                                tabIndex={-1}
                                                key='2021'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCell}>2021</TableCell>
                                                <TableCell className={classes.tableCell}>{BA2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{xBA2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{BABIP2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{OBP2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{SLG2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{WOBA2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{xWOBA2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{LineupSlot2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{WRCPlus2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{OPSPlus2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{BBPercent2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{KPercent2021}</TableCell>
                                            </TableRow>
                                        ) : null}
    
                                        {(PA2021 === 0 && (PA2020 > 0 || PA2019 > 0 || PA2018 > 0 || PA2017 > 0)) ? (
                                            <TableRow
                                                hover
                                                tabIndex={-1}
                                                key='2021'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2021</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>At</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Bats</TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                                <TableCell className={classes.tableCellNoPA}></TableCell>
                                            </TableRow>
                                        ) : null}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    ) : null
                    }
    
                    {baseRunningStats ? (
                        <div>
                            <TableContainer>
                                <Table
                                    className={classes.table}
                                    aria-labelledby="Base Running Stats Table"
                                    aria-label="Base Running Stats Table"
                                >
                                    <TableHead>
                                        <TableRow className={classes.tableRow}>
                                            <TableCell
                                                key='baseRunningStatsYear'
                                                className={classes.tableCell}
                                            >
                                                Year
                                            </TableCell>
    
                                            <TableCell
                                                key='baseRunningStatsSprintSpeed'
                                                className={classes.tableCell}
                                            >
                                                SprintSpeed
                                            </TableCell>
    
                                            <TableCell
                                                key='baseRunningStatsStolenBases'
                                                className={classes.tableCell}
                                            >
                                                SBs
                                            </TableCell>
    
                                            <TableCell
                                                key='baseRunningStatsStolenBasePercent'
                                                className={classes.tableCell}
                                            >
                                                SB%
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
    
                                    <TableBody>
                                        {(PA2017 > 0) ? (
                                            <TableRow
                                                tabIndex={-1}
                                                key='2017'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCell}>2017</TableCell>
                                                <TableCell className={classes.tableCell}>{SprintSpeed2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{StolenBases2017}</TableCell>
                                                <TableCell className={classes.tableCell}>{StolenBasePercent2017}</TableCell>
                                            </TableRow>
                                        ) : null}
    
                                        {(PA2018 > 0) ? (
                                            <TableRow
                                                tabIndex={-1}
                                                key='2018'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCell}>2018</TableCell>
                                                <TableCell className={classes.tableCell}>{SprintSpeed2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{StolenBases2018}</TableCell>
                                                <TableCell className={classes.tableCell}>{StolenBasePercent2018}</TableCell>
                                            </TableRow>
                                        ) : null}
    
                                        {(PA2018 === 0 && PA2017 > 0) ? (
                                            <TableRow
                                                hover
                                                tabIndex={-1}
                                                key='2018'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2018</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                            </TableRow>
                                        ) : null}
    
                                        {(PA2019 > 0) ? (
                                            <TableRow
                                                tabIndex={-1}
                                                key='2019'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCell}>2019</TableCell>
                                                <TableCell className={classes.tableCell}>{SprintSpeed2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{StolenBases2019}</TableCell>
                                                <TableCell className={classes.tableCell}>{StolenBasePercent2019}</TableCell>
                                            </TableRow>
                                        ) : null}
    
                                        {(PA2019 === 0 && (PA2018 > 0 || PA2017 > 0)) ? (
                                            <TableRow
                                                hover
                                                tabIndex={-1}
                                                key='2019'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2019</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                            </TableRow>
                                        ) : null}

                                        {(PA2020 > 0) ? (
                                            <TableRow
                                                tabIndex={-1}
                                                key='2020'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCell}>2020</TableCell>
                                                <TableCell className={classes.tableCell}>{SprintSpeed2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{StolenBases2020}</TableCell>
                                                <TableCell className={classes.tableCell}>{StolenBasePercent2020}</TableCell>
                                            </TableRow>
                                        ) : null}
    
                                        {(PA2020 === 0 && (PA2019 > 0 || PA2018 > 0 || PA2017 > 0)) ? (
                                            <TableRow
                                                hover
                                                tabIndex={-1}
                                                key='2020'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2020</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                            </TableRow>
                                        ) : null}

                                        {(PA2021 > 0) ? (
                                            <TableRow
                                                tabIndex={-1}
                                                key='2021'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCell}>2021</TableCell>
                                                <TableCell className={classes.tableCell}>{SprintSpeed2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{StolenBases2021}</TableCell>
                                                <TableCell className={classes.tableCell}>{StolenBasePercent2021}</TableCell>
                                            </TableRow>
                                        ) : null}
    
                                        {(PA2021 === 0 && (PA2020 > 0 || PA2019 > 0 || PA2018 > 0 || PA2017 > 0)) ? (
                                            <TableRow
                                                hover
                                                tabIndex={-1}
                                                key='2021'
                                                className={classes.tableRow}
                                            >
                                                <TableCell component="th" scope="row" className={classes.tableCellNoPA}>2021</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>No</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>Major</TableCell>
                                                <TableCell className={classes.tableCellNoPA}>League</TableCell>
                                            </TableRow>
                                        ) : null}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    ) : null
                    }
                </div>
            )
    
            const traditionalCardInfo = (
                <div className={classes.traditionalCardInfoDiv}>
                    <h1 className={classes.name}>{firstName} {lastName}</h1>
                    <div className={classes.traditionalCardInfoInnerDiv}>
                        <img src={imageURL} className={classes.playerPhoto} alt='Player' />
                        <h3 className={classes.traditionalCardInfoText}>Bats: {bats} Throws: {throws}<br />Primary Position: {primaryPosition}<br />Other Positions: {otherPositions || 'None'}<br />Birthday: {birthday}<br />Current Team: {currentTeam}</h3>
                    </div>
                </div>
            )
    
            return (
                <>
                    <Card className={classes.container}>
                        <div className={classes.playerCardContainer}>
                            <CloseIcon onClick={() => { this.props.close() }} className={classes.closeIconStyling} />
                            {traditionalCardInfo}
    
                            <FormControl>
                                <Select classes={{ root: classes.selectText }} onChange={this.cardDataChange} value={labelValue}>
                                    <MenuItem classes={{ root: classes.selectText, }} value='traditionalStats'>Traditional Data</MenuItem>
                                    <MenuItem classes={{ root: classes.selectText, }} value="battedBallStats">Batted Ball Data</MenuItem>
                                    <MenuItem classes={{ root: classes.selectText, }} value="expectedStats">Expected Stats</MenuItem>
                                    <MenuItem classes={{ root: classes.selectText, }} value="baseRunningStats">Base Running Stats</MenuItem>
                                </Select>
                            </FormControl>
    
                            {playerCard}
                            {battedBallStats}
                            {expectedStats}
                            {baseRunningStats}
                        </div>
                    </Card>
                </>
            )
        }
    }
}

PlayerCard.contextType = AppContext;

export default withStyles(styles)(PlayerCard);