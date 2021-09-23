

interface propObj {
  item: string,
  checked: boolean,
}





const Item = ({ item, checked }: propObj) => { // 매개변수로 props 전달 및 구조 분해

  return (
    <h3>
      My Item : {item} {checked && <b>*</b>}
      {/* 조건부 렌더링 : 논리 연산자 이용 && 뒤의 표현식은 boolean에 상관 없이 무조건 값을 리턴하니까 해당 값 혹은 객체가 결과값으로 나온다. */}


    </h3>);
};

export default Item;
