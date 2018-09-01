import React, { Component } from 'react';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
        height: "100%"
    }
};

class Layout extends Component {
    constructor() {
        super();
        this.state = {
            sidebarOpen: false
        }
    }

    toggleSidebar = () => {
        this.setState({
            sidebarOpen: !this.state.sidebarOpen
        })
    }


    /**
     * Returns the JSX-element in specified prop name if it is present.
     * If not, it returns a default text
     * @param name name of prop
     * @param classes material-ui classes
     */
    returnPropsOrDefaultMessage = (name, classes) => {
        if (this.props[name]) {
            return this.props[name];
        } else {
            return <Typography
                variant="title"
                className={classes.flex}>
                Default {name} content
            </Typography>
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar
                    position="static">
                    <ToolBar>
                        <IconButton
                            onClick={this.toggleSidebar}
                            className={classes.menuButton}>
                            <MenuIcon />
                        </IconButton>
                        <div className="Top-Content">
                            {this.returnPropsOrDefaultMessage("top", classes)}
                        </div>
                    </ToolBar>
                </AppBar>
                <Drawer
                    anchor="left"
                    open={this.state.sidebarOpen}
                    onClose={this.toggleSidebar}>
                    {this.returnPropsOrDefaultMessage("menu", classes)}
                </Drawer>
                <div>
                    {this.returnPropsOrDefaultMessage("main", classes)}
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(Layout); 