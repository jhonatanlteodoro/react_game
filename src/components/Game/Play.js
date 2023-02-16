import React from "react";
import GAME_STATE from "./GameState";


class Play extends React.Component {

    constructor(props) {
        super(props);
        this.endGame = this.endGame.bind(this);
    }

    endGame(){
        this.props.handleGameStatus(GAME_STATE.SCORE_BOARD);
    }

    render() {
        return (
            <>
                <h1> Play Screen</h1>
                <button className="btn btn-primary" onClick={this.endGame}>End Game</button>
            </>
        )
    }
}


export default Play;
