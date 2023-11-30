/** @type {import('next').NextConfig} */

const withPwa = require('next-pwa')

const nextConfig = withPwa({
    dest: 'public',
    register: true,
    skipWaiting: true
})

module.exports = nextConfig
