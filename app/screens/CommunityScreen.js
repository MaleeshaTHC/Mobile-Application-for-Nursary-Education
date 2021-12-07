/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableHighlight,
  Image,
} from 'react-native';
import Card from '../components/Card';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default class CommunityScreen extends Component {
  constructor() {
    super();
  }
  NavigateToMyFam = () => {
    this.props.navigation.navigate('MyFamScreen');
  };
  NavigateToSchool = () => {
    this.props.navigation.navigate('SchoolScreen');
  };
  NavigateToBack = () => {
    this.props.navigation.navigate('CreativeScreen');
  };
  NavigateToHome = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  NavigateToNext = () => {
    this.props.navigation.navigate('HomeScreen');
  };

  render() {
    return (
      <ImageBackground
        source={require('../assets/images/background2.jpg')}
        style={styles.screen}>
        <View>
          <Text style={styles.heading}>Community</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.card_container}>
            <Card
              text={'Do you want to know Alphabet? Come try it !'}
              main={'FAMILY'}
              onPress={this.NavigateToMyFam}
              name={'book'}
            />
            <Card
              text={'Do you want to know Phrases? Come try it !'}
              main={'SCHOOL'}
              onPress={this.NavigateToSchool}
              name={'book'}
            />
            <View>
              <Image
                source={{
                  uri: 'https://media.istockphoto.com/vectors/young-teacher-with-joyful-kids-vector-id1251666012?k=20&m=1251666012&s=612x612&w=0&h=B3qK4v77dodW1bdh6dRksJ5bBSxn1Pu4TXMTQLvA-LI=',
                }}
                style={{
                  width: 380,
                  height: 260,
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  margin: 10,
                  backgroundColor: '#e6f1f2',
                  borderRadius: 15,
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <FontAwesome.Button
            name="chevron-left"
            size={23}
            backgroundColor="#bfd4e7"
            color="#e6f1f2"
            onPress={this.NavigateToBack}
          />
          <TouchableHighlight
            onPress={this.NavigateToHome}
            underlayColor={'none'}>
            <MaterialCommunityIcons name="home" size={25} color="#e6f1f2" />
          </TouchableHighlight>
          <FontAwesome.Button
            name="chevron-right"
            size={23}
            backgroundColor="#bfd4e7"
            color="#e6f1f2"
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
