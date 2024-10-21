import React from 'react';
import '../styles/gameOver.css';
import { useNavigate } from "react-router-dom";


function GameOver() {

    const navigate = useNavigate();

    const clickAgain = () => {
        navigate("/");
    }

    return(
        <div className="gameOver-screen">
            <div className="gameOver-screen__body">
                <div className="gameOver-screen__title title">Fish</div>
                <div className="gameOver-screen__result">
                    <label className="gameOver-screen__text">Results</label>
                    <input type='button' className='game-screen__button-again' onClick={clickAgain}></input>
                    <table className='gameOver-screen__table'>
                        <thead className='gameOver-screen__thead'>
                            <tr className='gameOver-screen__row'>
                                <th className='gameOver-screen__head'>User</th>
                                <th className='gameOver-screen__head'>Time</th>
                                <th className='gameOver-screen__head'>Result</th>
                            </tr>
                        </thead>
                        <tbody className='gameOver-screen__tbody'>
                            <tr className='gameOver-screen__row'>
                                <th className='gameOver-screen__body'>User1</th>
                                <th className='gameOver-screen__body'>120s</th>
                                <th className='gameOver-screen__body'>700</th>
                            </tr>

                            <tr className='gameOver-screen__row'>
                                <th className='gameOver-screen__body'>User2</th>
                                <th className='gameOver-screen__body'>100s</th>
                                <th className='gameOver-screen__body'>500</th>
                            </tr>

                            <tr className='gameOver-screen__row'>
                                <th className='gameOver-screen__body'>User3</th>
                                <th className='gameOver-screen__body'>200s</th>
                                <th className='gameOver-screen__body'>400</th>
                            </tr>


                            <tr className='gameOver-screen__this'>
                                <th className='gameOver-screen__body'>User4</th>
                                <th className='gameOver-screen__body'>150s</th>
                                <th className='gameOver-screen__body'>200</th>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default GameOver