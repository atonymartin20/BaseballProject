import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
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
        'GB%2017': this.context.state.catchers[this.props.index].GB%2017,
        'LD%2017': this.context.state.catchers[this.props.index].LD%2017,
        'FB%2017': this.context.state.catchers[this.props.index].FB%2017,
        'Pull%2017': this.context.state.catchers[this.props.index].Pull%2017,
        'Center%2017': this.context.state.catchers[this.props.index].Center%2017,
        'Oppo%2017': this.context.state.catchers[this.props.index].Oppo%2017,
        'HR/FB%2017': this.context.state.catchers[this.props.index].'HR/FB%2017',
        'HardHit%2017': this.context.state.catchers[this.props.index].HardHit%2017,
        ExitVelo2017: this.context.state.catchers[this.props.index].ExitVelo2017,
        FlyBallLineDriveExitVelo2017: this.context.state.catchers[this.props.index].FlyBallLineDriveExitVelo2017,
        LaunchAngle2017: this.context.state.catchers[this.props.index].LaunchAngle2017,
        'Barrel%2017': this.context.state.catchers[this.props.index].Barrel%2017,
        BABIP2017: this.context.state.catchers[this.props.index].BABIP2017,
        WOBA2017: this.context.state.catchers[this.props.index].WOBA2017,
        xWOBA2017: this.context.state.catchers[this.props.index].xWOBA2017,
        xBA2017: this.context.state.catchers[this.props.index].xBA2017,
        AvgHRDistance2017: this.context.state.catchers[this.props.index].AvgHRDistance2017,
        'WRC+2017': this.context.state.catchers[this.props.index].WRC+2017,
        'OPS+2017': this.context.state.catchers[this.props.index].OPS+2017,
        'BB%2017': this.context.state.catchers[this.props.index].BB%2017,
        'K%2017': this.context.state.catchers[this.props.index].K%2017,
        ChaseRate2017: this.context.state.catchers[this.props.index].ChaseRate2017,
        'Contact%2017': this.context.state.catchers[this.props.index].Contact%2017,
        SprintSpeed2017: this.context.state.catchers[this.props.index].SprintSpeed2017,
        StolenBases2017: this.context.state.catchers[this.props.index].StolenBases2017,
        'StolenBase%2017': this.context.state.catchers[this.props.index].StolenBase%2017,
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
        'GB%2018': this.context.state.catchers[this.props.index].GB%2018,
        'LD%2018': this.context.state.catchers[this.props.index].LD%2018,
        'FB%2018': this.context.state.catchers[this.props.index].FB%2018,
        'Pull%2018': this.context.state.catchers[this.props.index].Pull%2018,
        'Center%2018': this.context.state.catchers[this.props.index].Center%2018,
        'Oppo%2018': this.context.state.catchers[this.props.index].Oppo%2018,
        'HR/FB%2018': this.context.state.catchers[this.props.index].HR/FB%2018,
        'HardHit%2018': this.context.state.catchers[this.props.index].HardHit%2018,
        ExitVelo2018: this.context.state.catchers[this.props.index].ExitVelo2018,
        FlyBallLineDriveExitVelo2018: this.context.state.catchers[this.props.index].FlyBallLineDriveExitVelo2018,
        LaunchAngle2018: this.context.state.catchers[this.props.index].LaunchAngle2018,
        'Barrel%2018': this.context.state.catchers[this.props.index].Barrel%2018,
        BABIP2018: this.context.state.catchers[this.props.index].BABIP2018,
        WOBA2018: this.context.state.catchers[this.props.index].WOBA2018,
        xWOBA2018: this.context.state.catchers[this.props.index].xWOBA2018,
        xBA2018: this.context.state.catchers[this.props.index].xBA2018,
        AvgHRDistance2018: this.context.state.catchers[this.props.index].AvgHRDistance2018,
        'WRC+2018': this.context.state.catchers[this.props.index].WRC+2018,
        'OPS+2018': this.context.state.catchers[this.props.index].OPS+2018,
        'BB%2018': this.context.state.catchers[this.props.index].BB%2018,
        'K%2018': this.context.state.catchers[this.props.index].K%2018,
        ChaseRate2018: this.context.state.catchers[this.props.index].ChaseRate2018,
        'Contact%2018': this.context.state.catchers[this.props.index].Contact%2018,
        SprintSpeed2018: this.context.state.catchers[this.props.index].SprintSpeed2018,
        StolenBases2018: this.context.state.catchers[this.props.index].StolenBases2018,
        'StolenBase%2018': this.context.state.catchers[this.props.index].StolenBase%2018,
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
        'GB%2019': this.context.state.catchers[this.props.index].GB%2019,
        'LD%2019': this.context.state.catchers[this.props.index].LD%2019,
        'FB%2019': this.context.state.catchers[this.props.index].FB%2019,
        'Pull%2019': this.context.state.catchers[this.props.index].Pull%2019,
        'Center%2019': this.context.state.catchers[this.props.index].Center%2019,
        'Oppo%2019': this.context.state.catchers[this.props.index].Oppo%2019,
        'HR/FB%2019': this.context.state.catchers[this.props.index].HR/FB%2019,
        'HardHit%2019': this.context.state.catchers[this.props.index].HardHit%2019,
        ExitVelo2019: this.context.state.catchers[this.props.index].ExitVelo2019,
        FlyBallLineDriveExitVelo2019: this.context.state.catchers[this.props.index].FlyBallLineDriveExitVelo2019,
        LaunchAngle2019: this.context.state.catchers[this.props.index].LaunchAngle2019,
        'Barrel%2019': this.context.state.catchers[this.props.index].Barrel%2019,
        BABIP2019: this.context.state.catchers[this.props.index].BABIP2019,
        WOBA2019: this.context.state.catchers[this.props.index].WOBA2019,
        xWOBA2019: this.context.state.catchers[this.props.index].xWOBA2019,
        xBA2019: this.context.state.catchers[this.props.index].xBA2019,
        AvgHRDistance2019: this.context.state.catchers[this.props.index].AvgHRDistance2019,
        'WRC+2019': this.context.state.catchers[this.props.index].WRC+2019,
        'OPS+2019': this.context.state.catchers[this.props.index].OPS+2019,
        'BB%2019': this.context.state.catchers[this.props.index].BB%2019,
        'K%2019': this.context.state.catchers[this.props.index].K%2019,
        ChaseRate2019: this.context.state.catchers[this.props.index].ChaseRate2019,
        'Contact%2019': this.context.state.catchers[this.props.index].Contact%2019,
        SprintSpeed2019: this.context.state.catchers[this.props.index].SprintSpeed2019,
        StolenBases2019: this.context.state.catchers[this.props.index].StolenBases2019,
        'StolenBase%2019': this.context.state.catchers[this.props.index].StolenBase%2019,
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
        const { id,  } = this.state;
        console.log(this.props.index, this.state.index, this.state.id, this.state.name)
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