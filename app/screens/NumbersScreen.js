import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Slider_Num from '../stores/Slider_Num';
export default class NumbersScreen extends Component {
  constructor() {
    super();
  }

  NavigateToMath = () => {
    this.props.navigation.navigate('MathsScreen');
  };
  NavigateToHome = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  NavigateToNumQuiz = () => {
    this.props.navigation.navigate('NumbersQuiz');
  };

  render() {
    return (
      <ImageBackground
        source={require('../assets/images/background2.jpg')}
        style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.heading}>Let's Learn Numbers</Text>
        </View>
        <View style={styles.body}>
          <Slider_Num />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={this.NavigateToMath}>
            <AntDesign name={'book'} size={45} />
            <Text>  Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.NavigateToNumQuiz}>
            <AntDesign name={'edit'} size={45} />
            <Text>Activity</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  body: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    marginLeft: 200,
    marginTop: 20,
    marginBottom: 4,
  },
  heading: {
    fontSize: 33,
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 20,
  },
});
