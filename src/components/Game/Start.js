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
            <div className="container">

                <div className="card mt-5 text-center">
                    <div className="card-body">
                        <h5 className="card-title mt-3">GUESS GAME</h5>

                        <button className="btn btn-primary btn-lg btn-block mt-3" onClick={this.startGame}>Start</button>
                    </div>
                </div>

            </div>
        )
    }
}


export default Start;
