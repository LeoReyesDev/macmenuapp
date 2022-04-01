import { StyleSheet, Image } from "react-native";

import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function Home({ navigation }: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/mac-logo.png")} />
      <Image source={require("../assets/images/mac-menu.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  gallery: {
    height: 230,
  },
  modalWindow: {
    flex: 1,
    width: 250,
    height: 550,
    zIndex: 2,
  },
});
