import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../hooks/useAuth';
import { LoadingIndicator } from '../components/Loader/LoadingIndicator';
import { colors } from '../theme/colors';

// Screens
import { LoginScreen } from '../screens/Login/LoginScreen';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { AboutDoctorScreen } from '../screens/AboutDoctor/AboutDoctorScreen';
import { AppointmentConfirmationScreen } from '../screens/AppointmentConfirmation/AppointmentConfirmationScreen';
import { ProfileScreen } from '../screens/Profile/ProfileScreen';
import { TimelineScreen } from '../screens/Timeline/TimelineScreen';
import { MockScreen } from '../screens/MockScreen';

import { ROUTES } from './routes';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textTertiary,
        tabBarStyle: {
          height: 80,
          paddingBottom: 20,
          paddingTop: 10,
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
        },
      }}
    >
      <Tab.Screen 
        name={ROUTES.TIMELINE} 
        component={TimelineScreen}
        options={{ tabBarIcon: ({color}) => <Ionicons name="calendar-outline" size={24} color={color} /> }}
      />
      <Tab.Screen 
        name={ROUTES.COVERAGE} 
        children={() => <MockScreen name="Coverage" />} 
        options={{ tabBarIcon: ({color}) => <Ionicons name="shield-checkmark-outline" size={24} color={color} /> }}
      />
      <Tab.Screen 
        name={ROUTES.HOME} 
        component={HomeScreen} 
        options={{ 
          title: 'Search',
          tabBarIcon: ({color}) => <Ionicons name="search-outline" size={24} color={color} />
        }}
      />
      <Tab.Screen 
        name={ROUTES.PROFILE} 
        component={ProfileScreen}
        options={{ tabBarIcon: ({color}) => <Ionicons name="person-outline" size={24} color={color} /> }}
      />
    </Tab.Navigator>
  );
};

export const AppNavigator = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          // App Stack
          <>
            <Stack.Screen name={ROUTES.MAIN_TABS} component={MainTabNavigator} />
            <Stack.Screen name={ROUTES.ABOUT_DOCTOR} component={AboutDoctorScreen} />
            <Stack.Screen name={ROUTES.CONFIRMATION} component={AppointmentConfirmationScreen} />
          </>
        ) : (
          // Auth Stack
          <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  activeIconContainer: {
    padding: 10,
    borderRadius: 30,
  },
  activeIconBg: {
    backgroundColor: colors.primaryLight,
  }
});
