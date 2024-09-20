import React from "react";
import noting from "../media/noting.png";

const Box = (props) => {
  let result; // 결과
  if (
    props.title === "Com" &&
    props.result !== "Tie" &&
    props.result !== "Ready"
  ) {
    result = props.result === "Win" ? "Lose" : "Win"; // 컴퓨터는 결과의 반대로 출력
  } else {
    result = props.result;
  }

  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>

      {/* 처음에는 img가 null이기 때문에 에러 방지로 props.item이 true일 때만 이미지 출력하도록 */}
      {props.item ? (
        <img className="item-img" src={props.item.img} alt="img" />
      ) : (
        <img className="item-img" src={noting} alt="img" />
      )}

      <h2>{result}</h2>
    </div>
  );
};

export default Box;
