import React from 'react';
import {
    Grid,
    Typography,
    Button,
} from '@material-ui/core';

function MovieCard({ handleOnClick, buttonText, movie, disabled }) {
    return (
        <Grid 
            container
            justify="space-between"
            alignItems="center" 
            style={{ height:'45px' }}
            wrap="nowrap"
            spacing={2}
        >
            <Grid item xs zeroMinWidth style={{ maxWidth: '100%' }}>
                <Typography noWrap>
                    {movie.Title + ' (' + movie.Year + ')'}
                </Typography>
            </Grid>
            <Grid item>
                <Button 
                    variant="contained"
                    size="small" 
                    disableElevation
                    onClick={() => handleOnClick(movie)}
                    style={{ width: '90px' }}
                    disabled={disabled}
                >
                    {buttonText}
                </Button>
            </Grid>
        </Grid>
    )
}

export default MovieCard;
