import React, { PropTypes, Component } from 'react';
import {
	ScrollView,
	Text,
	TouchableOpacity,
	TouchableHighlight,
    View,
	StyleSheet,
	Button
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


// import * as moviesActions from './movies.actions';

class SettingsHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<Button title="אנשי קשר"></Button>
				<Button title="שעת הגן"></Button>
				<Button title="פרטי משתמש"></Button>
			</View>
		);
	}
}

SettingsHeader.propTypes = {
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

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsHeader);
