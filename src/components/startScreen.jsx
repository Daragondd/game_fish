import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import '../styles/startScreen.css'


function StartScreen() {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [time, setTime] = useState('00:00');
    
    const [nameDirty, setNameDirty] = useState(false);
    const [timeDirty, setTimeDirty] = useState(false);

    const[nameError, setNameError] = useState('Имя не может быть пустым');
    const[timeError, setTimeError] = useState('Установите таймер');

    const nameHandler = (e) => {
        setName(e.target.value);
        setNameError('');
    }

    const timeHandler = (e) => {
        setTime(e.target.value);
        setTimeError('');
    }


    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'time':
                setTimeDirty(true)
                break
        }

        
    }

    function buttonStart() {
        if(name === '') {
            setNameDirty(true);
            setNameError('Имя не может быть пустым');
        }
        else if(time <= '00:10'){
            setTimeDirty(true)
            setTimeError('Таймер должен быть больше 10с');
            
        }
        else if(time > '10:00'){
            setTimeDirty(true)
            setTimeError('Таймер должен быть меньше 10мин');
        }
        else navigate("/game");
    }

    return (
        <div className="start-screen">
            <div className="start-screen__body">
                <div className="start-screen__title title">Fish</div>
                <input className="start-screen__input-name" name="name" onChange={e=>nameHandler(e)} onBlur={e=>blurHandler(e)} value={name} placeholder="Enter Name"></input>
                <div className="start-screen__time time">
                    <label className="time__name name">Timer</label>
                    <br></br>
                    <input className="time__amount" 
                        name="time" 
                        onChange={e=>timeHandler(e)} 
                        onBlur={e=>blurHandler(e)} 
                        value={time} 
                        type="time">
                    </input>
                    {(nameDirty && nameError) && <div style={{color:'red'}}>{nameError}</div>}
                    {(timeDirty && timeError) && <div style={{color:'red'}}>{timeError}</div>}
                </div>
                <button className="start-screen__button" onClick={buttonStart}>Start</button>
            </div>
        </div>
    )
}

export default StartScreen;
