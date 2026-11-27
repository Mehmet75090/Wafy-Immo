export const AGENT_PRICING = {
  trial: {
    priceMad: 0,
    durationDays: 30,
    prospectLimit: 30,
    propertyLimit: 5,
  },
  subscription: {
    startingPriceMad: 250,
    monthlyProspectLimit: 100,
  },
} as const;
