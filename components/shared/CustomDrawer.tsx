import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    // Esto es para que en  el boton de hamburguesa o drawer se pueda realziar el scrool la propiedad es para que no se este moviendo el scrool fijarse en que momento usarla
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View className="flex justify-center items-center mx-10 p-10 mb-10 h-[150px] rounded-xl bg-primary">
        <View className="flex justify-center items-center bg-white rounded-full h-24 w-24">
          <Text className="text-primary font-work-black text-3xl">JC</Text>
        </View>
      </View>

      {/* //* DrawerItems: Que serian los item que tenemos en nuestro drawer */}

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
