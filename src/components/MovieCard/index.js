import React from 'react'
import {
    Grid,
    Typography,
    Button,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '45px',
    }
}));

function MovieCard({ onClick, buttonText, movie }) {
    const classes = useStyles();

    return (
        <Grid 
            container
            justify="space-between"
            alignItems="center" 
            className={classes.root}
            wrap="nowrap"
        >
            <Grid item xs zeroMinWidth style={{ maxWidth: '100%' }}>
                <Typography noWrap>
                    {movie.Title + ' (' + movie.Year + ')'}
                </Typography>
            </Grid>
            <Grid item>
                <Button variant="contained" size="small" disableElevation>
                    {buttonText}
                </Button>
            </Grid>
        </Grid>
    )
}

export default MovieCard
