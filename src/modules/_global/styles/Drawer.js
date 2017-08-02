import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	logo: {
		flex: 1,
		height: null,
		width: null,
		resizeMode: 'contain'
	},
	drawerList: {
		flex: 3,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-end',
		marginRight: 15
	},
	drawerListIcon: {
		width: 25,
		fontSize: 17
	},
	drawerListItem: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginBottom: 23
	},
	drawerListItemText: {
		color: 'grey',
		fontSize: 18,
		paddingRight: 15,
		textAlign: 'right'
	},
	_version: {
		color: '#3c3c3c',
		position: 'absolute',
		bottom: 25,
		marginLeft: 53
	}
});

export default styles;