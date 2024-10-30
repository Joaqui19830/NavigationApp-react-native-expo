import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, StackActions } from "@react-navigation/native";
import { Stack, useNavigation } from "expo-router";
import React from "react";

const StackLayout = () => {
  const navigation = useNavigation();

  const onheaderLeftClick = (canGoBack: boolean) => {
    if (canGoBack) {
      // Aca usamos el dispatch en vez del pop porque tenemos un moton de stack, tabs y otras rutas
      navigation.dispatch(StackActions.pop());
      return;
    }
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },

        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back-outline" : "grid-outline"}
            size={20}
            className="mr-5"
            onPress={() => onheaderLeftClick(canGoBack)}
          />
        ),
      }}
    >
      <Stack.Screen name="home/index" options={{ title: "Inicio" }} />
      <Stack.Screen name="products/index" options={{ title: "Productos" }} />
      <Stack.Screen name="profile/index" options={{ title: "Perfil" }} />
      <Stack.Screen
        name="settings/index"
        options={{ title: "Ajustes Pantalla" }}
      />
    </Stack>
  );
};

export default StackLayout;
