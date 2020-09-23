import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { 
    Card, 
    CardActionArea, 
    // CardActions, 
    // CardContent, 
    // CardMedia,
    Typography
} from '@material-ui/core';




const styles = (theme) => ({
    root: {
        marginRight: '1.6rem',
        marginBottom: '1.6rem',
    },
    media: {    
        maxWidth: '100%',
        height: 'auto'
    },
    text: {
        paddingTop: '0.5rem',
        paddingLeft: '1rem',
        height: '3rem',
        
    }
});

function CategoriesCard(props) {
    const { classes } = props;
    return (
        <Card className={classes.root}>
            <img className={classes.media}  src={props.image} height="350px" width="300px" alt={props.subject}/>


            <CardActionArea >
                <Typography variant='h5' className={classes.text}>
                    {props.subject}
                </Typography>
            </CardActionArea>
        </Card>
    )
};

CategoriesCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CategoriesCard);