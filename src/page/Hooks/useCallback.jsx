import React, { useState, memo, useCallback } from 'react';
const Child = memo(props => {
  const { callback } = props;
  console.log('render');
  return <div onClick={callback}>大家好</div>;
});
export default function Usecallback() {
  const [num, setNum] = useState(0);
  console.log('render-father');
  function test() {
    console.log(11);
  }
  //! 每次父组件render后，产生的函数是一个新的引用
  const callback = useCallback(test, []);
  return (
    <>
      <span>{num}</span>
      <Child name="child" callback={callback}></Child>
      <button onClick={() => setNum(num + 1)}>+1</button>
    </>
  );
}
