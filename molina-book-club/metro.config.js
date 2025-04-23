
// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('@expo/metro-config');

///** @type {import('expo/metro-config').MetroConfig} */
//const config = getDefaultConfig(__dirname);
//efaultConfig.resolver.sourceExts.push('cjs');
defaultConfig.resolver.assetExts.push('cjs'); 

module.exports = defaultConfig; 
//module.exports = {};
