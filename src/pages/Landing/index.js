import React, { useState } from 'react'
import Header from '../../components/Header';
import MovieResults from '../../components/MovieResults';
import Nominations from '../../components/Nominations';
import {
    Container,
    Grid,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: theme.palette.primary.light,
        height: '100vh'
    },
    spacing: {
        marginTop: theme.spacing(2)
    }
}));

function Landing() {
    const classes = useStyles(); 

    return (
        <div className={classes.background}>
            <Container disableGutters  maxWidth="md">
                <Header/>
                <Grid container direction="column">
                    <Grid item style={{ maxWidth: '100%' }}>
                        <MovieResults/>
                    </Grid>
                    <Grid item>
                        <Nominations/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Landing;
