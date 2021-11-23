/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import NavigationCard from '../components/NavigationCard';

const HomeScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.safearea}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
      <Text style={styles.text}>Welcome</Text>
      <Text style={styles.text}>{user.email}</Text>

      <ScrollView>
        <View style={styles.card_container}>
          <View>
            <NavigationCard
              text={'Click'}
              image={require('../assets/images/logo.png')}
              onPress={() => alert('Clicked')}
            />
            <NavigationCard
              text={'Click'}
              image={require('../assets/images/logo.png')}
              onPress={() => alert('Clicked')}
            />
            <NavigationCard
              text={'Click'}
              image={require('../assets/images/logo.png')}
              onPress={() => alert('Clicked')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,    
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  top: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginBottom: 550,
  },
  scrollview: {
    flex: 2,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 80,
    borderColor: 'green',
  },
  text: {
    fontSize: 20,
  },
});
