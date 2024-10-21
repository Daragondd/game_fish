import React, { useEffect, useState } from 'react';
import '../styles/game.css';
import { useNavigate } from "react-router-dom"
import image1 from '../img/fish1.png';
import image2 from '../img/fish2.png';
import image3 from '../img/fish3.png';
import image4 from '../img/fish4.png';
import image5 from '../img/fish5.png';
import image6 from '../img/fish6.png';
import image7 from '../img/fish7.png';


function Game() {

    const time = "01:00"
    const [score, setScore] = useState(0);
    var score1 = 0;

    const navigate = useNavigate();

    const imageArray = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7
    ];

    const maxFish = 10; 
    const fishArray = [];

    useEffect(() => {
        //setInterval(createFish, 5000);
    });

    const clickPause = () => {
        const popupOverlay = document.getElementById("popup-overlay");
        popupOverlay.style.display = "block";
        
        const pauseButton = document.getElementById("pause");
        pauseButton.style.display = "none";
    }

    const closePause = () => {

        const popupOverlay = document.getElementById("popup-overlay");
        popupOverlay.style.display = "none";

        const pauseButton = document.getElementById("pause");
        pauseButton.style.display = "block";
    }

    const gameOver = () => {
        const popupOverlay = document.getElementById("gameOver");
        popupOverlay.style.display = "block";

        const pauseButton = document.getElementById("pause");
        pauseButton.style.display = "none";
    }

    const gameOverScreen = () => {
        navigate("/gameOver");
    }

    const createFish = () => {
        const fish = document.createElement("div");
        if(fishArray.length < maxFish) {
            const randomIndex = Math.floor(Math.random() * imageArray.length);
            const min = 1;
            const max = 3;
            const randomAnimation = Math.floor(Math.random() * (max - min + 1)) + min;

            const container = document.getElementById("game");
            const image = imageArray[randomIndex];

            switch (randomAnimation) {
                case 1:
                    fish.classList.add('fish1'); 
                    break
                case 2:
                    fish.classList.add('fish2');
                    break
                case 3:
                    fish.classList.add('fish3');
                    break
            }

            fish.style.position = 'absolute';
            fish.style.left = Math.random()*85 + 'vw';
            fish.style.top = Math.random()*70 + 'vh';
            const width = Math.random() * 200 + 30;
            fish.style.width = width + 'px';
            fish.style.height = width/2 + 'px';
            fish.style.backgroundImage = 'url(' + image + ')';
            fish.style.backgroundSize = "contain";
            fish.style.backgroundRepeat = "no-repeat";
            fish.style.backgroundPosition = "center";

            fishArray.push(fish);
            container.append(fish);

            console.log(fishArray.length);
        }

        fish.addEventListener('click', () => {
            fish.remove();
            fishArray.splice(fishArray.indexOf(fish), 1);
            const fishWidth = parseFloat(fish.style.width);
            
            if(fishWidth < 150 && fishWidth >= 70){
                //setScore(score+30);
                score1+=30; 
                console.log(score1);
            }
            else if(fishWidth < 70){
                score1+=50;
                //setScore(score+50);
                console.log(score1);
            }
            else {score1+=10;
                //setScore(score+10);
            console.log(score1);}
            setScore(score1);
        })
    };
    
    return(
        <div className="game-screen">
            <div className="game-screen__body">
                <div className="game-screen__title title">Fish</div>
                <div className="game-screen__time time">
                <input className="time__amount" 
                        name="time"  
                        type="time"
                        value={time}
                        readOnly>
                    </input>
                    <input className="score" value={score} onChange={(e) => setScore(e.target.value)}></input>
                    <input type='button' className='game-screen__button-pause' id="pause" onClick={clickPause}></input>
                </div>
                <div className="game-screen__game" id="game">
                <div className='popup-overlay' id="popup-overlay">
                    <div id="popup">
                        <label className='game-screen__title-pause text'>Pause</label>
                        <input type='button' id='buttonPause' className='game-screen__button-play' onClick={closePause}></input>
                    </div>
                </div>
                <button onClick={gameOver}>Game over</button>
                <button onClick={createFish}>Create fish</button>
                <div className='popup-overlay' id="gameOver" onClick={gameOverScreen}>
                    <div id="popup">
                        <label className='game-screen__title-gameOver text'>Game Over</label>
                        <label className='game-screen_type'>Tap on the screen</label>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Game