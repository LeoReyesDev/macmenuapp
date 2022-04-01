import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
  Modal,
  Text,
  Pressable,
  View,
  StyleSheet,
  Image,
  Platform,
} from "react-native";

const ModalProduct = (props: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* <Text>Modal</Text> */}
            <Image
              source={{ uri: props.prodUrl }}
              style={{ width: 380, height: 213 }}
            />
            <Text style={styles.nameProd}>{props.prodName}</Text>
            <Text style={styles.price}>${props.prodPrice}</Text>
            <Text style={styles.descript}>{props.prodDescript}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>x close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Image
          source={{ uri: props.prodUrl }}
          style={{ width: 100, height: 100 }}
        />
        <Text style={{ textAlign: "center", width: 100 }}>
          {props.prodName}
        </Text>
      </Pressable>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default ModalProduct;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 345,
  },
  button: {
    borderRadius: 20,
    padding: 10,
  },
  buttonOpen: {
    borderColor: "#D8D8D8",
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    marginRight: 20,
  },
  buttonClose: {
    marginTop: 10,
  },
  textStyle: {
    color: "#000000",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  nameProd: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 30,
    textAlign: "center",
  },
  price: {
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    width: 50,
    textAlign: "center",
    marginTop: 10,
  },
  descript: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
});
