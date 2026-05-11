import type { Data } from "@measured/puck";
import { landingPagePreset } from "./presets/landingPage";
import type { PuckProps, PuckRootProps } from "./config";

export const defaultPuckData: Partial<Data<PuckProps, PuckRootProps>> =
  landingPagePreset as Partial<Data<PuckProps, PuckRootProps>>;
