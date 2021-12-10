/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableHighlight,
} from 'react-native';
import Card from '../components/Card';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class MathsScreen extends Component {
  constructor() {
    super();
  }
  NavigateToAlphabet = () => {
    this.props.navigation.navigate('AlphabetScreen');
  };
  NavigateToPhrases = () => {
    this.props.navigation.navigate('PhrasesScreen');
  };
  NavigateToAlphabetQuiz = () => {
    this.props.navigation.navigate('AlphabetQuiz');
  };
  NavigateToPhrasesQuiz = () => {
    this.props.navigation.navigate('PhrasesQuiz');
  };
  NavigateToBack = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  NavigateToHome = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  NavigateToNext = () => {
    this.props.navigation.navigate('MathsScreen');
  };
  render() {
    return (
      <ImageBackground
        source={require('../assets/images/background2.jpg')}
        style={styles.screen}>
        <View>
          <Text style={styles.heading}>Happy English</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.card_container}>
            <Card
              text={'Do you want to know Alphabet? Come try it !'}
              main={'ALPHABET'}
              onPress={this.NavigateToAlphabet}
              name={'book'}
            />
            <Card
              text={'Do you want to know Phrases? Come try it !'}
              main={'PHRASES'}
              onPress={this.NavigateToPhrases}
              name={'book'}
            />
            <Card
              main={'Quiz of Alphabet'}
              onPress={this.NavigateToAlphabetQuiz}
              name={'edit'}
            />
            <Card
              main={'Quiz of Phrases'}
              onPress={this.NavigateToPhrasesQuiz}
              name={'edit'}
            />
          </View>
        </View>
        <View style={styles.footer}>
        <FontAwesome.Button
            name="chevron-left"
            size={35}
            backgroundColor="#88d9ca"
            color="#fff"
            onPress={this.NavigateToBack}
            borderRadius={10}
          />
          <MaterialCommunityIcons.Button
            onPress={this.NavigateToHome}
            name="home"
            size={35}
            backgroundColor="#88d9ca"
            color="#fff"
          />
          <FontAwesome.Button
            name="chevron-right"
            size={35}
            color="#fff"
            backgroundColor="#88d9ca"
            borderRadius={10}
            onPress={this.NavigateToNext}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  body: {
    flex: 2,
    marginLeft: 10,
    marginRight: 10,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  card_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 0.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 400,
  },
  images: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginLeft: 15,
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
    marginBottom: 40,
  },
  card_text: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 30,
  },
});
