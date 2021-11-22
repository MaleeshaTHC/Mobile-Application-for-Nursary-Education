import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../constants/Dimensions';

const ActivityButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default ActivityButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 25,
    width: '70%',
    height: windowHeight / 10,
    backgroundColor: '#83e6b9',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#228257',
  },
});
