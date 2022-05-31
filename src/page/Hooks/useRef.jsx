import React, { useRef, forwardRef } from 'react';
// ! 通过forwardRef可以将ref传递给父组件
const Child = forwardRef((props, ref) => {
  return <button ref={ref}>child btn</button>;
});
export default function UseRef() {
  const spanRef = useRef(null);
  const childRef = useRef(null);
  return (
    <div>
      <button
        onClick={() => {
          const spanel = spanRef.current;
          const childel = childRef.current;
          console.log(childel);
          spanel.innerHTML = 'hahaha';
        }}
      >
        father
      </button>
      <span ref={spanRef}>UseRef</span>
      <hr />
      <Child ref={childRef} />
    </div>
  );
}
