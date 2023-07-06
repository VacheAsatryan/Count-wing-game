import { useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Text from "../Text/Text";
import classes from '../../ui/Global.module.css';
localStorage.setItem('count', 0) 
localStorage.setItem('isGameOver', 'false');
localStorage.setItem('clickedTimesCount', 0)
let over = false

const Block = () => {
    const [blockCount,setBlockCount] = useState('');
    const [show,setShow] = useState(false);
    const [canClick,setCanClick] = useState(true);
    
   
    const changeShowSatement = () => {
        const possibleItems = [
            2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20, 21, 'bomb', 'bomb', 'bomb'
        ];
        if(canClick) {
            setShow(!show)
            const skyCount = possibleItems[Math.ceil(Math.random() * 22)];
            setBlockCount(skyCount);
            localStorage.setItem('clickedTimesCount', Number(localStorage.getItem('clickedTimesCount')) + 1)
            
            if(skyCount  !== 'bomb') {
                localStorage.setItem('count', Number(localStorage.getItem('count'))  + skyCount)
            }
            console.log(skyCount)
            if(skyCount === 'bomb') {
                setCanClick(false);
                over = true
                localStorage.setItem('isGameOver', 'true')
            }
            setCanClick(false);
        }
    }
 
    return(
        <Card className={classes.block}>
            <Button className={classes.button} onClick={changeShowSatement}> good luck  </Button>
            { show && <Text> {blockCount} </Text>}  
        </Card> 
    )
}

export {Block,over}