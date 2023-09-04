// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/static',
                permanent: true,
            },
        ]
    },
    images: {
        domains: ["images.unsplash.com", "images.ctfassets.net"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.ctfassets.net",
            },
        ],
    }
}

export default withPlaiceholder(nextConfig);
