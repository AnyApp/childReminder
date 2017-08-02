/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { registerScreens } from './screens';

import { iconsMap, iconsLoaded } from './utils/AppIcons';
import configureStore from './store/configureStore';

const store = configureStore();

registerScreens(store, Provider);

const navigatorStyle = {
	navBarTranslucent: true,
	drawUnderNavBar: true,
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	statusBarTextColorScheme: 'light',
	drawUnderTabBar: true
};

class App extends Component {
	constructor(props) {
		super(props);
		iconsLoaded.then(() => {
			this.startApp();
		});
	}

	startApp() {
		Navigation.startSingleScreenApp({
			screen: {
				screen: 'childReminder.ReminderScreen', // unique ID registered with Navigation.registerScreen
				title: 'Child Reminder', // title of the screen as appears in the nav bar (optional)
				navigatorStyle: {navBarBackgroundColor: 'blue'}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
				navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
			},
			drawer: { // optional, add this if you want a side menu drawer in your app
				right: { // optional, define if you want a drawer from the right
					screen: 'childReminder.Drawer', // unique ID registered with Navigation.registerScreen
					passProps: {} // simple serializable object that will pass as props to all top screens (optional)
				},
				style: { // ( iOS only )
					drawerShadow: true, // optional, add this if you want a side menu drawer shadow
					contentOverlayColor: 'rgba(0,0,0,0.25)', // optional, add this if you want a overlay color when drawer is open
					rightDrawerWidth: 66 // optional, add this if you want a define right drawer width (50=percent)
				},
				disableOpenGesture: false // optional, can the drawer be opened with a swipe instead of button
			},
			passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
			animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
		});
	}
}

export default App;
