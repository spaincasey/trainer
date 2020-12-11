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
import WorkoutScreen from './src/screens/WorkoutScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as WorkoutProvider } from './src/context/WorkoutContext';
import { setNavigator } from './src/navigationRef';
import LoadingScreen from './src/screens/LoadingScreen';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

/********************************************************************
 * NAME: workoutListFlow
 * DESCRIPTION: create the workoutListFlow and assign it to a variable
 * so we can assign some navigation options to it. 
 *******************************************************************/
const workoutListFlow = createStackNavigator({
  Categories: CategoriesScreen,
  Workout: WorkoutScreen
})
workoutListFlow.navigationOptions = {
  title: 'Home',
  tabBarIcon: <MaterialIcons name="home" size={30} />
}

/********************************************************************
 * NAME: accountFlow
 * DESCRIPTION: create the accountFlow and assign it to a variable
 * so we can assign some navigation options to it. 
 *******************************************************************/
const accountFlow = createStackNavigator({
  Account: AccountScreen
})
accountFlow.navigationOptions = {
  title: 'Account',
  tabBarIcon: <MaterialCommunityIcons name="account" size={30} />
}

/********************************************************************
 * NAME: switchNavigator
 * DESCRIPTION: create the switchNavigator to setup the overall navigation
 * of the application and place it inside the App Container so we can wrap
 * the App Component in a couple Providers.
 *******************************************************************/
const switchNavigator = createSwitchNavigator({
  Loading: LoadingScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    workoutListFlow,
    accountFlow
  })
});

const App = createAppContainer(switchNavigator);

/********************************************************************
 * NAME: App
 * DESCRIPTION: The App component is wrapped in the AuthProvider and
 * WorkoutProvider to communicate with our backend and store data in 
 * our state.
 *******************************************************************/
export default () => {
  return (
    <WorkoutProvider>
      <AuthProvider>
        <App ref={(navigator) => { setNavigator(navigator) }} />
      </AuthProvider>
    </WorkoutProvider>
  );
};