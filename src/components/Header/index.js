import React, { useState } from 'react'
import { connect } from 'react-redux';
import { 
    CssBaseline,
    Grid,
    Typography,
    TextField,
    makeStyles
} from '@material-ui/core';

import movieDuck from '../../app/modular/movie';

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: theme.palette.primary.main,
        height: '70px',
    }
}));

function Header({ getMoviesByTitle }) {
    const classes = useStyles();

    const [movie, setMovie] = useState('');

    const handleChange = (e) => {
            setMovie(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getMoviesByTitle(movie);
        
    }

    return (
        <header>
                <CssBaseline>
                        <Grid 
                            container 
                            justify="space-between" 
                            alignItems="center" 
                            className={classes.header}  
                        >
                            <Grid item xs={4} sm={6}>
                                <Typography variant="h6">
                                    Shoppies
                                </Typography>
                            </Grid>
                            <Grid item xs={8} sm={6}>
                                <form onSubmit={handleSubmit} id="movie-search-id">
                                    <TextField 
                                        variant="outlined" 
                                        label="Movie title"
                                        size="small"
                                        color="secondary"
                                        fullWidth
                                        value={movie}
                                        onChange={handleChange}
                                    />
                                    <button type="submit" style={{ display: 'none' }}></button>
                                 </form>
                            </Grid>
                        </Grid>
                </CssBaseline>
        </header>
    )
}

const mapDispatchToProps = {
    getMoviesByTitle: movieDuck.actions.getMoviesByTitle
}

export default connect(null , mapDispatchToProps)(Header);
