import React, { Component } from 'react'
import { FormControl, InputLabel, MenuItem, Select, TextField, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    formControl: {
        width: 300
    }
})

class Form extends Component {
    state = this.getInitState()
    getInitState() {
        const { exercise } = this.props
        return exercise ? exercise : {
            title: '',
            description: '',
            skills: ''
        }
    }
    componentWillReceiveProps({ exercise }) {
        this.setState({
            ...exercise
        })
    }
    handleChange = name => ({ target: { value } }) => {
        this.setState({
            [name]: value
        })
    }
    handleSubmit = () => {
        this.props.onSubmit({
            id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
            ...this.state
        })
        this.setState(this.getInitState())
    }
    render() {
        const { classes, skills: categories, exercise } = this.props,
            { title, description, skills } = this.state
        return (
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
                <br />
                <Button color="primary" onClick={this.handleSubmit}>
                    {exercise ? 'Edit' : 'Create'}
                </Button>
            </form>
        )
    }
}
export default withStyles(styles)(Form)