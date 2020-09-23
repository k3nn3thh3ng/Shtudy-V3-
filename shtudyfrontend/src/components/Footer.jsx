import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';




const styles = (theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        bottom: 0
    }
});

function Footer(props) {
    const { classes } = props;
    return (
        <Box className={classes.root}>
            <Typography variant='body1'>
                Website Last Updated On 6 August
            </Typography>
        </Box>
    )
};

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);