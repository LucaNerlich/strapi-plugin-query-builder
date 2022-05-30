module.exports = ({env}) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '47e7ea9786c3576e3c3ee7632b4ddd0a'),
  },
  watchIgnoreFiles: [
    '**/config/sync/**',
  ],
  apiToken: {
    salt: env('API_TOKEN_SALT', '581f377575a900ea9bd3f9b68b947c9a'),
  },
})
