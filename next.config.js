/** @type {import('next').NextConfig} */

// const withPWA = require('next-pwa')

// const nextConfig = withPWA({
//     dest: 'public',
//     register: true,
//     skipWaiting: true,
//     disable: process.env.NODE_ENV === 'development',
// })

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    }
}

module.exports = nextConfig

// module.exports = nextConfig({
//     images: {
//         unoptimized: true
//     }
// })
