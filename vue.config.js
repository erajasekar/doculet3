module.exports = {
  pluginOptions: {
    s3Deploy: {
      region: 'us-east-1',
      bucket: 'doculet3',
      assetPath: 'dist',
      deployPath: '/',
      pwa: true,
      pwaFiles: 'service-worker.js',
      enableCloudfront: false,
      cloudfrontId: 'AIXXXXXXXX',
      cloudfrontMatchers: '/index.html,/styles/*.css,/*.png',
      uploadConcurrency: 5
    }
  }
}