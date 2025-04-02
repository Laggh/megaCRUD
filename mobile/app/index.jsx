import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { FontAwesome, MaterialIcons, Ionicons, Entypo, Feather, FontAwesome5 } from "@expo/vector-icons";




export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, textAlign: "center" }}>
        Ola mundo
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
