// const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  purge: {
    // purge: isProduction,
    content: ['./src/**/*.{ts,tsx,scss}'],
  },
}
