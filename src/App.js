import { useState } from 'react';
import './App.css';
import {Block} from './components/Block/Block';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Text from './components/Text/Text';
import classes from './ui/Global.module.css'


const App = () => {

  const [isGameOver, setGameIsOver] = useState(false);
  const [win,setWin] = useState(0);
  const [clickedCount, setClickedCount] = useState(0);
  const [bonusGame,setBonusGame] = useState(false);
  const [bonusWin,setBonusWin] = useState('');
  const [isBoxOpened, setIsBoxOpened] = useState(false)
  setInterval(() => {
    setWin(localStorage.getItem('count'));
    setClickedCount(localStorage.getItem('clickedTimesCount'));
    if(Number(clickedCount) === 8) {
      setGameIsOver(true)
      console.log('aaaaa')
    }
    
    if(localStorage.getItem('isGameOver') === 'true') {
      if(clickedCount !== 8 ) {
        setWin(0)
      } 
      setGameIsOver(true)
    }
  },1000)

  const playBonusGameHandler = () => {
    setBonusGame(true)
    
  }

  const openBox = () => {
    setBonusWin(Math.ceil(Math.random()) * 4)
    setIsBoxOpened(true);
  }

  return (

     !bonusGame  ? (!isGameOver ?
     <Card>
        <Card className={classes.header}>
          <Text> your win is {win} </Text>
        </Card>
        <Card className={classes.container}>
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
        </Card> 
     </Card> : (
        Number(clickedCount)  ===  8 ? <Card className={classes.over}>  You Won {win}  dram Now go to bonus game <Button onClick={playBonusGameHandler} className={classes.button} > Play Bonus Game </Button > </Card> : <Card className={classes.over}>  Game is Over You  lose </Card>
     )) : (!isBoxOpened ? (<Card onClick={openBox} className={classes['bonus-game-container']}>  
          <Card onClick={openBox} className={classes['bonus-box']}> open box </Card>
          <Card onClick={openBox} className={classes['bonus-box']}> open box </Card>
          <Card onClick={openBox} className={classes['bonus-box']}> open box </Card>
          <Card onClick={openBox} className={classes['bonus-box']}> open box </Card>
      </Card>) : <Card className={classes['bonus-over']}> 
         Congratulation you win bonus {bonusWin} multiple times  with  {win}  your Final win is {bonusWin * win}
      </Card>)
     

  )
}

export  default App