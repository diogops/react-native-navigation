
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigations/Stack';

function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default App;

// // import { StatusBar } from 'expo-status-bar';
// // import { StyleSheet, Text, View } from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';

// // export default function App() {
// //   return (
// //     <NavigationContainer>
// //       <View style={styles.container}>
// //         <Text>Open up App.js to start working on your app!</Text>
// //         <StatusBar style="auto" />
// //       </View>
// //     </NavigationContainer>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });
