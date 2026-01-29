module.exports = {
    async rewrites() {
      if (!process.env.NEXT_PUBLIC_SERVER_URL) {
        return [];
      }
      return [
          {
              source : '/:path*',
              destination : `${process.env.NEXT_PUBLIC_SERVER_URL}/:path*`
          }
      ]
    },
    output: 'standalone'
};