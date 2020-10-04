// For more info: https://github.com/vercel/next.js/tree/canary/examples/with-next-seo
// Uses this module: https://github.com/garmeeh/next-seo#default-seo-configuration
export default {
  openGraph: {
    type: 'website',
    locale: 'en',
    url: process.env.NEXT_PUBLIC_URL,
    site_name: process.env.NEXT_PUBLIC_SITE_NAME,
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};
