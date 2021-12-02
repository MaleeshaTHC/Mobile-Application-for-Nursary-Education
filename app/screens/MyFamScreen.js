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
import FamilyCard from '../components/Family';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class MyFamScreen extends Component {
  constructor() {
    super();
  }

  NavigateToCreative = () => {
    this.props.navigation.navigate('CommunityScreen');
  };
  NavigateToHome = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  NavigateToNext = () => {
    this.props.navigation.navigate('SchoolScreen');
  };

  render() {
    return (
      <ImageBackground
        source={require('../assets/images/background2.jpg')}
        style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.heading}>Family Members</Text>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.card_container}>
              <FamilyCard
                image={require('../assets/images/mother.jpg')}
                text1={'Mother,'}
                text2={'is an allegory about God and the Earth. ... '}
              />
              <FamilyCard
                image={require('../assets/images/father.jpg')}
                text1={'Father,'}
                text2={' makes all the difference in a childs life. ...'}
              />
              <FamilyCard
                image={require('../assets/images/brotherAndSister.jpg')}
                text1={'Brother & Sister'}
                text2={
                  'Childhood becomes special when you share it with your sibling. ...'
                }
              />
              <FamilyCard
                image={require('../assets/images/grandMother.jpg')}
                text1={'Grand Mother,'}
                text2={
                  'is someone who has always been there for you and always will be. ...'
                }
              />
              <FamilyCard
                image={require('../assets/images/grandFather.jpg')}
                text1={'Grand Father,'}
                text2={
                  'is someone with silver in his hair and gold in his heart. ...'
                }
              />
              <FamilyCard
                image={require('../assets/images/uncleAndAunty.jpg')}
                text1={'Uncle & Aunty'}
                text2={
                  'Only who can give me a hug like my parents and keep secrets like my siblings. ...'
                }
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
