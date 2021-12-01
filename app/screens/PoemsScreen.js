/* eslint-disable no-unused-vars */
import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PoemCard from '../components/PoemCard';

const PoemsScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);

  return (
    <ImageBackground
      source={require('../assets/images/background2.jpg')}
      style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.text}>Little Poems</Text>
      </View>
      <View style={styles.body}>
        <ScrollView>
          <PoemCard
            text1={'The Crocodile'}
            text2={
              'How doth the little crocodile            Improve his shining tail,            And pour the waters of the Nile                     On every golden scale!            How cheerfully he seems to grin,            How neatly spreads his claws,            And welcomes little fishes in,            With gently smiling jaws!'
            }
            text3={'Lewis Carroll'}
          />
          <PoemCard
            text1={'The Purple Cow'}
            text2={
              'I never saw a purple cow,               I never hope to see one,            But I can tell you, anyhow,            I’d rather see than be one!'
            }
            text3={'Gelett Burgess'}
          />
          <PoemCard
            text1={'Hey Diddle Diddle'}
            text2={
              'Hey diddle diddle,                          The Cat and the fiddle,                 The Cow jumped over the moon,                                           The little Dog laughed to see such sport,                                    And the Dish ran away with the Spoon.'
            }
            text3={'Author Unknown'}
          />
          <PoemCard
            text1={'Twinkle, Twinkle, Little Star'}
            text2={
              'Twinkle, twinkle, little star,            How I wonder what you are.            Up above the world so high,            Like a diamond in the sky.            Twinkle, twinkle, little star,            How I wonder what you are!'
            }
            text3={'Jane Taylor'}
          />
          <PoemCard
            text1={'Star Light, Star Bright'}
            text2={
              'Star light, start bright,                The first star I see tonight;            I wish I may, I wish I might,            Have the wish I wish tonight.'
            }
            text3={'Author Unknown'}
          />
        </ScrollView>
      </View>
      <View style={styles.bottom}>
        <TouchableHighlight
          onPress={() => navigation.navigate('EnglishScreen')}
          underlayColor={'none'}>
          <MaterialCommunityIcons name="step-backward" size={25} />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigation.navigate('HomeScreen')}
          underlayColor={'none'}>
          <MaterialCommunityIcons name="home" size={25} />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigation.navigate('PhrasesQuiz')}
          underlayColor={'none'}>
          <MaterialCommunityIcons name="script-text" size={25} />
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
};

export default PoemsScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  body: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  bottom: {
    flex: 0.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 40,
  },
  text: {
    fontSize: 33,
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 20,
  },
});
