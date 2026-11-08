// Business details used across the site, in page titles and in the data Google reads.
// Anything left as "" is hidden on the site.
export const site = {
  name: "Ivy and Gray",
  legalName: "Ivy and Gray Ltd.",
  tagline: "Event Decor and Design",
  url: "https://ivyandgray.ca",
  description:
    "Custom decor for South Asian weddings and celebrations. Wedding morning, maiyan, jaggo, gurdwara and reception decor, designed, built and set up by our own team.",

  // Where you work, e.g. "Surrey and the Lower Mainland, BC". Shown in the footer and
  // added to page titles, which helps you show up in local searches.
  serviceArea: "",

  // Public contact details. Leave empty to rely on the consultation form only.
  email: "",
  phone: "",

  // The banner across the top of the home page. Set text to "" to hide it.
  announcement: {
    text: "Now booking 2027 dates",
    linkText: "Reserve yours",
    href: "/contact/",
  },

  // Instagram handle without the @, e.g. "ivyandgray".
  instagram: "",
  // Behold feed ID (behold.so) to show your latest posts. Without it, a "Follow us" link is shown.
  beholdFeedId: "",

  // Google Analytics 4 measurement ID, e.g. "G-XXXXXXXXXX".
  googleAnalyticsId: "",
  // The content value of the meta tag Google Search Console gives you for verification.
  googleSiteVerification: "",
};

export const instagramUrl = site.instagram ? `https://www.instagram.com/${site.instagram}/` : "";
