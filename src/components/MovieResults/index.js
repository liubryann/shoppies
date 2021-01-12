import React from 'react';
import { connect } from 'react-redux';
import movieDuck from '../../app/modular/movie';

function MovieResults({ movieResults }) {
    return (
        <div>
            { movieResults && movieResults.map((movie, i) => (<div key={i}>{movie.Title}</div>))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    movieResults:  movieDuck.selectors.movieResults(state),
});

export default connect(mapStateToProps, null)(MovieResults);
