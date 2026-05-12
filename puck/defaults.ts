import type { Data } from "@puckeditor/core";
import type { PuckProps, PuckRootProps } from "./config";
import { landingPagePreset } from "./presets/landingPage";

export const defaultPuckData: Partial<Data<PuckProps, PuckRootProps>> =
  landingPagePreset as unknown as Partial<Data<PuckProps, PuckRootProps>>;
