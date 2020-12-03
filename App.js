import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import WorkoutScreen from './src/screens/WorkoutScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as WorkoutProvider } from './src/context/WorkoutContext';
import { setNavigator } from './src/navigationRef';
import LoadingScreen from './src/screens/LoadingScreen';

const switchNavigator = createSwitchNavigator({
  Loading: LoadingScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    workoutListFlow: createStackNavigator({
      Categories: CategoriesScreen,
      Workout: WorkoutScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <WorkoutProvider>
      <AuthProvider>
        <App ref={(navigator) => { setNavigator(navigator) }} />
      </AuthProvider>
    </WorkoutProvider>
  );
};