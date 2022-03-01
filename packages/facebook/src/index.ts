import { treat } from "packages/utils";

export interface ShareFacebookOptions {
  app_id: string;
  href: string;
  hashtags: string;
  quote: string;
  mobile_iframe: boolean;
  redirect_uri?: string;
  display?: "page" | "iframe" | "async" | "popup" | "touch";
}

export function shareFacebook({
  app_id,
  redirect_uri,
  display = "page",
  href,
  hashtags,
  quote,
  mobile_iframe = false,
}: ShareFacebookOptions) {
  if (!app_id) {
    throw new TypeError("`app_id` is required");
  }

  const baseUrl = "https://www.facebook.com/dialog/share";
  const appId = `app_id=${app_id}`;
  const hasRedirectUri = redirect_uri && `redirect_uri=${redirect_uri}`;
  const hasDisplay = display && `display=${display}`;
  const hasHref = href && `href=${href}`;
  const hasHashtags = hashtags && `hashtag=${treat(hashtags)}`;
  const hasQuote = quote && `quote=${treat(quote, { replace: "%20" })}`;
  const hasMobileIframe = mobile_iframe && `mobile_iframe=${mobile_iframe}`;
  const arr = [
    appId,
    hasRedirectUri,
    hasDisplay,
    hasHref,
    hasQuote,
    hasHashtags,
    hasMobileIframe,
  ];
  const filtering = arr.filter(Boolean);
  const queries = filtering.join("&");

  return `${baseUrl}?${queries}`;
}
