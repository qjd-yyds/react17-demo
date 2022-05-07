import React, { useState, useEffect } from 'react';

function UseEffect() {
  const [count, setcount] = useState(0);
  console.log('render');
  useEffect(() => {
    document.title = '点击的次数---' + count;
    return function cleanUp() {
      console.log('依赖每次组件render后 重新执行一次');
    };
  }, []);
  return (
    <div>
      <p>点击的次数---{count}</p>
      <button onClick={() => setcount(count + 1)}>点击变换题目</button>
    </div>
  );
}

export default UseEffect;
