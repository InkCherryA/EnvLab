// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  
})

module.exports = {
  configureWebpack: {
    module: {
      loaders: [
        {
          test: /\.glsl$/,
          loader: 'ts-shader-loader'
        }
      ],
    },
  },
  server: {
    port: 3000,
    host: '184.72.214.248',
  },
};

