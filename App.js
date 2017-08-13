import React from 'react';
import { ActivityIndicator, TouchableHighlight, NavigatorIOS, StyleSheet, Text, View } from 'react-native';
import HomeScene from './HomeScene'
import FirstRightScene from './FirstRightScene'

export default class App extends React.Component {


	render() {
		return (
			<NavigatorIOS
				style={styles.container}
				initialRoute={{
					title: 'HomePage',
					component: HelloWorld,
				}} />
		);
	}

}
class SceneTwo extends React.Component {
	render() {
		return (
			<View>
			<Text style={styles.text}> Scene 2!!! </Text>
		</View>
	);
	}
}
class SceneThree extends React.Component {
	render() {
		return (
			<View>
			<TouchableHighlight style={styles.mytouch} onPress={this._onPressLocation}>
				<Text style={{color:'white'}}>Touch me to transform "First touch" to next scene.</Text>
			</TouchableHighlight>
		</View>
	);
	}
	_onPressLocation () {
		navigator.geolocation.getCurrentPosition(
			location => {
				var search = location.coords.latitude + ' , ' + location.coords.longitude;
				console.log(location);
				alert (search);
			},
			error => {
				alert('could not get location');
			}
		);
	}
}

class HelloWorld extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			searchString : 'london',
			isLoading : false
		};
	}
	_onForward = () => {
    this.props.navigator.push({
      title: 'Scene 2',
			component: SceneTwo,
    });
  }
	_onForward2 = () => {
		this.props.navigator.push({
			title: 'Location ',
			component: SceneThree,
		});
	}
	_onForward3 = () => {
		this.props.navigator.push({
			title: 'Scene 3',
			component: HomeScene,
		});
	}
render() {
var spinner = this.state.isLoading ? (<ActivityIndicator style={styles.indict} size='large' />) : (<View />);
	return (
		<View>
		<Text style={styles.text}> Hello World! {this.state.searchString} </Text>
		{spinner}
		<TouchableHighlight
			style = {styles.button}
			onPress = {this._onForward.bind(this)}
			underlayColor = {'#44ddff'}
		>
			<Text>Scene 2</Text>
		</TouchableHighlight>
		<TouchableHighlight
			style = {styles.button}
			onPress = {this._onForward2.bind(this)}
			underlayColor = {'#44ddff'}
		>
			<Text>Location</Text>
		</TouchableHighlight>
		<TouchableHighlight
			style = {styles.button}
			onPress = {this._onForward3.bind(this)}
			underlayColor = {'#44ddff'}
		>
			<Text>Scene 4</Text>
		</TouchableHighlight>
		</View>

	)
}
_onPressButton () {
	//this.setState({searchString : 'jason'})
	if (this.state.isLoading == false) {
	this.setState({isLoading : true})
	}
	if (this.state.isLoading == true) {
	this.setState({isLoading : false})
	}

}

}


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
	text : {
		color: 'black',
		backgroundColor: 'white',
		fontSize: 30,
		marginTop:80
	},
wrapper: {
	flex: 1,
},
button : {
	height:36,
	flexDirection: 'row',
	backgroundColor:'#22aaff',
	alignSelf: 'stretch',
	justifyContent: 'center',
	marginTop:10,
	marginBottom:10,
	borderRadius: 8,

},
indict : {
	marginTop:20,
	marginBottom:20,
},
mytouch:  {
	backgroundColor: 'blue',
	marginTop:80,
	marginBottom:10,
	padding:10,

},
});
