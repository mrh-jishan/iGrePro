import { Dimensions, StyleSheet } from "react-native";

const PRIMARY_COLOR = "#7444C0";
const SECONDARY_COLOR = "#5636B8";
const WHITE = "#FFFFFF";
const GRAY = "#757E90";
const DARK_GRAY = "#363636";
const BLACK = "#000000";

const ONLINE_STATUS = "#46A575";
const OFFLINE_STATUS = "#D04949";

const STAR_ACTIONS = "#FFA200";
const LIKE_ACTIONS = "#B644B2";
const DISLIKE_ACTIONS = "#C63636";
const FLASH_ACTIONS = "#5028D7";


const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		paddingHorizontal: 10,
	},
	actionContainer: {
		display: 'flex',
		flexDirection: 'column',
		paddingHorizontal: 30,
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
	// COMPONENT - CARD ITEM
	containerCardItem: {
		backgroundColor: WHITE,
		borderRadius: 8,
		alignItems: "center", // for the card 
		// margin: 0,
		marginHorizontal:10,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: BLACK,
		shadowOffset: { height: 0, width: 0 }
	},
	matchesCardItem: {
		marginTop: 0,
		backgroundColor: PRIMARY_COLOR,
		paddingVertical: 7,
		paddingHorizontal: 15,
		borderRadius: 20
	},
	matchesTextCardItem: {

		color: WHITE
	},
	descriptionCardItem: {
		color: GRAY,
		textAlign: "center"
	},
	status: {
		paddingBottom: 10,
		flexDirection: "row",
		alignItems: "center"
	},
	statusText: {
		color: GRAY,
		fontSize: 12
	},
	online: {
		width: 6,
		height: 6,
		backgroundColor: ONLINE_STATUS,
		borderRadius: 3,
		marginRight: 4
	},
	offline: {
		width: 6,
		height: 6,
		backgroundColor: OFFLINE_STATUS,
		borderRadius: 3,
		marginRight: 4
	},
	actionsCardItem: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 30,
		justifyContent: "space-between",
	},
	button: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: WHITE,
		marginHorizontal: 7,
		alignItems: "center",
		justifyContent: "center",
		shadowOpacity: 0.15,
		shadowRadius: 20,
		shadowColor: DARK_GRAY,
		shadowOffset: { height: 10, width: 0 }
	},
	buttonPrimary: {
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
		height: 40,
		borderRadius: 5,
		backgroundColor: '#007bff',
		borderColor: '#007bff',
		paddingHorizontal: 30,
		marginHorizontal: 5,
	},
	miniButton: {
		width: 40,
		height: 40,
		borderRadius: 30,
		backgroundColor: WHITE,
		marginHorizontal: 7,
		alignItems: "center",
		justifyContent: "center",
		shadowOpacity: 0.15,
		shadowRadius: 20,
		shadowColor: DARK_GRAY,
		shadowOffset: { height: 10, width: 0 }
	},
	star: {
		color: STAR_ACTIONS
	},
	like: {
		fontSize: 25,
		color: LIKE_ACTIONS
	},
	dislike: {
		fontSize: 25,
		color: DISLIKE_ACTIONS
	},
	flash: {
		color: FLASH_ACTIONS
	},

	// COMPONENT - CITY
	city: {
		backgroundColor: WHITE,
		padding: 10,
		borderRadius: 20,
		// width: 90,
		shadowOpacity: 0.05,
		shadowRadius: 5,
		shadowColor: BLACK,
		shadowOffset: { height: 0, width: 0 }
	},
	cityText: {
		color: DARK_GRAY,
		fontSize: 15
	},

	// COMPONENT - FILTERS
	filters: {
		backgroundColor: WHITE,
		padding: 10,
		borderRadius: 20,
		// width: 70,
		shadowOpacity: 0.05,
		shadowRadius: 5,
		shadowColor: BLACK,
		shadowOffset: { height: 0, width: 0 }
	},
	filtersText: {
		color: DARK_GRAY,
		fontSize: 15
	},

	// COMPONENT - MESSAGE
	containerMessage: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "row",
		paddingHorizontal: 10,
		width: DIMENSION_WIDTH - 100
	},
	avatar: {
		borderRadius: 30,
		width: 60,
		height: 60,
		marginRight: 20,
		marginVertical: 15
	},

	message: {
		color: GRAY,
		fontSize: 12,
		paddingTop: 5
	},
	profileEdit: {
		paddingTop: 10,
		marginHorizontal: 10,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center"
	},

	// COMPONENT - PROFILE ITEM
	walletCard: {
		paddingHorizontal: 15,
		paddingBottom: 25,
		margin: 20,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: BLACK,
		shadowOffset: { height: 0, width: 0 }
	},
	walletText: {
		fontSize: 24,
		color: WHITE
	},
	containerProfileItem: {
		backgroundColor: WHITE,
		paddingHorizontal: 10,
		paddingBottom: 25,
		margin: 20,
		borderRadius: 8,
		marginTop: -65,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: BLACK,
		shadowOffset: { height: 0, width: 0 }
	},
	matchesProfileItem: {
		width: 131,
		marginTop: -15,
		backgroundColor: PRIMARY_COLOR,
		paddingVertical: 7,
		paddingHorizontal: 20,
		borderRadius: 20,
		textAlign: "center",
		alignSelf: "center"
	},
	matchesTextProfileItem: {
		color: WHITE
	},
	name: {
		paddingTop: 25,
		paddingBottom: 5,
		color: DARK_GRAY,
		fontSize: 15,
		textAlign: "center"
	},
	descriptionProfileItem: {
		color: GRAY,
		textAlign: "center",
		paddingBottom: 20,
		fontSize: 13
	},
	info: {
		paddingVertical: 8,
		flexDirection: "row",
		alignItems: "center"
	},
	iconProfile: {
		fontSize: 12,
		color: DARK_GRAY,
		paddingHorizontal: 10
	},
	infoContent: {
		color: GRAY,
		fontSize: 13
	},

	// CONTAINER - GENERAL
	bg: {
		flex: 1,
		resizeMode: "cover",
		width: DIMENSION_WIDTH,
		height: DIMENSION_HEIGHT
	},
	card: {
		flex: 1,
		backgroundColor: WHITE,
		margin: 0,
		padding: 15,
		flexDirection: 'column',
	},
	top: {
		paddingTop: 15,
		marginHorizontal: 5,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	title: {
		paddingBottom: 10,
		fontSize: 22,
		color: DARK_GRAY
	},
	icon: {
		fontSize: 20,
		color: DARK_GRAY,
		paddingRight: 10
	},

	// CONTAINER - HOME
	containerHome: {
		marginHorizontal: 5
	},

	// CONTAINER - MATCHES
	containerMatches: {
		justifyContent: "space-between",
		flex: 1,
		paddingHorizontal: 10
	},

	// CONTAINER - MESSAGES
	containerMessages: {
		justifyContent: "space-between",
		flex: 1,
		paddingHorizontal: 10
	},

	// CONTAINER - PROFILE
	containerProfile: {
		marginHorizontal: 0
	},
	photo: {
		width: DIMENSION_WIDTH,
		height: 450
	},
	walletPhoto: {
		width: DIMENSION_WIDTH,
		height: 250
	},
	topIconLeft: {
		fontSize: 20,
		color: WHITE,
		paddingLeft: 20,
		marginTop: -20,
		transform: [{ rotate: "90deg" }]
	},
	topIconRight: {
		fontSize: 20,
		color: WHITE,
		paddingRight: 20
	},
	actionsProfile: {
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 25
	},
	iconButton: {
		fontSize: 20,
		color: WHITE
	},
	textButton: {
		fontSize: 15,
		color: WHITE,
		paddingLeft: 15
	},
	circledButton: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: PRIMARY_COLOR,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 10
	},
	roundedButton: {
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 10,
		height: 50,
		borderRadius: 25,
		backgroundColor: SECONDARY_COLOR,
		paddingHorizontal: 20
	},
	loginButton: {
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
		height: 43,
		borderRadius: 5,
		backgroundColor: '#e74c3c',
		borderColor: '#c0392b',
		paddingHorizontal: 40,
		marginVertical: 5,
	},
	joinButton: {
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
		height: 43,
		borderRadius: 4,
		backgroundColor: WHITE,
		borderWidth: 1,
		borderColor: '#CCC',
		paddingHorizontal: 40,
		marginVertical: 5,
	},
	loginButtonText: {
		textTransform: "uppercase",
		fontSize: 15,
		color: WHITE,
		paddingHorizontal: 10
	},
	loginButtonIcon: {
		fontSize: 15,
		color: WHITE,
	},
	joinButtonText: {
		textTransform: "uppercase",
		fontSize: 15,
		paddingHorizontal: 10
	},
	// MENU
	tabButton: {
		paddingTop: 20,
		paddingBottom: 30,
		alignItems: "center",
		justifyContent: "center",
		flex: 1
	},
	tabButtonText: {
		textTransform: "uppercase"
	},
	iconMenu: {
		height: 20,
		paddingBottom: 7
	},
	authImageContiner: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	authImage: {
		borderRadius: 8,
		width: 150,
		height: 200,
		marginVertical: 20,
		alignItems: 'center',
	},
	homeImage: {
		borderRadius: 8,
		width: 200,
		height: 230,
		margin: 20
	}
});
