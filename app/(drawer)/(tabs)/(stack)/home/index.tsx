import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigation = useNavigation();

  // Esto es para abrir el menu (drawer)
  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButton
          className="mb-2"
          color="primary"
          // onPress={() => router.push("/drawer/tabs/products")}
          onPress={() => router.push("/products")}
        >
          Productos
        </CustomButton>
        <CustomButton
          className="mb-2"
          color="secondary"
          // onPress={() => router.push("/drawer/tabs/profile")}
          onPress={() => router.push("/profile")}
        >
          Profiles
        </CustomButton>

        <CustomButton
          className="mb-2"
          color="tertiary"
          // onPress={() => router.push("/drawer/tabs/settings")}
          onPress={() => router.push("/settings")}
        >
          Ajustes
        </CustomButton>

        {/* Esto es por si queremos navegar desde el link  */}
        {/* <Link href="/drawer/tabs/products" asChild> */}
        <Link href="/products" asChild>
          <CustomButton className="mb-10" color="primary" variant="text-only">
            Productos
          </CustomButton>
        </Link>

        <CustomButton onPress={onToggleDrawer}>Abrir menú</CustomButton>
        {/* <Link className="mb-5" href="/products">
          Productos
        </Link>
        <Link className="mb-5" href="/profile">
          Perfil
        </Link>
        <Link className="mb-5" href="/settings">
          Ajustes
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
