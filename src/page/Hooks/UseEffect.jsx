import React, { useState, useEffect } from 'react';

function UseEffect() {
  const [count, setCount] = useState(0);
  console.log('render');
  // ! 可以在useEffect中添加副作用，当依赖发生变化重新执行，相当于vue里的watchEffect
  useEffect(() => {
    document.title = '点击的次数---' + count;
    return function cleanUp() {
      console.log('依赖每次组件render后 重新执行一次');
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <p>点击的次数---{count}</p>
      <button onClick={() => setCount(count + 1)}>点击变换题目</button>
    </div>
  );
}

export default UseEffect;
