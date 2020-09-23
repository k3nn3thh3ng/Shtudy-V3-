import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core'
import Bar from './Bar';
import ToolBar from './ToolBar'


const styles = (theme) => ({
  root: {
    height: '50px',
  }
});

function AppBar(props) {
  const { classes } = props;
  return (
    <Box className={classes.root}>
      <Bar>
        <ToolBar />
      </Bar>
    </Box>
  )
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppBar);


