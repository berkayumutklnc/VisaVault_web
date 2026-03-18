type AnalyticsEvent = {
  name: string;
  properties?: Record<string, string | number | boolean>;
};

/**
 * Lightweight analytics helper.
 * Replace the internal implementation with your preferred provider
 * (e.g., Plausible, PostHog, Google Analytics) when ready.
 * 
 * Usage:
 *   trackEvent({ name: "demo_form_submit", properties: { source: "hero" } })
 */
export function trackEvent({ name, properties }: AnalyticsEvent) {
  // Development logging
  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics Event]", name, properties);
  }

  // TODO: integrate analytics provider
  // Example: posthog.capture(name, properties);
  // Example: plausible(name, { props: properties });
}

// Predefined event names for consistency
export const EVENTS = {
  DEMO_FORM_SUBMIT: "demo_form_submit",
  PILOT_FORM_SUBMIT: "pilot_form_submit",
  CTA_CLICK_DEMO: "cta_click_demo",
  CTA_CLICK_PILOT: "cta_click_pilot",
  FAQ_EXPAND: "faq_expand",
} as const;
