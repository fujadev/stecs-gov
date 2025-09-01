import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/config/locale/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  eslint: {
    // This disables ESLint during the build
    ignoreDuringBuilds: true,
  },
    typescript: {
    ignoreBuildErrors: true,
  },
};

export default withNextIntl(nextConfig);

// bundle identify => com.stecsmobile.stecs <= com.stecs.stecsapp


// {
//     "applinks": {
//         "details": [
//             {
//                 "appIDs": ["3U7Y568CL7.com.stecsmobile.stecs"],
//                 "components": [
//                     {
//                         "/": "/ramadan/*",
//                         "exclude": true,
//                         "comment": "Matches any URL with a path that starts with /ramadan/ and instructs the system not to open it as a universal link."
//                     }
//                 ]
//             }
//         ]
//     }
// }


// "details": [
//         {
//           "appID": "3U7Y568CL7.com.stecsmobile.stecs",
//           "paths": [
//             "*"
//           ]
//         }
//       ]