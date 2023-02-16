import React from "react";
import GAME_STATE from "./GameState";


class ScoreBoard extends React.Component {
    
    constructor(props) {
        super(props);
        this.startGame = this.startGame.bind(this);
        this.home = this.home.bind(this);
    }

    startGame(){
        this.props.handleGameStatus(GAME_STATE.PLAY);
    }

    home(){
        this.props.handleGameStatus(GAME_STATE.HOME);
    }

    render() {
        return (
            <>
                <h1> Score Board</h1>
                <button className="btn btn-primary" onClick={this.startGame}>Restart</button>
                <button className="btn btn-secondary" onClick={this.home}>Home</button>
            </>
        )
    }
}


export default ScoreBoard;
