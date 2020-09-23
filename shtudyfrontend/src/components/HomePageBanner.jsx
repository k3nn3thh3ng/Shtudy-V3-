import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Box, Typography, Paper, Hidden } from '@material-ui/core';

const styles = (theme) => ({
    root: {
        margin: '0px -8px 0px -8px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover'
    },
    text: {
        position: 'absolute',
        zIndex: '999',
        padding: theme.spacing(2),
        left: '10%',
        top: '20%',
        textAlign: 'center',
        width: '30%',
        maxWidth: '300px',
        height: 'auto'
    }
  });

const HomePageBanner = (props) => {      
    const { classes } = props
    return (
        <Box className={classes.root}>
            <img className={classes.image} src="https://img-b.udemycdn.com/notices/featured_banner/image_udlite/33c59d08-d61f-487f-8920-627a73502c48.jpg" width="1340" height="400" alt=""></img>
            <Hidden smDown>
                <Paper className={classes.text} elevation={8}>
                    <Typography variant="h3" gutterBottom>
                        Title
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam corrupti quaerat soluta.
                    </Typography>
                </Paper>
            </Hidden>
        </Box>
        
    )
}

HomePageBanner.propTypes = {
    classes: PropTypes.object.isRequired
  };

export default withStyles(styles)(HomePageBanner);


