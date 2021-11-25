/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {
  ImageBackground,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import NavigationCard from '../components/NavigationCard';
import FormButton from '../components/FormButton';

const HomeScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}
        />
        <Text style={styles.text}>Have a Great Day !</Text>
        <Text style={styles.text}>Come Again !</Text>
        <Text />
        <Text />
        <Text />
        <Text style={styles.text}>{user.email}</Text>
        <Text />
      </View>
      <View style={styles.footer}>
        <FormButton buttonTitle={'Log Out'} onPress={() => logout()} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: '#d0f7e6',
  },
  header: {
    flex: 3,
    alignItems: 'center',
    marginTop: 150,
  },
  footer: {
    flex: 2,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
  heading: {
    fontSize: 40,
    marginTop: 10,
    color: '#228257',
    textAlign: 'center',
  },
});
