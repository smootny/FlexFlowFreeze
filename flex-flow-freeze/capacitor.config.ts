import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.treningtools.app',
  appName: 'Trening Tools',
  webDir: 'dist/flex-flow-freeze',
  bundledWebRuntime: false,
  cordova: {
    preferences: {},
    enabled: false 
  },
  server: {
    url: 'http://192.168.100.56:4200',
    cleartext: true
  }
};

export default config;
