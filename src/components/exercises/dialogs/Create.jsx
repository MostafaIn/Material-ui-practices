import React, { Component } from 'react'
import { Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle, Button, Fab, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/styles';


const styles = theme => ({
    formControl: {
        width: 300
    },
})

class Create extends Component {
    state = {
        open: false,
        exercise: {
            title: '',
            description: '',
            skills: ''
        }
    }
    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }
    handleChange = name => ({ target: { value } }) => {
        this.setState({
            exercise: {
                ...this.state.exercise,
                [name]: value
            }

        })
    }
    handleSubmit = () => {
        const { exercise } = this.state
        this.props.onCreate({
            id: exercise.title.toLocaleLowerCase().replace(/ /g, '-'),
            ...exercise
        })
        this.setState({
            open: false,
            exercise: {
                title: '',
                description: '',
                skills: ''
            }
        })
    }
    render() {
        const { open, exercise: { title, description, skills } } = this.state
        const { classes, skills: categories } = this.props

        return (
            <div>
                <Fab onClick={this.handleToggle} style={{ backgroundColor: '#ffb502' }}>
                    <AddIcon />
                </Fab>
                <Dialog open={open} onClose={this.handleToggle}>
                    <DialogTitle id="form-dialog-title">Create a New Skills</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please fill out the form below.
                    </DialogContentText>
                        <form className={classes.root}>
                            <TextField
                                label="Title"
                                value={title}
                                onChange={this.handleChange('title')}
                                margin="normal"
                                className={classes.formControl}
                            />
                            <br />
                            <FormControl>
                                <InputLabel htmlFor="skills">Skills</InputLabel>
                                <Select
                                    className={classes.formControl}
                                    value={skills}
                                    onChange={this.handleChange('skills')}
                                >
                                    {categories.map(category =>
                                        <MenuItem key={category} value={category}>
                                            {category}
                                        </MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                            <br />
                            <TextField
                                label="Description"
                                multiline
                                rows="4"
                                value={description}
                                onChange={this.handleChange('description')}
                                margin="normal"
                                className={classes.formControl}
                            />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={this.handleSubmit}>
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(Create)


