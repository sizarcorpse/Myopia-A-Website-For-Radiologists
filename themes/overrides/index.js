import { merge } from "lodash";
import Autocomplete from "./Autocomplete";
import Container from "./Container";

export default function ComponentsOverrides(theme) {
  return merge(Autocomplete(theme), Container(theme));
}
