import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function PoemCard({text1, text2, text3, name}) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{text1}</Text>
      <View style={styles.card2}>
        <Text style={styles.text2}>{text2}</Text>
      </View>
      <Text style={styles.text3}>{text3}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginTop: 70,
    fontWeight: '500',
  },
  text2: {
    fontSize: 26,
    textAlign: 'left',
    marginLeft: 15,
    marginTop: 15,
    fontWeight: '300',
  },
  text3: {
    fontSize: 20,
    textAlign: 'right',
    textAlignVertical: 'bottom',
    marginBottom: 5,
    marginLeft: 150,
    fontStyle: 'italic',
  },
  card: {
    width: 360,
    height: 440,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 30,
    marginTop: 70,
    backgroundColor: '#e6f1f2',
    borderRadius: 15,
  },
  card2: {
    width: 335,
    height: 270,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginTop: 20,
  },
});
