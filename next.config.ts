
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      // Per user request, if they intended to use ibb.co - however, I will stick to placehold.co for now.
      // If actual ibb.co links are provided, this entry would be activated.
      // {
      //   protocol: 'https',
      //   hostname: 'i.ibb.co',
      //   port: '',
      //   pathname: '/**',
      // },
    ],
  },
};

export default nextConfig;
