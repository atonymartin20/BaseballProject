import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

const styles = theme => ({

})

class EnhancedTableHead extends React.Component {
    state = {
        headCells: [
            { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
            { id: 'PAs', numeric: true, disablePadding: false, label: 'PAs' },
            { id: 'AVG', numeric: true, disablePadding: false, label: 'AVG' },
            { id: 'OBP', numeric: true, disablePadding: false, label: 'OBP' },
            { id: 'HR', numeric: true, disablePadding: false, label: 'HR' },
        ],
    }
    render() {
        const { classes, order, orderBy, onRequestSort } = this.props;
        const createSortHandler = property => event => {
            onRequestSort(event, property);
        };
    
        return (
            <TableHead>
                <TableRow>
                    {this.state.headCells.map(headCell => (
                        <TableCell
                            key={headCell.id}
                            align={headCell.numeric ? 'right' : 'left'}
                            padding={headCell.disablePadding ? 'none' : 'default'}
                            sortDirection={orderBy === headCell.id ? order : false}
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
}

export default withStyles(styles)(EnhancedTableHead);