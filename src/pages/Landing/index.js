import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import MovieResults from '../../components/MovieResults';
import Banner from '../../components/Banner';
import {
    Container,
    Grid,
    makeStyles
} from '@material-ui/core';

import movieDuck from '../../app/modular/movie';

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: theme.palette.primary.light,
        height: '100%'
    },
    spacing: {
        marginTop: theme.spacing(2)
    }
}));

function Landing({ nominations }) {
    const classes = useStyles(); 

    const [openBanner, setOpenBanner] = useState(false);

    const handleCloseBanner = () => {
        setOpenBanner(false);
    }

    useEffect(() => {
        if (nominations.length === 5) {
            setOpenBanner(true);
        }
    }, [nominations.length])


    return (
        <div className={classes.background}>
            <Banner open={openBanner} handleClose={handleCloseBanner} />
            <Container disableGutters  maxWidth="md" style={{ height: '100%' }}>
                <Grid container direction="column" style={{ height: '100%' }}>
                <Header/>
                <Grid item xs style={{ maxWidth: '100%', overflow: 'auto' }}>
                    <MovieResults/>
                </Grid>
                </Grid>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => ({
    nominations: movieDuck.selectors.nominations(state)
})

export default connect(mapStateToProps, null)(Landing);
