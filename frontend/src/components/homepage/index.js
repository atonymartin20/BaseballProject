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
        fontSize: '2.0rem',
        lineHeight: 1.25,
    },
    homepageText: {
        marginTop: 20,
        marginBottom: 20,
    },
    websiteLinks: {
        textDecoration: 'none',
        color: 'black',
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
                    <h1 className={classes.homepageText}>Welcome to my baseball project.  This project is designed to hold statistical data from <a href='https://www.fangraphs.com/' className={classes.websiteLinks} target='_blank' rel="noopener noreferrer">Fangraphs</a>, <a href="https://baseballsavant.mlb.com" className={classes.websiteLinks} target='_blank'rel="noopener noreferrer">Baseball Savant</a>, and <a href="https://www.baseball-reference.com/" className={classes.websiteLinks} target='_blank' rel="noopener noreferrer">Baseball Reference</a>.  Then, all the data can be found in one location.  All 2020 projected stats are from <a href="https://www.fangraphs.com/projections.aspx?pos=all&stats=bat&type=steamer&team=0&lg=all&players=0" className={classes.websiteLinks} target='_blank' rel="noopener noreferrer">Steamer</a>.<br /><br />Catchers will be released first, and then other positions will be added as they are completed.  All players in the database are projected for at least 100 plate appearances, 10 starts, or 40 innings in 2020.<br/><br/><Link to='/glossary' className={classes.websiteLinks}>A glossary explaing all the stats used can be found here</Link>.</h1>
                    <Links />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Homepage);