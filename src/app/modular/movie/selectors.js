const select = (state) => state.movie; 

export const movieResults = (state) => select(state).movieResults;

export const title = (state) => select(state).title;

export const nominations = (state) => select(state).nominations;