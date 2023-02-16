import React from "react";
import GAME_STATE from "./GameState";


class Start extends React.Component {

    constructor(props) {
        super(props);
        this.startGame = this.startGame.bind(this);
    }

    startGame(){
        this.props.handleGameStatus(GAME_STATE.PLAY);
    }

    render() {
        return (
            <>
                <h1> Start Screen</h1>
                <button className="btn btn-primary" onClick={this.startGame}>Start</button>
            </>
        )
    }
}


export default Start;
