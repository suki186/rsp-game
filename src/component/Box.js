import React from 'react'

const Box = (props) => {
  return (
    <div className='box'>
        <h1>{props.title}</h1>

        {/* 처음에는 img가 null이기 때문에 에러 방지로 props.item이 true일 때만 이미지 출력하도록 */}
        <img className='item-img' src={props.item && props.item.img}/>

        <h2>WIN</h2>
    </div>
  );
}

export default Box