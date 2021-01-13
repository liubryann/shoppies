import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
    Paper,
    Typography,
    makeStyles
} from '@material-ui/core';
import MovieCard from '../MovieCard'; 
import Banner from '../Banner';

import movieDuck from '../../app/modular/movie';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
    },
}));

function Nominations({ nominations, removeNomination }) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleOnClick = (movie) => {
        removeNomination(movie);
    }   

    const handleClose = () => {
        setOpen(false);
    }

    useEffect(() => {
        if (nominations.length === 5) {
            setOpen(true);
        }
    }, [nominations.length])

    return (
        <Paper elevation={0} square className={classes.root}>
            <Banner open={open} handleClose={handleClose} />
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
