import React from 'react';
import Navbar from '../navbar';
import Links from '../navbar/links.js';
import withStyles from '@material-ui/core/styles/withStyles';

// import PropTypes from 'prop-types';
// import clsx from 'clsx';
// import { lighten, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';
// import TableSortLabel from '@material-ui/core/TableSortLabel';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
// import Tooltip from '@material-ui/core/Tooltip';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
// import DeleteIcon from '@material-ui/icons/Delete';
// import FilterListIcon from '@material-ui/icons/FilterList';

const styles = theme => ({
    positionDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    positionSpacingDiv: {
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
    positionText: {
        marginTop: 20,
        marginBottom: 20,
    },
    websiteLinks: {
        textDecoration: 'none',
        color: 'black',
    }
});

class Catchers extends React.Component {
    state = {
        display2017: false,
        display2018: false,
        display2019: false,
        display2020: true,
    }

    render() {
        const { classes } = this.props;
        const { display2017, display2018, display2019, display2020 } = this.state;

        const data = (
            <div>
                {display2017 ? (
                    <div>
                        <h1 className={classes.homepageText}>2017 Data here</h1>
                    </div> ) : null
                }

                {display2018 ? (
                    <div>
                        <h1 className={classes.homepageText}>2018 Data here</h1>
                    </div> ) : null
                }

                {display2019 ? (
                    <div>
                        <h1 className={classes.homepageText}>2019 Data here</h1>
                    </div> ) : null
                }

                {display2020 ? (
                    <div> 
                        <h1 className={classes.homepageText}>2020 Data here</h1>
                    </div> ) : null
                }

            </div >

        )
        return (
            <div className={classes.positionDiv}>
                <Navbar />
                <div className={classes.positionSpacingDiv}>
                    <Links />
                    <h1 className={classes.homepageText}>{data}</h1>

                    <Links />
                </div>
            </div>
        )
    }
}
export default withStyles(styles)(Catchers);