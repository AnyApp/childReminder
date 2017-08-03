import React, { Component, PropTypes } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles/Drawer';

class Drawer extends Component {
	constructor(props) {
		super(props);

		this._openSettings = this._openSettings.bind(this);
		this._openAbout = this._openAbout.bind(this);
	}

	_openAbout() {
		this._toggleDrawer();
		this.props.navigator.handleDeepLink({
			screen: 'childReminder.AboutScreen',
			title: 'אודות', // navigation bar title of the pushed screen (optional)
			animated: true, // does the push have transition animation or does it happen immediately (optional)
			animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
			backButtonHidden: false // hide the back button altogether (optional)
		});
	}

	_openSettings() {
		this._toggleDrawer();
		this.props.navigator.handleDeepLink({
			link: 'childReminder.SettingsScreen',
			payload: {
				title: 'הגדרות',
				animated: true,
				animationType: 'fade',
				backButtonHidden: false
			}
		});
	}

	_toggleDrawer() {
		this.props.navigator.toggleDrawer({
			to: 'closed',
			side: 'right',
			animated: true
		});
	}

	render() {
		const iconSettings = (<SimpleLineIcons name="settings" size={26} color="blue" style={styles.drawerListIcon} />);
		const iconInfo = (<Icon name="information-outline" size={26} color="blue" style={styles.drawerListIcon} />);
		const iconContact = (<MaterialIcons name="chat" size={26} color="blue" style={styles.drawerListIcon} />);
		return (
			<View style={styles.container}>
				<Image
					style={styles.logo}
					source={require('../../images/logo.png')}
				/>
				<View style={styles.drawerList}>
					<TouchableOpacity onPress={this._openSettings}>
						<View style={styles.drawerListItem}>
							<Text style={styles.drawerListItemText}>
								הגדרות
							</Text>
							{iconSettings}
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={this._openSettings}>
						<View style={styles.drawerListItem}>
							<Text style={styles.drawerListItemText}>
								אודות
							</Text>
							{iconInfo}
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={this._openSettings}>
						<View style={styles.drawerListItem}>
							<Text style={styles.drawerListItemText}>
								צור קשר
							</Text>
							{iconContact}
						</View>
					</TouchableOpacity>
				</View>
				<Text style={styles._version}>
					{/* 'v1.0.0' */}
				</Text>
			</View>
		);
	}
}

Drawer.propTypes = {
	navigator: PropTypes.object
};

export default Drawer;
