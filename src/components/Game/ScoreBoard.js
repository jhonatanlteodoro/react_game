import React from "react";
import GAME_STATE from "./constants/GameState";


const ScoreBoard = (props) => {

    const startGame = () => {
        props.handleResetScore();
        props.handleGameStatus(GAME_STATE.PLAY);
    }

    const home = () => {
        props.handleGameStatus(GAME_STATE.HOME);
    }

    return (

        <div className="container text-center">

            <div className="card mt-5">
                <div className="card-body">
                    <h5 className="card-title mt-3">Score Board</h5>

                    <h4 className="card-text">Thanks for playing :)</h4>
                    <h3 className="card-text mt-5"> You did awesome {props.getScore()} points</h3>


                </div>

                <button className="btn btn-primary" onClick={startGame}>Restart</button>
                <button className="btn btn-secondary mt-3" onClick={home}>Home</button>
            </div>
            
        </div>
    )
}


export default ScoreBoard;
