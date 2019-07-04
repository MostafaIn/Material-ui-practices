import React, { Fragment } from 'react'
import { Grid, Paper, Typography, List, ListItem, ListItemText } from "@material-ui/core";


const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500,
        overflowY: 'auto'
    }
}
// function ListItemLink(props) {
//     return <ListItem button component="a" {...props} />;
// }

const Index = ({
    exercises,
    category,
    onSelect,
    exercise: {
        id,
        title = 'Welcome!',
        description = 'Please select an exercise from the list on the left side.'
    }
}) => {
    return (
        <div>
            <Grid container >
                <Grid item sm>
                    <Paper style={styles.Paper}>
                        {exercises.map(([group, exercises]) =>
                            !category || category === group
                                ? <Fragment key={group} >
                                    <Typography
                                        variant="h5"
                                        style={{ fontFamily: 'impact' }}>
                                        {group}
                                    </Typography>
                                    <List component="ul">
                                        {exercises.map(({ id, title }) =>
                                            <ListItem button key={id} onClick={() => onSelect(id)}>
                                                <ListItemText primary={title} />
                                            </ListItem>
                                        )}

                                        {/* <ListItemLink href="#simple-list">
                                        <ListItemText primary="Spam" />
                                    </ListItemLink> */}
                                    </List>
                                </Fragment>
                                : null
                        )}
                    </Paper>
                </Grid>
                <Grid item sm>
                    <Paper style={styles.Paper}>
                        <Typography variant="h4">
                            {title}
                        </Typography>
                        <Typography style={{ marginTop: 20 }}>
                            {description}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

        </div>
    )
}

export default Index