/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import {windowHeight, windowWidth} from '../constants/Dimensions';

import firestore from '@react-native-firebase/firestore';
import PostCard from '../components/PostCard';

const ProfileScreen = ({navigation, route}) => {
  const {user, logout} = useContext(AuthContext);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const [userData, setUserData] = useState(null);

  const fetchPosts = async () => {
    try {
      const list = [];

      await firestore()
        .collection('posts')
        .where('userId', '==', route.params ? route.params.userId : user.uid)
        .orderBy('postTime', 'desc')
        .get()
        .then(querySnapshot => {
          // console.log('Total Posts: ', querySnapshot.size);

          querySnapshot.forEach(doc => {
            const {userId, post, postImg, postTime, likes, comments} =
              doc.data();
            list.push({
              id: doc.id,
              userId,
              userName: 'Test Name',
              userImg:
                'https://cdn2.vectorstock.com/i/thumb-large/04/71/person-icon-vector-2110471.jpg',
              postTime: postTime,
              post,
              postImg,
              liked: false,
              likes,
              comments,
            });
          });
        });

      setPosts(list);

      if (loading) {
        setLoading(false);
      }

      console.log('Posts: ', posts);
    } catch (e) {
      console.log(e);
    }
  };

  const getUser = async () => {
    await firestore()
      .collection('users')
      .doc(route.params ? route.params.userId : user.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          console.log('User Data', documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
      });
  };

  useEffect(() => {
    getUser();
    fetchPosts();
    navigation.addListener('focus', () => setLoading(!loading));
  }, [navigation, loading]);

  const handleDelete = () => {};

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#d0f7e6'}}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        showsVerticalScrollIndicator={false}>
        <Image
          style={styles.userImg}
          source={{
            uri: userData
              ? userData.userImg ||
                'https://cdn2.vectorstock.com/i/thumb-large/04/71/person-icon-vector-2110471.jpg'
              : 'https://cdn2.vectorstock.com/i/thumb-large/04/71/person-icon-vector-2110471.jpg',
          }}
        />
        <Text style={styles.userName}>
          {userData ? userData.fname || 'Test' : 'Test'}{' '}
          {userData ? userData.lname || 'User' : 'User'}
        </Text>
        <Text>{route.params ? route.params.userId : user.uid}</Text>
        <Text style={styles.aboutUser}>
          {userData ? userData.about || 'No details added.' : ''}
        </Text>
        <View style={styles.userBtnWrapper}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('EditProfileScreen')}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => logout()}>
            <Text style={styles.buttonText}>Logout from Profile</Text>
          </TouchableOpacity>
        </View>

        {posts.map(item => (
          <PostCard key={item.id} item={item} onDelete={handleDelete} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0f7e6',
    padding: 20,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginTop: 50,
  },
  userName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
  },
  aboutUser: {
    fontSize: 25,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 30,
  },
  userBtnWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    marginTop: 50,
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: 'center',
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 25,
    width: '90%',
    height: windowHeight / 15,
    backgroundColor: '#83e6b9',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#228257',
  },
});
