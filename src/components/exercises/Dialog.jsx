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
                <Fab onClick={this.handleToggle} style={{ backgroundColor: '#ffb502' }}>
                    <AddIcon />
                </Fab>
                <Dialog open={open} onClose={this.handleToggle}>
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
            </div>
        )
    }
}

export default Create


