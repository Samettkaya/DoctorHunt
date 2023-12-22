import React from "react";
import HomeScreen from "../../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoriteScreen from "../../screens/FavoriteScreen";
import CustomTabBar from "./CustomTabBar";

const Tab = createBottomTabNavigator();
const BottomBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
 
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor:"#858EA9",
        tabBarActiveBackgroundColor:"#0EBE7E",
        tabBarInactiveBackgroundColor:"#fff",
      }}
      tabBar={(props) => {
        //  console.log(props.descriptors)
        return <CustomTabBar {...props} />;
      }}
    >
      <Tab.Screen options={{headerShown:false}}  name={"Home"}   component={HomeScreen} />
      <Tab.Screen name={"Favorite"} component={FavoriteScreen} />
      <Tab.Screen name={"Chat"} component={FavoriteScreen} />
    </Tab.Navigator>
  );
};

export default BottomBar;
