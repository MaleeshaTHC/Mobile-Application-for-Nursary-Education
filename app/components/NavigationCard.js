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
      imageStyle={{borderRadius: 30}}>
      <TouchableHighlight style={styles.button} onPress={onPress}>
        <Text style={styles.textArea_text}>{text}</Text>
      </TouchableHighlight>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  textArea_text: {
    color: 'black',
    fontSize: 27,
  },
  card: {
    width: 380,
    height: 280,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 85,
  },
  button: {
    width: 350,
    height: 80,
    backgroundColor: '#83e6b9',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 20,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 250,
  },
});
