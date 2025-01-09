import {useRef} from "react";

// export default function MyComponent() {
//   const inputRef = useRef(null);
//
//   const focusInput = () => {
//     inputRef.current.focus();
//   };
//
//   return (
//     <>
//       <input ref={inputRef} type="text" />
//       <button onClick={focusInput}>Focus Input</button>
//     </>
//   );
// }

export default function MyComponent() {
  const timerRef = useRef(0);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      console.log('Timer running');
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  return (
    <>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </>
  );
}
