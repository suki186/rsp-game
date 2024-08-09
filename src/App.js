import scissors from './media/scissors.png'
import rock from './media/rock.png'
import paper from './media/paper.png'

import { useState } from 'react';
import Box from './component/Box';
import './App.css';
import Score from './component/Score';

//1. 박스 2개 (타이틀, 사진, 결과)
//2. 가위바위보 버튼 3개
//3. 버튼 클릭 이벤트 -> 박스 사진에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택
//5. 3,4의 결과로 승패 결정
//6. 승패에 따른 테두리 색깔 (초,빨,검)

// 사진
const choice = {
  scissors: {
    name:"Scissors",
    img: scissors
  },
  rock: {
    name:"Rock",
    img: rock
  },
  paper: {
    name:"Paper",
    img: paper
  }
}

function App() {

  const [userSelect, setUserSelect] = useState(null); //나의 ui를 바꾸는 state
  const [comSelect, setComSelect] = useState(null); // 컴퓨터의 ui를 바꾸는 state
  const [result, setResult] = useState(""); // 결과 ui를 바꾸는 state
  const [score, setScore] = useState(0); // 점수 ui를 바꾸는 state

  const play =(userChoice)=> {
    // You
    console.log("선택됨: ", userChoice);
    setUserSelect(choice[userChoice]); // choice 목록 중 button에서 클릭한 내용을 userSelect로 설정

    // Computer
    let comChoice = randomChoice();
    setComSelect(choice[comChoice]);

    // 승패 판정 (You 기준 이기면 true)
    let j = judgement(choice[userChoice], choice[comChoice])
    setResult(j);

    if (j == "Win") {
      setScore(score + 1);
    }
    


  };

  const judgement =(user, com)=> {

    if (user.name == com.name) {
      return "Tie"
    }
    else if (user.name == "Rock") {
      return com.name=="Scissors"?"Win":"Lose"
    }
    else if (user.name == "Scissors") {
      return com.name=="Paper"?"Win":"Lose"
    }
    else if (user.name == "Paper") {
      return com.name=="Rock"?"Win":"Lose"
    }

  }

  const randomChoice =()=> {
  
    let itemArray = Object.keys(choice); // 객체의 key값만 뽑아 배열화
    console.log("item array", itemArray);

    let comItem = itemArray[Math.floor(Math.random()*itemArray.length)]; //0(가위), 1(바위), 2(보) -> 인덱스에 맞는 이름
    console.log("com: ", comItem);

    return comItem;
  };

  return (
    <div>
      <div className='main'>
        <h1>{result}</h1>
      </div>

      <div className='container'>
      <Box title='You' item={userSelect} result={result}/>
      <Score num={score}/>
      <Box title='Computer' item={comSelect} result={result}/>
      </div>
    
      <div className='main'>
        <button id="btn" onClick={() => play("scissors")}>가위</button>
        <button id="btn" onClick={() => play("rock")}>바위</button>
        <button id="btn" onClick={() => play("paper")}>보</button>
      </div>

      

    </div>
    
  );
}

export default App;
