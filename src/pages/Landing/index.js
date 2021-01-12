import React from 'react'
import Header from '../../components/Header';
import MovieResults from '../../components/MovieResults';
import {
    Container,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: theme.palette.primary.light,
        height: '100vh'
    }
}));

function Landing() {
    const classes = useStyles(); 

    return (
            <Container disableGutters className={classes.background} maxWidth="md">
                <Header/>
                <MovieResults/>
            </Container>
    )
}

export default Landing;
