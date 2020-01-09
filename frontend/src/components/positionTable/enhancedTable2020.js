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

function createData(name, PAs, AVG, OBP, HR, runs, RBIs, SBs, FWAR) {
    return { name, PAs, AVG, OBP, HR, runs, RBIs, SBs, FWAR };
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
    return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headCells = [
    { id: 'name', numeric: false, label: 'Name', info: 'Name' },
    { id: 'PAs', numeric: true, label: 'PAs', info: 'Plate Appearances' },
    { id: 'AVG', numeric: true, label: 'AVG', info: 'Batting Average' },
    { id: 'OBP', numeric: true, label: 'OBP', info: 'On Base Percentage' },
    { id: 'HR', numeric: true, label: 'HR', info: 'Home Runs' },
    { id: 'runs', numeric: true, label: 'Runs', info: 'Runs' },
    { id: 'RBIs', numeric: true, label: 'RBIs', info: 'Runs Batted In' },
    { id: 'SBs', numeric: true, label: 'SBs', info: 'Stolen Bases' },
    { id: 'FWAR', numeric: true, label: 'FWAR', info: 'Fangraphs Wins Above Replacement' },
];

function EnhancedTableHead(props) {
    const { classes, order, orderBy, onRequestSort } = props;

    const createSortHandler = property => event => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map(headCell => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        sortDirection={orderBy === headCell.id ? order : false}
                        className={classes.tableCell}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
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

const useStyles = makeStyles(theme => ({
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
        '&:nth-of-type(even)':{
            backgroundColor: '#e0e3df',
        }
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
    const [orderBy, setOrderBy] = React.useState('FWAR');
    const [selected, setSelected] = React.useState([]);
    const [rows, setRows] = React.useState([]);

    React.useEffect(() => {
        if (props.players.length !== 0) {
            setRows(props.players.map((player, index) => (
                createData(`${player.firstName} ${player.lastName}`, player.SteamerPAProjection, player.SteamerAVGProjection, player.SteamerOBPProjection, player.SteamerHRProjection, player.SteamerRunsProjection, player.SteamerRBIProjection, player.SteamerSBProjection, player.SteamerFWARProjection)
            )))
        }
        else {
            setRows([
                createData('Cupcake', 305, 3.7, 67, 4.3, 7, 7, 7, 7),
                createData('Donut', 452, 25.0, 51, 4.9, 10, 10, 10, 10),
                createData('Eclair', 262, 16.0, 24, 6.0, 5, 5, 5, 5),
                createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 4, 4, 4, 4),
                createData('Gingerbread', 356, 16.0, 49, 3.9, 3, 3, 3, 3),
                createData('Honeycomb', 408, 3.2, 87, 6.5, 6.5, 6.5, 6.5, 6.5),
                createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.5, 4.5, 4.5, 4.5),
                createData('Jelly Bean', 375, 0.0, 94, 0.0, 7, 7, 7, 7),
                createData('KitKat', 518, 26.0, 65, 7.0, 8, 8, 8, 8),
                createData('Lollipop', 392, 0.2, 98, 0.0, 9, 9, 9, 9),
                createData('Marshmallow', 318, 0, 81, 2.0, 11, 11, 11, 12),
                createData('Nougat', 360, 19.0, 9, 37.0, 33, 33, 33, 33),
                createData('Oreo', 437, 18.0, 63, 4.0, 2, 2, 2, 2),
            ])
        }
    }, [props.players])

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
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
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const isSelected = name => selected.indexOf(name) !== -1;

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={'small'}
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            classes={classes}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows, getSorting(order, orderBy))
                                .map((row, index) => {
                                    if (row.PAs > 0) {
                                    const isItemSelected = isSelected(row.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={event => handleClick(event, row.name)}
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.name}
                                            selected={isItemSelected}
                                            className={classes.tableRow}
                                        >
                                            <TableCell component="th" id={labelId} scope="row" className={classes.tableRow}>
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right" className={classes.tableCell}>{row.PAs}</TableCell>
                                            <TableCell align="right" className={classes.tableCell}>{row.AVG}</TableCell>
                                            <TableCell align="right" className={classes.tableCell}>{row.OBP}</TableCell>
                                            <TableCell align="right" className={classes.tableCell}>{row.HR}</TableCell>
                                            <TableCell align="right" className={classes.tableCell}>{row.runs}</TableCell>
                                            <TableCell align="right" className={classes.tableCell}>{row.RBIs}</TableCell>
                                            <TableCell align="right" className={classes.tableCell}>{row.SBs}</TableCell>
                                            <TableCell align="right" className={classes.tableCell}>{row.FWAR}</TableCell>
                                        </TableRow>
                                    );
                                }
                                else {
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