/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';
import FormButton from '../components/FormButton';

export default class ShapesScreen extends Component {
  render() {
    const goBackward = () => {
      // eslint-disable-next-line no-undef
      carouselRef.current.snapToPrev();
    };
    return (
      <View style={styles.screen}>
        <Text style={styles.heading}>SHAPES</Text>
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.card_container}>
              <Text style={styles.card_text}>Square</Text>
              <View style={styles.card} />
              <Text style={styles.card_text}>Triangle</Text>
              <View style={styles.card} />
              <Text style={styles.card_text}>Rectangle</Text>
              <View style={styles.card} />
              <Text style={styles.card_text}> Circle</Text>
              <View style={styles.card} />
              <Text style={styles.card_text}>   Line</Text>
              <View style={styles.card} />
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
  body: {
    flex: 2,
    backgroundColor: '#d0f7e6',
    alignItems: 'center',
    justifyContent: 'center',
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
  card_text: {
    fontSize: 33,
    textAlign: 'center',
    marginTop: 30,
    color: '#228257',
  },
  card: {
    backgroundColor: 'white',
    width: 350,
    height: 300,
    borderRadius: 15,
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
