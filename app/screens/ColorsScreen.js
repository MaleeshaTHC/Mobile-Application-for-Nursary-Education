/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';
import FormButton from '../components/FormButton';

export default class ColorsScreen extends Component {
  constructor() {
    super();
  }

  NavigateTo = () => {
    this.props.navigation.navigate('ColorsQuiz');
  };
  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.heading}>Let's Learn Colors</Text>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.card_container}>
              <View
                style={{
                  backgroundColor: 'yellow',
                  width: 150,
                  height: 100,
                  borderRadius: 15,
                  marginTop: 35,
                }}>
                <Text style={styles.card_text}>Yellow</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'green',
                  width: 150,
                  height: 100,
                  borderRadius: 15,
                  marginTop: 35,
                }}>
                <Text style={styles.card_text}>Green</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'blue',
                  width: 150,
                  height: 100,
                  borderRadius: 15,
                  marginTop: 35,
                }}>
                <Text style={styles.card_text}>Blue</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'orange',
                  width: 150,
                  height: 100,
                  borderRadius: 15,
                  marginTop: 35,
                }}>
                <Text style={styles.card_text}>Orange</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'red',
                  width: 150,
                  height: 100,
                  borderRadius: 15,
                  marginTop: 35,
                }}>
                <Text style={styles.card_text}>Red</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'pink',
                  width: 150,
                  height: 100,
                  borderRadius: 15,
                  marginTop: 35,
                }}>
                <Text style={styles.card_text}>Pink</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'purple',
                  width: 150,
                  height: 100,
                  borderRadius: 15,
                  marginTop: 35,
                }}>
                <Text style={styles.card_text}>Purple</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'brown',
                  width: 150,
                  height: 100,
                  borderRadius: 15,
                  marginTop: 35,
                }}>
                <Text style={styles.card_text}>Brown</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'gray',
                  width: 150,
                  height: 100,
                  borderRadius: 15,
                  marginTop: 35,
                }}>
                <Text style={styles.card_text}>Gray</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'gold',
                  width: 150,
                  height: 100,
                  borderRadius: 15,
                  marginTop: 35,
                }}>
                <Text style={styles.card_text}>Gold</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 150,
                  height: 100,
                  borderRadius: 15,
                  marginTop: 35,
                }}>
                <Text style={styles.card_text}>White</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'black',
                  width: 150,
                  height: 100,
                  borderRadius: 15,
                  marginTop: 35,
                }}>
                <Text style={styles.card_text}>
                  <Text style={{color: 'white'}}>Black</Text>
                </Text>
              </View>
            </View>
          </ScrollView>
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
