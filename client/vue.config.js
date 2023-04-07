const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    // Ket noi cong 5000 ben phia server
    proxy: "http://localhost:5000",
  }
})
