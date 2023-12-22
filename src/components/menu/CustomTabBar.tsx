import React, { FC } from "react";
import { TouchableHighlight, View, Text, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const CustomTabBar: FC<any> = ({ state, descriptors, navigation }) => {
  const iconMapping: {
    [key: string]: {
      [key: string]: keyof typeof MaterialCommunityIcons.glyphMap;
    };
  } = {
    Home: {
      focusedIcon: "home",
      unfocusedIcon: "home",
    },
    Favorite: {
      focusedIcon: "cards-heart",
      unfocusedIcon: "cards-heart",
    },
    Chat:{
      focusedIcon: "chat-processing",
      unfocusedIcon: "chat-processing",
    }
  };

  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#ffffff",

        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
    
        paddingBottom:insets.bottom/4,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 10,
        shadowRadius: 4,
        elevation: 5,
       
      }}
    >
      {state.routes.map((route: any, index: number) => {
        const { options, tabBarIcon } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined ? options.tabBarLabel : route.name;
        const isFocused = state.index === index;

        const color = isFocused
          ? options.tabBarActiveTintColor
          : options.tabBarInactiveTintColor;

        const backgroundColor = isFocused
          ? options.tabBarActiveBackgroundColor
          : options.tabBarInactiveBackgroundColor;

        const iconName = isFocused
          ? iconMapping[route.name]?.unfocusedIcon
          : iconMapping[route.name]?.focusedIcon;

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            activeOpacity={0.8}
            key={route.key}
            style={{
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              paddingVertical: 15,
              borderRadius: 20,
            }}
            onPress={() => navigation.navigate(route.name)}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: backgroundColor,
                height: 48,
                width: 48,
                borderRadius: 100,
              }}
            >
              <MaterialCommunityIcons name={iconName} color={color} size={24} />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default CustomTabBar;
