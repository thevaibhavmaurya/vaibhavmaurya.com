import { USER } from "@/data/user";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://vaibhavmaurya.com",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const UTM_PARAMS = {
  utm_source: "vaibhavmaurya.com",
  utm_medium: "referral",
  utm_campaign: "portfolio",
};

export const GITHUB_USERNAME = "thevaibhavmaurya";
export const SOURCE_CODE_GITHUB_REPO = "thevaibhavmaurya/vaibhavmaurya.com";
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/thevaibhavmaurya/vaibhavmaurya.com";
