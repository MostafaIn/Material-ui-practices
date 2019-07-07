import React, { Fragment } from 'react'
import { Grid, Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import { Delete, Edit } from '@material-ui/icons'
import Form from './Form'

const styles = {
    Paper: {
        padding: 20,
        marginTop: 5,
        marginBottom: 10,
        height: 500,
        overflowY: 'auto'
    }
}
// function ListItemLink(props) {
//     return <ListItem button component="a" {...props} />;
// }

const Index = ({
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
        <Grid container>
            <Grid item xs={12} sm={6}>
                <Paper style={styles.Paper}>
                    {exercises.map(([group, exercises]) => !category || category === group
                        ? <Fragment key={group}>
                            <Typography variant="h5" style={{ fontFamily: 'impact' }}>
                                {group}
                            </Typography>
                            <List component="ul">
                                {exercises.map(({ id, title }) => <ListItem button key={id} onClick={() => onSelect(id)}>
                                    <ListItemText primary={title} />
                                    <ListItemSecondaryAction>
                                        <IconButton onClick={() => onSelectEdit(id)}>
                                            <Edit />
                                        </IconButton>
                                        <IconButton onClick={() => onDelete(id)}>
                                            <Delete />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>)}
                            </List>
                        </Fragment>
                        : null)}
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper style={styles.Paper}>
                    {editMode
                        ? <Form
                            exercise={exercise}
                            skills={skills}
                            onSubmit={onEdit}
                        />
                        : <Fragment>
                            <Typography variant="h4">
                                {title}
                            </Typography>
                            <Typography style={{ marginTop: 20 }}>
                                {description}
                            </Typography>
                        </Fragment>}

                </Paper>
            </Grid>
        </Grid>

    </div>);
}

export default Index