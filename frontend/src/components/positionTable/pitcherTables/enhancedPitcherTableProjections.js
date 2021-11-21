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
import PlayerCard from '../../players/playerCard.js';

function createData(name, primaryPosition, otherPositions, Games, InningsPitched, QualityStarts, RawKs, ERA, FIP, WHIP, Saves, FWAR, PTotal, id, index) {
    return { name, primaryPosition, otherPositions, Games, InningsPitched, QualityStarts, RawKs, ERA, FIP, WHIP, Saves, FWAR, PTotal, id, index };
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
    { id: 'name', numeric: false, label: 'Name', info: 'Name' },
    { id: 'primaryPosition', numeric: false, label: 'Primary Pos.', info: 'Primary Position' },
    { id: 'otherPositions', numeric: false, label: 'Other Pos.', info: 'Other Positions' },
    { id: 'PTotal', numeric: true, label: 'PTotal', info: 'PROF Fantasy Based Statistic Using All Pitching Stats' },
    { id: 'Games', numeric: true, label: 'Games', info: 'Games' },
    { id: 'InningsPitched', numeric: true, label: 'IP', info: 'Innings Pitched' },
    { id: 'QualityStarts', numeric: true, label: 'QS', info: 'Quality Starts' },
    { id: 'RawKs', numeric: true, label: 'Ks', info: 'Raw K Totals' },
    { id: 'ERA', numeric: true, label: 'ERA', info: 'Earned Run Average' },
    { id: 'FIP', numeric: true, label: 'FIP', info: 'Fielding Independent Pitching' },
    { id: 'WHIP', numeric: true, label: 'WHIP', info: 'Walks + Hits/ Innings Pitched' },
    { id: 'Saves', numeric: true, label: 'Saves', info: 'Saves' },
    { id: 'FWAR', numeric: true, label: 'FWAR', info: 'Fangraphs Wins Above Replacement' },
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

EnhancedTableHead.propTypes = {
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

export default function EnhancedTable(props) {
    const classes = useStyles();
    const [order, setOrder] = React.useState('desc');
    const [orderBy, setOrderBy] = React.useState('PTotal');
    const [selected, setSelected] = React.useState([]);
    const [grabId, setGrabId] = React.useState();
    const [playerCard, setPlayerCard] = React.useState(false);
    const [rows, setRows] = React.useState([]);
    
    React.useEffect(() => {
        if (props.players.length !== 0) {
            setRows(
                props.players.map((player, index) =>
                    createData(
                        `${player.firstName} ${player.lastName}`,
                        player.primaryPosition,
                        player.otherPositions,
                        player.SteamerGamesProjection,
                        Number(player.SteamerInningsPitchedProjection),
                        Number(player.SteamerQSProjection),
                        player.SteamerRawKsProjection,
                        Number(player.SteamerERAProjection),
                        Number(player.SteamerFIPProjection),
                        Number(player.SteamerWHIPProjection),
                        player.SteamerSavesProjection,
                        Number(player.PitcherSteamerFWARProjection),
                        (10 * Number(player.SteamerQSProjection) +
                        1.2 * player.SteamerRawKsProjection +
                        9 * player.SteamerSavesProjection +
                        4 * Number(player.SteamerInningsPitchedProjection) * Number(1.32 - player.SteamerWHIPProjection) +
                        Number(player.SteamerInningsPitchedProjection) * Number(4.47 - player.SteamerERAProjection)) / 8,
                        player.id,
                        index
                    )
                )
            );
        } else {
            setRows([createData('Failed to Load.  Please try again later.', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)]);
        }
    }, [props.players]);

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
            {playerCard ? <PlayerCard close={() => setPlayerCard(!playerCard)} id={grabId} /> : null}
            <Paper className={classes.paper}>
                <TableContainer>
                    <Table className={classes.table} aria-labelledby='tableTitle' size={'small'} aria-label='enhanced table'>
                        <EnhancedTableHead classes={classes} order={order} orderBy={orderBy} onRequestSort={handleRequestSort} rowCount={rows.length} />
                        <TableBody>
                            {stableSort(rows, getSorting(order, orderBy)).map((row, index) => {
                                if (row.InningsPitched >= 40) {
                                    const isItemSelected = isSelected(row.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.name)}
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.name}
                                            selected={isItemSelected}
                                            className={classes.tableRow}
                                        >
                                            <TableCell
                                                component='th'
                                                id={labelId}
                                                scope='row'
                                                className={classes.tableRow}
                                                onClick={() => {
                                                    setPlayerCard(!playerCard);
                                                    setGrabId(row.id);
                                                }}
                                            >
                                                {row.name}
                                            </TableCell>
                                            <TableCell align='center' className={classes.tableCell}>
                                                {row.primaryPosition}
                                            </TableCell>
                                            <TableCell align='center' className={classes.tableCell}>
                                                {row.otherPositions}
                                            </TableCell>
                                            <TableCell align='right' className={classes.tableCell}>
                                                {row.PTotal.toFixed(1)}
                                            </TableCell>
                                            <TableCell align='right' className={classes.tableCell}>
                                                {row.Games}
                                            </TableCell>
                                            <TableCell align='right' className={classes.tableCell}>
                                                {row.InningsPitched.toFixed(0)}
                                            </TableCell>
                                            <TableCell align='right' className={classes.tableCell}>
                                                {row.QualityStarts.toFixed(1)}
                                            </TableCell>
                                            <TableCell align='right' className={classes.tableCell}>
                                                {row.RawKs}
                                            </TableCell>
                                            <TableCell align='right' className={classes.tableCell}>
                                                {row.ERA.toFixed(2)}
                                            </TableCell>
                                            <TableCell align='right' className={classes.tableCell}>
                                                {row.FIP.toFixed(2)}
                                            </TableCell>
                                            <TableCell align='right' className={classes.tableCell}>
                                                {row.WHIP.toFixed(2)}
                                            </TableCell>
                                            <TableCell align='right' className={classes.tableCell}>
                                                {row.Saves}
                                            </TableCell>
                                            <TableCell align='right' className={classes.tableCell}>
                                                {row.FWAR.toFixed(1)}
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
