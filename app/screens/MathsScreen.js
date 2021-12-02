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

export default class MathsScreen extends Component {
  constructor() {
    super();
  }
  NavigateToAlphabet = () => {
    this.props.navigation.navigate('NumbersScreen');
  };
  NavigateToShapes = () => {
    this.props.navigation.navigate('ShapesScreen');
  };
  NavigateToNumbersQuiz = () => {
    this.props.navigation.navigate('NumbersQuiz');
  };
  NavigateToShapesQuiz = () => {
    this.props.navigation.navigate('ShapesQuiz');
  };
  NavigateToBack = () => {
    this.props.navigation.navigate('EnglishScreen');
  };
  NavigateToHome = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  NavigateToNext = () => {
    this.props.navigation.navigate('CreativeScreen');
  };
  render() {
    return (
      <ImageBackground
        source={require('../assets/images/background2.jpg')}
        style={styles.screen}>
        <View>
          <Text style={styles.heading}>Fun of Math</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.card_container}>
            <Card
              main={'NUMBERS'}
              onPress={this.NavigateToAlphabet}
              name={'book'}
            />
            <Card
              text={'Do you want to know Phrases? Come try it !'}
              main={'SHAPES'}
              onPress={this.NavigateToShapes}
              name={'book'}
            />
            <Card
              main={'Quiz of Numbers'}
              onPress={this.NavigateToNumbersQuiz}
              name={'edit'}
            />
            <Card
              main={'Quiz of Shapes'}
              onPress={this.NavigateToShapesQuiz}
              name={'edit'}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableHighlight
            onPress={this.NavigateToBack}
            underlayColor={'none'}>
            <MaterialCommunityIcons name="step-backward" size={25} />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.NavigateToHome}
            underlayColor={'none'}>
            <MaterialCommunityIcons name="home" size={25} />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.NavigateToNext}
            underlayColor={'none'}>
            <MaterialCommunityIcons name="step-forward" size={25} />
          </TouchableHighlight>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#d0f7e6',
  },
  body: {
    flex: 2,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  card_container: {
    marginTop: 20,
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
    marginTop: 55,
    marginBottom: 20,
  },
  card_text: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 30,
  },
});
