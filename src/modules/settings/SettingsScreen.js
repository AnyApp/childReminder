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
import SettingsHeader from './components/SettingsHeader';
import { ButtonGroup } from 'react-native-elements';

class SettingsScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: 2
		};
		this.updateIndex = this.updateIndex.bind(this);
	}

	updateIndex(selectedIndex) {
		this.setState({ selectedIndex });
	}

	render() {
		const buttons = ['אנשי קשר', 'שעת הגן', 'פרטי משתמש']
		const { selectedIndex } = this.state;
		return (
			<ScrollView contentContainerStyle={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
				<ButtonGroup
					onPress={this.updateIndex}
					selectedIndex={selectedIndex}
					buttons={buttons}
					containerStyle={{ height: 50, flex: 1, justifyContent: 'space-between' }}
					buttonStyle={{ padding: 10 }}
				/>
				<View style={{ flex: 15 }}>
					<Text>asdfasdfasdfdsa</Text>
				</View>
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
