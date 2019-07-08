import React, { Fragment } from 'react'
import { Grid, Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import { Delete, Edit } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import Form from './Form'

const styles = theme => ({
    paper: {
        padding: theme.spacing(1,2),
        overflowY: 'auto',
        [theme.breakpoints.up('sm')]: {
            margin: 0,
            height: 'calc(100% - 10px)'
        },
        [theme.breakpoints.down('xs')]: {
            height: '100%'
        }
    },
    '@global': {
        'html,  body, #root': {
            height: '100%'
        }
    },
    container: {
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px -48px)'
        },
        [theme.breakpoints.up('xs')]: {
            height: 'calc(100% - 54px -48px)'
        }
    },
    item: {
        [theme.breakpoints.down('xs')]: {
            height: '50%'
        }
    }
})
// function ListItemLink(props) {
//     return <ListItem button component="a" {...props} />;
// }

const Index = ({
    classes,
    skills,
    exercises,
    exercise,
    category,
    onSelect,
    editMode,
    exercise: {
        id,
        title = 'Welcome!',
        description = 'Please select an exercise from the list on the left side.'
    },
    onDelete,
    onSelectEdit,
    onEdit
}) => {
    return (<div>
        <Grid container className={classes.container}>
            <Grid item className={classes.item} xs={12} sm={6}>
                <Paper className={classes.paper}>
                    {exercises.map(([group, exercises]) => !category || category === group
                        ? <Fragment key={group}>
                            <Typography variant="h5" color="secondary" style={{ fontFamily: 'impact' }}>
                                {group}
                            </Typography>
                            <List component="ul">
                                {exercises.map(({ id, title }) => <ListItem button key={id} onClick={() => onSelect(id)}>
                                    <ListItemText primary={title} />
                                    <ListItemSecondaryAction>
                                        <IconButton onClick={() => onSelectEdit(id)}>
                                            <Edit />
                                        </IconButton>
                                        <IconButton color="primary" onClick={() => onDelete(id)}>
                                            <Delete />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>)}
                            </List>
                        </Fragment>
                        : null)}
                </Paper>
            </Grid>
            <Grid item className={classes.item} xs={12} sm={6}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" color="secondary" gutterBottom>
                        {title}
                    </Typography>
                    {editMode
                        ? <Form
                            key={id}
                            exercise={exercise}
                            skills={skills}
                            onSubmit={onEdit}
                        />
                        :
                        <Typography>
                            {description}
                        </Typography>
                    }

                </Paper>
            </Grid>
        </Grid>

    </div>);
}

export default withStyles(styles)(Index)