import React from 'react';
import Navigator from './routes/homeStack';
import './config/StatusBarConfig';

const App = () => <Navigator />;
export default App;

//Go to the dir YOUR_PROJECT_PATH/node_modules/react-native-safe-area-view/index.js and update:

//from:

//this.view._component.measureInWindow((winX, winY, winWidth, winHeight) => {
//to:

//this.view.getNode().measureInWindow((winX, winY, winWidth, winHeight) => {
