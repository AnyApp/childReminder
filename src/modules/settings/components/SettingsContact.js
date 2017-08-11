import React, { PropTypes, Component } from 'react';
import {
	ScrollView,
	Text,
	TouchableOpacity,
	TouchableHighlight,
    View,
	StyleSheet,
	Button,
	TextInput,
	Picker,
	Image
} from 'react-native';
import Swiper from 'react-native-swiper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List, Map } from 'immutable';
import ModalDropdown from 'react-native-modal-dropdown';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import * as moviesActions from './movies.actions';

class SettingsContact extends Component {
constructor(props) {
		super(props);
		this.state = {
			users: List([
				Map({
					name: "",
					phonePrefix: "050",
					phoneSufix: ""
				}),
				Map({
					name: "",
					phonePrefix: "050",
					phoneSufix: ""
				})
			])
		};
		this.render = this.render.bind(this);
		this._updateUser = this._updateUser.bind(this);
	}

	_updateUser(uid, property, value) {
		let updatedUser = this.state.users.get(uid).set(property, value);
		this.setState({
			users: this.state.users.set(uid, updatedUser)
		});
	}

	render() {
		const prefixList = ["050", "051", "052", "053", "054", "055", "056", "058", "059" ];
		return (
			<ScrollView>
				<View style={styles.container}>
					<View style= {{flexDirection: 'row', justifyContent: 'center'}}>
						<View style={styles.headerContainer}>
						<Text style={styles.headerTxt}>.1</Text>  
					</View>
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.txt}>שם איש קשר</Text>
						<TextInput
							style={styles.input}
							onChangeText={(text) => this._updateUser(0,"name",text)}
								value={this.state.users.get(0).get("name")}
						/>
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.txt}>טלפון</Text>
						<View style={styles.inputPhoneNumber}>
							<ModalDropdown 
								options={prefixList}
								animated={true}
								onSelect={(idx, value) => this._updateUser(0, "phonePrefix", value)}
							>
							<View style={styles.inputPrefix}>
								<Text style={styles.inputPrefixText}>
									{this.state.users.get(0).get("phonePrefix")}  
								</Text>
								<Icon name="arrow-drop-down" size={23} color="grey" style={styles.selectIcon} />
								</View>
							</ModalDropdown>
							<Text style={{textAlign: "center"}}> - </Text>
							<TextInput
								style={styles.input}
								onChangeText={(text) => this._updateUser(0,"phoneSuffix",text)}
								value={this.state.users.get(0).get("phoneSuffix")}
								keyboardType="numeric"
							/>
						</View>
					</View>
				</View>
				<View style={styles.container}>
					<View style= {{flexDirection: 'row', justifyContent: 'center', paddingTop: 20}}>
						<View style={styles.headerContainer}>
						<Text style={styles.headerTxt}>.2</Text>  
					</View>
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.txt}>שם איש קשר</Text>
						<TextInput
							style={styles.input}
							onChangeText={(text) => this._updateUser(1,"name",text)}
								value={this.state.users.get(1).get("name")}
						/>
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.txt}>טלפון</Text>
						<View style={styles.inputPhoneNumber}>
							<ModalDropdown 
								options={prefixList}
								animated={true}
								onSelect={(idx, value) => this._updateUser(1, "phonePrefix", value)}
							>
							<View style={styles.inputPrefix}>
								<Text style={styles.inputPrefixText}>
									{this.state.users.get(1).get("phonePrefix")}  
								</Text>
								<Icon name="arrow-drop-down" size={23} color="grey" style={styles.selectIcon} />
								</View>
							</ModalDropdown>
							<Text style={{textAlign: "center"}}> - </Text>
							<TextInput
								style={styles.input}
								onChangeText={(text) => this._updateUser(1,"phoneSuffix",text)}
								value={this.state.users.get(1).get("phoneSuffix")}
								keyboardType="numeric"
							/>
						</View>
					</View>
				</View>
			</ScrollView>
			
			
		);
	}
}

SettingsContact.propTypes = {
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
	headerTxt: {
		textAlign: 'center',
		color: 'grey',
		fontSize: 13,
		marginVertical: 5,
	},
	headerContainer: {
		height: 30,
		width: 30,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius:20,
		borderWidth: 2,
		borderColor: 'grey'
	},
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'stretch',
	},
	inputPhoneNumber: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		height: 35,
		marginTop: 5
	},
	inputContainer: {
		height: 65,
		marginTop: 20,
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
		shadowColor: 'grey',
		shadowOffset: { width: 0.1, height: 0.3 }, 
		shadowOpacity: 0.6,
		shadowRadius: 0.2
	},
	inputPrefix: {
		width: 100,
		height: 35,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		borderColor: 'white',
		borderWidth: 0.3,
		shadowColor: 'grey',
		shadowOffset: { width: 0.1, height: 0.3 }, 
		shadowOpacity: 0.6,
		shadowRadius: 0.2
	},
	inputPrefixText: {
		flex: 2,
		fontSize: 18,
		textAlign: 'left',
		paddingLeft: 7
	},
	selectIcon: {
		flex: 1
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContact);
