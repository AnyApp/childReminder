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
import DateTimePicker from 'react-native-modal-datetime-picker';

// import * as moviesActions from './movies.actions';

class SettingsTime extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDateTimePickerVisible: false,
			time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
		};

		this._handleDatePicked = this._handleDatePicked.bind(this);
		this._hideDateTimePicker = this._hideDateTimePicker.bind(this);
		this._showDateTimePicker = this._showDateTimePicker.bind(this);
	}

	_showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

	_hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

	_handleDatePicked = (date) => {
		this.setState( { time: date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) })
    	this._hideDateTimePicker();
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.timeContainer}>
					<Text style={styles.txt}>שעת השארת הילד בגן</Text>
					<View style={styles.timeInputContainer}>
						<TouchableHighlight style={styles.timeInput} underlayColor='#fff' onPress={this._showDateTimePicker}>
							<Text style={styles.timeTxt}>
								{this.state.time}
							</Text>
						</TouchableHighlight>
					</View>
				</View>
				<DateTimePicker
					isVisible={this.state.isDateTimePickerVisible}
					onConfirm={this._handleDatePicked}
					onCancel={this._hideDateTimePicker}
					mode="time"
					is24Hour="true"
				/>
			</View>
		);
	}
}

SettingsTime.propTypes = {
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
		alignItems: 'stretch',
		marginRight: 20,
		marginLeft: 20
	},
	timeContainer: {
		marginTop: 30
	},
	timeInputContainer: {
		marginTop: 15,
		flexDirection: 'row',
		justifyContent: 'center'
	},
	timeInput: {
		backgroundColor: 'rgb(227, 236, 253)',
		borderRadius:10,
		borderWidth: 1,
		borderColor: '#fff',
		marginRight:40,
		marginLeft:40,
		marginTop:10,
		paddingTop:1,
		paddingBottom:1,
		paddingLeft: 20,
		paddingRight: 20,
	},
	timeTxt: {
		color: 'rgb(95, 135, 238)',
		fontSize: 70
	},
	txt: {
		textAlign: 'right',
		color: 'grey',
		fontSize: 19
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsTime);
