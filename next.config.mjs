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
};

export default withNextIntl(nextConfig);

// bundle identify => com.stecsmobile.stecs <= com.stecs.stecsapp

// team id and bundle id
