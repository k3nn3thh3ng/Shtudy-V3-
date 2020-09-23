import React from 'react';
import PropTypes from 'prop-types';
import { fade, withStyles } from '@material-ui/core/styles';
import { InputBase, Hidden, Box } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';




const styles = (theme) => ({
    search: {
        position: 'relative',
        backgroundColor: fade(theme.palette.grey.A200, 0.25),
        '&:hover': {
          backgroundColor: fade(theme.palette.grey.A200, 0.15),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
      },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    },
    
});

function Search(props) {
  const { classes } = props;
  return (
    <Hidden xsDown>
        <Box className={classes.search} borderRadius={20}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
        </Box>
    </Hidden>
  )
}

Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Search);


