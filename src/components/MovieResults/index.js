import React from 'react';
import { connect } from 'react-redux';
import {
    Paper,
    Typography,
    makeStyles
} from '@material-ui/core';
import MovieCard from '../MovieCard';
import movieDuck from '../../app/modular/movie';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
    },
}));

function MovieResults({ movieResults, title }) {
    const classes = useStyles();

    return (
        <Paper elevation={0} square className={classes.root}>
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                {"Search results for \"" + title + "\""}
            </Typography>
            { movieResults && movieResults.map((movie, i) => (<MovieCard key={i} movie={movie} buttonText="Nominate"/>))}
        </Paper>
    )
}

const mapStateToProps = (state) => ({
    movieResults:  movieDuck.selectors.movieResults(state),
    title: movieDuck.selectors.title(state),
});

export default connect(mapStateToProps, null)(MovieResults);
