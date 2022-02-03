import { merge } from "lodash";
import Autocomplete from "./Autocomplete";
import Container from "./Container";
import MuiTooltip from "./MuiTooltip";

export default function ComponentsOverrides(theme) {
  return merge(Autocomplete(theme), Container(theme), MuiTooltip(theme));
}
