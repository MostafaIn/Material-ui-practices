import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, makeStyles } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CreateDialog from '../exercises/Dialog'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = ({ skills, onExerciseCreate }) => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h3" className={classes.title}>
                        <Typography style={{ fontSize: '1rem', marginTop: '22px' }}>my skills within</Typography>
                        Material UI
                    </Typography>
                    <CreateDialog
                        skills={skills}
                        onCreate={onExerciseCreate}
                    />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
