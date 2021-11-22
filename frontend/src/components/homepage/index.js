import React from 'react';
import Navbar from '../navbar';
import Links from '../navbar/links.js';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/appContext.js';
import './index.css';

const styles = (theme) => ({
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
    loadingContainer: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingLeft: '10px',
        paddingRight: '10px',
    },
    loadingText: {
        fontSize: '2.5rem',
        marginTop: '10px',
    },
    websiteLinks: {
        textDecoration: 'none',
        color: 'black',
    },
});

class Homepage extends React.Component {
    render() {
        const { classes } = this.props;

        while(this.context.state.designatedHitters.length === 0) {
            let seconds = 0;
            setInterval(function () {
                seconds++;
            }, 1000);
            while(seconds < 5) {
                return (
                    <div className={classes.loadingContainer}>
                        <div className={'spinner'} />
                        <h1 className={classes.loadingText}>Loading players.  This will only take a moment.</h1>
                    </div>
                )
            }
            if (seconds >= 5) {
                return (
                    <div className={classes.homepageDiv}>
                        <Navbar />
                        <div className={classes.homepageSpacingDiv}>
                            <Links />
                            <h1 className={classes.homepageText}>
                                Welcome to my baseball project. This project is designed to hold statistical data from{' '}
                                <a href='https://www.fangraphs.com/' className={classes.websiteLinks} target='_blank' rel='noopener noreferrer'>
                                    Fangraphs
                                </a>
                                ,{' '}
                                <a href='https://baseballsavant.mlb.com' className={classes.websiteLinks} target='_blank' rel='noopener noreferrer'>
                                    Baseball Savant
                                </a>
                                , and{' '}
                                <a href='http://brooksbaseball.net/' className={classes.websiteLinks} target='_blank' rel='noopener noreferrer'>
                                    Brooks Baseball
                                </a>
                                , and{' '}
                                <a
                                    href='https://www.baseball-reference.com/'
                                    className={classes.websiteLinks}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Baseball Reference
                                </a>
                                . Then, all the data can be found in one location. All 2022 projected stats are from{' '}
                                <a
                                    href='https://www.fangraphs.com/projections.aspx?pos=all&stats=pit&type=thebat&team=0&lg=all&players=0'
                                    className={classes.websiteLinks}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    The Bat
                                </a>, <a
                                    href='https://www.fangraphs.com/projections.aspx?pos=all&stats=pit&type=thebatx&team=0&lg=all&players=0'
                                    className={classes.websiteLinks}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    The Bat X
                                </a>, and <a
                                    href='https://www.fangraphs.com/projections.aspx?pos=all&stats=pit&type=steamer&team=0&lg=all&players=0'
                                    className={classes.websiteLinks}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Steamer</a>.
                                <br />
                                <br />
                                    2021 stats are currently being updated and 2022 Projections will be added once The Bat, The Bat X, and Steamer release them.
                                <br />
                                <br />
                                <Link to='/glossary' className={classes.websiteLinks}>
                                    A glossary explaing all the stats used can be found here.
                                </Link>
                            </h1>
                            <Links />
                        </div>
                    </div>
                );            }
            }
        return (
            <div className={classes.homepageDiv}>
                <Navbar />
                <div className={classes.homepageSpacingDiv}>
                    <Links />
                    <h1 className={classes.homepageText}>
                        Welcome to my baseball project. This project is designed to hold statistical data from{' '}
                        <a href='https://www.fangraphs.com/' className={classes.websiteLinks} target='_blank' rel='noopener noreferrer'>
                            Fangraphs
                        </a>
                        ,{' '}
                        <a href='https://baseballsavant.mlb.com' className={classes.websiteLinks} target='_blank' rel='noopener noreferrer'>
                            Baseball Savant
                        </a>
                        , and{' '}
                        <a href='http://brooksbaseball.net/' className={classes.websiteLinks} target='_blank' rel='noopener noreferrer'>
                            Brooks Baseball
                        </a>
                        , and{' '}
                        <a
                            href='https://www.baseball-reference.com/'
                            className={classes.websiteLinks}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Baseball Reference
                        </a>
                        . Then, all the data can be found in one location. All 2022 projected stats are from{' '}
                        <a
                            href='https://www.fangraphs.com/projections.aspx?pos=all&stats=pit&type=thebat&team=0&lg=all&players=0'
                            className={classes.websiteLinks}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            The Bat
                        </a>, <a
                            href='https://www.fangraphs.com/projections.aspx?pos=all&stats=pit&type=thebatx&team=0&lg=all&players=0'
                            className={classes.websiteLinks}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            The Bat X
                        </a>, and <a
                            href='https://www.fangraphs.com/projections.aspx?pos=all&stats=pit&type=steamer&team=0&lg=all&players=0'
                            className={classes.websiteLinks}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Steamer</a>.
                        <br />
                        <br />
                            2021 stats are currently being updated and 2022 Projections will be added once The Bat, The Bat X, and Steamer release them.
                        <br />
                        <br />
                        <Link to='/glossary' className={classes.websiteLinks}>
                            A glossary explaing all the stats used can be found here.
                        </Link>
                    </h1>
                    <Links />
                </div>
            </div>
        );
    }
}

Homepage.contextType = AppContext;

export default withStyles(styles)(Homepage);
