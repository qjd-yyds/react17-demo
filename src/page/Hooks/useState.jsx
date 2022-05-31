import React, { useState } from 'react';

function UseState() {
  // ! 初始化数据，当数据变化的时候，重新执行render函数
  const [count, setcount] = useState(0);
  return (
    <div>
      <p>点击的次数---{count}</p>
      <button onClick={() => setcount(count + 1)}>点一下</button>
    </div>
  );
}

export default UseState;
