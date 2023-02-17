import React, { useEffect, useState } from "react";
import TheMovieService from "../../services/TheMovieService";
import GAME_STATE from "./constants/GameState";
import GetARandomActorName from "./constants/RandomActorsName";

function useTime() {
    const [timer, setTime] = useState(1);
    useEffect(() => {
      const id = setInterval(() => {
        setTime(timer+1);

      }, 1000);
      return () => clearInterval(id);
    }, [timer]);
    return timer;
}

function getRandomIdx(list) {
    const random_idx = Math.floor(Math.random() * list.length)
    return random_idx
}

function formatMovieURL(poster_path) {
    // API does not provide the full url
    const BASE_URL = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/"
    return `${BASE_URL}${poster_path}`
}

const GuessActor = ({addScore, movie, actor, cast, removeCurrentMovie}) => {
    const [loading, setLoading] = useState(false); 


    function validateAwnser(awnser) {
        setLoading(true);
        // console.log(cast)
        const found = cast.find((item) => item.id === actor.id);
        if ((found && awnser === "YES") || (!found && awnser === "NO")) {
            addScore(1)
        }

        removeCurrentMovie();
        setLoading(false);
    }

    if (loading) {
        return (<h2>Loading...</h2>)
    }

    return (
        <>
            {movie && 
            
                <div className="container text-center mt-5">
                    <div className="row">
                        <div className="col-5">
                            <img src={formatMovieURL(movie.poster_path)} alt={movie.name}></img>
                        </div>

                        <div className="col-5 mt-5">
                            <span>Actor: {actor.name}</span>
                            <div className="row mt-5">
                                <div className="col">
                                    <button onClick={() => validateAwnser("YES")} className="btn btn-primary btn-lg btn-block">YES</button>
                                </div>
                                <div className="col">
                                    <button onClick={() => validateAwnser("NO")} className="btn btn-danger btn-lg btn-block">NO</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </>
    )
}


const Play = (props) => {
    // define how many secondes a session must least
    const SESSION_TIME = 60;
    const timer = useTime(endGame, SESSION_TIME);

    function endGame(){
        props.handleGameStatus(GAME_STATE.SCORE_BOARD);
    }

    if ( timer >= SESSION_TIME) {
        // After 60secs the game must stop
        endGame();
    }

    const [loading, setLoading] = useState(true);
    const [moviePage, setMoviePage] = useState(0);
    const [movies, setMovies] = useState([]);

    if (moviePage === 0) {
        setMoviePage(1);
    }
    
    function nextPage() {
        setMoviePage(moviePage+1);
    }

    function removeCurrentMovie() {
        const filteredMovies = movies.filter((item) => item.id !== movies[movieIdx].id)
        if (filteredMovies.length === 1) {
            // load more videos
            setLoading(true);
            nextPage()
            return;
            
        }
        setMovies(filteredMovies);
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
        const loadMoreMovies = async () => {
            const data = await TheMovieService.getPopularMovies(moviePage)
            setMovies(data)
        }
        loadMoreMovies()
    }, [moviePage])

    const [movieIdx, setMovieIdx] = useState(null);
    
    // load cast for the movie selected
    const [cast, setCast] = useState(null)
    useEffect(() => {
        const load = async () => {
            if (movies.length !== 0) {
                const idx = getRandomIdx(movies);
                setMovieIdx(idx);
                const data = await TheMovieService.getCastByMovieID(movies[idx].id);
                setCast(data);

            }
        }
        load();
    }, [movies])

    // select actor to guess
    const [actor, setActor] = useState(null);
    useEffect(() => {
      if (cast && cast.length !== 0) {
          setLoading(true);
          const selectActor = () => {
            const magicNumber = Math.floor(Math.random() * cast.length)
            if (magicNumber % 2 === 0) {
                // select a real actor
                return {
                    name: cast[magicNumber].original_name,
                    id: cast[magicNumber].id
                }
            }

            // select a fake actor
            return {
                name: GetARandomActorName(),
                id: magicNumber
            }
          }
          setActor(selectActor());
          setLoading(false);
      }
    }, [cast])

    return (
        <div className="container text-center">

            <div className="card mt-5">
                <div className="card-body">
                    <h5 className="card-title mt-3">Play Screen</h5>
                    <p className="card-text">Guess if this name was part of the cast for the movie below.</p>
                    
                    <h2>TIMER: {timer}</h2>
            


                </div>
            </div>
            <h3>SCORE: {props.getScore()}</h3>
            {loading && <p>Loading...</p>}
            {/* {loading && <p>Loading...</p>}
            {error && <p>{error}</p>} */}
            {/* {movies && <GuessActor data={movies} addScore={props.handleAddScore}/>} */}
            {!loading && <GuessActor addScore={props.handleAddScore} movie={movies[movieIdx]} cast={cast} actor={actor} removeCurrentMovie={removeCurrentMovie}/>}
        </div>
    )
}


export default Play;
