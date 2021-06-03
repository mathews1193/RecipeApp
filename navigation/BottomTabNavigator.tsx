/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Home from '../screens/HomeScreen';
import Order from '../screens/OrderScreen';
import ShoppingList from '../screens/ShoppingList';
import Recipe from '../screens/RecipeHomeScreen';
import { BottomTabParamList, HomeParamList, OrderParamList, RecipeParamList, ShoppingParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Orders"
        component={OrderNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="ios-basket-sharp" size={34} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Recipes"
        component={RecipeNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="ios-clipboard-sharp" size={34} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="ShoppingList"
        component={ShoppingNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="ios-cart-sharp" size={34} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerTitle: 'Sous Chef' }}
      />
    </HomeStack.Navigator>
  );
}

const OrderStack = createStackNavigator<OrderParamList>();

function OrderNavigator() {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen
        name="OrderScreen"
        component={Order}
        options={{ headerTitle: 'Orders' }}
      />
    </OrderStack.Navigator>
  );
}

const RecipeStack = createStackNavigator<RecipeParamList>();

function RecipeNavigator() {
  return (
    <RecipeStack.Navigator>
      <RecipeStack.Screen
        name="RecipeScreen"
        component={Recipe}
        options={{ headerTitle: 'Recipes' }}
      />
    </RecipeStack.Navigator>
  );
}

const ShoppingStack = createStackNavigator<ShoppingParamList>();

function ShoppingNavigator() {
  return (
    <ShoppingStack.Navigator>
      <ShoppingStack.Screen
        name="ShoppingListScreen"
        component={ShoppingList}
        options={{ headerTitle: 'Shopping List' }}
      />
    </ShoppingStack.Navigator>
  );
}
