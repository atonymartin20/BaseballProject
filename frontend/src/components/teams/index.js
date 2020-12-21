import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import { Redirect } from 'react-router-dom';
import Navbar from '../navbar';
import Links from '../navbar/links.js';

function createData(teamName, players, hitters, pitchers, hitterFWAR, pitcherFWAR, teamFWAR) {
    return { teamName, players, hitters, pitchers, hitterFWAR, pitcherFWAR, teamFWAR };
}

function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headCells = [
    { id: 'teamName', numeric: false, label: 'Team Name', info: 'Team Name' },
    { id: 'teamFWAR', numeric: true, label: 'Team FWAR', info: 'Fangraphs Wins Above Replacement' },
    { id: 'players', numberic: true, label: 'Players', info: 'Players' },
    { id: 'hitters', numeric: true, label: 'Hitters', info: 'Hitters' },
    { id: 'pitchers', numeric: true, label: 'Pitchers', info: 'Pitchers' },
    { id: 'hitterFWAR', numeric: true, label: 'Hitter FWAR', info: 'Hitter FWAR'},
    { id: 'pitcherFWAR', numeric: true, label: 'PitcherFWAR', info: 'Pitcher FWAR'},
];

function TeamsHead(props) {
    const { classes, order, orderBy, onRequestSort } = props;

    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell key={headCell.id} align='center' sortDirection={orderBy === headCell.id ? order : false} className={classes.tableCell}>
                        <TableSortLabel active={orderBy === headCell.id} direction={orderBy === headCell.id ? order : 'asc'} onClick={createSortHandler(headCell.id)}>
                            {headCell.label}
                            {orderBy === headCell.id ? <span className={classes.visuallyHidden}>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</span> : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

TeamsHead.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
    linkStyling: {
        textDecoration: 'none',
        color: 'black',
    },
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    paper: {
        width: '97%',
        backgroundColor: '#f8fbfd',
        marginTop: 70,
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    table: {
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        marginTop: '15px',
        marginBottom: '15px',
        border: '1px solid #E9ECEE',
        borderRadius: '4px',
    },
    tableCell: {
        fontSize: '1.4rem',
    },
    tableRow: {
        fontSize: '1.4rem',
        '&:nth-of-type(even)': {
            backgroundColor: '#e0e3df',
        },
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

export default function Teams(props) {
    const classes = useStyles();
    const [order, setOrder] = React.useState('desc');
    const [orderBy, setOrderBy] = React.useState('teamFWAR');
    const [selected, setSelected] = React.useState([]);
    const [redirect, setRedirect] = React.useState(false);
    const [rows, setRows] = React.useState([]);
    const [redirectTeamName, setRedirectTeamName] = React.useState('');
    const [redirectTeamPlayers, setRedirectTeamPlayers] = React.useState([]);
    const [redirectTeamHitters, setRedirectTeamHitters] = React.useState([]);
    const [redirectTeamPitchers, setRedirectTeamPitchers] = React.useState([]);
    const [redirectTeamHitterFWAR, setRedirectTeamHitterFWAR] = React.useState(0.0);
    const [redirectTeamPitcherFWAR, setRedirectTeamPitcherFWAR] = React.useState(0.0);


    React.useEffect(() => {
        if (props.teams.length !== 0) {
            setRows(
                Object.entries(props.teams).map(([key, value], index) =>
                    createData(
                        value['teamName'],
                        value['players'],
                        value['hitters'],
                        value['pitchers'],
                        value['hitterFWAR'].toFixed(1),
                        value['pitcherFWAR'].toFixed(1),
                        value['teamFWAR'].toFixed(1),
                        index
                    )
                )
            );
        } else {
            setRows([createData('Failed to Load.  Please try again later.', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)]);
        }
    }, [props.teams]);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'desc';
        setOrder(isAsc ? 'asc' : 'desc');
        setOrderBy(property);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        setSelected(newSelected);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    return (
        <div className={classes.root}>
            <Navbar />
            {redirect ? <Redirect to={{ pathname:'/teams/:team', state: { team: {redirectTeamName}, players: {redirectTeamPlayers}, hitters: {redirectTeamHitters}, pitchers: {redirectTeamPitchers}, hitterFWAR: {redirectTeamHitterFWAR}, pitcherFWAR: {redirectTeamPitcherFWAR} }}} /> : null}
            <Paper className={classes.paper}>
                <Links />
                <TableContainer>
                    <Table className={classes.table} aria-labelledby='tableTitle' size={'small'} aria-label='teams table'>
                        <TeamsHead classes={classes} order={order} orderBy={orderBy} onRequestSort={handleRequestSort} rowCount={rows.length} />
                        <TableBody>
                            {stableSort(rows, getSorting(order, orderBy)).map((row, index) => {
                                if (row.teamFWAR > 0) {
                                    const isItemSelected = isSelected(row.teamName);
                                    const labelId = `teams-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.teamName)}
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.teamName}
                                            selected={isItemSelected}
                                            className={classes.tableRow}
                                        >
                                            <TableCell
                                                component='th'
                                                id={labelId}
                                                scope='row'
                                                className={classes.tableRow}
                                                onClick={() => {
                                                    setRedirectTeamName(row.teamName);
                                                    setRedirectTeamPlayers(row.players);
                                                    setRedirectTeamHitters(row.hitters);
                                                    setRedirectTeamPitchers(row.pitchers);
                                                    setRedirectTeamHitterFWAR(row.hitterFWAR);
                                                    setRedirectTeamPitcherFWAR(row.pitcherFWAR);
                                                    setRedirect(!redirect);
                                                }}
                                                align='center'
                                            >
                                                {row.teamName}
                                            </TableCell>
                                            <TableCell align='center' className={classes.tableCell}>
                                                {row.teamFWAR}
                                            </TableCell>
                                            <TableCell align='center' className={classes.tableCell}>
                                                {row.players.length}
                                            </TableCell>
                                            <TableCell align='center' className={classes.tableCell}>
                                                {row.hitters.length}
                                            </TableCell>
                                            <TableCell align='center' className={classes.tableCell}>
                                                {row.pitchers.length}
                                            </TableCell>
                                            <TableCell align='center' className={classes.tableCell}>
                                                {row.hitterFWAR}
                                            </TableCell>
                                            <TableCell align='center' className={classes.tableCell}>
                                                {row.pitcherFWAR}
                                            </TableCell>
                                        </TableRow>
                                    );
                                } else {
                                    return false;
                                }
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Links />
            </Paper>
        </div>
    );
}
