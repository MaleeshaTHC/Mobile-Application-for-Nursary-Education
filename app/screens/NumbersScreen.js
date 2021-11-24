import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

import FormButton from '../components/FormButton';
import Slider_Num from '../stores/Slider_Num';
export default class NumbersScreen extends Component {
  constructor() {
    super();
  }

  NavigateTo = () => {
    this.props.navigation.navigate('NumbersQuiz');
  };
  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.heading}>Let's Learn Alphabet</Text>
        <View style={styles.body}>
          <Slider_Num />
        </View>
        <View style={styles.footer}>
          <FormButton
            buttonTitle={'Go to Activity'}
            onPress={this.NavigateTo}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#d0f7e6',
  },
  header: {
    flex: 0.2,
    backgroundColor: '#d0f7e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 2,
    backgroundColor: '#d0f7e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 0.5,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
  heading: {
    fontSize: 33,
    marginTop: 10,
    color: '#228257',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 35,
  },
});
