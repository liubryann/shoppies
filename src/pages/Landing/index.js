import React from 'react'
import Header from '../../components/Header';
import MovieResults from '../../components/MovieResults';
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
                <Grid container spacing={3} direction="column">
                    <Grid item>
                        <MovieResults/>
                    </Grid>
                    <Grid item>
                    </Grid>
                </Grid>
           
            </Container>
        </div>
    )
}

export default Landing;
