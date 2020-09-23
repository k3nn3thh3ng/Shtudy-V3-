import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import KeyFact from './KeyFact';

const styles = (theme) => ({
    root: {
        margin: '2rem -8px 0px -8px',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        opacity: 0.5
    },
    grow: {
        flexGrow: 0.1
    }
});

function ShtudyInforgraphics(props) {
  const { classes } = props;
  return (
    <Box className={classes.root} borderTop={1} borderBottom={1}>
        <Box className={classes.grow} />
            <KeyFact title='Infograph Title' text='Ex 1'/>
            <KeyFact title='Infograph Title' text='Ex 2'/>
            <KeyFact title='Infograph Title' text='Ex 3'/>
            <KeyFact title='Infograph Title' text='Ex 4'/>
        <Box className={classes.grow} />
    </Box>
  )
}

ShtudyInforgraphics.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ShtudyInforgraphics);


