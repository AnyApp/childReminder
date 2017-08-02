/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';

import Drawer from './modules/_global/Drawer';
import ReminderScreen from './modules/reminder/ReminderScreen';
import SettingsScreen from './modules/settings/SettingsScreen';

export function registerScreens(store, Provider) {
	Navigation.registerComponent('childReminder.ReminderScreen', () => ReminderScreen, store, Provider);
	Navigation.registerComponent('childReminder.SettingsScreen', () => SettingsScreen, store, Provider);
	Navigation.registerComponent('childReminder.Drawer', () => Drawer);
}
