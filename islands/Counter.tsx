import { useEffect, useRef, useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import Gun from "./Gun.mts";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const gun = Gun.value;
  const myCount = useRef(gun.get("test").get("counter"));
  const [count, setCount] = useState(props.start);

  useEffect(() => {
    myCount.current.on((data: number) => {
      setCount(data);
    });
  }, []);

  return (
    <div>
      <p>{count}</p>
      <Button
        onClick={() => {
          myCount.current.put(count - 1);
        }}
      >
        -1
      </Button>
      <Button
        onClick={() => {
          myCount.current.put(count + 1);
        }}
      >
        +1
      </Button>
    </div>
  );
}
