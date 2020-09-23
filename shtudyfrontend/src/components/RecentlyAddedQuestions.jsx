import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Box, Typography} from '@material-ui/core';

import QuestionsCard from './QuestionsCard';

   // initialize state

    // initialize request for information and save it to that state

    // render questions with the information

const styles = (theme) => ({
    root: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
    },
    questions: {
        display: 'flex',
    }
})

function RecentlyAddedQuestions(props) {
    const { classes } = props
 
    return (
        <Box className={classes.root}>
            <Typography variant='h4'>
                RECENTLY ADDED QUESTIONS
            </Typography>
            <Box className={classes.questions}> 
                <QuestionsCard />
                <QuestionsCard />
                <QuestionsCard />
            </Box>
        </Box>
    )
}

RecentlyAddedQuestions.propTypes = {
    classes: PropTypes.object.isRequired
  };
 
export default withStyles(styles)(RecentlyAddedQuestions)