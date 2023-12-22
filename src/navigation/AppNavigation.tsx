import React, { Fragment, useCallback, useEffect } from "react";

import { MainNavigation } from "./MainNavigation";
import { AuthNavigation } from "./AuthNavigation";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export const AppNavigation: React.FC = () => {
  const [fontsLoaded] = useFonts({
    "Rubik-Black": require("../assets/fonts/Rubik/static/Rubik-Black.ttf"),
    "Rubik-Bold": require("../assets/fonts/Rubik/static/Rubik-Bold.ttf"),
    "Rubik-Light": require("../assets/fonts/Rubik/static/Rubik-Light.ttf"),
    "Rubik-Regular": require("../assets/fonts/Rubik/static/Rubik-Regular.ttf")

  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const authData = true;
  return (
    <Fragment>{authData ? <MainNavigation /> : <AuthNavigation />}</Fragment>
  );
};
