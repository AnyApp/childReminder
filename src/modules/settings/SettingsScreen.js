import React, { PropTypes, Component } from 'react';
import {
	RefreshControl,
	ScrollView,
	Text,
	TouchableOpacity,
	TouchableHighlight,
	View,
	Image,
	Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import * as moviesActions from './movies.actions';
import ProgressBar from '../_global/ProgressBar';
import styles from './styles/SettingsScreen';
import SettingsUser from './components/SettingsUser';
import SettingsTime from './components/SettingsTime';
import SettingsContact from './components/SettingsContact';
import { ButtonGroup, Button } from 'react-native-elements';
import { MessageBar, MessageBarManager } from 'react-native-message-bar';	

class SettingsScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: 0
		};
		this.updateIndex = this.updateIndex.bind(this);
		this.renderState = this.renderState.bind(this);
		this.stateFunctions = {
			0: this.renderContact,
			1: this.renderTime,
			2: this.renderUser
		};

		this.saveSettings = this.saveSettings.bind(this);
	}

	componentDidMount() {
		// Register the alert located on this master page
		// This MessageBar will be accessible from the current (same) component, and from its child component
		// The MessageBar is then declared only once, in your main component.
		MessageBarManager.registerMessageBar(this.refs.alert);
	}

	componentWillUnmount() {
		// Remove the alert located on this master page from the manager
		MessageBarManager.unregisterMessageBar();
	}

	updateIndex(selectedIndex) {
		this.setState({ selectedIndex });
	}


	renderUser() {
		return (
			<SettingsUser />
		);
	}

	renderTime() {
		return (
			<SettingsTime />
		);
	}

	renderContact() {
		return (
			<SettingsContact />
		);
	}

	renderState() {
		return this.stateFunctions[this.state.selectedIndex]();
	}

	saveSettings() {
		MessageBarManager.showAlert({
			message: 'ההגדרות נשמרו בהצלחה',
			alertType: 'success',
			position: 'bottom',
			animationType: 'SlideFromLeft',
			messageStyle: { color: 'white', fontSize: 16, textAlign: 'right' },
			stylesheetSuccess : { backgroundColor : 'blue', strokeColor : '#b40000' } //TODO: change background color
			// See Properties section for full customization
			// Or check `index.ios.js` or `index.android.js` for a complete example
		});
	}

	render() {
		const buttons = ['אנשי קשר', 'שעת הגן', 'פרטי משתמש'];
		const { selectedIndex } = this.state;
		return (
			<ScrollView contentContainerStyle={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
				<ButtonGroup
					onPress={this.updateIndex}
					selectedIndex={selectedIndex}
					buttons={buttons}
					containerStyle={{ height: 50, flex: 1 }}
					buttonStyle={{ padding: 10 }}
				/>
				<View style={{ flex: 13 }}>
					{this.renderState()}
				</View>
				<View style={styles.buttonContainer}>
					<Button buttonStyle={styles.button}
							backgroundColor={"rgb(97, 205, 159)"}
							onPress={this.saveSettings}
  						title='שמור' />
				</View>
				<MessageBar ref="alert" />
			</ScrollView>
		);
	}
}

SettingsScreen.propTypes = {
	// actions: PropTypes.object.isRequired,
	// nowPlayingMovies: PropTypes.object.isRequired,
	// popularMovies: PropTypes.object.isRequired,
	navigator: PropTypes.object
};

function mapStateToProps(state, ownProps) {
	return {
		// nowPlayingMovies: state.movies.nowPlayingMovies,
		// popularMovies: state.movies.popularMovies
	};
}

function mapDispatchToProps(dispatch) {
	return {
		// actions: bindActionCreators(moviesActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
