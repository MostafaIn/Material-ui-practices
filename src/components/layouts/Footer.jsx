import React from 'react';
import { withWidth,Tabs, Tab, AppBar } from '@material-ui/core';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
// });

const Footer = ({ skills, category, onSelect }) => {
  // const classes = useStyles();
  // const [value, setValue] = React.useState(0);

  // function handleChange(event, newValue) {
  //   setValue(newValue);
  // }
  const index = category ? skills.findIndex(group => group === category) + 1 : 0;
  const onIndexSelect = (e, index) =>
    onSelect(index === 0 ? '' : skills[index - 1])
  return (
    <AppBar position="static">
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="secondary"
        textColor="secondary"
        centered
      >
        <Tab label="All" />
        {skills.map(group =>
          <Tab key={group} label={group} />
        )}

      </Tabs>
    </AppBar>
  );
}

export default withWidth()(Footer)