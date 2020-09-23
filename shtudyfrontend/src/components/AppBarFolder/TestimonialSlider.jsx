import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Box} from '@material-ui/core';

 

const styles = makeStyles({
    root: {
        paddingTop: '4rem',
        display: 'flex',
        justifyContent: 'center'
    },
    testimonial: {
        marginLeft: '2rem',
        marginRight: '1rem',
    },
    paper: {
        minWidth: '20rem',
        padding: '1rem'
    }
});

const Item = (props) => {
    const classes = styles();
    return (
        <Box className={classes.root}>
            <Box className={classes.testimonial}>
                <Paper className={classes.paper}>
                    <h2>{props.item.name}</h2>
                    <p>{props.item.description}</p>
                </Paper>
            </Box>
            <Box className={classes.testimonial}>
                <Paper className={classes.paper}>
                    <h2>{props.item.name}</h2>
                    <p>{props.item.description}</p>
                </Paper>
            </Box>
        </Box>
    )
}

const TestimonialSlider = (props) => {
    var items = [
        {
            name: "Testimonial #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Testimonial #2",
            description: "This is just Out of this world!!!!"
        }
    ]
 
    return (
        <Box style={{paddingBottom: '4rem'}}>
            <Carousel>
                {
                    items.map((item, i) => 
						<Item key={i} item={item} />
					)
                }
            </Carousel>
        </Box>
    )
}
 
export default TestimonialSlider
