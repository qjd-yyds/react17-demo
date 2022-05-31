import React, { useState, useMemo } from 'react';
function UseMemo() {
  const [text, setText] = useState('测试');
  function fib(n) {
    console.log('计算');
    if (n === 1 || n === 2) {
      return 1;
    }
    return fib(n - 1) + fib(n - 2);
  }
  // !每次render会重新执行fib方法，可以使用useMemo来优化
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const num = useMemo(() => fib(10), []);
  return (
    <div>
      <span>useMemo</span>
      <span>{num}</span>
      <span>{text}</span>
      <hr />
      <button onClick={() => setText(text + 'a')}>改变text 引起render</button>
    </div>
  );
}

export default UseMemo;
