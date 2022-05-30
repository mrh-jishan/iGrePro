import { Dimensions, StyleSheet } from "react-native";

const PRIMARY_COLOR = "#7444C0";
const SECONDARY_COLOR = "#5636B8";
const WHITE = "#FFFFFF";
const BLACK = "#000000";

const OFFLINE_STATUS = "#D04949";

const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({
	container: {
		height: 250,
		justifyContent: 'center',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	input: {
		height: 44,
		padding: 10,
		borderWidth: 1,
		borderColor: 'black',
		marginBottom: 10,
	},
	inputext: {
		padding: 10,
		textAlign: 'center',
		fontWeight: 'bold',
		borderWidth: .5,
		borderColor: BLACK,
		marginVertical: 10,
	},
	// CONTAINER - GENERAL
	bg: {
		flex: 1,
		resizeMode: "cover",
		width: DIMENSION_WIDTH,
		height: DIMENSION_HEIGHT
	},
	card: {
		backgroundColor: WHITE,
		margin: 0,
		padding: 15,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: 300,
		height: 300,
	},
	cardFace: {
		backgroundColor: PRIMARY_COLOR,
		margin: 0,
		padding: 15,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: 300,
		height: 300,
	},
	cardBack: {
		backgroundColor: SECONDARY_COLOR,
		margin: 0,
		padding: 15,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: 300,
		height: 300,
	},
	title: {
		fontSize: 20,
		color: WHITE,
		fontWeight: 'bold',
		paddingBottom: 20,
	},
	subTitle: {
		fontSize: 15,
		color: WHITE,
		paddingBottom: 20,
	},
	icon: {
		fontSize: 20,
		color: OFFLINE_STATUS,
		paddingRight: 10
	},
});
