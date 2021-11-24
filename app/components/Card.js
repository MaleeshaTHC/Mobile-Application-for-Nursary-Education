import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function Card({text, main, onPress, name}) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={'none'}>
      <View style={styles.card}>
        <View style={styles.vector}>
          <AntDesign name={name} size={35} />
          <AntDesign name={name} size={35} />
          <AntDesign name={name} size={35} />
        </View>
        <Text />
        <Text style={styles.textArea_text}>{text}</Text>
        <Text />
        <Text style={styles.text}>{main}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  textArea_text: {
    color: '#228257',
    fontSize: 25,
    textAlign: 'center',
    padding: 6,
  },
  vector:{
    flexDirection: 'row',
  },
  text: {
    color: '#228257',
    fontSize: 33,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 6,
  },
  card: {
    width: 180,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 10,
    backgroundColor: '#68f2b4',
    borderRadius: 15,
  },
});
