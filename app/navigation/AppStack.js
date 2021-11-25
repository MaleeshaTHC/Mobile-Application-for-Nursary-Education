/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
// Tab View inside Navigation Drawer
// https://aboutreact.com/tab-view-inside-navigation-drawer-sidebar-with-react-navigation/

import 'react-native-gesture-handler';

import React, {useContext} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AuthContext} from '../navigation/AuthProvider';

import HomeScreen from '../screens/HomeScreen';
import PhrasesScreen from '../screens/PhrasesScreen';
import AlphabetScreen from '../screens/AlphabetScreen';
import NumbersScreen from '../screens/NumbersScreen';
import ShapesScreen from '../screens/ShapesScreen';
import ColorsScreen from '../screens/ColorsScreen';
import PoemsScreen from '../screens/PoemsScreen';
import MyFamScreen from '../screens/MyFamScreen';
import ActivityScreen from '../screens/ActivityScreen';
import AlphabetQuiz from '../stores/AlphabetQuiz';
import PhrasesQuiz from '../stores/PhrasesQuiz';
import NumbersQuiz from '../stores/NumbersQuiz';
import ShapesQuiz from '../stores/NumbersQuiz';
import ColorsQuiz from '../stores/ColorsQuiz';
import MathsScreen from '../screens/MathsScreen';
import CreativeScreen from '../screens/CreativeScreen';
import CommunityScreen from '../screens/CommunityScreen';
import EnglishScreen from '../screens/EnglishScreen';
import SchoolScreen from '../screens/SchoolScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const NavigationDrawerStructure = props => {
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <MaterialCommunityIcons
          name="reorder-horizontal"
          color={'#228257'}
          size={25}
          style={{marginLeft: 10}}
        />
      </TouchableOpacity>
    </View>
  );
};

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: '#228257',
        inactiveTintColor: '#228125',
        style: {
          backgroundColor: '#d0f7e6',
        },
        indicatorStyle: {
          borderBottomColor: '#d0f7e6',
          borderBottomWidth: 2,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ActivityScreen"
        component={ActivityStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="script-text"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeScreenStack = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="TabStack"
        component={TabStack}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
      <Stack.Screen
        name="AlphabetScreen"
        component={AlphabetScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
      <Stack.Screen
        name="EnglishScreen"
        component={EnglishScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
      <Stack.Screen
        name="MathsScreen"
        component={MathsScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
      <Stack.Screen
        name="AlphabetQuiz"
        component={AlphabetQuiz}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
      <Stack.Screen
        name="NumbersScreen"
        component={NumbersScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
      <Stack.Screen
        name="NumbersQuiz"
        component={NumbersQuiz}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
      <Stack.Screen
        name="ShapesScreen"
        component={ShapesScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
      <Stack.Screen
        name="ShapesQuiz"
        component={ShapesQuiz}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
      <Stack.Screen
        name="PhrasesScreen"
        component={PhrasesScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
      <Stack.Screen
        name="PhrasesQuiz"
        component={PhrasesQuiz}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
      <Stack.Screen
        name="ColorsScreen"
        component={ColorsScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
      <Stack.Screen
        name="ColorsQuiz"
        component={ColorsQuiz}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
      <Stack.Screen
        name="PoemsScreen"
        component={PoemsScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
      <Stack.Screen
        name="MyFamScreen"
        component={MyFamScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
      <Stack.Screen
        name="CreativeScreen"
        component={CreativeScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
      <Stack.Screen
        name="CommunityScreen"
        component={CommunityScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
      <Stack.Screen
        name="SchoolScreen"
        component={SchoolScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
    </Stack.Navigator>
  );
};

const AlphabetScreenStack = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="AlphabetScreen">
      <Stack.Screen
        name="AlphabetScreen"
        component={AlphabetScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
      <Stack.Screen
        name="AlphabetQuiz"
        component={AlphabetQuiz}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
    </Stack.Navigator>
  );
};

const PhrasesScreenStack = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="PhrasesScreen">
      <Stack.Screen
        name="AlphabetScreen"
        component={AlphabetScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
      <Stack.Screen
        name="PhrasesQuiz"
        component={PhrasesQuiz}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
    </Stack.Navigator>
  );
};

const NumbersScreenStack = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="NumbersScreen">
      <Stack.Screen
        name="NumbersScreen"
        component={NumbersScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
      <Stack.Screen
        name="NumbersQuiz"
        component={NumbersQuiz}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
    </Stack.Navigator>
  );
};

const ShapesScreenStack = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="ShapesScreen">
      <Stack.Screen
        name="ShapesScreen"
        component={ShapesScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
      <Stack.Screen
        name="ShapesQuiz"
        component={ShapesQuiz}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
    </Stack.Navigator>
  );
};

const ColorsScreenStack = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="ColorsScreen">
      <Stack.Screen
        name="ColorsScreen"
        component={ColorsScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
      <Stack.Screen
        name="ColorsQuiz"
        component={ColorsQuiz}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
    </Stack.Navigator>
  );
};

const PoemsScreenStack = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="PoemsScreen">
      <Stack.Screen
        name="PoemsScreen"
        component={PoemsScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
    </Stack.Navigator>
  );
};

const MyFamScreenStack = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="MyFamScreen">
      <Stack.Screen
        name="MyFamScreen"
        component={MyFamScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
    </Stack.Navigator>
  );
};

const SchoolScreenStack = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="SchoolScreen">
      <Stack.Screen
        name="SchoolScreen"
        component={SchoolScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
    </Stack.Navigator>
  );
};

const ProfileScreenStack = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
    </Stack.Navigator>
  );
};

const EditProfileScreenStack = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d0f7e6',
          },
        })}
      />
    </Stack.Navigator>
  );
};

