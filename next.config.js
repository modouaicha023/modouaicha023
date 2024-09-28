/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: false
    },
    async headers() {
        return [
            {
                source: '/_next/static/fonts/(.*)',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*',
                    },
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
    env: {
        NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
    },
}

module.exports = nextConfig
