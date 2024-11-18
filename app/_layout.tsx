import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function _layout() {
  return (
    <Tabs screenOptions={{ tabBarStyle: { backgroundColor: "black" } }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: () => <Entypo name="home" size={24} color="white" />,
          title: "",
        }}
      />
      <Tabs.Screen
        name="(tabs)/Search"
        options={{
          headerShown: false,
          tabBarIcon: () => <Feather name="search" size={24} color="white" />,
          title: "",
        }}
      />
      <Tabs.Screen
        name="(tabs)/Grock"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign name="checksquare" size={24} color="white" />
          ),
          title: "",
        }}
      />
      <Tabs.Screen
        name="(tabs)/Comunidade"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="people-outline" size={24} color="white" />
          ),
          title: "",
        }}
      />
      <Tabs.Screen
        name="(tabs)/Notificacoes"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialIcons name="notifications-none" size={24} color="white" />
          ),
          title: "",
        }}
      />
      <Tabs.Screen
        name="(tabs)/CaixaDeMensagens"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome name="envelope" size={24} color="white" />
          ),
          title: "",
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "black",
  },
});
