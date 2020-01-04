import React from 'react';
import Navbar from '../navbar';
import Links from '../navbar/links.js';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';

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
    websiteLinks: {

    }
});

class Homepage extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.homepageDiv}>
                <Navbar />
                <div className={classes.homepageSpacingDiv}>
                    <Links />
                    <h1>Welcome to my baseball project.  This project is designed to hold statistical data from <a href='https://www.fangraphs.com/' className={classes.websiteLinks} target='_blank'>Fangraphs</a>, <a href="https://baseballsavant.mlb.com" className={classes.websiteLinks} target='_blank'>Baseball Savant</a>, and <a href="https://www.baseball-reference.com/" className={classes.websiteLinks} target='_blank'>Baseball Reference</a> </h1>
                    <Links />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Homepage);