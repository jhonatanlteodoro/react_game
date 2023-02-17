import { THE_MOVIE_API, THE_MOVIE_API_KEY, requestConfig } from "../utils/config"


const getPopularMovies = async (page) => {
    
    const config = requestConfig("GET");

    const URL = THE_MOVIE_API + "movie/popular?" + new URLSearchParams({
        page: page,
        api_key: THE_MOVIE_API_KEY,
    })

    try {
        const res = await fetch(URL, config)
            .then((res) => res.json())
            .then((data) => data.results)
            .catch((err) => err);
        return res
    } catch (error) {
        console.log(error);
    }
};

const getCastByMovieID = async (movieID) => {
    
    const config = requestConfig("GET");

    const URL = THE_MOVIE_API + `movie/${movieID}/credits?` + new URLSearchParams({
        api_key: THE_MOVIE_API_KEY,
    })

    try {
        const res = await fetch(URL, config)
            .then((res) => res.json())
            .then((data) => data.cast)
            .catch((err) => err);
        return res
    } catch (error) {
        console.log(error);
    }
};

const TheMovieService = {
    getPopularMovies,
    getCastByMovieID
};

export default TheMovieService;