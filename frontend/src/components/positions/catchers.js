import React from 'react';
import Navbar from '../navbar';
import Links from '../navbar/links.js';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { AppContext } from '../context/appContext.js';
import Grid from '@material-ui/core/Grid';
import EnhancedTable from '../positionTable/enhandedTable.js';

const styles = theme => ({
    flipDataList: {
        display: 'flex',
        marginTop: 0,
    },
    flipDataListItem: {
        paddingLeft: 8,
        paddingRight: 8,
    },
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

    changeYear2017 = event => {
        event.preventDefault();
        this.setState({
            display2017: true,
            display2018: false,
            display2019: false,
            display2020: false
        })
    }

    changeYear2018 = event => {
        event.preventDefault();
        this.setState({
            display2017: false,
            display2018: true,
            display2019: false,
            display2020: false
        })
    }

    changeYear2019 = event => {
        event.preventDefault();
        this.setState({
            display2017: false,
            display2018: false,
            display2019: true,
            display2020: false
        })
    }

    changeYear2020 = event => {
        event.preventDefault();
        this.setState({
            display2017: false,
            display2018: false,
            display2019: false,
            display2020: true
        })
    }
    render() {
        const { classes } = this.props;
        const { display2017, display2018, display2019, display2020, } = this.state;

        const flipDataButton = {
            fontSize: '1.6rem',
            backgroundColor: '#9AA297'
        }

        const flipDataButtonSelected = {
            fontSize: '1.6rem',
            color: 'white',
            backgroundColor: '#000080',
        }

        const data = (
            <div>
                {display2017 ? (
                    <div>
                        <h1 className={classes.positionText}>2017 Data here</h1>
                    </div>) : null
                }

                {display2018 ? (
                    <div>
                        <h1 className={classes.positionText}>2018 Data here</h1>
                    </div>) : null
                }

                {display2019 ? (
                    <div>
                        <h1 className={classes.positionText}>2019 Data here</h1>
                        <EnhancedTable />
                    </div>) : null
                }

                {display2020 ? (
                    <div>
                        <h1 className={classes.positionText}>2020 Data here</h1>
                        {this.context.state.catchers.map((catcher, index) => (
                                <Grid key={catcher.id} item classes={{
                                    item: classes.item,
                                }}>
                                    {catcher.firstName}, {catcher.lastName}
                                </Grid>
                        ))}
                    </div>) : null
                }

            </div >
        )

        const flipData = (
            <div>
                <List className={classes.flipDataList}>
                    <ListItem className={classes.flipDataListItem} onClick={this.changeYear2017}>
                        <Button
                            style={display2017 ? flipDataButtonSelected : flipDataButton}>
                            2017
                            </Button>
                    </ListItem>
                    <ListItem className={classes.flipDataListItem} onClick={this.changeYear2018}>
                        <Button
                            style={display2018 ? flipDataButtonSelected : flipDataButton}>
                            2018
                            </Button>
                    </ListItem>
                    <ListItem className={classes.flipDataListItem} onClick={this.changeYear2019}>
                        <Button
                            style={display2019 ? flipDataButtonSelected : flipDataButton}>
                            2019
                            </Button>
                    </ListItem>
                    <ListItem className={classes.flipDataListItem} onClick={this.changeYear2020}>
                        <Button
                            style={display2020 ? flipDataButtonSelected : flipDataButton}>
                            2020
                            </Button>
                    </ListItem>
                </List>
            </div>
        )
        return (
            <div className={classes.positionDiv}>
                <Navbar />
                <div className={classes.positionSpacingDiv}>
                    <Links />
                    {flipData}

                    <h1 className={classes.positionText}>{data}</h1>
                    <Links />
                </div>
            </div>
        )
    }
}

Catchers.contextType = AppContext;

export default withStyles(styles)(Catchers);