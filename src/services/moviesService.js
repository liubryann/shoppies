import api from './api'; 

const getMoviesByTitle = async (title) => {
    try {
        const res = await api.get('', { 
            params: {
                s: title
            }
        })
        return res.data.Search; 
    } catch(err) {
        console.error(err)
    }
}

export default { getMoviesByTitle };