type WebSetting = {
  id: number;
  venueId: number;
  bannerImage: string;
  backgroundColour: string;
  primaryColour: string;
  primaryColourHover: string;
  navBackgroundColour: string;
};

export type Restaurant = {
  id: number;
  name: string;
  internalName: string;
  description: null;
  liveFlag: number;
  demoFlag: number;
  address1: string;
  address2: string;
  address3: null;
  city: string;
  county: string;
  postcode: string;
  country: string;
  timezoneOffset: string;
  locale: string;
  timeZone: string;
  webSettings: WebSettings;
  ccy: string;
  ccySymbol: string;
  currency: string;
};
