import React, { useState } from 'react'
import { 
    CssBaseline,
    Grid,
    Container,
    Typography,
    TextField,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: theme.palette.primary.main,
        height: '70px',
    }
}));

function Header() {
    const classes = useStyles();

    const [movie, setMovie] = useState('');

    const handleChange = (e) => {
        setMovie(e.target.value);
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
                                <TextField 
                                    variant="outlined" 
                                    label="Movie title"
                                    size="small"
                                    color="secondary"
                                    fullWidth
                                    value={movie}
                                    onChange={handleChange}
                                />
                        </Grid>
                    </Grid>
            </CssBaseline>       
        </header>
    )
}

export default Header;
