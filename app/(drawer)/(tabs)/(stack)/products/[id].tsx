import { products } from "@/store/products.store";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

const ProductScreen = () => {
  // Esto tambien funciona en la web y en mobile
  const { id } = useLocalSearchParams();

  const navigation = useNavigation();

  const product = products.find((p) => p.id === id);

  useEffect(() => {
    //* Aca en la pantalla del detalle del producto le cambia el titulo si viene lo muestra sino muestra el title Producto
    navigation.setOptions({
      title: product?.title ?? "Producto",
    });
  }, [product]);

  if (!product) {
    return <Redirect href="/" />;
  }

  //   console.log({ params });

  return (
    <View className="px-5 mt-2">
      <Text className="font-work-black text-2xl">{product.title}</Text>
      <Text className="">{product.description}</Text>
      <Text className="font-work-black">{product.price}</Text>
    </View>
  );
};

export default ProductScreen;
