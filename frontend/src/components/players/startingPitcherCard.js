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
    internalPlayerCard: {
        marginTop: 10,
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

class StartingPitcherCard extends React.Component {
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
        KPercent2017: '',
        BBPercent2017: '',
        KMinusBBPercent2017: '',
        BABIP2017: .0,
        LOBPercent2017: '',
        HRPerFBPercent2017: '',
        GBPercent2017: '',
        LDPercent2017: '',
        FBPercent2017: '',
        IFFBPercent2017: '',
        SoftContactPercent2017: '',
        MediumContactPercent2017: '',
        HardContactPercent2017: '',
        FirstStrikePercent2017: '',
        ExitVelo2017: 0.0,
        FlyBallLineDriveExitVelo2017: 0.0,
        BarrelPercent2017: '',
        LaunchAngle2017: 0.0,
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
        FWAR2017: 0.0,
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
        KPercent2018: '',
        BBPercent2018: '',
        KMinusBBPercent2018: '',
        BABIP2018: .0,
        LOBPercent2018: '',
        HRPerFBPercent2018: '',
        GBPercent2018: '',
        LDPercent2018: '',
        FBPercent2018: '',
        IFFBPercent2018: '',
        SoftContactPercent2018: '',
        MediumContactPercent2018: '',
        HardContactPercent2018: '',
        FirstStrikePercent2018: '',
        ExitVelo2018: 0.0,
        FlyBallLineDriveExitVelo2018: 0.0,
        BarrelPercent2018: '',
        LaunchAngle2018: 0.0,
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
        FWAR2018: 0.0,
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
        KPercent2019: '',
        BBPercent2019: '',
        KMinusBBPercent2019: '',
        BABIP2019: .0,
        LOBPercent2019: '',
        HRPerFBPercent2019: '',
        GBPercent2019: '',
        LDPercent2019: '',
        FBPercent2019: '',
        IFFBPercent2019: '',
        SoftContactPercent2019: '',
        MediumContactPercent2019: '',
        HardContactPercent2019: '',
        FirstStrikePercent2019: '',
        ExitVelo2019: 0.0,
        FlyBallLineDriveExitVelo2019: 0.0,
        BarrelPercent2019: '',
        LaunchAngle2019: 0.0,
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
        FWAR2019: 0.0,
        SteamerGamesProjection: 0,
        SteamerGamesStartedProjection: 0,
        SteamerInningsPitchedProjection: 0.0,
        SteamerQSProjection: 0.0,
        SteamerERAProjection: 0.0,
        SteamerFIPProjection: 0.0,
        SteamerWHIPProjection: 0.0,
        SteamerRawKsProjection: 0,
        SteamerKPer9Projection: 0.0,
        SteamerSavesProjection: 0,
        SteamerFWARProjection: 0.0,
        traditionalStats: true,
        advancedStats: false,
        opponentContactStats: false,
        pitchUsageStats: false,
        labelValue: 'traditionalStats',
    }

    componentDidMount() {
        const foundIndex = this.context.state.startingpitchers.findIndex(x => x.id === this.props.id);
        this.setState({
            firstName: this.context.state.startingPitchers[foundIndex].firstName,
            lastName: this.context.state.startingPitchers[foundIndex].lastName,
            birthday: this.context.state.startingPitchers[foundIndex].birthday,
            bats: this.context.state.startingPitchers[foundIndex].bats,
            throws: this.context.state.startingPitchers[foundIndex].throws,
            currentTeam: this.context.state.startingPitchers[foundIndex].currentTeam,
            imageURL: this.context.state.startingPitchers[foundIndex].imageURL,
            primaryPosition: this.context.state.startingPitchers[foundIndex].primaryPosition,
            otherPositions: this.context.state.startingPitchers[foundIndex].otherPositions,
            Games2017: this.context.state.startingPitchers[foundIndex].Games2017,
            GamesStarted2017: this.context.state.startingPitchers[foundIndex].GamesStarted2017,
            InningsPitched2017: this.context.state.startingPitchers[foundIndex].InningsPitched2017,
            InningsPitchedPerGameStarted2017: this.context.state.startingPitchers[foundIndex].InningsPitchedPerGameStarted2017,
            QS2017: this.context.state.startingPitchers[foundIndex].QS2017,
            ERA2017: this.context.state.startingPitchers[foundIndex].ERA2017,
            ERAPlus2017: this.context.state.startingPitchers[foundIndex].ERAPlus2017,
            FIP2017: this.context.state.startingPitchers[foundIndex].FIP2017,
            xFIP2017: this.context.state.startingPitchers[foundIndex].xFIP2017,
            SIERA2017: this.context.state.startingPitchers[foundIndex].SIERA2017,
            WHIP2017: this.context.state.startingPitchers[foundIndex].WHIP2017,
            RawKs2017: this.context.state.startingPitchers[foundIndex].RawKs2017,
            HitsPer92017: this.context.state.startingPitchers[foundIndex].HitsPer92017,
            HRsPer92017: this.context.state.startingPitchers[foundIndex].HRsPer92017,
            BBPer92017: this.context.state.startingPitchers[foundIndex].BBPer92017,
            KPer92017: this.context.state.startingPitchers[foundIndex].KPer92017,
            KDividedByBB2017: this.context.state.startingPitchers[foundIndex].KDividedByBB2017,
            Saves2017: this.context.state.startingPitchers[foundIndex].Saves2017,
            KPercent2017: this.context.state.startingPitchers[foundIndex].KPercent2017,
            BBPercent2017: this.context.state.startingPitchers[foundIndex].BBPercent2017,
            KMinusBBPercent2017: this.context.state.startingPitchers[foundIndex].KMinusBBPercent2017,
            BABIP2017: this.context.state.startingPitchers[foundIndex].BABIP2017,
            LOBPercent2017: this.context.state.startingPitchers[foundIndex].LOBPercent2017,
            HRPerFBPercent2017: this.context.state.startingPitchers[foundIndex].HRPerFBPercent2017,
            GBPercent2017: this.context.state.startingPitchers[foundIndex].GBPercent2017,
            LDPercent2017: this.context.state.startingPitchers[foundIndex].LDPercent2017,
            FBPercent2017: this.context.state.startingPitchers[foundIndex].FBPercent2017,
            IFFBPercent2017: this.context.state.startingPitchers[foundIndex].IFFBPercent2017,
            SoftContactPercent2017: this.context.state.startingPitchers[foundIndex].SoftContactPercent2017,
            MediumContactPercent2017: this.context.state.startingPitchers[foundIndex].MediumContactPercent2017,
            HardContactPercent2017: this.context.state.startingPitchers[foundIndex].HardContactPercent2017,
            FirstStrikePercent2017: this.context.state.startingPitchers[foundIndex].FirstStrikePercent2017,
            ExitVelo2017: this.context.state.startingPitchers[foundIndex].ExitVelo2017,
            FlyBallLineDriveExitVelo2017: this.context.state.startingPitchers[foundIndex].FlyBallLineDriveExitVelo2017,
            BarrelPercent2017: this.context.state.startingPitchers[foundIndex].BarrelPercent2017,
            LaunchAngle2017: this.context.state.startingPitchers[foundIndex].LaunchAngle2017,
            AVGFastballVelo2017: this.context.state.startingPitchers[foundIndex].AVGFastballVelo2017,
            MaxFastballVelo2017: this.context.state.startingPitchers[foundIndex].MaxFastballVelo2017,
            FourSeamFastballUsagePercent2017: this.context.state.startingPitchers[foundIndex].FourSeamFastballUsagePercent2017,
            SinkerUsagePercent2017: this.context.state.startingPitchers[foundIndex].SinkerUsagePercent2017,
            CutterUsagePercent2017: this.context.state.startingPitchers[foundIndex].CutterUsagePercent2017,
            SliderUsagePercent2017: this.context.state.startingPitchers[foundIndex].SliderUsagePercent2017,
            ChangeupUsagePercent2017: this.context.state.startingPitchers[foundIndex].ChangeupUsagePercent2017,
            CurveUsagePercent2017: this.context.state.startingPitchers[foundIndex].CurveUsagePercent2017,
            SplitterUsagePercent2017: this.context.state.startingPitchers[foundIndex].SplitterUsagePercent2017,
            KnuckleCurveUsagePercent2017: this.context.state.startingPitchers[foundIndex].KnuckleCurveUsagePercent2017,
            FWAR2017: this.context.state.startingPitchers[foundIndex].FWAR2017,
            Games2018: this.context.state.startingPitchers[foundIndex].Games2018,
            GamesStarted2018: this.context.state.startingPitchers[foundIndex].GamesStarted2018,
            InningsPitched2018: this.context.state.startingPitchers[foundIndex].InningsPitched2018,
            InningsPitchedPerGameStarted2018: this.context.state.startingPitchers[foundIndex].InningsPitchedPerGameStarted2018,
            QS2018: this.context.state.startingPitchers[foundIndex].QS2018,
            ERA2018: this.context.state.startingPitchers[foundIndex].ERA2018,
            ERAPlus2018: this.context.state.startingPitchers[foundIndex].ERAPlus2018,
            FIP2018: this.context.state.startingPitchers[foundIndex].FIP2018,
            xFIP2018: this.context.state.startingPitchers[foundIndex].xFIP2018,
            SIERA2018: this.context.state.startingPitchers[foundIndex].SIERA2018,
            WHIP2018: this.context.state.startingPitchers[foundIndex].WHIP2018,
            RawKs2018: this.context.state.startingPitchers[foundIndex].RawKs2018,
            HitsPer92018: this.context.state.startingPitchers[foundIndex].HitsPer92018,
            HRsPer92018: this.context.state.startingPitchers[foundIndex].HRsPer92018,
            BBPer92018: this.context.state.startingPitchers[foundIndex].BBPer92018,
            KPer92018: this.context.state.startingPitchers[foundIndex].KPer92018,
            KDividedByBB2018: this.context.state.startingPitchers[foundIndex].KDividedByBB2018,
            Saves2018: this.context.state.startingPitchers[foundIndex].Saves2018,
            KPercent2018: this.context.state.startingPitchers[foundIndex].KPercent2018,
            BBPercent2018: this.context.state.startingPitchers[foundIndex].BBPercent2018,
            KMinusBBPercent2018: this.context.state.startingPitchers[foundIndex].KMinusBBPercent2018,
            BABIP2018: this.context.state.startingPitchers[foundIndex].BABIP2018,
            LOBPercent2018: this.context.state.startingPitchers[foundIndex].LOBPercent2018,
            HRPerFBPercent2018: this.context.state.startingPitchers[foundIndex].HRPerFBPercent2018,
            GBPercent2018: this.context.state.startingPitchers[foundIndex].GBPercent2018,
            LDPercent2018: this.context.state.startingPitchers[foundIndex].LDPercent2018,
            FBPercent2018: this.context.state.startingPitchers[foundIndex].FBPercent2018,
            IFFBPercent2018: this.context.state.startingPitchers[foundIndex].IFFBPercent2018,
            SoftContactPercent2018: this.context.state.startingPitchers[foundIndex].SoftContactPercent2018,
            MediumContactPercent2018: this.context.state.startingPitchers[foundIndex].MediumContactPercent2018,
            HardContactPercent2018: this.context.state.startingPitchers[foundIndex].HardContactPercent2018,
            FirstStrikePercent2018: this.context.state.startingPitchers[foundIndex].FirstStrikePercent2018,
            ExitVelo2018: this.context.state.startingPitchers[foundIndex].ExitVelo2018,
            FlyBallLineDriveExitVelo2018: this.context.state.startingPitchers[foundIndex].FlyBallLineDriveExitVelo2018,
            BarrelPercent2018: this.context.state.startingPitchers[foundIndex].BarrelPercent2018,
            LaunchAngle2018: this.context.state.startingPitchers[foundIndex].LaunchAngle2018,
            AVGFastballVelo2018: this.context.state.startingPitchers[foundIndex].AVGFastballVelo2018,
            MaxFastballVelo2018: this.context.state.startingPitchers[foundIndex].MaxFastballVelo2018,
            FourSeamFastballUsagePercent2018: this.context.state.startingPitchers[foundIndex].FourSeamFastballUsagePercent2018,
            SinkerUsagePercent2018: this.context.state.startingPitchers[foundIndex].SinkerUsagePercent2018,
            CutterUsagePercent2018: this.context.state.startingPitchers[foundIndex].CutterUsagePercent2018,
            SliderUsagePercent2018: this.context.state.startingPitchers[foundIndex].SliderUsagePercent2018,
            ChangeupUsagePercent2018: this.context.state.startingPitchers[foundIndex].ChangeupUsagePercent2018,
            CurveUsagePercent2018: this.context.state.startingPitchers[foundIndex].CurveUsagePercent2018,
            SplitterUsagePercent2018: this.context.state.startingPitchers[foundIndex].SplitterUsagePercent2018,
            KnuckleCurveUsagePercent2018: this.context.state.startingPitchers[foundIndex].KnuckleCurveUsagePercent2018,
            FWAR2018: this.context.state.startingPitchers[foundIndex].FWAR2018,
            Games2019: this.context.state.startingPitchers[foundIndex].Games2019,
            GamesStarted2019: this.context.state.startingPitchers[foundIndex].GamesStarted2019,
            InningsPitched2019: this.context.state.startingPitchers[foundIndex].InningsPitched2019,
            InningsPitchedPerGameStarted2019: this.context.state.startingPitchers[foundIndex].InningsPitchedPerGameStarted2019,
            QS2019: this.context.state.startingPitchers[foundIndex].QS2019,
            ERA2019: this.context.state.startingPitchers[foundIndex].ERA2019,
            ERAPlus2019: this.context.state.startingPitchers[foundIndex].ERAPlus2019,
            FIP2019: this.context.state.startingPitchers[foundIndex].FIP2019,
            xFIP2019: this.context.state.startingPitchers[foundIndex].xFIP2019,
            SIERA2019: this.context.state.startingPitchers[foundIndex].SIERA2019,
            WHIP2019: this.context.state.startingPitchers[foundIndex].WHIP2019,
            RawKs2019: this.context.state.startingPitchers[foundIndex].RawKs2019,
            HitsPer92019: this.context.state.startingPitchers[foundIndex].HitsPer92019,
            HRsPer92019: this.context.state.startingPitchers[foundIndex].HRsPer92019,
            BBPer92019: this.context.state.startingPitchers[foundIndex].BBPer92019,
            KPer92019: this.context.state.startingPitchers[foundIndex].KPer92019,
            KDividedByBB2019: this.context.state.startingPitchers[foundIndex].KDividedByBB2019,
            Saves2019: this.context.state.startingPitchers[foundIndex].Saves2019,
            KPercent2019: this.context.state.startingPitchers[foundIndex].KPercent2019,
            BBPercent2019: this.context.state.startingPitchers[foundIndex].BBPercent2019,
            KMinusBBPercent2019: this.context.state.startingPitchers[foundIndex].KMinusBBPercent2019,
            BABIP2019: this.context.state.startingPitchers[foundIndex].BABIP2019,
            LOBPercent2019: this.context.state.startingPitchers[foundIndex].LOBPercent2019,
            HRPerFBPercent2019: this.context.state.startingPitchers[foundIndex].HRPerFBPercent2019,
            GBPercent2019: this.context.state.startingPitchers[foundIndex].GBPercent2019,
            LDPercent2019: this.context.state.startingPitchers[foundIndex].LDPercent2019,
            FBPercent2019: this.context.state.startingPitchers[foundIndex].FBPercent2019,
            IFFBPercent2019: this.context.state.startingPitchers[foundIndex].IFFBPercent2019,
            SoftContactPercent2019: this.context.state.startingPitchers[foundIndex].SoftContactPercent2019,
            MediumContactPercent2019: this.context.state.startingPitchers[foundIndex].MediumContactPercent2019,
            HardContactPercent2019: this.context.state.startingPitchers[foundIndex].HardContactPercent2019,
            FirstStrikePercent2019: this.context.state.startingPitchers[foundIndex].FirstStrikePercent2019,
            ExitVelo2019: this.context.state.startingPitchers[foundIndex].ExitVelo2019,
            FlyBallLineDriveExitVelo2019: this.context.state.startingPitchers[foundIndex].FlyBallLineDriveExitVelo2019,
            BarrelPercent2019: this.context.state.startingPitchers[foundIndex].BarrelPercent2019,
            LaunchAngle2019: this.context.state.startingPitchers[foundIndex].LaunchAngle2019,
            AVGFastballVelo2019: this.context.state.startingPitchers[foundIndex].AVGFastballVelo2019,
            MaxFastballVelo2019: this.context.state.startingPitchers[foundIndex].MaxFastballVelo2019,
            FourSeamFastballUsagePercent2019: this.context.state.startingPitchers[foundIndex].FourSeamFastballUsagePercent2019,
            SinkerUsagePercent2019: this.context.state.startingPitchers[foundIndex].SinkerUsagePercent2019,
            CutterUsagePercent2019: this.context.state.startingPitchers[foundIndex].CutterUsagePercent2019,
            SliderUsagePercent2019: this.context.state.startingPitchers[foundIndex].SliderUsagePercent2019,
            ChangeupUsagePercent2019: this.context.state.startingPitchers[foundIndex].ChangeupUsagePercent2019,
            CurveUsagePercent2019: this.context.state.startingPitchers[foundIndex].CurveUsagePercent2019,
            SplitterUsagePercent2019: this.context.state.startingPitchers[foundIndex].SplitterUsagePercent2019,
            KnuckleCurveUsagePercent2019: this.context.state.startingPitchers[foundIndex].KnuckleCurveUsagePercent2019,
            FWAR2019: this.context.state.startingPitchers[foundIndex].FWAR2019,
            SteamerGamesProjection: this.context.state.startingPitchers[foundIndex].SteamerGamesProjection,
            SteamerGamesStartedProjection: this.context.state.startingPitchers[foundIndex].SteamerGamesStartedProjection,
            SteamerInningsPitchedProjection: this.context.state.startingPitchers[foundIndex].SteamerInningsPitchedProjection,
            SteamerQSProjection: this.context.state.startingPitchers[foundIndex].SteamerQSProjection,
            SteamerERAProjection: this.context.state.startingPitchers[foundIndex].SteamerERAProjection,
            SteamerFIPProjection: this.context.state.startingPitchers[foundIndex].SteamerFIPProjection,
            SteamerWHIPProjection: this.context.state.startingPitchers[foundIndex].SteamerWHIPProjection,
            SteamerRawKsProjection: this.context.state.startingPitchers[foundIndex].SteamerRawKsProjection,
            SteamerKPer9Projection: this.context.state.startingPitchers[foundIndex].SteamerKPer9Projection,
            SteamerSavesProjection: this.context.state.startingPitchers[foundIndex].SteamerSavesProjection,
            SteamerFWARProjection: this.context.state.startingPitchers[foundIndex].SteamerFWARProjection,
        })
    }

    cardDataChange = (event) => {
        event.preventDefault();
        this.setState({
            traditionalStats: false,
            advancedStats: false,
            opponentContactStats: false,
            pitchUsageStats: false,
        })
        this.setState({
            labelValue: [event.target.value],
            [event.target.value]: true,
        })
    }

    render() {
        const { classes } = this.props;
        const { firstName, lastName, birthday, bats, throws, currentTeam, imageURL, primaryPosition, otherPositions, Games2017, GamesStarted2017, InningsPitched2017, InningsPitchedPerGameStarted2017, QS2017, ERA2017, ERAPlus2017, FIP2017, xFIP2017, SIERA2017, WHIP2017, RawKs2017, HitsPer92017, HRsPer92017, BBPer92017, KPer92017, KDividedByBB2017, Saves2017, KPercent2017, BBPercent2017, KMinusBBPercent2017, BABIP2017, LOBPercent2017, HRPerFBPercent2017, GBPercent2017, LDPercent2017, FBPercent2017, IFFBPercent2017, SoftContactPercent2017, MediumContactPercent2017, HardContactPercent2017, FirstStrikePercent2017, ExitVelo2017, FlyBallLineDriveExitVelo2017, BarrelPercent2017, LaunchAngle2017, AVGFastballVelo2017, MaxFastballVelo2017, FourSeamFastballUsagePercent2017, SinkerUsagePercent2017, CutterUsagePercent2017, SliderUsagePercent2017, ChangeupUsagePercent2017, CurveUsagePercent2017, SplitterUsagePercent2017, KnuckleCurveUsagePercent2017, FWAR2017, Games2018, GamesStarted2018, InningsPitched2018, InningsPitchedPerGameStarted2018, QS2018, ERA2018, ERAPlus2018, FIP2018, xFIP2018, SIERA2018, WHIP2018, RawKs2018, HitsPer92018, HRsPer92018, BBPer92018, KPer92018, KDividedByBB2018, Saves2018, KPercent2018, BBPercent2018, KMinusBBPercent2018, BABIP2018, LOBPercent2018, HRPerFBPercent2018, GBPercent2018, LDPercent2018, FBPercent2018, IFFBPercent2018, SoftContactPercent2018, MediumContactPercent2018, HardContactPercent2018, FirstStrikePercent2018, ExitVelo2018, FlyBallLineDriveExitVelo2018, BarrelPercent2018, LaunchAngle2018, AVGFastballVelo2018, MaxFastballVelo2018, FourSeamFastballUsagePercent2018, SinkerUsagePercent2018, CutterUsagePercent2018, SliderUsagePercent2018, ChangeupUsagePercent2018, CurveUsagePercent2018, SplitterUsagePercent2018, KnuckleCurveUsagePercent2018, FWAR2018, Games2019, GamesStarted2019, InningsPitched2019, InningsPitchedPerGameStarted2019, QS2019, ERA2019, ERAPlus2019, FIP2019, xFIP2019, SIERA2019, WHIP2019, RawKs2019, HitsPer92019, HRsPer92019, BBPer92019, KPer92019, KDividedByBB2019, Saves2019, KPercent2019, BBPercent2019, KMinusBBPercent2019, BABIP2019, LOBPercent2019, HRPerFBPercent2019, GBPercent2019, LDPercent2019, FBPercent2019, IFFBPercent2019, SoftContactPercent2019, MediumContactPercent2019, HardContactPercent2019, FirstStrikePercent2019, ExitVelo2019, FlyBallLineDriveExitVelo2019, BarrelPercent2019, LaunchAngle2019, AVGFastballVelo2019, MaxFastballVelo2019, FourSeamFastballUsagePercent2019, SinkerUsagePercent2019, CutterUsagePercent2019, SliderUsagePercent2019, ChangeupUsagePercent2019, CurveUsagePercent2019, SplitterUsagePercent2019, KnuckleCurveUsagePercent2019, FWAR2019, SteamerGamesProjection, SteamerGamesStartedProjection, SteamerInningsPitchedProjection, SteamerQSProjection, SteamerERAProjection, SteamerFIPProjection, SteamerWHIPProjection, SteamerRawKsProjection, SteamerKPer9Projection, SteamerSavesProjection, SteamerFWARProjection, traditionalStats, advancedStats, opponentContactStats, pitchUsageStats, labelValue } = this.state;

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
                                            <TableCell className={classes.tableCell}>{FWAR2017}</TableCell>
                                            <TableCell className={classes.tableCell}>{(((4 * QS2017) + (RawKs2017 / 3) + (2 * Saves2017) + ((InningsPitched2017 / WHIP2017) / 3) + ((InningsPitched2017 / ERA2017) / 3)) / 6).toFixed(1)}</TableCell>
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
                                            <TableCell className={classes.tableCell}>{FWAR2018}</TableCell>
                                            <TableCell className={classes.tableCell}>{(((4 * QS2018) + (RawKs2018 / 3) + (2 * Saves2018) + ((InningsPitched2018 / WHIP2018) / 3) + ((InningsPitched2018 / ERA2018) / 3)) / 6).toFixed(1)}</TableCell>
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
                                            <TableCell className={classes.tableCell}>{FWAR2019}</TableCell>
                                            <TableCell className={classes.tableCell}>{(((4 * QS2019) + (RawKs2019 / 3) + (2 * Saves2019) + ((InningsPitched2019 / WHIP2019) / 3) + ((InningsPitched2019 / ERA2019) / 3)) / 6).toFixed(1)}</TableCell>
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
                                    <TableRow
                                        tabIndex={-1}
                                        key='Projected 2020'
                                        className={classes.tableRow}
                                    >
                                        <TableCell component="th" scope="row" className={classes.tableCell}>2020 Projections</TableCell>
                                        <TableCell className={classes.tableCell}>{SteamerGamesProjection}</TableCell>
                                        <TableCell className={classes.tableCell}>{SteamerGamesStartedProjection}</TableCell>
                                        <TableCell className={classes.tableCell}>{SteamerInningsPitchedProjection}</TableCell>
                                        <TableCell className={classes.tableCell}>{SteamerQSProjection}</TableCell>
                                        <TableCell className={classes.tableCell}>{SteamerRawKsProjection}</TableCell>
                                        <TableCell className={classes.tableCell}>{SteamerERAProjection}</TableCell>
                                        <TableCell className={classes.tableCell}>{SteamerWHIPProjection}</TableCell>
                                        <TableCell className={classes.tableCell}></TableCell>
                                        <TableCell className={classes.tableCell}>{SteamerSavesProjection}</TableCell>
                                        <TableCell className={classes.tableCell}>{SteamerFWARProjection}</TableCell>
                                        <TableCell className={classes.tableCell}>{(((4 * SteamerQSProjection) + (SteamerRawKsProjection / 3) + (2 * SteamerSavesProjection) + ((SteamerInningsPitchedProjection / SteamerWHIPProjection) / 3) + ((SteamerInningsPitchedProjection / SteamerERAProjection) / 3)) / 6).toFixed(1)}</TableCell>
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
                                            <TableCell className={classes.tableCell}>{KPercent2017}</TableCell>
                                            <TableCell className={classes.tableCell}>{BBPercent2017}</TableCell>
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
                                            <TableCell className={classes.tableCell}>{KPercent2018}</TableCell>
                                            <TableCell className={classes.tableCell}>{BBPercent2018}</TableCell>
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
                                            <TableCell className={classes.tableCell}>{KPercent2019}</TableCell>
                                            <TableCell className={classes.tableCell}>{BBPercent2019}</TableCell>
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

                                    <TableRow
                                        tabIndex={-1}
                                        key='Projected 2020'
                                        className={classes.tableRow}
                                    >
                                        <TableCell component="th" scope="row" className={classes.tableCell}>2020 Projections</TableCell>
                                        <TableCell className={classes.tableCell}>{SteamerInningsPitchedProjection}</TableCell>
                                        <TableCell className={classes.tableCell}>{SteamerERAProjection}</TableCell>
                                        <TableCell className={classes.tableCell}>{SteamerFIPProjection}</TableCell>
                                        <TableCell className={classes.tableCell}></TableCell>
                                        <TableCell className={classes.tableCell}></TableCell>
                                        <TableCell className={classes.tableCell}>{SteamerWHIPProjection}</TableCell>
                                        <TableCell className={classes.tableCell}></TableCell>
                                        <TableCell className={classes.tableCell}></TableCell>
                                        <TableCell className={classes.tableCell}></TableCell>
                                        <TableCell className={classes.tableCell}>{SteamerKPer9Projection}</TableCell>
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
                                            <TableCell className={classes.tableCell}>{GBPercent2017}</TableCell>
                                            <TableCell className={classes.tableCell}>{LDPercent2017}</TableCell>
                                            <TableCell className={classes.tableCell}>{FBPercent2017}</TableCell>
                                            <TableCell className={classes.tableCell}>{IFFBPercent2017}</TableCell>
                                            <TableCell className={classes.tableCell}>{HRPerFBPercent2017}</TableCell>
                                            <TableCell className={classes.tableCell}>{SoftContactPercent2017}</TableCell>
                                            <TableCell className={classes.tableCell}>{MediumContactPercent2017}</TableCell>
                                            <TableCell className={classes.tableCell}>{HardContactPercent2017}</TableCell>
                                            <TableCell className={classes.tableCell}>{ExitVelo2017}</TableCell>
                                            <TableCell className={classes.tableCell}>{FlyBallLineDriveExitVelo2017}</TableCell>
                                            <TableCell className={classes.tableCell}>{LaunchAngle2017}</TableCell>
                                            <TableCell className={classes.tableCell}>{BarrelPercent2017}</TableCell>
                                            <TableCell className={classes.tableCell}>{BABIP2017}</TableCell>
                                        </TableRow>
                                    ) : null}

                                    {(Games2018 > 0) ? (
                                        <TableRow
                                            tabIndex={-1}
                                            key='2018'
                                            className={classes.tableRow}
                                        >
                                            <TableCell component="th" scope="row" className={classes.tableCell}>2018</TableCell>
                                            <TableCell className={classes.tableCell}>{GBPercent2018}</TableCell>
                                            <TableCell className={classes.tableCell}>{LDPercent2018}</TableCell>
                                            <TableCell className={classes.tableCell}>{FBPercent2018}</TableCell>
                                            <TableCell className={classes.tableCell}>{IFFBPercent2018}</TableCell>
                                            <TableCell className={classes.tableCell}>{HRPerFBPercent2018}</TableCell>
                                            <TableCell className={classes.tableCell}>{SoftContactPercent2018}</TableCell>
                                            <TableCell className={classes.tableCell}>{MediumContactPercent2018}</TableCell>
                                            <TableCell className={classes.tableCell}>{HardContactPercent2018}</TableCell>
                                            <TableCell className={classes.tableCell}>{ExitVelo2018}</TableCell>
                                            <TableCell className={classes.tableCell}>{FlyBallLineDriveExitVelo2018}</TableCell>
                                            <TableCell className={classes.tableCell}>{LaunchAngle2018}</TableCell>
                                            <TableCell className={classes.tableCell}>{BarrelPercent2018}</TableCell>
                                            <TableCell className={classes.tableCell}>{BABIP2018}</TableCell>
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
                                            <TableCell className={classes.tableCell}>{GBPercent2019}</TableCell>
                                            <TableCell className={classes.tableCell}>{LDPercent2019}</TableCell>
                                            <TableCell className={classes.tableCell}>{FBPercent2019}</TableCell>
                                            <TableCell className={classes.tableCell}>{IFFBPercent2019}</TableCell>
                                            <TableCell className={classes.tableCell}>{HRPerFBPercent2019}</TableCell>
                                            <TableCell className={classes.tableCell}>{SoftContactPercent2019}</TableCell>
                                            <TableCell className={classes.tableCell}>{MediumContactPercent2019}</TableCell>
                                            <TableCell className={classes.tableCell}>{HardContactPercent2019}</TableCell>
                                            <TableCell className={classes.tableCell}>{ExitVelo2019}</TableCell>
                                            <TableCell className={classes.tableCell}>{FlyBallLineDriveExitVelo2019}</TableCell>
                                            <TableCell className={classes.tableCell}>{LaunchAngle2019}</TableCell>
                                            <TableCell className={classes.tableCell}>{BarrelPercent2019}</TableCell>
                                            <TableCell className={classes.tableCell}>{BABIP2019}</TableCell>
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

StartingPitcherCard.contextType = AppContext;

export default withStyles(styles)(StartingPitcherCard);