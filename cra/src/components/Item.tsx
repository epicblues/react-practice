import React from "react";

interface propObj {
  item: string,
  checked: boolean
}

const Item = ({ item, checked }: propObj) => { // 매개변수로 props 전달 및 구조 분해
  console.log(item);
  return (
    <h3>
      My Item : {item} {checked && <b>*</b>}
      {/* 조건부 렌더링 : 논리 연산자 이용 && 뒤의 표현식은 당연히 true를 리턴하니까 */}


    </h3>);
};

export default Item;
