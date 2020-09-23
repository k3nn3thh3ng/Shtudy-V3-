import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar as MUIAppBar } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    border: 0,
    borderRadius: 3,
    display: 'block'
  }
});

function Bar(props) {
  const { classes } = props;
  return (
    <MUIAppBar className={classes.root} elevation={3} color='inherit' postition='fixed' {...props}/>
  )
}

Bar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Bar);


