import React, { useState } from 'react';
export default function UseTransition() {
  const [count, setCount] = useState(0);
  // ! react 18新增
  // const [isPending, startTransition] = useTransition();
  // console.log(isPending, startTransition);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}
