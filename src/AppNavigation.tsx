import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigation} from './utils';
import {colors} from './utils/theme';
import Home from './wrapper/Home';


const Stack = createNativeStackNavigator();

const {navigationRef} = navigation;
const options = {
  headerShown: false,
  gestureEnabled: true,
};

const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: colors.white,
          },
        }}>
        <Stack.Screen name="Home" options={options} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
