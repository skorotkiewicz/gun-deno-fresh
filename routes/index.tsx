import Counter from "../islands/Counter.tsx";
import GunPaste from "../islands/Paste.tsx";

export default function Home() {
  return (
    <div>
      <img
        src="/logo.svg"
        width="128"
        height="128"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />

      <Counter start={3} />
      <GunPaste />
    </div>
  );
}
