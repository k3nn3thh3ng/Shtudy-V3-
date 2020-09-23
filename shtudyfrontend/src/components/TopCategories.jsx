import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Box, Typography} from '@material-ui/core';

import CategoriesCard from './CategoriesCard';

    // initialize state

    // initialize request for information and save it to that state

    // reduce & filter information 

const styles = (theme) => ({
    root: {
        paddingTop: theme.spacing(2),
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
    },
    title: {
        paddingBottom: theme.spacing(1)
    },
    questions: {
        display: 'flex',
    }
})

function TopCategories(props) {
    const { classes } = props
 
    return (
        <Box className={classes.root}>
            <Typography variant='h4' className={classes.title}>
                Categories
            </Typography>
            <Box className={classes.questions}> 
                <CategoriesCard image="https://i.udemycdn.com/home/top-categories/lohp-category-business.jpg" subject="English"/>
                <CategoriesCard image="https://i.udemycdn.com/home/top-categories/lohp-category-business.jpg" subject="Math"/>
                <CategoriesCard image="https://i.udemycdn.com/home/top-categories/lohp-category-personal-development.jpg" subject="Science"/>
                <CategoriesCard image="https://i.udemycdn.com/home/top-categories/lohp-category-personal-development.jpg" subject="Chinese"/>
            </Box>
            <Box className={classes.questions}> 
                <CategoriesCard image="https://i.udemycdn.com/home/top-categories/lohp-category-photography.jpg" subject="Geography"/>
                <CategoriesCard image="https://i.udemycdn.com/home/top-categories/lohp-category-photography.jpg" subject="History"/>
                <CategoriesCard image="https://i.udemycdn.com/home/top-categories/lohp-category-development.jpg" subject="Chemistry"/>
                <CategoriesCard image="https://i.udemycdn.com/home/top-categories/lohp-category-development.jpg" subject="Physics"/>
            </Box>
        </Box>
    )
}

TopCategories.propTypes = {
    classes: PropTypes.object.isRequired
  };
 
export default withStyles(styles)(TopCategories)