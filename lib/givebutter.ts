/** Givebutter integration config (live production values).
 *  CTAs carry the account + campaign data attributes; the Givebutter widgets
 *  script (loaded in the root layout) binds to them and opens the donation popup. */

export const GIVEBUTTER_ACCOUNT = "BWLFFUVs4GTgmfRz";
export const GIVEBUTTER_CAMPAIGN = "E2ZNIT";
export const GIVEBUTTER_FLOATING_WIDGET_ID = "LYO85B";

export const GIVEBUTTER_SCRIPT_SRC = `https://widgets.givebutter.com/latest.umd.cjs?acct=${GIVEBUTTER_ACCOUNT}&p=other`;

/** Data attributes spread onto any element that should open the donate popup. */
export const givebutterTriggerProps = {
  "data-gb-account": GIVEBUTTER_ACCOUNT,
  "data-gb-campaign": GIVEBUTTER_CAMPAIGN,
} as const;
