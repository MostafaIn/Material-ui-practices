import React, { Component } from 'react'
import { FormControl, InputLabel, MenuItem, Select, TextField, Button } from '@material-ui/core'
// import { withStyles } from '@material-ui/styles';

// const styles = theme => ({
//     formControl: {
//         width: 250
//     }
// })

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
    // static getDerivedStateFromProps({ exercise }) {
    //     // this.setState({
    //     //     ...exercise
    //     // })
    //     return exercise || null
    // }
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
        // this.setState(this.getInitState())
    }
    render() {
        const { skills: categories, exercise } = this.props,
            { title, description, skills } = this.state
        return (
            <form>
                <TextField
                    label="Title"
                    value={title}
                    onChange={this.handleChange('title')}
                    margin="normal"
                    fullWidth
                />
                <br />
                <FormControl fullWidth>
                    <InputLabel htmlFor="skills">Skills</InputLabel>
                    <Select
                        fullWidth
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
                    fullWidth
                />
                <br />
                <Button color="primary" onClick={this.handleSubmit} variant="contained" disabled={!title || !skills || !description}>
                    {exercise ? 'Edit' : 'Create'}
                </Button>
            </form>
        )
    }
}
export default Form
