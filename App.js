import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listBooks } from './src/graphql/queries'

import { View, Text } from "react-native";

class App extends React.Component { 
  state = { books: [] }
  async componentDidMount() {
    const bookData = await API.graphql(graphqlOperation(listBooks))
    this.setState({ books: bookData.data.listBooks.items })
  }
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20
        }}

      >
        <View style={{ backgroundColor: "blue", flex: 0.3 }} />
        <View style={{ backgroundColor: "red", flex: 0.5 }} />
        <Text>Hello Worldhiwuhwje!</Text>
        {
          this.state.books.map((b, i) => <Text key={i}>{b.name}</Text> )
        }
      </View>
    );
  }
}

// import Feed from './src/feed';
// import Detail from './src/detail';

// import Contacts from './src/screens/drawer/Contacts';
// import Favorites from './src/screens/drawer/Favorites';
// import Settings from './src/screens/drawer/Settings';

// import Tab1 from './src/screens/tabs/Tab1';
// import Tab2 from './src/screens/tabs/Tab2';
// import Tab3 from './src/screens/tabs/Tab3';

// import {
//   NavigationContainer,
//   DarkTheme,
//   DrawerActions
// } from '@react-navigation/native';

// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { useColorScheme, AppearanceProvider } from 'react-native-appearance';



// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();
// const MaterialBottomTabs = createMaterialBottomTabNavigator();
// const MaterialTopTabs = createMaterialTopTabNavigator();

// App = () => {

//   const colorScheme = useColorScheme();

//   const MyTheme = {
//     dark: false,
//     colors: {
//       primary: 'white',
//       background: 'white',
//       card: '#65509f',
//       text: 'white',
//       border: 'green',
//     },
//   }

//   const linking = {
//     prefixes: ['recipes://'],
//     config: {
//       screens: {
//         Feed: 'feed/:title',
//         Detail: 'detail/:foodName',
//         BottomTabs: {
//           path: 'bottom_tabs',
//           screens: {
//             Tab1: {
//               path: 'bTab1',
//               exact: true
//             },
//             Tab2: {
//               path: 'bTab2',
//               exact: true
//             },
//             Tab3: {
//               path: 'bTab3',
//               exact: true
//             }
//           }
//         },
//         TopTabs: {
//           path: 'top_tabs',
//           screens: {
//             Tab1: {
//               path: 'tTab1',
//               exact: true
//             },
//             Tab2: {
//               path: 'tTab2',
//               exact: true
//             },
//             Tab3: {
//               path: 'tTab3',
//               exact: true
//             }
//           }
//         },
//         Favorites: 'favorites/:user/:id',
//         Contacts: 'contacts/:user?',
//         Settings: {
//           path: 'settings/:color/:age/:isVerified',
//           parse: {
//             age: Number,
//             isVerified: Boolean,
//             color: (color) => `color-${color}`
//           }
//         }
//       }
//     }
//   }

//   createHomeStack = () =>
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Feed"
//         children={this.createDrawer}
//         options={({ navigation }) => ({
//           title: "React Navigation",
//           headerLeft: () =>
//             <Icon
//               onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
//               style={[{ color: 'white', marginLeft: 8 }]}
//               size={24}
//               name={'menu'}
//             />
//         })
//         }
//       />
//       <Stack.Screen
//         name="Detail"
//         component={Detail}
//         options={{
//           title: "Detail Screen"
//         }}
//       />
//       <Stack.Screen name="BottomTabs" component={BottomTabs} />
//       <Stack.Screen name="TopTabs" children={this.createTopTabs} />
//     </Stack.Navigator>

//   createDrawer = () =>
//     <Drawer.Navigator>
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Contacts" component={Contacts} />
//       <Drawer.Screen name="Favorites" component={Favorites} />
//       <Drawer.Screen name="Settings" component={Settings} />
//     </Drawer.Navigator>

//   createTopTabs = (props) => {
//     return <MaterialTopTabs.Navigator>
//       <MaterialTopTabs.Screen
//         name="Tab1"
//         component={Tab1}
//         options={{ title: props.route.params.name }}
//       />
//       <MaterialTopTabs.Screen name="Tab2" component={Tab2} />
//       <MaterialTopTabs.Screen name="Tab3" component={Tab3} />
//     </MaterialTopTabs.Navigator>
//   }

//   BottomTabs = () => {
//     return <MaterialBottomTabs.Navigator>
//       <MaterialBottomTabs.Screen
//         name="Tab1"
//         style={{ marginBottom: 16 }}
//         component={Tab1}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: () => (
//             <Icon style={[{ color: 'white' }]} size={25} name={'home'} />
//           ),
//         }}
//       />
//       <MaterialBottomTabs.Screen name="Tab2" component={Tab2}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: () => (
//             <Icon style={[{ color: 'white' }]} size={25} name={'human'} />
//           )
//         }}
//       />
//       <MaterialBottomTabs.Screen name="Tab3" component={Tab3}
//         options={{
//           tabBarLabel: 'Map',
//           tabBarIcon: () => (
//             <Icon style={[{ color: 'white' }]} size={25} name={'map'} />
//           ),
//         }}
//       />
//     </MaterialBottomTabs.Navigator>
//   }

//   return (
//     <AppearanceProvider>
//       <NavigationContainer theme={colorScheme == 'dark' ? DarkTheme : MyTheme}
//         linking={linking}
//       >
//         {this.createHomeStack()}
//       </NavigationContainer>
//     </AppearanceProvider>
//   );
// }

export default App;
// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//     <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Details" component={DetailsScreen} />
//     </Stack.Navigator>
//   </NavigationContainer>
//   );
// }

// export default App;