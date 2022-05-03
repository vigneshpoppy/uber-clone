import sanityClient from '@sanity/client'

export const client = sanityClient({
  // projectId: process.env.SANITY_PROJECT_ID,
  // dataset: 'production',
  // apiVersion: 'v1',
  // token: process.env.SANITY_TOKEN,
  // useCdn: false,
  projectId: "7vp12qhk",
  dataset: 'production',
  apiVersion: 'v1',
  token: "skuwO3ov0jKfQwOAwYKHLvahzng6r3ALn29xPw6TrEaOfPcXz9unZ2Noo2dLCPj9HmVFrE1FO1zqaQsNIVvJBTCvFZqekmzbW8hB0CMI6DpC8SZ23GlPihmtiOk2P3SWcj5mwwHZutO0HpAbEeLV8xWDNQwhkZ2PQFpdd1CY6fOlZpEqbnJ3",
  useCdn: false,
 
})
