import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

export default function NavigationCard({text, image, onPress}) {
  return (
    <ImageBackground
      style={styles.card}
      source={image}
      imageStyle={{
        width: 350,
        borderRadius: 50,
        marginLeft: 25,
        marginTop: 40,
      }}>
      <TouchableHighlight
        underlayColor={'white'}
        style={styles.button}
        onPress={onPress}>
        <Text style={styles.textArea_text}>{text}</Text>
      </TouchableHighlight>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  textArea_text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    width: 400,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 100,
  },
  button: {
    width: 250,
    height: 65,
    backgroundColor: '#e6f1f2',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 20,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 390,
    marginLeft: 80,
  },
});
