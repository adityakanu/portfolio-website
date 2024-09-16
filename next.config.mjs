/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.postimg.cc',
                port: '',
                pathname: '/**',
            },
        ],
        domains: [
            "api.microlink.io", // Microlink Image Preview
        ],
    },
};

export default nextConfig;
