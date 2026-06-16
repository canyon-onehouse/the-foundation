import Script from "next/script";
import { GIVEBUTTER_SCRIPT_SRC } from "@/lib/givebutter";

/** Loads the Givebutter widgets library, which registers the <givebutter-widget>
 *  custom element and binds any element carrying data-gb-account / data-gb-campaign. */
export function GivebutterScript() {
  return <Script src={GIVEBUTTER_SCRIPT_SRC} strategy="afterInteractive" />;
}
