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
import { Map } from 'immutable';

// import * as moviesActions from './movies.actions';

class SettingsTime extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDateTimePickerVisible: false,
			time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
			days: Map({
				"ה": false,
				"ד": false,
				"ג": false,
				"ב": false,
				"א": false,
				"ש": false,
				"ו": false
			})
		};

		this.render = this.render.bind(this);
		this._handleDatePicked = this._handleDatePicked.bind(this);
		this._hideDateTimePicker = this._hideDateTimePicker.bind(this);
		this._showDateTimePicker = this._showDateTimePicker.bind(this);
		this._toggleDay = this._toggleDay.bind(this);
	}

	_toggleDay(day) {
		return () => {
			console.log(day);
			let days = this.state.days.set(day, !this.state.days.get(day));
			this.setState({
				days: days
			});
		};
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
				<View style={styles.daysContainer}>
					<Text style={styles.txt}>ימי השארת הילד בגן</Text>
					<View style={styles.daysInputContainer}>
						{Object.keys(this.state.days.toObject()).map((keyName, keyIndex) => {
							if (this.state.days.get(keyName) == false){ // the code is crashing over this line
								return (<TouchableHighlight style={styles.dayInputNotChoosen} underlayColor='#fff' onPress={this._toggleDay(keyName)} key={keyIndex}>
									<Text style={styles.dayTxtNotChoosen}>
										{keyName}
									</Text>
								</TouchableHighlight>)
							} else {
								return (<TouchableHighlight style={styles.dayInputChoosen} underlayColor='#fff' onPress={this._toggleDay(keyName)} key={keyIndex}>
									<Text style={styles.dayTxtChoosen}>
										{keyName}
									</Text>
								</TouchableHighlight>)
							}
						})}
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
	daysContainer: {
		marginTop: 45
	},
	dayInputChoosen: {
		backgroundColor: 'rgb(227, 236, 253)',
		borderRadius:5,
		borderWidth: 1,
		borderColor: '#fff',
		paddingTop:1,
		paddingBottom:1,
		paddingLeft: 1,
		paddingRight: 1,
		height: 55,
		width: 55,
		marginLeft: 12,
		marginBottom: 14,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	dayInputNotChoosen: {
		backgroundColor: 'rgb(232, 233, 234)',
		borderRadius:5,
		borderWidth: 1,
		borderColor: '#fff',
		paddingTop:1,
		paddingBottom:1,
		paddingLeft: 1,
		paddingRight: 1,
		height: 55,
		width: 55,
		marginLeft: 12,
		marginBottom: 14,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	daysInputContainer: {
		marginTop: 15,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		flexWrap: 'wrap'
	},
	dayTxtChoosen: {
		fontSize: 32,
		color: 'rgb(95, 135, 238)'
	},
	dayTxtNotChoosen: {
		fontSize: 32,
		color: 'rgb(148, 159, 170)'
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsTime);
