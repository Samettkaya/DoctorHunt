import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../screens/MainScreen';

const { Navigator, Screen } = createNativeStackNavigator<any>();

export const MainNavigation: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false, }}>
      <Screen name="Main" component={MainScreen} />
    </Navigator>
  );
};
