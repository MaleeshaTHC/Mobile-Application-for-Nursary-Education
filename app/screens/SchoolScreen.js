/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';
import Card from '../components/Card';

export default class SchoolScreen extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.heading}>School Members</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.card_container}>
            <Card
              text={'Know your family members'}
              main={'FAMILY'}
              name={'tags'}
            />
            <Card
              text={'Know your school members'}
              main={'SCHOOL'}
              name={'tags'}
            />
          </View>
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
    flex: 0.5,
    backgroundColor: '#68f2b4',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  body: {
    flex: 2,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: '#d0f7e6',
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
    flex: 0.4,
    alignItems: 'center',
    backgroundColor: '#d0f7e6',
  },
  images: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginLeft: 15,
  },
  heading: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
  },
  card_text: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 30,
  },
});
