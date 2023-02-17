import React, { useState } from "react";
import GAME_STATE from "../components/Game/constants/GameState";
import Play from "../components/Game/Play";
import ScoreBoard from "../components/Game/ScoreBoard";
import Start from "../components/Game/Start";


const Game = (props) => {
    const [gameState, setGameState] = useState(GAME_STATE.HOME);
    const [score, setScore] = useState(0);

    const handleAddScore = (points) => {
        if (points > 0) {
            setScore(score+points)
        }
    }

    const handleResetScore = () => {
        setScore(0)
    }

    const getScore = () => {
        return score
    }

    
    const handleStatus = (game_status) => {
        switch (game_status)
        {
            case GAME_STATE.HOME:
                setGameState(GAME_STATE.HOME);
                break;
            case GAME_STATE.PLAY:
                setGameState(GAME_STATE.PLAY);
                break;
            case GAME_STATE.SCORE_BOARD:
                setGameState(GAME_STATE.SCORE_BOARD);
                break;
            default:
                console.log(`game status does not exist`);
                break;
        }
    }

    
    return (
        <div className="container-fluid">
            {gameState === GAME_STATE.HOME && <Start handleGameStatus={handleStatus} />}
            {gameState === GAME_STATE.PLAY && <Play handleGameStatus={handleStatus} handleAddScore={handleAddScore} getScore={getScore}/>}
            {gameState === GAME_STATE.SCORE_BOARD && <ScoreBoard handleGameStatus={handleStatus} getScore={getScore} handleResetScore={handleResetScore}/>}
        </div>
    )
}

export default Game;