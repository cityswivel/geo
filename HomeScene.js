import React from 'react';
import { ScrollView, TouchableHighlight, NavigatorIOS, StyleSheet, Text, View } from 'react-native';

export default class HomeScene extends React.Component {
render() {
    return (
      <ScrollView>
      <View style={styles.scene}>
        <TouchableHighlight style={styles.mytouch} onPress={this._onPressButton}>
          <Text style={{color:'white'}}>Touch me to transform "First touch" to next scene.</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.mytouch} onPress={this._onPressButton}>
          <Text style={{color:'white'}}>Touch me to transform "First touch" to next scene.</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.mytouch} onPress={this._onPressButton}>
          <Text style={{color:'white'}}>Touch me to transform "First touch" to next scene.</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.mytouch} onPress={this._onPressButton}>
          <Text style={{color:'white'}}>Touch me to transform "First touch" to next scene.</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.mytouch} onPress={this._onPressButton}>
          <Text style={{color:'white'}}>Touch me to transform "First touch" to next scene.</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.mytouch} onPress={this._onPressButton}>
          <Text style={{color:'white'}}>Touch me to transform "First touch" to next scene.</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.mytouch} onPress={this._onPressButton}>
          <Text style={{color:'white'}}>Touch me to transform "First touch" to next scene.</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.mytouch} onPress={this._onPressButton}>
          <Text style={{color:'white'}}>Touch me to transform "First touch" to next scene.</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.mytouch} onPress={this._onPressButton}>
          <Text style={{color:'white'}}>Touch me to transform "First touch" to next scene.</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.mytouch} onPress={this._onPressButton}>
          <Text style={{color:'white'}}>Touch me to transform "First touch" to next scene.</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.mytouch} onPress={this._onPressButton}>
          <Text style={{color:'white'}}>Touch me to transform "First touch" to next scene.</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.mytouch} onPress={this._onPressButton}>
          <Text style={{color:'white'}}>Touch me to transform "First touch" to next scene.</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.mytouch} onPress={this._onPressButton}>
          <Text style={{color:'white'}}>Touch me to transform "First touch" to next scene.</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.mytouch} onPress={this._onPressButton}>
          <Text style={{color:'white'}}>Touch me to transform "First touch" to next scene.</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.mytouch} onPress={this._onPressButton}>
          <Text style={{color:'white'}}>Touch me to transform "First touch" to next scene.</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.mytouch} onPress={this._onPressButton}>
          <Text style={{color:'white'}}>Touch me to transform "First touch" to next scene.</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.mytouch} onPress={this._onPressButton}>
          <Text style={{color:'white'}}>Touch me to transform "First touch" to next scene.</Text>
        </TouchableHighlight>
      </View>
      </ScrollView>
    )

  }
_onPressButton () {
alert('press');
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    padding: 10,
    paddingTop: 74,
    flex: 1,
  },
  mytouch:  {
    backgroundColor: 'blue',
    marginTop:10,
    marginBottom:10,
    padding:10,

  }
})
