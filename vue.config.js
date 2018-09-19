module.exports = {
  pluginOptions: {
    s3Deploy: {
      region: 'us-east-1',
      bucket: 'doculet3',
      assetPath: 'dist',
      deployPath: '/',
      pwa: false,
      pwaFiles: 'service-worker.js',
      enableCloudfront: true,
      cloudfrontId: 'E32QXMDDP95RZX',
      cloudfrontMatchers: '/index.html,/styles/*.css,/*.png',
      uploadConcurrency: 5
    }
  }
}