import React from 'react';
import { connect } from 'react-redux';
import {
    Paper,
    Typography,
    makeStyles,
    Dialog,
} from '@material-ui/core';
import MovieCard from '../MovieCard'; 

import movieDuck from '../../app/modular/movie';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}));

function Nominations({ nominations, removeNomination, open, handleClose, error }) {
    const classes = useStyles();

    const handleOnClick = (movie) => {
        removeNomination(movie);
    }   

    return (
        <Dialog open={open} onClose={handleClose}>
            <Paper elevation={0} square className={classes.root}>
                <div className={classes.title}>
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                        {"Nominations"}
                    </Typography>
                    { error && <Typography color="error">Max 5 nominations</Typography>}
                </div>
                { nominations.length !== 0 ? (nominations.map((nomination, i) => (
                    <MovieCard
                        key={i} 
                        handleOnClick={handleOnClick} 
                        buttonText="Remove" 
                        movie={nomination} 
                    />))) : (<Typography>Oops! You have no nominations.</Typography>) }
            </Paper>
        </Dialog>
    )
}

const mapStateToProps = (state) => ({
    nominations: movieDuck.selectors.nominations(state)
})

const mapDispatchToProps = {
    removeNomination: movieDuck.actions.removeNomination
}
export default connect(mapStateToProps, mapDispatchToProps)(Nominations);
