/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  experimental: {
    esmExternals: true,
  },
  transpilePackages: ['@splinetool/react-spline', '@splinetool/runtime'],
  webpack: (config) => {
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@splinetool/react-spline$': path.resolve(
        __dirname,
        'node_modules/@splinetool/react-spline/dist/react-spline.js',
      ),
    }
    if (config.resolve?.conditionNames && !config.resolve.conditionNames.includes('import')) {
      config.resolve.conditionNames.unshift('import')
    }
    return config
  },
}

module.exports = nextConfig
