"use client";

import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";
import { config } from "@/puck/config";

const initialData = {
  content: [],
  root: { props: {} },
};

export default function Page() {
  return (
    <Puck
      config={config}
      data={initialData}
      onPublish={async (data) => {
        console.log("Published:", data);
      }}
    />
  );
}
