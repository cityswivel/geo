import React from 'react';
import { TouchableHighlight, NavigatorIOS, StyleSheet, Text, View } from 'react-native';

export default class HomeScene extends React.Component {
render() {
    return (
      <View style={styles.scene}>
        <TouchableHighlight>
          <Text>Second Scene!</Text>
        </TouchableHighlight>
      </View>
    )

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
  }
})


