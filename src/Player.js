import React, {useState} from 'react'
import './css/Player.css'

import PlayerIcon from './PlayerIcon'

import {CSSTransition, SwitchTransition} from 'react-transition-group'

function Player() {
    const [activePlayer, setActivePlayer] = useState('x')


    const PlayerClick = ()=>{
        setActivePlayer( activePlayer ==='x'? 'o': 'x');
    }

    return (
        <div className="player" onClick={PlayerClick}>
            <div className="player__label">Player</div>
            <SwitchTransition>
                <CSSTransition
                    key={activePlayer} //Using key instead of in, because it is inside of SwitchTransition!
                    timeout={800}
                    classNames='player__icon-'
                >
                    <PlayerIcon icon={activePlayer} />
                </CSSTransition>
                
            </SwitchTransition>
            
        </div>
    )
}

export default Player
