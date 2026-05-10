import { Puck } from "@measured/puck";
import { config } from "@/puck/config";
import "@measured/puck/dist/style.css";

export default function Page() {
  return <Puck config={config} />;
}
