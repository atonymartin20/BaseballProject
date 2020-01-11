import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
// import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom';
import { AppContext } from '../context/appContext.js';
import CloseIcon from "@material-ui/icons/Close";

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
        id: this.context.state.catchers[this.props.index].id,
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
        WRCPLUS2017: this.context.state.catchers[this.props.index].WRCPLUS2017,
        OPSPLUS2017: this.context.state.catchers[this.props.index].OPSPLUS2017,
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
        WRCPLUS2018: this.context.state.catchers[this.props.index].WRCPLUS2018,
        OPSPLUS2018: this.context.state.catchers[this.props.index].OPSPLUS2018,
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
        WRCPLUS2019: this.context.state.catchers[this.props.index].WRCPLUS2019,
        OPSPLUS2019: this.context.state.catchers[this.props.index].OPSPLUS2019,
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
        index: this.props.index,
    }

    componentDidMount() {
        console.log(this.context.state.catchers[this.state.index])
    }

    render() {
        const { classes } = this.props;
        const { id, firstName, lastName } = this.state;
        console.log(this.props.index, this.state.index, this.state.id, this.state.firstName, this.state.StolenBasePercent2019)
        return (
            <>
                <Card className={classes.container}>
                    <div className={classes.playerCardContainer}>
                        <CloseIcon onClick={() => { this.props.close() }} className={classes.closeIconStyling} />

                    </div>
                </Card>
            </>
        )
    }
}

PlayerCard.contextType = AppContext;

export default withStyles(styles)(PlayerCard);