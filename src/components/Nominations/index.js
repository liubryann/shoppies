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

function Nominations({ nominations, removeNomination }) {
    const classes = useStyles();

    const handleOnClick = (movie) => {
        removeNomination(movie);
    }   

    return (
        <Paper elevation={0} square className={classes.root}>
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                {"Nominations"}
            </Typography>
            { nominations && nominations.map((nomination, i) => (
                <MovieCard
                    key={i} 
                    handleOnClick={handleOnClick} 
                    buttonText="Remove" 
                    movie={nomination} 
                />))}
        </Paper>
    )
}

const mapStateToProps = (state) => ({
    nominations: movieDuck.selectors.nominations(state)
})

const mapDispatchToProps = {
    removeNomination: movieDuck.actions.removeNomination
}
export default connect(mapStateToProps, mapDispatchToProps)(Nominations);
