import {
  tv
} from "./chunk-TX3FPB7D.mjs";
import {
  dataFocusVisibleClasses
} from "./chunk-3HKZRFKK.mjs";

// src/components/user.ts
var user = tv({
  slots: {
    base: [
      "inline-flex items-center justify-center gap-2 rounded-small outline-hidden",
      // focus ring
      ...dataFocusVisibleClasses
    ],
    wrapper: "inline-flex flex-col items-start",
    name: "text-small text-inherit",
    description: "text-tiny text-foreground-400"
  }
});

export {
  user
};
