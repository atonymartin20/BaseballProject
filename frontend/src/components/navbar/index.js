import React from 'react';

// @material-ui/core components
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Toolbar from "@material-ui/core/Toolbar";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from 'react-router-dom';

// @material-ui/icons
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const styles = theme => ({
    appBar: {
        display: "flex",
        color: "white",
        width: "100%",
        boxShadow: "none",
        alignItems: "center",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
        position: "fixed",
        height: 65,
        top: "0",
        padding: "0px 4%",
        fontSize: "2.5rem",
        backgroundColor: "#000080",
        zIndex: 10000,
        [theme.breakpoints.down(710)]: {
            padding: '0px 2%'
        }
    },
    closeButton: {
        padding: 15,
        paddingLeft: 35,
    },
    closeIconStyling: {
        width: '25px',
        height: '25px',
        cursor: "pointer",
    },
    closeIconToolbar: {
        height: 65,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    drawerList: {
        display: 'flex',
        padding: '0px',
        margin: '0px',
        listStyle: 'none',
        flexDirection: "column",
        paddingBottom: '60px',
    },
    drawerListItem: {
        float: "left",
        color: "inherit",
        position: "relative",
        display: "flex",
        alignItems: 'center',
        margin: "0",
        padding: "0",
        width: '100%',
        borderBottom: '1px solid #C2C2C2',
        borderRight: '1px solid #C2C2C2',
        backgroundColor: '#DDDDDD',
        "& ul": {
            maxHeight: "400px",
            overflow: "scroll"
        }
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
        width: "100%",
        height: 60,
        paddingLeft: 15,
        textAlign: "left",
        textTransform: "none",
        "& > span:first-child": {
            justifyContent: "flex-start"
        },
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
    drawerPaper: {
        marginTop: 65,
        width: '100%',
        backgroundColor: '#E2E2E2',
        color: 'black',
    },
    home: {
        textDecoration: 'none',
        color: 'white',
        margin: '0 auto'
    },
    linkStyling: {
        textDecoration: 'none',
        width: '100%',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
    },
    logo: {
        fontSize: "3.0rem",
        [theme.breakpoints.down(500)]: {
            fontSize: "2.5rem",
        },
        [theme.breakpoints.down(400)]: {
            fontSize: "2.0rem",
        },
    },
    menuIconStyling: {
        width: '25px',
        height: '25px',
        cursor: "pointer",
    },
    show710: {
        display: 'flex',
        left: '50px',
        [theme.breakpoints.up(710)]: {
            display: 'none'
        }
    },
    toolbar: {
        height: 65,
        display: "flex",
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
    }
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

        const drawer = (
            <div>
                <div className={classes.closeIconToolbar}>
                    {this.state.drawerOpen ? (
                        <div className={classes.closeButton} onClick={this.handleClose}>
                            <CloseIcon className={classes.closeIconStyling} />
                        </div>
                    ) : null}
                </div>
                <Divider />
                <List className={classes.drawerList}>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                Home
                        </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/glossary' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                Glossary
                        </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/catchers' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                Catchers
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/firstBase' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                First Base
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/secondBase' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                Second Base
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/shortStop' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                Shortstop
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/thirdBase' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                Third Base
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/middleInfield' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                Middle Infield
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/cornerInfield' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                Corner Infield
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/outfield' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                Outfield
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/designatedHitter' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                Designated Hitter
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
                                Starting Pitcher
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/reliefPitcher' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                Relief Pitcher
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/pitchers' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                Pitchers
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/overall' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                Overall
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/teams' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                Teams
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/standings' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                Standings
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </div>
        )

        return (
            <div>
                <AppBar className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <Hidden implementation="css" className={classes.show710}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.handleDrawerToggle}
                            >
                                <MenuIcon className={classes.menuIconStyling} />
                            </IconButton>
                        </Hidden>
                        <Link to='/' className={classes.home}><h1 className={classes.logo}>Baseball Project</h1></Link>
                    </Toolbar>
                </AppBar>

                <nav>
                    <Hidden smUp implementation="css">
                        <Drawer
                            variant="temporary"
                            anchor={'left'}
                            open={this.state.drawerOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
            </div>
        )
    }
}

export default withStyles(styles)(Navbar);