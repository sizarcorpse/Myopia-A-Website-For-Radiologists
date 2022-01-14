import { merge } from "lodash";
import Autocomplete from "./Autocomplete";

export default function ComponentsOverrides(theme) {
  return merge(Autocomplete(theme));
}
