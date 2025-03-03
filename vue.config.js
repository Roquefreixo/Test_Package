const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  configureWebpack: {
    experiments: {
      asyncWebAssembly: true,
    },
    resolve: {
      alias: {
        "@cornerstonejs/tools": "@cornerstonejs/tools/dist/umd/index.js"
      }
    }
  },
  devServer: {
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
      "Access-Control-Allow-Origin": "*"    
    }
  }
})
