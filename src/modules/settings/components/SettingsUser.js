import React, { PropTypes, Component } from 'react';
import {
    View,
	StyleSheet,
	TextInput, 
	Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import * as moviesActions from './movies.actions';

class SettingsUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			childName: ''
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<Text style={styles.txt}>שם פרטי</Text>  
					<TextInput
						style={styles.input}
						onChangeText={(text) => this.setState({ firstName: text })}
						value={this.state.firstName}
					/>
				</View>
				<View style={styles.inputContainer}>
					<Text style={styles.txt}>שם משפחה</Text>
					<TextInput
						style={styles.input}
						onChangeText={(text) => this.setState({ lastName: text })}
						value={this.state.lastName}
					/>
				</View>
				<View style={styles.inputContainer}>
					<Text style={styles.txt}>שם הילד</Text>
					<TextInput
						style={styles.input}
						onChangeText={(text) => this.setState({ childName: text })}
						value={this.state.childName}
					/>
				</View>
			</View>
		);
	}
}

SettingsUser.propTypes = {
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
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'stretch'
	},
	inputContainer: {
		height: 65,
		marginTop: 30,
		marginRight: 20,
		marginLeft: 20
	},
	txt: {
		textAlign: 'right',
		color: 'grey',
		fontSize: 19
	},
	input: {
		flex: 1,
		borderColor: 'white',
		borderWidth: 0.3,
		textAlign: 'right',
		marginTop: 5,
		shadowColor: 'grey',
		shadowOffset: { width: 0.1, height: 0.3 },
		shadowOpacity: 0.6,
		shadowRadius: 0.2
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsUser);
