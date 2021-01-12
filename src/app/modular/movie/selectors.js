const select = (state) => state.movie; 

export const movieResults = (state) => select(state).movieResults;

export const title = (state) => select(state).title;