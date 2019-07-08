import React, { Component } from 'react'
import { Dialog, DialogContent, DialogContentText, DialogTitle, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import Form from './Form'




class Create extends Component {
    state = {
        open: false
    }
    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }
    handleFormSubmit = exercise => {
        this.handleToggle()
        this.props.onCreate(exercise)
    }
    render() {
        const { open } = this.state,
            { skills } = this.props


        return (
            <div>
                <Fab onClick={this.handleToggle} aria-label="Add" color="secondary" >
                    <AddIcon />
                </Fab>
                <Dialog open={open} onClose={this.handleToggle} fullWidth maxWidth='sm'>
                    <DialogTitle id="form-dialog-title">Create a New Skills</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please fill out the form below.
                    </DialogContentText>
                        <Form
                            skills={skills}
                            onSubmit={this.handleFormSubmit}
                        />
                    </DialogContent>
                </Dialog>
                <br />
            </div>
        )
    }
}

export default Create


