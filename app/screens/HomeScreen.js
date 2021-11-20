import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class HomeScreen extends Component {
  constructor() {
    super();
  }

  NavigateTo = () => {
    this.props.navigation.navigate('Navigation_Screen');
  };

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.top_header}>
          <Text style={styles.heading}>Little Kingdom</Text>
        </View>
        <View style={styles.header}>
          <View style={styles.text_area}>
            <Text>
              text="Education, is a very different animal than it once was.
              Especially for kids. Here is a the best learning app for kids to
              help them learn more!"
            </Text>
          </View>
        </View>
        <View style={styles.footer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  top_header: {
    flex: 1,
    backgroundColor: '#46FCFC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1.8,
    backgroundColor: '#46FCFC',
    borderBottomRightRadius: 500,
    height: 200,
  },
  text_area: {
    marginTop: 140,
    marginLeft: 20,
  },
  footer: {
    flex: 0.5,
    marginLeft: 100,
  },
  images: {
    width: 120,
    height: 120,
    borderRadius: 120,
    marginTop: 15,
  },
  heading: {
    color: 'black',
    fontSize: 29,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
