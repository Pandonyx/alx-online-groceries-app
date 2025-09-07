import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import Main Screens
// import HomeScreen from '../screens/Main/HomeScreen';
// import ExploreScreen from '../screens/Main/ExploreScreen';
// import CartScreen from '../screens/Main/CartScreen';
// import FavoritesScreen from '../screens/Main/FavoritesScreen';
// import AccountScreen from '../screens/Main/AccountScreen';

// Import Other Screens
// import ProductDetailScreen from '../screens/Main/ProductDetailScreen';
// import BeveragesScreen from '../screens/Main/BeveragesScreen';
// import SearchScreen from '../screens/Main/SearchScreen';
// import FiltersScreen from '../screens/Main/FiltersScreen';
// import CheckoutScreen from '../screens/Main/CheckoutScreen';
// import OrderAcceptedScreen from '../screens/Main/OrderAcceptedScreen';
// import ErrorScreen from '../screens/Main/ErrorScreen';

export type MainTabParamList = {
  Home: undefined;
  Explore: undefined;
  Cart: undefined;
  Favorites: undefined;
  Account: undefined;
};

export type MainStackParamList = {
  MainTabs: undefined;
  ProductDetail: { productId: string };
  Beverages: undefined;
  Search: undefined;
  Filters: undefined;
  Checkout: undefined;
  OrderAccepted: undefined;
  Error: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();
const Stack = createNativeStackNavigator<MainStackParamList>();

const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { paddingBottom: 8, height: 60 },
      }}>
      {/* <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => '🏠',
        }}
      />
      <Tab.Screen 
        name="Explore" 
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: () => '🔍',
        }}
      />
      <Tab.Screen 
        name="Cart" 
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: () => '🛒',
        }}
      />
      <Tab.Screen 
        name="Favorites" 
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: () => '❤️',
        }}
      />
      <Tab.Screen 
        name="Account" 
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: () => '👤',
        }}
      /> */}
    </Tab.Navigator>
  );
};

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='MainTabs'
        component={MainTabNavigator}
      />
      {/* <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="Beverages" component={BeveragesScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Filters" component={FiltersScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="OrderAccepted" component={OrderAcceptedScreen} />
      <Stack.Screen name="Error" component={ErrorScreen} /> */}
    </Stack.Navigator>
  );
};

export default MainNavigator;
