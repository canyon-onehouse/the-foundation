import { createElement } from "react";
import { GIVEBUTTER_FLOATING_WIDGET_ID } from "@/lib/givebutter";

/** Renders Givebutter's floating donation button. It's a custom element upgraded
 *  by the Givebutter script; createElement avoids JSX intrinsic-element typing. */
export function GivebutterWidget() {
  return createElement("givebutter-widget", {
    id: GIVEBUTTER_FLOATING_WIDGET_ID,
  });
}
