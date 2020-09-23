import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Box, Typography, Icon } from '@material-ui/core';
import { AddAPhotoTwoTone } from '@material-ui/icons';



const styles = (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
    padding: theme.spacing(1)
  },
  logo: {
      position: 'relative',
      top: '10%',
  },
});

function KeyFact(props) {
  const { classes } = props;
  return (
      <Box borderRadius="borderRadius" className={classes.root}>
            <Icon fontSize='large' className={classes.logo}>
                <AddAPhotoTwoTone />
            </Icon>
            <Typography variant="h6">
                {props.title}
                <br></br>
                {props.text}
            </Typography>
      </Box>

  )
}

KeyFact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(KeyFact);


