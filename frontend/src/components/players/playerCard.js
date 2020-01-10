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
        width: '40%',
        border: '1px solid #888888',
        borderRadius: '4px',
        backgroundColor: '#FEFEFE',
        margin: '20vh auto',
        padding: 20,
        zIndex: 20000,
        [theme.breakpoints.down(1000)]: {
            width: '65%',
            marginLeft: 250,
            maxWidth: 600,
        },
        [theme.breakpoints.down(710)]: {
            margin: '20vh auto',
        },
        [theme.breakpoints.down(500)]: {
            width: '100%'
        },
    },
    name: {
        width: '25%',
        textAlign: 'center',
        padding: '5px 10px',
        [theme.breakpoints.down(1400)]: {
            width: '32.5%'
        },
        [theme.breakpoints.down(1050)]: {
            width: '40%',
        },
        [theme.breakpoints.down(950)]: {
            width: '60%',
        },
        [theme.breakpoints.down(500)]: {
            width: '100%',
        },
    },
    notes: {
        width: '22.5%',
        textAlign: 'center',
        fontSize: '1.5rem',
        padding: '5px 10px',
        [theme.breakpoints.down(1400)]: {
            display: 'none'
        }
    },
    phoneNumber: {
        width: '20%',
        textAlign: 'center',
        padding: '5px 10px',
        [theme.breakpoints.down(1400)]: {
            width: '22.5%'
        },
        [theme.breakpoints.down(1052)]: {
            width: '40%',
        },
        [theme.breakpoints.down(500)]: {
            display: 'none',
        },
    },
});

class PlayerCard extends React.Component {
    state = {
        id: this.props.id,
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        phoneNumber: this.props.phoneNumber,
        email: this.props.email,
        notes: this.props.notes,
        delete: false,
        index: this.props.index,
    }

    componentDidMount() {
        console.log(this.context.state.catchers[this.state.index])
    }
    
    render() {
        const { classes } = this.props;
        const { firstName, lastName, phoneNumber, email, notes, id, index } = this.state;
        console.log(this.props.index, this.state.index)
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