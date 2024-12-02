import { registerRootComponent } from 'expo';
//import {Text, View} from 'react-native';

import App from './App';
//export default function App() {
//export default function Index() {
  

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
