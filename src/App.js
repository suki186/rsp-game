import logo from './logo.svg';
import { useState } from 'react';
import Box from './component/Box';
import './App.css';

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
    img:"https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimg.lovepik.com%2Ffree-png%2F20211212%2Flovepik-scissors-png-image_401529665_wh1200.png&type=sc960_832"
  },
  rock: {
    name:"Rock",
    img:"https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Fe1%2Fb7%2Fb8%2Fe1b7b8012277d7c68c7e9b68d66ac02d.jpg&type=sc960_832"
  },
  paper: {
    name:"Paper",
    img:"https://search.pstatic.net/sunny/?src=https%3A%2F%2Fpng.pngtree.com%2Felement_our%2F20200702%2Fourlarge%2Fpngtree-white-nailed-paper-image_2286565.jpg&type=sc960_832"
  }
}

function App() {

  const [userSelect, setUserSelect] = useState(null); //나의 ui를 바꾸는 state
  const [comSelect, setComSelect] = useState(null); // 컴퓨터의 ui를 바꾸는 state

  const play =(userChoice)=> {
    // You
    console.log("선택됨: ", userChoice);
    setUserSelect(choice[userChoice]); // choice 목록 중 button에서 클릭한 내용을 userSelect로 설정

    // Computer
    let comChoice = randomChoice();
    setComSelect(choice[comChoice]);
  };

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
      <Box title='You' item={userSelect}/>
      <Box title='Computer' item={comSelect}/>
      </div>
    
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>

    </div>
    

    
  );
}

export default App;
