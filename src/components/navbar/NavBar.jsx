import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Logo from '../../palettes.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {

  const classes = useStyles();

  return (<div className={classes.root}>
  <AppBar position="static" style={{ background: '#4a148c' }}>
    <Toolbar>
      <div >
        <img alt='Logo' src={Logo} style={{height:'50px', marginRight:'24px'}}></img>
      </div>
      <Typography variant="h6" className={classes.title}>
        Palettes
      </Typography>
    </Toolbar>
  </AppBar>
</div>)
}

export default NavBar;