import React from "react";
import GAME_STATE from "./GameState";


class Play extends React.Component {

    constructor(props) {
        super(props);
        this.endGame = this.endGame.bind(this);
        this.state = {
            timer: 0
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    isOutOfTime() {
        // After 60secs the game must stop
        if (this.state.timer >= 10) {
            return true;
        }

        return false;
    }

    tick() {
        if (!this.isOutOfTime()) {
            const new_tick = this.state.timer + 1
            this.setState({
                timer: new_tick
            });
            return
        }

        this.endGame()
    }

    endGame(){
        this.props.handleGameStatus(GAME_STATE.SCORE_BOARD);
    }

    render() {
        return (
            <div className="container">
                
                
                <div className="card mt-5 text-center">
                    <div className="card-body">
                        <h5 className="card-title mt-3">Play Screen</h5>

                        <h2>TIMER: {this.state.timer}</h2>

                    </div>
                </div>
            
            </div>
        )
    }
}


export default Play;
