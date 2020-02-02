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
        SteamerxFIPProjection: 0.0,
        SteamerSIERAProjection: 0.0,
        SteamerWHIPProjection: 0.0,
        SteamerKPer9Projection: 0.0,
        SteamerSavesProjection: 0,
        SteamerBABIPProjection: .0,
        SteamerLOBPercentProjection: '',
        SteamerFWARProjection: 0.0,
        traditionalStats: true,
        opponentContactStats: false,
        expectedStats: false,
        pitchUsageStats: false,
        labelValue: 'traditionalStats',
    }

    componentDidMount() {
        const foundIndex = this.context.state.startingpitchers.findIndex(x => x.id === this.props.id);
        this.setState({
            firstName: this.context.state.startingpitchers[foundIndex].firstName,
            lastName: this.context.state.startingpitchers[foundIndex].lastName,
            birthday: this.context.state.startingpitchers[foundIndex].birthday,
            bats: this.context.state.startingpitchers[foundIndex].bats,
            throws: this.context.state.startingpitchers[foundIndex].throws,
            currentTeam: this.context.state.startingpitchers[foundIndex].currentTeam,
            imageURL: this.context.state.startingpitchers[foundIndex].imageURL,
            primaryPosition: this.context.state.startingpitchers[foundIndex].primaryPosition,
            otherPositions: this.context.state.startingpitchers[foundIndex].otherPositions,
            Games2017: this.context.state.startingpitchers[foundIndex].Games2017,
            GamesStarted2017: this.context.state.startingpitchers[foundIndex].GamesStarted2017,
            InningsPitched2017: this.context.state.startingpitchers[foundIndex].InningsPitched2017,
            InningsPitchedPerGameStarted2017: this.context.state.startingpitchers[foundIndex].InningsPitchedPerGameStarted2017,
            QS2017: this.context.state.startingpitchers[foundIndex].QS2017,
            ERA2017: this.context.state.startingpitchers[foundIndex].ERA2017,
            ERAPlus2017: this.context.state.startingpitchers[foundIndex].ERAPlus2017,
            FIP2017: this.context.state.startingpitchers[foundIndex].FIP2017,
            xFIP2017: this.context.state.startingpitchers[foundIndex].xFIP2017,
            SIERA2017: this.context.state.startingpitchers[foundIndex].SIERA2017,
            WHIP2017: this.context.state.startingpitchers[foundIndex].WHIP2017,
            HitsPer92017: this.context.state.startingpitchers[foundIndex].HitsPer92017,
            HRsPer92017: this.context.state.startingpitchers[foundIndex].HRsPer92017,
            BBPer92017: this.context.state.startingpitchers[foundIndex].BBPer92017,
            KPer92017: this.context.state.startingpitchers[foundIndex].KPer92017,
            KDividedByBB2017: this.context.state.startingpitchers[foundIndex].KDividedByBB2017,
            Saves2017: this.context.state.startingpitchers[foundIndex].Saves2017,
            KPercent2017: this.context.state.startingpitchers[foundIndex].KPercent2017,
            BBPercent2017: this.context.state.startingpitchers[foundIndex].BBPercent2017,
            KMinusBBPercent2017: this.context.state.startingpitchers[foundIndex].KMinusBBPercent2017,
            BABIP2017: this.context.state.startingpitchers[foundIndex].BABIP2017,
            LOBPercent2017: this.context.state.startingpitchers[foundIndex].LOBPercent2017,
            HRPerFBPercent2017: this.context.state.startingpitchers[foundIndex].HRPerFBPercent2017,
            GBPercent2017: this.context.state.startingpitchers[foundIndex].GBPercent2017,
            LDPercent2017: this.context.state.startingpitchers[foundIndex].LDPercent2017,
            FBPercent2017: this.context.state.startingpitchers[foundIndex].FBPercent2017,
            IFFBPercent2017: this.context.state.startingpitchers[foundIndex].IFFBPercent2017,
            SoftContactPercent2017: this.context.state.startingpitchers[foundIndex].SoftContactPercent2017,
            MediumContactPercent2017: this.context.state.startingpitchers[foundIndex].MediumContactPercent2017,
            HardContactPercent2017: this.context.state.startingpitchers[foundIndex].HardContactPercent2017,
            FirstStrikePercent2017: this.context.state.startingpitchers[foundIndex].FirstStrikePercent2017,
            ExitVelo2017: this.context.state.startingpitchers[foundIndex].ExitVelo2017,
            FlyBallLineDriveExitVelo2017: this.context.state.startingpitchers[foundIndex].FlyBallLineDriveExitVelo2017,
            BarrelPercent2017: this.context.state.startingpitchers[foundIndex].BarrelPercent2017,
            LaunchAngle2017: this.context.state.startingpitchers[foundIndex].LaunchAngle2017,
            AVGFastballVelo2017: this.context.state.startingpitchers[foundIndex].AVGFastballVelo2017,
            MaxFastballVelo2017: this.context.state.startingpitchers[foundIndex].MaxFastballVelo2017,
            FourSeamFastballUsagePercent2017: this.context.state.startingpitchers[foundIndex].FourSeamFastballUsagePercent2017,
            SinkerUsagePercent2017: this.context.state.startingpitchers[foundIndex].SinkerUsagePercent2017,
            CutterUsagePercent2017: this.context.state.startingpitchers[foundIndex].CutterUsagePercent2017,
            SliderUsagePercent2017: this.context.state.startingpitchers[foundIndex].SliderUsagePercent2017,
            ChangeupUsagePercent2017: this.context.state.startingpitchers[foundIndex].ChangeupUsagePercent2017,
            CurveUsagePercent2017: this.context.state.startingpitchers[foundIndex].CurveUsagePercent2017,
            SplitterUsagePercent2017: this.context.state.startingpitchers[foundIndex].SplitterUsagePercent2017,
            KnuckleCurveUsagePercent2017: this.context.state.startingpitchers[foundIndex].KnuckleCurveUsagePercent2017,
            FWAR2017: this.context.state.startingpitchers[foundIndex].FWAR2017,
            Games2018: this.context.state.startingpitchers[foundIndex].Games2018,
            GamesStarted2018: this.context.state.startingpitchers[foundIndex].GamesStarted2018,
            InningsPitched2018: this.context.state.startingpitchers[foundIndex].InningsPitched2018,
            InningsPitchedPerGameStarted2018: this.context.state.startingpitchers[foundIndex].InningsPitchedPerGameStarted2018,
            QS2018: this.context.state.startingpitchers[foundIndex].QS2018,
            ERA2018: this.context.state.startingpitchers[foundIndex].ERA2018,
            ERAPlus2018: this.context.state.startingpitchers[foundIndex].ERAPlus2018,
            FIP2018: this.context.state.startingpitchers[foundIndex].FIP2018,
            xFIP2018: this.context.state.startingpitchers[foundIndex].xFIP2018,
            SIERA2018: this.context.state.startingpitchers[foundIndex].SIERA2018,
            WHIP2018: this.context.state.startingpitchers[foundIndex].WHIP2018,
            HitsPer92018: this.context.state.startingpitchers[foundIndex].HitsPer92018,
            HRsPer92018: this.context.state.startingpitchers[foundIndex].HRsPer92018,
            BBPer92018: this.context.state.startingpitchers[foundIndex].BBPer92018,
            KPer92018: this.context.state.startingpitchers[foundIndex].KPer92018,
            KDividedByBB2018: this.context.state.startingpitchers[foundIndex].KDividedByBB2018,
            Saves2018: this.context.state.startingpitchers[foundIndex].Saves2018,
            KPercent2018: this.context.state.startingpitchers[foundIndex].KPercent2018,
            BBPercent2018: this.context.state.startingpitchers[foundIndex].BBPercent2018,
            KMinusBBPercent2018: this.context.state.startingpitchers[foundIndex].KMinusBBPercent2018,
            BABIP2018: this.context.state.startingpitchers[foundIndex].BABIP2018,
            LOBPercent2018: this.context.state.startingpitchers[foundIndex].LOBPercent2018,
            HRPerFBPercent2018: this.context.state.startingpitchers[foundIndex].HRPerFBPercent2018,
            GBPercent2018: this.context.state.startingpitchers[foundIndex].GBPercent2018,
            LDPercent2018: this.context.state.startingpitchers[foundIndex].LDPercent2018,
            FBPercent2018: this.context.state.startingpitchers[foundIndex].FBPercent2018,
            IFFBPercent2018: this.context.state.startingpitchers[foundIndex].IFFBPercent2018,
            SoftContactPercent2018: this.context.state.startingpitchers[foundIndex].SoftContactPercent2018,
            MediumContactPercent2018: this.context.state.startingpitchers[foundIndex].MediumContactPercent2018,
            HardContactPercent2018: this.context.state.startingpitchers[foundIndex].HardContactPercent2018,
            FirstStrikePercent2018: this.context.state.startingpitchers[foundIndex].FirstStrikePercent2018,
            ExitVelo2018: this.context.state.startingpitchers[foundIndex].ExitVelo2018,
            FlyBallLineDriveExitVelo2018: this.context.state.startingpitchers[foundIndex].FlyBallLineDriveExitVelo2018,
            BarrelPercent2018: this.context.state.startingpitchers[foundIndex].BarrelPercent2018,
            LaunchAngle2018: this.context.state.startingpitchers[foundIndex].LaunchAngle2018,
            AVGFastballVelo2018: this.context.state.startingpitchers[foundIndex].AVGFastballVelo2018,
            MaxFastballVelo2018: this.context.state.startingpitchers[foundIndex].MaxFastballVelo2018,
            FourSeamFastballUsagePercent2018: this.context.state.startingpitchers[foundIndex].FourSeamFastballUsagePercent2018,
            SinkerUsagePercent2018: this.context.state.startingpitchers[foundIndex].SinkerUsagePercent2018,
            CutterUsagePercent2018: this.context.state.startingpitchers[foundIndex].CutterUsagePercent2018,
            SliderUsagePercent2018: this.context.state.startingpitchers[foundIndex].SliderUsagePercent2018,
            ChangeupUsagePercent2018: this.context.state.startingpitchers[foundIndex].ChangeupUsagePercent2018,
            CurveUsagePercent2018: this.context.state.startingpitchers[foundIndex].CurveUsagePercent2018,
            SplitterUsagePercent2018: this.context.state.startingpitchers[foundIndex].SplitterUsagePercent2018,
            KnuckleCurveUsagePercent2018: this.context.state.startingpitchers[foundIndex].KnuckleCurveUsagePercent2018,
            FWAR2018: this.context.state.startingpitchers[foundIndex].FWAR2018,
            Games2019: this.context.state.startingpitchers[foundIndex].Games2019,
            GamesStarted2019: this.context.state.startingpitchers[foundIndex].GamesStarted2019,
            InningsPitched2019: this.context.state.startingpitchers[foundIndex].InningsPitched2019,
            InningsPitchedPerGameStarted2019: this.context.state.startingpitchers[foundIndex].InningsPitchedPerGameStarted2019,
            QS2019: this.context.state.startingpitchers[foundIndex].QS2019,
            ERA2019: this.context.state.startingpitchers[foundIndex].ERA2019,
            ERAPlus2019: this.context.state.startingpitchers[foundIndex].ERAPlus2019,
            FIP2019: this.context.state.startingpitchers[foundIndex].FIP2019,
            xFIP2019: this.context.state.startingpitchers[foundIndex].xFIP2019,
            SIERA2019: this.context.state.startingpitchers[foundIndex].SIERA2019,
            WHIP2019: this.context.state.startingpitchers[foundIndex].WHIP2019,
            HitsPer92019: this.context.state.startingpitchers[foundIndex].HitsPer92019,
            HRsPer92019: this.context.state.startingpitchers[foundIndex].HRsPer92019,
            BBPer92019: this.context.state.startingpitchers[foundIndex].BBPer92019,
            KPer92019: this.context.state.startingpitchers[foundIndex].KPer92019,
            KDividedByBB2019: this.context.state.startingpitchers[foundIndex].KDividedByBB2019,
            Saves2019: this.context.state.startingpitchers[foundIndex].Saves2019,
            KPercent2019: this.context.state.startingpitchers[foundIndex].KPercent2019,
            BBPercent2019: this.context.state.startingpitchers[foundIndex].BBPercent2019,
            KMinusBBPercent2019: this.context.state.startingpitchers[foundIndex].KMinusBBPercent2019,
            BABIP2019: this.context.state.startingpitchers[foundIndex].BABIP2019,
            LOBPercent2019: this.context.state.startingpitchers[foundIndex].LOBPercent2019,
            HRPerFBPercent2019: this.context.state.startingpitchers[foundIndex].HRPerFBPercent2019,
            GBPercent2019: this.context.state.startingpitchers[foundIndex].GBPercent2019,
            LDPercent2019: this.context.state.startingpitchers[foundIndex].LDPercent2019,
            FBPercent2019: this.context.state.startingpitchers[foundIndex].FBPercent2019,
            IFFBPercent2019: this.context.state.startingpitchers[foundIndex].IFFBPercent2019,
            SoftContactPercent2019: this.context.state.startingpitchers[foundIndex].SoftContactPercent2019,
            MediumContactPercent2019: this.context.state.startingpitchers[foundIndex].MediumContactPercent2019,
            HardContactPercent2019: this.context.state.startingpitchers[foundIndex].HardContactPercent2019,
            FirstStrikePercent2019: this.context.state.startingpitchers[foundIndex].FirstStrikePercent2019,
            ExitVelo2019: this.context.state.startingpitchers[foundIndex].ExitVelo2019,
            FlyBallLineDriveExitVelo2019: this.context.state.startingpitchers[foundIndex].FlyBallLineDriveExitVelo2019,
            BarrelPercent2019: this.context.state.startingpitchers[foundIndex].BarrelPercent2019,
            LaunchAngle2019: this.context.state.startingpitchers[foundIndex].LaunchAngle2019,
            AVGFastballVelo2019: this.context.state.startingpitchers[foundIndex].AVGFastballVelo2019,
            MaxFastballVelo2019: this.context.state.startingpitchers[foundIndex].MaxFastballVelo2019,
            FourSeamFastballUsagePercent2019: this.context.state.startingpitchers[foundIndex].FourSeamFastballUsagePercent2019,
            SinkerUsagePercent2019: this.context.state.startingpitchers[foundIndex].SinkerUsagePercent2019,
            CutterUsagePercent2019: this.context.state.startingpitchers[foundIndex].CutterUsagePercent2019,
            SliderUsagePercent2019: this.context.state.startingpitchers[foundIndex].SliderUsagePercent2019,
            ChangeupUsagePercent2019: this.context.state.startingpitchers[foundIndex].ChangeupUsagePercent2019,
            CurveUsagePercent2019: this.context.state.startingpitchers[foundIndex].CurveUsagePercent2019,
            SplitterUsagePercent2019: this.context.state.startingpitchers[foundIndex].SplitterUsagePercent2019,
            KnuckleCurveUsagePercent2019: this.context.state.startingpitchers[foundIndex].KnuckleCurveUsagePercent2019,
            FWAR2019: this.context.state.startingpitchers[foundIndex].FWAR2019,
            SteamerGamesProjection: this.context.state.startingpitchers[foundIndex].SteamerGamesProjection,
            SteamerGamesStartedProjection: this.context.state.startingpitchers[foundIndex].SteamerGamesStartedProjection,
            SteamerInningsPitchedProjection: this.context.state.startingpitchers[foundIndex].SteamerInningsPitchedProjection,
            SteamerQSProjection: this.context.state.startingpitchers[foundIndex].SteamerQSProjection,
            SteamerERAProjection: this.context.state.startingpitchers[foundIndex].SteamerERAProjection,
            SteamerFIPProjection: this.context.state.startingpitchers[foundIndex].SteamerFIPProjection,
            SteamerxFIPProjection: this.context.state.startingpitchers[foundIndex].SteamerxFIPProjection,
            SteamerSIERAProjection: this.context.state.startingpitchers[foundIndex].SteamerSIERAProjection,
            SteamerWHIPProjection: this.context.state.startingpitchers[foundIndex].SteamerWHIPProjection,
            SteamerKPer9Projection: this.context.state.startingpitchers[foundIndex].SteamerKPer9Projection,
            SteamerSavesProjection: this.context.state.startingpitchers[foundIndex].SteamerSavesProjection,
            SteamerBABIPProjection: this.context.state.startingpitchers[foundIndex].SteamerBABIPProjection,
            SteamerLOBPercentProjection: this.context.state.startingpitchers[foundIndex].SteamerLOBPercentProjection,
            SteamerFWARProjection: this.context.state.startingpitchers[foundIndex].SteamerFWARProjection,
        })
    }

    cardDataChange = (event) => {
        event.preventDefault();
        this.setState({
            traditionalStats: false,
            opponentContactStats: false,
            expectedStats: false,
            pitchUsageStats: false,
        })
        this.setState({
            labelValue: [event.target.value],
            [event.target.value]: true,
        })
    }

    render() {
        const { classes } = this.props;
        const { firstName, lastName, birthday, bats, throws, currentTeam, imageURL, primaryPosition, otherPositions, Games2017, GamesStarted2017, InningsPitched2017, InningsPitchedPerGameStarted2017, QS2017, ERA2017, ERAPlus2017, FIP2017, xFIP2017, SIERA2017, WHIP2017, HitsPer92017, HRsPer92017, BBPer92017, KPer92017, KDividedByBB2017, Saves2017, KPercent2017, BBPercent2017, KMinusBBPercent2017, BABIP2017, LOBPercent2017, HRPerFBPercent2017, GBPercent2017, LDPercent2017, FBPercent2017, IFFBPercent2017, SoftContactPercent2017, MediumContactPercent2017, HardContactPercent2017, FirstStrikePercent2017, ExitVelo2017, FlyBallLineDriveExitVelo2017, BarrelPercent2017, LaunchAngle2017, AVGFastballVelo2017, MaxFastballVelo2017, FourSeamFastballUsagePercent2017, SinkerUsagePercent2017, CutterUsagePercent2017, SliderUsagePercent2017, ChangeupUsagePercent2017, CurveUsagePercent2017, SplitterUsagePercent2017, KnuckleCurveUsagePercent2017, FWAR2017, Games2018, GamesStarted2018, InningsPitched2018, InningsPitchedPerGameStarted2018, QS2018, ERA2018, ERAPlus2018, FIP2018, xFIP2018, SIERA2018, WHIP2018, HitsPer92018, HRsPer92018, BBPer92018, KPer92018, KDividedByBB2018, Saves2018, KPercent2018, BBPercent2018, KMinusBBPercent2018, BABIP2018, LOBPercent2018, HRPerFBPercent2018, GBPercent2018, LDPercent2018, FBPercent2018, IFFBPercent2018, SoftContactPercent2018, MediumContactPercent2018, HardContactPercent2018, FirstStrikePercent2018, ExitVelo2018, FlyBallLineDriveExitVelo2018, BarrelPercent2018, LaunchAngle2018, AVGFastballVelo2018, MaxFastballVelo2018, FourSeamFastballUsagePercent2018, SinkerUsagePercent2018, CutterUsagePercent2018, SliderUsagePercent2018, ChangeupUsagePercent2018, CurveUsagePercent2018, SplitterUsagePercent2018, KnuckleCurveUsagePercent2018, FWAR2018, Games2019, GamesStarted2019, InningsPitched2019, InningsPitchedPerGameStarted2019, QS2019, ERA2019, ERAPlus2019, FIP2019, xFIP2019, SIERA2019, WHIP2019, HitsPer92019, HRsPer92019, BBPer92019, KPer92019, KDividedByBB2019, Saves2019, KPercent2019, BBPercent2019, KMinusBBPercent2019, BABIP2019, LOBPercent2019, HRPerFBPercent2019, GBPercent2019, LDPercent2019, FBPercent2019, IFFBPercent2019, SoftContactPercent2019, MediumContactPercent2019, HardContactPercent2019, FirstStrikePercent2019, ExitVelo2019, FlyBallLineDriveExitVelo2019, BarrelPercent2019, LaunchAngle2019, AVGFastballVelo2019, MaxFastballVelo2019, FourSeamFastballUsagePercent2019, SinkerUsagePercent2019, CutterUsagePercent2019, SliderUsagePercent2019, ChangeupUsagePercent2019, CurveUsagePercent2019, SplitterUsagePercent2019, KnuckleCurveUsagePercent2019, FWAR2019, SteamerGamesProjection, SteamerGamesStartedProjection, SteamerInningsPitchedProjection, SteamerQSProjection, SteamerERAProjection, SteamerFIPProjection, SteamerxFIPProjection, SteamerSIERAProjection, SteamerWHIPProjection, SteamerKPer9Projection, SteamerSavesProjection, SteamerBABIPProjection, SteamerLOBPercentProjection, SteamerFWARProjection, traditionalStats, opponentContactStats, expectedStats, pitchUsageStats, labelValue } = this.state;

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
                                            key='traditionalStatsGamesPlayed'
                                            className={classes.tableCell}
                                        >
                                            Starts
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
                                            <TableCell className={classes.tableCell}>{((Runs2017 + RBI2017 + (6 * HR2017) + (6.5 * StolenBases2017) + ((PA2017 * BA2017))) / 6).toFixed(1)}</TableCell>
                                            <TableCell className={classes.tableCell}>{((Runs2017 + RBI2017 + (6 * HR2017) + (6.5 * StolenBases2017) + ((PA2017 * OBP2017))) / 6).toFixed(1)}</TableCell>
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
                                            <TableCell className={classes.tableCell}>{((Runs2018 + RBI2018 + (6 * HR2018) + (6.5 * StolenBases2018) + ((PA2018 * BA2018))) / 6).toFixed(1)}</TableCell>
                                            <TableCell className={classes.tableCell}>{((Runs2018 + RBI2018 + (6 * HR2018) + (6.5 * StolenBases2018) + ((PA2018 * OBP2018))) / 6).toFixed(1)}</TableCell>
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
                                            <TableCell className={classes.tableCell}>{((Runs2019 + RBI2019 + (6 * HR2019) + (6.5 * StolenBases2019) + ((PA2019 * BA2019))) / 6).toFixed(1)}</TableCell>
                                            <TableCell className={classes.tableCell}>{((Runs2019 + RBI2019 + (6 * HR2019) + (6.5 * StolenBases2019) + ((PA2019 * OBP2019))) / 6).toFixed(1)}</TableCell>
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
                                    <TableRow
                                        tabIndex={-1}
                                        key='Projected 2020'
                                        className={classes.tableRow}
                                    >
                                        <TableCell component="th" scope="row" className={classes.tableCell}>2020</TableCell>
                                        <TableCell className={classes.tableCell}>Projections</TableCell>
                                        <TableCell className={classes.tableCell}>{SteamerPAProjection}</TableCell>
                                        <TableCell className={classes.tableCell}>{SteamerAVGProjection}</TableCell>
                                        <TableCell className={classes.tableCell}>{SteamerOBPProjection}</TableCell>
                                        <TableCell className={classes.tableCell}>{SteamerSLGProjection}</TableCell>
                                        <TableCell className={classes.tableCell}>{SteamerDoublesProjection}</TableCell>
                                        <TableCell className={classes.tableCell}>{SteamerHRProjection}</TableCell>
                                        <TableCell className={classes.tableCell}>{SteamerRunsProjection}</TableCell>
                                        <TableCell className={classes.tableCell}>{SteamerRBIProjection}</TableCell>
                                        <TableCell className={classes.tableCell}>{SteamerSBProjection}</TableCell>
                                        <TableCell className={classes.tableCell}>{SteamerFWARProjection}</TableCell>
                                        <TableCell className={classes.tableCell}>{((SteamerRunsProjection + SteamerRBIProjection + (6 * SteamerHRProjection) + (6.5 * SteamerSBProjection) + ((SteamerPAProjection * SteamerAVGProjection))) / 6).toFixed(1)}</TableCell>
                                        <TableCell className={classes.tableCell}>{((SteamerRunsProjection + SteamerRBIProjection + (6 * SteamerHRProjection) + (6.5 * SteamerSBProjection) + ((SteamerPAProjection * SteamerOBPProjection))) / 6).toFixed(1)}</TableCell>
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
                                aria-labelledby="Batted Ball Data Table"
                                aria-label="Batted Ball Data Table"
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
                                            key='opponentContactStatsPullPercent'
                                            className={classes.tableCell}
                                        >
                                            Pull%
                                        </TableCell>

                                        <TableCell
                                            key='topponentContactStatsCenterPercent'
                                            className={classes.tableCell}
                                        >
                                            Center%
                                        </TableCell>

                                        <TableCell
                                            key='opponentContactStatsOppoPercent'
                                            className={classes.tableCell}
                                        >
                                            Oppo%
                                        </TableCell>

                                        <TableCell
                                            key='opponentContactStatsHRPerFB'
                                            className={classes.tableCell}
                                        >
                                            HR/FB
                                        </TableCell>

                                        <TableCell
                                            key='opponentContactStatsHardHitPercent'
                                            className={classes.tableCell}
                                        >
                                            Hard Hit%
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
                                            key='opponentContactStatsAvgHRDistance'
                                            className={classes.tableCell}
                                        >
                                            AVG HR Dist
                                        </TableCell>

                                        <TableCell
                                            key='opponentContactStatsChaseRate'
                                            className={classes.tableCell}
                                        >
                                            Chase%
                                        </TableCell>

                                        <TableCell
                                            key='opponentContactStatsContactPercent'
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
                                aria-labelledby="Base Running Stats Table"
                                aria-label="Base Running Stats Table"
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
                                            key='pitchUsageStatsSprintSpeed'
                                            className={classes.tableCell}
                                        >
                                            SprintSpeed
                                        </TableCell>

                                        <TableCell
                                            key='pitchUsageStatsStolenBases'
                                            className={classes.tableCell}
                                        >
                                            SBs
                                        </TableCell>

                                        <TableCell
                                            key='pitchUsageStatsStolenBasePercent'
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
                                <MenuItem classes={{ root: classes.selectText, }} value="opponentContactStats">Batted Ball Data</MenuItem>
                                <MenuItem classes={{ root: classes.selectText, }} value="expectedStats">Expected Stats</MenuItem>
                                <MenuItem classes={{ root: classes.selectText, }} value="pitchUsageStats">Base Running Stats</MenuItem>
                            </Select>
                        </FormControl>

                        {playerCard}
                        {opponentContactStats}
                        {expectedStats}
                        {pitchUsageStats}
                    </div>
                </Card>
            </>
        )
    }
}

StartingPitcherCard.contextType = AppContext;

export default withStyles(styles)(StartingPitcherCard);