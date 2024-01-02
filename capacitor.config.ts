import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dss.bibliaflix',
  appName: 'biblia-flix',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
