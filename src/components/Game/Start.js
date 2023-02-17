import React from "react";
import GAME_STATE from "./constants/GameState";


const Start = (props) => {

    function startGame() {
        props.handleGameStatus(GAME_STATE.PLAY);
    }
    
    return (
        <div className="container">

            <div className="card mt-5 text-center">
                <div className="card-body">
                    <h5 className="card-title mt-3">GUESS GAME</h5>

                </div>
                <button className="btn btn-primary btn-lg btn-block mt-3" onClick={startGame}>Start</button>
            </div>

        </div>
    )
}


export default Start;
