
// Learn more https://docs.expo.io/guides/customizing-metro
//const { getDefaultConfig } = require('expo/metro-config');

///** @type {import('expo/metro-config').MetroConfig} */
//const config = getDefaultConfig(__dirname);
//defaultConfig.resolver.sourceExts.push('cjs');
//defaultConfig.resolver.assetExts.push('cjs'); 

//module.exports = defaultConfig; 
//module.exports = {};

const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.push('cjs');

module.exports = config;
