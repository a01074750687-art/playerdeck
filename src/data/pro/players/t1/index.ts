import type { ProPlayer } from "../../../../types/proPlayer";

import { buzz } from "./buzz";
import { dh } from "./dh";
import { izu } from "./izu";
import { meteor } from "./meteor";
import { munchkin } from "./munchkin";
import { stax } from "./stax";

export const t1Players: ProPlayer[] = [
  buzz,
  meteor,
  dh,
  izu,
  munchkin,
  stax,
];