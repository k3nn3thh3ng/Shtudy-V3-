import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { 
    Card, 
    CardActionArea, 
    CardActions, 
    CardContent, 
    // CardMedia,
    Button,
    Typography
} from '@material-ui/core';




const styles = (theme) => ({
  root: {
    margin: theme.spacing(2)
  }
});

function QuestionsCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.root}>

        <CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Question Title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque esse explicabo exercitationem 
                </Typography>
            </CardContent>
        </CardActionArea>

        <CardActions>
            <Button size="small" color="primary">
                Read More
            </Button>
            <Button size="small" color="primary">
                Add List
            </Button>
        </CardActions>

    </Card>
  )
}

QuestionsCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(QuestionsCard);