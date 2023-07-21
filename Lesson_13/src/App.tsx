import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  MouseEvent,
  KeyboardEvent,
} from "react";

interface User {
  id: number;
  username: string;
}

type fibFunction = (n: number) => number;
const fib: fibFunction = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

// const myNum: number = 37;

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  // const inputRef = useRef<HTMLInputElement>(null);

  // console.log(inputRef?.current);
  // console.log(inputRef?.current?.value);

  useEffect(() => {
    console.log("Mounting");
    console.log("Users ", users);

    return () => console.log("Unmounting");
  }, [users]);

  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => setCount((prev) => prev + 2),
    []
  );

  const result = useMemo(() => fib(count), [count]);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>Fibonaci number: {result}</h2>
      {/* <input ref={inputRef} type="text"/> */}
    </div>
  );
}

export default App;
