import React, { useState } from 'react'
import { connect } from 'react-redux';
import { 
    CssBaseline,
    Grid,
    Typography,
    TextField,
    makeStyles,
    IconButton,
    InputAdornment,
    Tooltip
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import ListIcon from '@material-ui/icons/List';

import Nominations from '../Nominations';

import movieDuck from '../../app/modular/movie';

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: theme.palette.primary.dark,
        height: '70px',
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3)
    },
    title: {
        color: theme.palette.primary.light,
        fontWeight: 'bold'
    },
    label: {
        color: theme.palette.primary.main
    },
    input: {
        color: theme.palette.primary.main
    }
}));

function Header({ getMoviesByTitle }) {
    const classes = useStyles();

    const [movie, setMovie] = useState('');
    const [openNominations, setOpenNominations] = useState(false);

    const handleChange = (e) => {
            setMovie(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getMoviesByTitle(movie);
    }

    const handleOnClick = () => {
        setOpenNominations(true);
    }

    const handleClose = () => {
        setOpenNominations(false);
    }

    return (
        <header>
                <CssBaseline>
                        <Nominations open={openNominations} handleClose={handleClose}/>
                        <Grid 
                            container 
                            justify="space-between" 
                            alignItems="center" 
                            className={classes.header}  
                        >
                            <Grid item xs={4} sm={5}>
                                <Typography variant="h6" className={classes.title}>
                                    Shoppies
                                </Typography>
                            </Grid>
                            <Grid item xs={7} sm={6}>
                                <form onSubmit={handleSubmit} id="movie-search-id">
                                    <TextField 
                                        variant="outlined" 
                                        label="Movie title"
                                        size="small"
                                        color="primary"
                                        fullWidth
                                        value={movie}
                                        onChange={handleChange}
                                        InputLabelProps={{
                                            className: classes.label
                                        }}
                                        InputProps={{
                                            className: classes.input,
                                            endAdornment: (
                                                <InputAdornment>
                                                    <IconButton type="submit" disableRipple color="primary">
                                                        <SearchIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                 </form>
                            </Grid>
                            <Grid item xs={1} sm={1} >
                                <Tooltip title="Nominations">
                                    <IconButton onClick={handleOnClick} color="primary">
                                        <ListIcon/>
                                    </IconButton>
                                </Tooltip>
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
