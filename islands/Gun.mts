import { signal } from "@preact/signals";
import Gun from "gun";

export default signal(Gun(["http://localhost:8765/gun"]));
