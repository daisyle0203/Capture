export default {
    mongodbMemoryServerOptions: {
      binary: {
        version: '4.0.3',
        skipMD5: true,
      },
      instance: {},
      autoStart: false,
    },
    mongoURLEnvName: 'CONNECTION_URL',
  };