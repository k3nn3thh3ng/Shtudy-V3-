import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const styles = (theme) => ({
  root: {
      marginLeft: theme.spacing(1.5),
      marginRight: theme.spacing(1.5),
      paddingTop: theme.spacing(2),
      lineHeight: 0.2,
      color: theme.palette.info.main,
      justifyContent: 'center',
      alignItems: 'center',
      '&:hover': {
        color: theme.palette.info.dark,
        backgroundColor: theme.palette.common.white
      },
  }
});

function CategoryBtn(props) {
  const { classes } = props;
  return (
    <Button className={classes.root}>
        <p>{props.level}</p>
{/* must include the href tag after learn react-router */}
    </Button>
  )
}

CategoryBtn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CategoryBtn);


