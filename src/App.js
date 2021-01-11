import React, {useState} from 'react'
import './css/App.css';
import {CSSTransition} from 'react-transition-group'

import TitleScreen from './TitleScreen'
import GameBoard from './GameBoard'
import Player from './Player'
function App() {
  const [titleScreen, setTitleScreen] = useState(true);
  const [gameBoard, setGameboard] = useState(false);

  //functions to toggle betweeen screens

  const startGame = ()=>{
    setTitleScreen(false);
    
  }

  return (
    <div className="game">
      <CSSTransition
        in={titleScreen} //must prop
        timeout={{appear: 1000, exit: 800}} //must prop. Must match the sum of animations happening at css file
        classNames={'title-screen-'} //MUST MUST MUST
        unmountOnExit={true} //with this, once the animation is over the component will be unmounted
        appear={true} //With this, animations will take place when the component first appears
        //easings.net is a wonderful library to get timing functions for our css
        onExited={()=>setGameboard(true)}
      >
        <TitleScreen startGame={startGame} />
      </CSSTransition>

      <CSSTransition
        in={gameBoard}
        timeout={1000}
        classNames="game-board-"
        mountOnEnter={true} //Show this component UNTIL this has changed to true
      >
        <GameBoard/>
      </CSSTransition>

      <CSSTransition
        in={gameBoard}
        timeout={1000}
        classNames="game-board-"
        mountOnEnter={true} //Show this component UNTIL this has changed to true
      >
        <Player/>
      </CSSTransition>
      
    </div>
  );
}

export default App;
