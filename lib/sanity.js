import sanityClient from '@sanity/client'

export const client = sanityClient({
  //  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  //  dataset: 'production',
  //  apiVersion: 'v2021-03-25',
  //  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  //  useCdn: false,
   projectId: "7vp12qhk",
  dataset: 'production',
  apiVersion: 'v1',
  token: "skKvtZoaKoy9BetrHnQ8HTVnO1nz1QaQh8jrmxRdOlA2EW36JKVez9fkKivHb44YPXZMYUCMHTrIwAZsOgG2NKeytmNgyPq9ts0zGyXXjZzkUrs9mBEcJ7kPRV7h4Gm9Bf0W6cpi9EW0RKgF8GeO0y0ZEBu2fgoSGgKUkEyK94VNwifuh2cx",
  useCdn: false,
})
