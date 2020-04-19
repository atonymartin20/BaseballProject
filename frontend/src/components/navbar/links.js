import React from 'react';

// @material-ui/core components
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from 'react-router-dom';

const styles = theme => ({
    drawerList: {
        display: 'flex',
        padding: '0px',
        margin: '0px',
        listStyle: 'none',
        width: '100%',
        flexWrap: 'wrap',
    },
    drawerListItem: {
        float: "left",
        color: "inherit",
        position: "relative",
        display: "flex",
        alignItems: 'center',
        margin: "0",
        padding: "0",
        width: 'auto',
    },
    drawerNavLink: {
        color: "inherit",
        position: "relative",
        padding: "0.9375rem",
        fontWeight: "400",
        fontSize: "1.8rem",
        lineHeight: "20px",
        textDecoration: "none",
        display: "inline-flex",
        height: 50,
        textAlign: "center",
        textTransform: "none",
        "&:hover,&:focus": {
            backgroundColor: "#AA1649",
            color: "white"
        },
        "& .fab,& .far,& .fal,& .fas,& .material-icons": {
            position: "relative",
            top: "2px",
            marginTop: "-4px",
            marginRight: "4px",
            marginBottom: "0px",
            fontSize: "1.25rem"
        },
        "& svg": {
            marginRight: "3px",
            width: "20px",
            height: "20px"
        }
    },
    linksBar: {
        display: "flex",
        width: "100%",
    },
    linkStyling: {
        textDecoration: 'none',
        width: '100%',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
    },
})

class Navbar extends React.Component {
    state = {
        drawerOpen: false
    };

    handleDrawerToggle = () => {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        })
    }

    handleClose = () => {
        this.setState({
            drawerOpen: false
        })
    }

    render() {
        const { classes } = this.props;

        const linksDrawer = (
            <div>
                <List className={classes.drawerList}>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/catchers' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                C
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/firstBase' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                1B
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/secondBase' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                2B
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/shortStop' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                SS
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/thirdBase' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                3B
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/middleInfield' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                MI
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/cornerInfield' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                CI
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/outfield' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                OF
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/designatedHitter' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                DH
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/hitters' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                Hitters
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/startingPitcher' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                SP
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/reliefPitcher' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                RP
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        {/* <Link to='/pitchers' className={classes.linkStyling}> */}
                            <Button
                                className={classes.drawerNavLink}
                                disabled
                            >
                                Pitchers
                            </Button>
                        {/* </Link> */}
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        {/* <Link to='/overall' className={classes.linkStyling}> */}
                        <Button
                            className={classes.drawerNavLink}
                            disabled
                        >
                            Overall
                            </Button>
                        {/* </Link> */}
                    </ListItem>
                </List>
            </div>
        )

        return (
            <div>
                <div className={classes.linksBar}>
                    {linksDrawer}
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Navbar);