import React from 'react'
import Header from '../../components/Header';
import {
    Container,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: theme.palette.primary.main
    }
}));

function Landing() {
    const classes = useStyles(); 

    return (
        <div>
            <Container className={classes.background} maxWidth="md">
                <Header/>
            </Container>
        </div>
    )
}

export default Landing;
