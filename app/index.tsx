import { Redirect } from "expo-router";
import React from "react";

const App = () => {
  return <Redirect href="/(stack)/home" />;

  //   return (
  //     <SafeAreaView>
  //       <View className="mt-5 mx-2.5">
  //         <Text className="text-3xl" style={{ fontFamily: "WorkSans-Black" }}>
  //           Hola Mundo
  //         </Text>
  //         <Text className="text-4xl text-primary font-work-black ">
  //           Hola Mundo
  //         </Text>
  //         <Text className="text-3xl text-secondary font-work-medium">
  //           Hola Mundo
  //         </Text>
  //         <Text className="text-2xl text-secondary-100 font-work-light">
  //           Hola Mundo
  //         </Text>
  //         <Text className="text-xl text-tertiary">Hola Mundo</Text>

  //         <Link href="/products">Productos</Link>
  //       </View>
  //     </SafeAreaView>
  //   );
};

export default App;
