import React from 'react';
import Navbar from '../navbar';
import Links from '../navbar/links.js';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
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
                    <h1>test</h1>
                <Links />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Homepage);