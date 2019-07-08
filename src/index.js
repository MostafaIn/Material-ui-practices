import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { red, amber } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: red,
        secondary: {
            main: "#ffb502",
            light: amber[200],
            dark: amber[700]
        },
        type: 'dark'
    },
    spacing: {
        unit: 5
    }
})

console.log(theme)
ReactDOM.render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, document.getElementById('root'));
