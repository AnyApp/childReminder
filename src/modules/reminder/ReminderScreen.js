import React, { PropTypes, Component } from 'react';
import {
	RefreshControl,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
	Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import * as moviesActions from './movies.actions';
import ProgressBar from '../_global/ProgressBar';
// import styles from './styles/Movies';
import { iconsMap } from '../../utils/AppIcons';

class ReminderScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<ScrollView contentContainerStyle={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
				<Text>1</Text>
                <Text>2</Text>
                <Text>3</Text>
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
