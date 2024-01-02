import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dss.bibliaflix',
  appName: 'biblia-flix',
  webDir: 'out',
  server: {
    androidScheme: 'https',
    // cleartext: true,
    // url: 'http://192.168.0.6:3000'
  }
};

export default config;
