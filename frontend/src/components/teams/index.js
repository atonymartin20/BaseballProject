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

function createData(teamName, players, teamFWAR) {
    return { teamName, players, teamFWAR };
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
                    <TableCell key={headCell.id} align={headCell.numeric ? 'right' : 'left'} sortDirection={orderBy === headCell.id ? order : false} className={classes.tableCell}>
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

export default function Teams(props) {
    const classes = useStyles();
    const [order, setOrder] = React.useState('desc');
    const [orderBy, setOrderBy] = React.useState('POBP');
    const [selected, setSelected] = React.useState([]);
    const [redirect, setRedirect] = React.useState(false);
    const [rows, setRows] = React.useState([]);

    React.useEffect(() => {
        if (this.context.state.teams.length !== 0) {
            setRows(
                this.context.state.teams.map((team, index) =>
                    createData(
                        team.teamName,
                        team.teamFWAR,
                    )
                )
            );
        } else {
            setRows([createData('Failed to Load.  Please try again later.', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)]);
        }
    }, [this.context.state.teams]);

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
            {redirect ? <Redirect to='/teams/:team' team={team} /> : null}
            <Paper className={classes.paper}>
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
                                                    setRedirect(!redirect);
                                                }}
                                            >
                                                {row.teamName}
                                            </TableCell>
                                            <TableCell align='right' className={classes.tableCell}>
                                                {row.teamFWAR.toFixed(1)}
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
