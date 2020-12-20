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

function createData(teamName, wins, losses, winPercentage, teamFWAR, hitterFWAR, pitcherFWAR, players, hitters, pitchers, index) {
    return { teamName, wins, losses, winPercentage, teamFWAR, hitterFWAR, pitcherFWAR, players, hitters, pitchers, index };
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
    { id: 'division', numeric: false, label: 'AL East', info: 'AL East' },
    { id: 'wins', numeric: true, label: 'Wins', info: 'Wins'},
    { id: 'losses', numberic: true, label: 'Losses', info: 'Losses'},
    { id: 'winPercentage', numeric: true, label: 'PCT', info: 'Win Percentage'},
    { id: 'teamFWAR', numeric: true, label: 'Team FWAR', info: 'Team FWAR'},
    { id: 'hitterFWAR', numberic: true, label: 'Hitter FWAR', info: 'Hitter FWAR'},
    { id: 'pitcherFWAR', numeric: true, label: 'Pitcher FWAR', info: 'Pitcher FWAR'}
];

function EnhancedTableHead(props) {
    const { classes, order, orderBy, onRequestSort } = props;
    
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell key={headCell.id} align={headCell.numeric ? 'center' : 'center'} sortDirection={orderBy === headCell.id ? order : false} className={classes.headerTableCell}>
                        <TableSortLabel classes={{root: classes.headerTableCell, active: classes.headerTableCell }} direction={orderBy === headCell.id ? order : 'asc'} onClick={createSortHandler(headCell.id)} >
                            {headCell.label}
                            {orderBy === headCell.id ? <span className={classes.visuallyHidden}>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</span> : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
    headerTableCell: {
        color: 'white !important',
        backgroundColor: '#000080',
        fontSize: '1.4rem',
        paddingLeft: '2.2%',
    },
    linkStyling: {
        textDecoration: 'none',
        color: 'black',
    },
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        width: '100%',
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

export default function ALEastStandingsTable(props) {
    const classes = useStyles();
    const [order, setOrder] = React.useState('desc');
    const [orderBy, setOrderBy] = React.useState('wins');
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
                        value.teamName,
                        Number((value.teamFWAR + 47.6)).toFixed(1),
                        Number((162- (value.teamFWAR + 47.6))).toFixed(1),
                        Number(((value.teamFWAR + 47.6) / 162)).toFixed(3),
                        value.teamFWAR.toFixed(1),
                        value.hitterFWAR.toFixed(1),
                        value.pitcherFWAR.toFixed(1),
                        value.players,
                        value.hitters,
                        value.pitchers,
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
            {redirect ? <Redirect to={{ pathname:'/teams/:team', state: { team: {redirectTeamName}, players: {redirectTeamPlayers}, hitters: {redirectTeamHitters}, pitchers: {redirectTeamPitchers}, hitterFWAR: {redirectTeamHitterFWAR}, pitcherFWAR: {redirectTeamPitcherFWAR} }}} /> : null}
            <Paper className={classes.paper}>
                <TableContainer>
                    <Table className={classes.table} aria-labelledby='tableTitle' size={'small'} aria-label='enhanced table'>
                        <EnhancedTableHead classes={classes} order={order} orderBy={orderBy} onRequestSort={handleRequestSort} rowCount={rows.length} />
                        <TableBody>
                            {stableSort(rows, getSorting(order, orderBy)).map((row, index) => {
                                if (row.teamFWAR > 0) {
                                    const isItemSelected = isSelected(row.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.name)}
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
                                                align='center'
                                                onClick={() => {
                                                    setRedirectTeamName(row.teamName);
                                                    setRedirectTeamPlayers(row.players);
                                                    setRedirectTeamHitters(row.hitters);
                                                    setRedirectTeamPitchers(row.pitchers);
                                                    setRedirectTeamHitterFWAR(row.hitterFWAR);
                                                    setRedirectTeamPitcherFWAR(row.pitcherFWAR);
                                                    setRedirect(!redirect);
                                                }}
                                            >
                                                {row.teamName}
                                            </TableCell>
                                            <TableCell align='center' className={classes.tableCell}>
                                                {row.wins}
                                            </TableCell>
                                            <TableCell align='center' className={classes.tableCell}>
                                                {row.losses}
                                            </TableCell>
                                            <TableCell align='center' className={classes.tableCell}>
                                                {row.winPercentage}
                                            </TableCell>
                                            <TableCell align='center' className={classes.tableCell}>
                                                {row.teamFWAR}
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
            </Paper>
        </div>
    );
}
