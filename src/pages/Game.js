import React from "react";
import GAME_STATE from "../components/Game/GameState";
import Play from "../components/Game/Play";
import ScoreBoard from "../components/Game/ScoreBoard";
import Start from "../components/Game/Start";


class Game extends React.Component {

    constructor(props) {
        super(props);
        this.handleStatus = this.handleStatus.bind(this);
        this.state = {
            gameState: GAME_STATE.HOME,
        }
    }

    handleStatus(game_status) {
        switch (game_status)
        {
            case GAME_STATE.HOME:
                this.setState({gameState: GAME_STATE.HOME});
                break;
            case GAME_STATE.PLAY:
                this.setState({gameState: GAME_STATE.PLAY});
                break;
            case GAME_STATE.SCORE_BOARD:
                this.setState({gameState: GAME_STATE.SCORE_BOARD});
                break;
            default:
                console.log(`game status does not exist`);
                break;
        }
    }

    render() {
        return (
        <div>
            {this.state.gameState === GAME_STATE.HOME && <Start handleGameStatus={this.handleStatus} />}
            {this.state.gameState === GAME_STATE.PLAY && <Play handleGameStatus={this.handleStatus} />}
            {this.state.gameState === GAME_STATE.SCORE_BOARD && <ScoreBoard handleGameStatus={this.handleStatus} />}
        </div>
        )
    }

}

export default Game;