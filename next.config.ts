/** @type {import('next').NextConfig} */
import type { Configuration } from 'webpack';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['three'],
  webpack: (config: Configuration) => {
    if (!config.externals) {
      config.externals = [];
    } else if (!Array.isArray(config.externals)) {
      config.externals = [config.externals];
    }
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil',
    });
    return config;
  },
}

export default nextConfig
