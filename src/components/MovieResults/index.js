import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
    Paper,
    Typography,
    makeStyles
} from '@material-ui/core';
import MovieCard from '../MovieCard';
import Nominations from '../Nominations';
import movieDuck from '../../app/modular/movie';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        height: '100%'
    },
}));

function MovieResults({ movieResults, title, nominateMovie, nominations }) {
    const classes = useStyles();

    const [openNominations, setOpenNominations] = useState(false);

    const handleOnClick = (movie) => {
        if (nominations.length === 5) {
            setOpenNominations(true);
        }
        else {
            nominateMovie(movie);
        }
    }

    const isNominated = (id) => {
        for (var i = 0; i < nominations.length; i++) {
            if (nominations[i].imdbID === id) {
                return true;
            }
        }
        return false;
    }

    const handleClose = () => {
        setOpenNominations(false);
    }

    return (
        <Paper elevation={0} square className={classes.root}>
            <Nominations open={openNominations} handleClose={handleClose} error={true} />
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>
            { (title && movieResults) ? "Search results for \"" + title + "\""
                : (title && !movieResults) ? "No search results for \"" + title + "\" :("
                : "Search for a movie title"     
            }
            </Typography>
            { movieResults && movieResults.map((movie, i) => (
                <MovieCard 
                    key={i} 
                    movie={movie} 
                    buttonText="Nominate" 
                    handleOnClick={handleOnClick} 
                    disabled={isNominated(movie.imdbID)}
                />
            ))}
        </Paper>
    )
}

const mapStateToProps = (state) => ({
    movieResults:  movieDuck.selectors.movieResults(state),
    title: movieDuck.selectors.title(state),
    nominations: movieDuck.selectors.nominations(state),
});

const mapDispatchToProps = {
    nominateMovie: movieDuck.actions.nominateMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieResults);
