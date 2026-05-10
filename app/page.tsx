"use client";

import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";
import { puckConfig } from "../puck/config";
import type { Data } from "@measured/puck";

const initialData: Data = {
  content: [],
  root: { props: {} },
};

export default function EditorPage() {
  return (
    <Puck
      config={puckConfig}
      data={initialData}
      onPublish={async (data) => {
        console.log("Published:", JSON.stringify(data, null, 2));
      }}
    />
  );
}
