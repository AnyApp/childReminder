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
import styles from './styles/ReminderScreen';
import { iconsMap } from '../../utils/AppIcons';

class ReminderScreen extends Component {
	constructor(props) {
		super(props);
		this.props.navigator.setStyle({
			navBarBackgroundColor: 'rgb(95, 135, 238)'
		});
		this.state = {
			buttonOn: false,
			uri: require('../../images/buttonOff.png')
		};
		this._offImage = require('../../images/buttonOff.png');
		this._onImage = require('../../images/buttonOn.png');
		this.onPressButton = this._onPressButton.bind(this);
		this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
	}

	onNavigatorEvent(event) {
		console.log(JSON.stringify(event));
		if (event.type === 'DeepLink') {
			this.props.navigator.push({
				screen: event.link,
				title: event.payload.title,
				animated: event.payload.animated,
				animationType: event.payload.animationType,
				backButtonHidden: event.payload.backButtonHidden
			});
		}
	}

	_onPressButton() {
		this.setState(
			{
				buttonOn: !this.state.buttonOn,

			}
		);
		let imageUrl = this._offImage;
		if (this.state.buttonOn) {
			imageUrl = this._onImage;
		}

		this.setState(
			{
				uri: imageUrl
			}
		);
	}

	render() {
		return (
			<ScrollView style={{ backgroundColor: 'rgb(95, 135, 238)' }} contentContainerStyle={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
				<TouchableHighlight onPress={this.onPressButton}>
					<Image
						style={styles.image}
						source={this.state.uri}
					/>
				</TouchableHighlight>
			</ScrollView>
		);
	}
}

ReminderScreen.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ReminderScreen);
