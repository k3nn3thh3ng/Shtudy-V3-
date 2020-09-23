import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import CategoryBtn from './CategoryBtn'

const styles = (theme) => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
  }
});

function LevelToggle(props) {
  const { classes } = props;
  return (
    <Box className={classes.root} borderBottom={1}>
        <CategoryBtn level="Primary 1" subject="all" />
        <CategoryBtn level="Primary 2" subject="all" />
        <CategoryBtn level="Primary 3" subject="all" />
    </Box>
  )
}

LevelToggle.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LevelToggle);


