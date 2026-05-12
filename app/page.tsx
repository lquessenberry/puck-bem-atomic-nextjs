"use client";

import { config, type PuckProps, type PuckRootProps } from "@/puck/config";
import { defaultPuckData } from "@/puck/defaults";
import type { Data } from "@puckeditor/core";
import { Puck } from "@puckeditor/core";
import "@puckeditor/core/puck.css";

export default function Page() {
  const initialData: Partial<Data<PuckProps, PuckRootProps>> = defaultPuckData;

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
