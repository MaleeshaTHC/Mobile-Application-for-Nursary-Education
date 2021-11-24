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
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 25, height: 25, marginLeft: 5}}
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
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: '#68f2b4',
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
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
          headerRight: ({navigation}) => (
            <TouchableOpacity
              onPress={() => logout()}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 15,
              }}>
              <MaterialCommunityIcons
                name="logout"
                color={'#FFFFFF'}
                size={25}
              />
              <Text style={{color: '#fff'}}>Logout</Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#68f2b4',
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
          headerRight: ({navigation}) => (
            <TouchableOpacity
              onPress={() => logout()}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 15,
              }}>
              <MaterialCommunityIcons
                name="logout"
                color={'#FFFFFF'}
                size={25}
              />
              <Text style={{color: '#fff'}}>Logout</Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#68f2b4',
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
          headerRight: ({navigation}) => (
            <TouchableOpacity
              onPress={() => logout()}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 15,
              }}>
              <MaterialCommunityIcons
                name="logout"
                color={'#FFFFFF'}
                size={25}
              />
              <Text style={{color: '#fff'}}>Logout</Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#68f2b4',
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
          headerRight: ({navigation}) => (
            <TouchableOpacity
              onPress={() => logout()}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 15,
              }}>
              <MaterialCommunityIcons
                name="logout"
                color={'#FFFFFF'}
                size={25}
              />
              <Text style={{color: '#fff'}}>Logout</Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#68f2b4',
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
          headerRight: ({navigation}) => (
            <TouchableOpacity
              onPress={() => logout()}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 15,
              }}>
              <MaterialCommunityIcons
                name="logout"
                color={'#FFFFFF'}
                size={25}
              />
              <Text style={{color: '#fff'}}>Logout</Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#68f2b4',
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
          headerRight: ({navigation}) => (
            <TouchableOpacity
              onPress={() => logout()}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 15,
              }}>
              <MaterialCommunityIcons
                name="logout"
                color={'#FFFFFF'}
                size={25}
              />
              <Text style={{color: '#fff'}}>Logout</Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#68f2b4',
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
          headerRight: ({navigation}) => (
            <TouchableOpacity
              onPress={() => logout()}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 15,
              }}>
              <MaterialCommunityIcons
                name="logout"
                color={'#FFFFFF'}
                size={25}
              />
              <Text style={{color: '#fff'}}>Logout</Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#68f2b4',
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
          headerRight: ({navigation}) => (
            <TouchableOpacity
              onPress={() => logout()}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 15,
              }}>
              <MaterialCommunityIcons
                name="logout"
                color={'#FFFFFF'}
                size={25}
              />
              <Text style={{color: '#fff'}}>Logout</Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#68f2b4',
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
        name="PhrasesStack"
        component={PhrasesScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerRight: ({navigation}) => (
            <TouchableOpacity
              onPress={() => logout()}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 15,
              }}>
              <MaterialCommunityIcons
                name="logout"
                color={'#FFFFFF'}
                size={25}
              />
              <Text style={{color: '#fff'}}>Logout</Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#68f2b4',
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
          headerRight: ({navigation}) => (
            <TouchableOpacity
              onPress={() => logout()}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 15,
              }}>
              <MaterialCommunityIcons
                name="logout"
                color={'#FFFFFF'}
                size={25}
              />
              <Text style={{color: '#fff'}}>Logout</Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#68f2b4',
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
        name="NumbersStack"
        component={NumbersScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerRight: ({navigation}) => (
            <TouchableOpacity
              onPress={() => logout()}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 15,
              }}>
              <MaterialCommunityIcons
                name="logout"
                color={'#FFFFFF'}
                size={25}
              />
              <Text style={{color: '#fff'}}>Logout</Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#68f2b4',
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
          headerRight: ({navigation}) => (
            <TouchableOpacity
              onPress={() => logout()}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 15,
              }}>
              <MaterialCommunityIcons
                name="logout"
                color={'#FFFFFF'}
                size={25}
              />
              <Text style={{color: '#fff'}}>Logout</Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#68f2b4',
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
        name="ShapesStack"
        component={ShapesScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerRight: ({navigation}) => (
            <TouchableOpacity
              onPress={() => logout()}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 15,
              }}>
              <MaterialCommunityIcons
                name="logout"
                color={'#FFFFFF'}
                size={25}
              />
              <Text style={{color: '#fff'}}>Logout</Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#68f2b4',
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
          headerRight: ({navigation}) => (
            <TouchableOpacity
              onPress={() => logout()}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 15,
              }}>
              <MaterialCommunityIcons
                name="logout"
                color={'#FFFFFF'}
                size={25}
              />
              <Text style={{color: '#fff'}}>Logout</Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#68f2b4',
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
        name="ColorsStack"
        component={ColorsScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerRight: ({navigation}) => (
            <TouchableOpacity
              onPress={() => logout()}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 15,
              }}>
              <MaterialCommunityIcons
                name="logout"
                color={'#FFFFFF'}
                size={25}
              />
              <Text style={{color: '#fff'}}>Logout</Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#68f2b4',
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
          headerRight: ({navigation}) => (
            <TouchableOpacity
              onPress={() => logout()}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 15,
              }}>
              <MaterialCommunityIcons
                name="logout"
                color={'#FFFFFF'}
                size={25}
              />
              <Text style={{color: '#fff'}}>Logout</Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#68f2b4',
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
        name="PoemsStack"
        component={PoemsScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerRight: ({navigation}) => (
            <TouchableOpacity
              onPress={() => logout()}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 15,
              }}>
              <MaterialCommunityIcons
                name="logout"
                color={'#FFFFFF'}
                size={25}
              />
              <Text style={{color: '#fff'}}>Logout</Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#68f2b4',
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
        name="MyFamStack"
        component={MyFamScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerRight: ({navigation}) => (
            <TouchableOpacity
              onPress={() => logout()}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 15,
              }}>
              <MaterialCommunityIcons
                name="logout"
                color={'#FFFFFF'}
                size={25}
              />
              <Text style={{color: '#fff'}}>Logout</Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#68f2b4',
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
        activeTintColor: '#68f2b4',
        itemStyle: {marginVertical: 8},
      }}>
      <Drawer.Screen
        name="HomeScreenStack"
        options={{drawerLabel: 'Home'}}
        component={HomeScreenStack}
      />
      <Drawer.Screen
        name="AlphabetScreen"
        options={{drawerLabel: 'Alphabet'}}
        component={AlphabetScreen}
      />
      <Drawer.Screen
        name="PhrasesScreenStack"
        options={{drawerLabel: 'Phrases'}}
        component={PhrasesScreenStack}
      />
      <Drawer.Screen
        name="NumbersScreenStack"
        options={{drawerLabel: 'Numbers'}}
        component={NumbersScreenStack}
      />
      <Drawer.Screen
        name="ShapesScreenStack"
        options={{drawerLabel: 'Shapes'}}
        component={ShapesScreenStack}
      />
      <Drawer.Screen
        name="ColorsScreenStack"
        options={{drawerLabel: 'Colors'}}
        component={ColorsScreenStack}
      />
      <Drawer.Screen
        name="PoemsScreenStack"
        options={{drawerLabel: 'Poems'}}
        component={PoemsScreenStack}
      />
      <Drawer.Screen
        name="FamilyScreenStack"
        options={{drawerLabel: 'My Family'}}
        component={MyFamScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default App;
