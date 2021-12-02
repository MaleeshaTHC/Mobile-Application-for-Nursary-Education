/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import SchoolCard from '../components/School';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class SchoolScreen extends Component {
  constructor() {
    super();
  }

  NavigateToCreative = () => {
    this.props.navigation.navigate('CommunityScreen');
  };
  NavigateToHome = () => {
    this.props.navigation.navigate('HomeScreen');
  };

  render() {
    return (
      <ImageBackground
        source={require('../assets/images/background2.jpg')}
        style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.heading}>School Members</Text>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.card_container}>
              <SchoolCard
                image={require('../assets/images/principal.jpg')}
                text1={'Principal Sir'}
              />
              <SchoolCard
                image={require('../assets/images/madam.jpg')}
                text1={'Madam / Teacher'}
              />
              <SchoolCard
                image={require('../assets/images/sir.jpg')}
                text1={'Sir / Teacher'}
              />
            </View>
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <TouchableHighlight
            onPress={this.NavigateToCreative}
            underlayColor={'none'}>
            <MaterialCommunityIcons name="step-backward" size={25} />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.NavigateToHome}
            underlayColor={'none'}>
            <MaterialCommunityIcons name="home" size={25} />
          </TouchableHighlight>
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
    flex: 7.2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
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
    marginTop: 40,
  },
  images: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginLeft: 15,
  },
  heading: {
    fontSize: 33,
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 20,
  },
  card_text: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 30,
  },
});
