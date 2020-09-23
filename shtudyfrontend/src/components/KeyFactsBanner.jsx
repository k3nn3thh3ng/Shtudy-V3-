import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import KeyFact from './KeyFact';


const styles = (theme) => ({
  root: {
    margin: '0px -8px 0px -8px',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    opacity: 0.5
  },
  grow: {
    flexGrow: 0.1
  }
});

function KeyFactsBanner(props) {
  const { classes } = props;
  return (
      <Box className={classes.root} borderBottom={1}>
        <Box className={classes.grow} />
        <KeyFact title='Key Facts Title' text='Lorem Epsum'/>
        <KeyFact title='Key Facts Title' text='Lorem Epsum'/>
        <KeyFact title='Key Facts Title' text='Lorem Epsum'/>
        <Box className={classes.grow} />
      </Box>

  )
}

KeyFactsBanner.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(KeyFactsBanner);


