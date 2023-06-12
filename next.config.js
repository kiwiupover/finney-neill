/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
    appDir: true,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  async redirects() {
    return [
      {
        source: '/meet-birth-doulas',
        destination: '/birth-doulas',
        permanent: true,
      },
      {
        source: '/birth-doulas/courtney-byers',
        destination: '/birth-doulas',
        permanent: true,
      },
      {
        source: '/birth-doulas/katy-carter',
        destination: '/katy-carter',
        permanent: true,
      },
      {
        source: '/birth-doulas/hayley-mckie',
        destination: '/hayley-mckie',
        permanent: true,
      },
      {
        source: '/birth-doulas/kylie-tschida',
        destination: '/kylie-tschida',
        permanent: true,
      },
      {
        source: '/birth-doulas/jen-laird',
        destination: '/jen-laird',
        permanent: true,
      },
      {
        source: '/birth-doulas/molly-peebles',
        destination: '/molly-peebles',
        permanent: true,
      },
      {
        source: '/jen',
        destination: '/jen-laird',
        permanent: true,
      },
      {
        source: '/birth-doulas/maddie-carroll',
        destination: '/birth-doulas',
        permanent: true,
      },
      {
        source: '/maddie-carroll',
        destination: '/birth-doulas',
        permanent: true,
      },
      {
        source: '/birth-doulas/sheil-dodge',
        destination: '/birth-doulas',
        permanent: true,
      },
      {
        source: '/sheil-dodge',
        destination: '/birth-doulas',
        permanent: true,
      },
      {
        source: '/new-page',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/morganrasey',
        destination: '/birth-doulas',
        permanent: true,
      },
      {
        source: '/stevie-norman',
        destination: '/birth-doulas',
        permanent: true,
      },
      {
        source: '/angela-hodge',
        destination: '/birth-doulas',
        permanent: true,
      },
      {
        source: '/maddie-carrrol',
        destination: '/birth-doulas',
        permanent: true,
      },
      {
        source: '/jen-and-alise',
        destination: '/jen-laird',
        permanent: true,
      },
      {
        source: '/morgan',
        destination: '/birth-doulas',
        permanent: true,
      },
      {
        source: '/scheduling',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/sheil-dodge-birth-doula',
        destination: '/birth-doulas',
        permanent: true,
      },
      {
        source: '/katy-carter-1',
        destination: '/katy-carter',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/about-us-old',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/courtney-byers',
        destination: '/birth-doulas',
        permanent: true,
      },
      {
        source: '/terms-of-services',
        destination: '/terms-of-service',
        permanent: true,
      },
      {
        source: '/about-us-jenandalise',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/cart',
        destination: '/birth-doulas',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
