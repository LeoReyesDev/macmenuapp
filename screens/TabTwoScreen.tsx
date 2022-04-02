import { StyleSheet, Image, ScrollView } from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { useEffect, useState } from "react";
import ModalProduct from "./ModalProduct";

const myEndPoint = "https://mcdonalds.trio.dev/menu";

export default function TabTwoScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [menus, setMenu]: any = useState([]);

  useEffect(() => {
    fetch(myEndPoint)
      .then((resp) => resp.json())
      .then((data) => setMenu(data.menus))
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <ScrollView>
      <View style={styles.logoMac}>
        <Image source={require("../assets/images/mac-logo.png")} />
      </View>
      {menus.map((e: any, i: number) => {
        return (
          <View key={i} style={styles.gallery}>
            <Text style={styles.title}>{e.name}</Text>
            {console.log("ProductsRender", e.items, "Index", i)}
            <ScrollView style={{ height: 1 }} horizontal={true}>
              {e.items.map((e: any, i: number) => {
                console.log("SUbItems", e);
                return (
                  <ModalProduct
                    prodName={e.name}
                    prodUrl={e.url}
                    prodPrice={e.price}
                    prodDescript={e.description}
                    key={i}
                  >
                    <View
                      style={{
                        borderColor: "#D8D8D8",
                        borderWidth: 1,
                        borderRadius: 10,
                        padding: 20,
                        marginRight: 20,
                      }}
                    >
                      <Image
                        key={i}
                        source={{ uri: e.url }}
                        style={{ width: 100, height: 100 }}
                      />
                      <Text>{e.name}</Text>
                      <Text>${e.price}</Text>
                      <Text>{e.description}</Text>
                    </View>
                  </ModalProduct>
                );
              })}
            </ScrollView>
          </View>
        );
      })}
    </ScrollView>
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
    height: 270,
  },
  modalWindow: {
    flex: 1,
    width: 250,
    height: 550,
    zIndex: 2,
  },
  logoMac: {
    flex: 1,
    alignItems: "center",
  },
});
