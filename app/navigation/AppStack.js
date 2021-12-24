/* eslint-disable no-undef */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
// Tab View inside Navigation Drawer
// https://aboutreact.com/tab-view-inside-navigation-drawer-sidebar-with-react-navigation/

import 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';

import React, {useContext} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AuthContext} from '../navigation/AuthProvider';
import {DrawerContent} from '../screens/DrawerContent';

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
import ShapesQuiz from '../stores/ShapesQuiz';
import ColorsQuiz from '../stores/ColorsQuiz';
import MathsScreen from '../screens/MathsScreen';
import CreativeScreen from '../screens/CreativeScreen';
import CommunityScreen from '../screens/CommunityScreen';
import EnglishScreen from '../screens/EnglishScreen';
import SchoolScreen from '../screens/SchoolScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddMarksScreen from '../screens/AddMarksScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import AboutScreen from '../screens/About';

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
          color="black"
          size={30}
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
        activeTintColor: '#fff',
        inactiveTintColor: '#000000aa',
        style: {
          backgroundColor: '#faa692',
          height: 50,
        },
      }}>
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
      />
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
        component={ActivityScreen}
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
            backgroundColor: '#b1d2c7',
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
            backgroundColor: '#b1d2c7',
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
            backgroundColor: '#fed176',
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
            backgroundColor: '#fed176',
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
            backgroundColor: '#fed176',
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
            backgroundColor: '#b1d2c7',
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
            backgroundColor: '#fed176',
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
            backgroundColor: '#b1d2c7',
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
            backgroundColor: '#fed176',
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
            backgroundColor: '#b1d2c7',
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
            backgroundColor: '#fed176',
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
            backgroundColor: '#b1d2c7',
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
            backgroundColor: '#fed176',
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
            backgroundColor: '#b1d2c7',
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
            backgroundColor: '#fed176',
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
            backgroundColor: '#fed176',
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
            backgroundColor: '#fed176',
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
            backgroundColor: '#fed176',
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
            backgroundColor: '#fed176',
          },
        })}
      />
      <Stack.Screen
        name="AddMarksScreen"
        component={AddMarksScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#b1d2c7',
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
            backgroundColor: '#b1d2c7',
          },
        })}
      />
      <Stack.Screen
        name="ActivityScreenStack"
        component={ActivityStack}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#b1d2c7',
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
            backgroundColor: '#fed176',
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
            backgroundColor: '#b1d2c7',
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
        name="PhrasesScreen"
        component={PhrasesScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#fed176',
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
            backgroundColor: '#b1d2c7',
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
            backgroundColor: '#fed176',
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
            backgroundColor: '#b1d2c7',
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
            backgroundColor: '#fed176',
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
            backgroundColor: '#b1d2c7',
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
            backgroundColor: '#fed176',
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
            backgroundColor: '#b1d2c7',
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
            backgroundColor: '#fed176',
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
            backgroundColor: '#fed176',
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
            backgroundColor: '#fed176',
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
            backgroundColor: '#b1d2c7',
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
            backgroundColor: '#b1d2c7',
          },
        })}
      />
      <Stack.Screen
        name="AddMarksScreen"
        component={AddMarksScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#b1d2c7',
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
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#b1d2c7',
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
            backgroundColor: '#b1d2c7',
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
            backgroundColor: '#b1d2c7',
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
            backgroundColor: '#b1d2c7',
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
            backgroundColor: '#b1d2c7',
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
            backgroundColor: '#b1d2c7',
          },
        })}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <PaperProvider>
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} />}
        drawerContentOptions={{
          activeTintColor: '#faa08c',
          itemStyle: {marginVertical: 10},
          backgroundColor: '#eeeed1',
        }}>
        <Drawer.Screen name="HomeScreenDrawer" component={HomeScreenStack} />
        <Drawer.Screen
          name="ProfileScreenDrawer"
          component={ProfileScreenStack}
        />
        <Drawer.Screen
          name="AlphabetScreenDrawer"
          component={AlphabetScreenStack}
        />
        <Drawer.Screen
          name="PhrasesScreenDrawer"
          component={PhrasesScreenStack}
        />
        <Drawer.Screen
          name="NumbersScreenDrawer"
          component={NumbersScreenStack}
        />
        <Drawer.Screen
          name="ShapesScreenDrawer"
          component={ShapesScreenStack}
        />
        <Drawer.Screen
          name="ColorsScreenDrawer"
          component={ColorsScreenStack}
        />
        <Drawer.Screen name="PoemsScreenDrawer" component={PoemsScreenStack} />
        <Drawer.Screen name="MyFamScreenDrawer" component={MyFamScreenStack} />
        <Drawer.Screen
          name="SchoolScreenDrawer"
          component={SchoolScreenStack}
        />
        <Drawer.Screen name="ActivityScreenDrawer" component={ActivityStack} />
        <Drawer.Screen name="AboutScreen" component={AboutScreen} />
      </Drawer.Navigator>
    </PaperProvider>
  );
};

export default App;
