import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Box} from '@material-ui/core';

import QuestionsCard from './QuestionsCard';

const styles = (theme) => ({
    root: {
        display: 'flex',
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
    }
})

function QuestionsSlider(props) {
    const { classes } = props
 
    return (
        <Box className={classes.root}>
            <QuestionsCard />
            <QuestionsCard />
            <QuestionsCard />
        </Box>
    )
}

QuestionsSlider.propTypes = {
    classes: PropTypes.object.isRequired
  };
 
export default withStyles(styles)(QuestionsSlider)