function ActivityStack({navigation}) {
  const {user, logout} = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="ActivityScreen">
      <Stack.Screen
        name="ActivityScreen"
        component={ActivityScreen}
        options={() => ({
          headerTitle: '',
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="AlphabetQuiz"
        component={AlphabetQuiz}
        options={() => ({
          headerTitle: '',
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="PhrasesQuiz"
        component={PhrasesQuiz}
        options={() => ({
          headerTitle: '',
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="NumbersQuiz"
        component={NumbersQuiz}
        options={() => ({
          headerTitle: '',
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="ShapesQuiz"
        component={ShapesQuiz}
        options={() => ({
          headerTitle: '',
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="ColorsQuiz"
        component={ColorsQuiz}
        options={() => ({
          headerTitle: '',
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#d0f7e6',
        itemStyle: {marginVertical: 8},
      }}>
      <Drawer.Screen
        name="HomeScreenStack"
        options={{drawerLabel: 'Home'}}
        component={HomeScreenStack}
      />
      <Drawer.Screen
        name="AlphabetScreenStack"
        options={{drawerLabel: 'Alphabet'}}
        component={AlphabetScreenStack}
      />
      <Drawer.Screen
        name="PhrasesScreen"
        options={{drawerLabel: 'Phrases'}}
        component={PhrasesScreenStack}
      />
      <Drawer.Screen
        name="NumbersScreen"
        options={{drawerLabel: 'Numbers'}}
        component={NumbersScreenStack}
      />
      <Drawer.Screen
        name="ShapesScreen"
        options={{drawerLabel: 'Shapes'}}
        component={ShapesScreenStack}
      />
      <Drawer.Screen
        name="ColorsScreen"
        options={{drawerLabel: 'Colors'}}
        component={ColorsScreenStack}
      />
      <Drawer.Screen
        name="PoemsScreen"
        options={{drawerLabel: 'Poems'}}
        component={PoemsScreenStack}
      />
      <Drawer.Screen
        name="MyFamScreen"
        options={{drawerLabel: 'My Family'}}
        component={MyFamScreenStack}
      />
      <Drawer.Screen
        name="SchoolScreen"
        options={{drawerLabel: 'My School'}}
        component={SchoolScreenStack}
      />
      <Drawer.Screen
        name="ProfileScreenStack"
        options={{drawerLabel: 'Profile'}}
        component={ProfileScreenStack}
      />
      <Drawer.Screen
        name="EditProfileScreenStack"
        options={{drawerLabel: 'Edit Profile'}}
        component={EditProfileScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default App;
