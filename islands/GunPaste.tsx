// deno-lint-ignore-file no-explicit-any
import { useEffect, useRef, useState } from "preact/hooks";
import Gun from "./Gun.mts";

export default function Counter() {
  const gun = Gun.value;

  const [paste, setPaste] = useState("");
  const copy = useRef(gun.get("test").get("paste"));

  useEffect(() => {
    copy.current.on((data: any) => {
      setPaste(data);
    });
  }, []);

  return (
    <div>
      <textarea
        id="paste"
        placeholder="paste here!"
        value={paste}
        onChange={(e: any) => {
          copy.current.put(e.target.value);
        }}
      >
      </textarea>
    </div>
  );
}
