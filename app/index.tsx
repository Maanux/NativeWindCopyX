import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome6, Fontisto } from "@expo/vector-icons";
import "../global.css";

export default function index() {
  const posts = [
    {
      user: "TechieTom",
      avatar: "https://i.pravatar.cc/50?img=53",
      content:
        "Manual do Mundo testou e descobriu que o ChatGPT iria mal no Enem, isso me fez refletir reflexões",
      comments: 25,
      likes: 125,
      views: 1500,
    },
    {
      user: "CodeMaster27",
      avatar: "https://i.pravatar.cc/50?img=55",
      content:
        "Depois de botar uns repositórios com umas coisas malucas que eu tô fazendo em c, atualizei meu readme e ficou muito bonitinho.",
      comments: 18,
      likes: 200,
      views: 1200,
    },
    {
      user: "StarrySkyGuy",
      avatar: "https://i.pravatar.cc/50?img=44",
      content:
        "Acabei de terminar um curso sobre inteligência artificial. O futuro é agora!🤖💡",
      comments: 32,
      likes: 250,
      views: 2100,
    },
    {
      user: "PixelPanda",
      avatar: "https://i.pravatar.cc/50?img=47",
      content:
        "Estou adorando aprender sobre microserviços. Muito conteúdo interessante! 🚀 #dev #programação",
      comments: 15,
      likes: 180,
      views: 800,
    },
    {
      user: "CuriousCat_92",
      avatar: "https://i.pravatar.cc/50?img=25",
      content:
        "Alguém mais está viciado no jogo de estratégia que lançou essa semana? Preciso de dicas! 🎮",
      comments: 28,
      likes: 300,
      views: 1800,
    },
    {
      user: "LunaLover",
      avatar: "https://i.pravatar.cc/50?img=26",
      content:
        "Vi um filme incrível hoje, e a trilha sonora é sensacional! Já quero ouvir de novo. 🎶🍿",
      comments: 20,
      likes: 150,
      views: 1100,
    },
    {
      user: "QuantumDrift",
      avatar: "https://i.pravatar.cc/50?img=29",
      content:
        "Está chovendo e eu só quero uma xícara de chá e um bom livro. ☔📚",
      comments: 10,
      likes: 90,
      views: 500,
    },
    {
      user: "CryptoChaser",
      avatar: "https://i.pravatar.cc/50?img=59",
      content:
        "Fui correr hoje e o vento estava perfeito. Me senti no topo do mundo! 🏃💨",
      comments: 8,
      likes: 220,
      views: 1700,
    },
  ];

  return (
    <View className="flex-1 bg-black">
      <View className="flex-col items-center p-4 bg-black border-b border-b-gray-700">
        <View className="flex-row items-center justify-between w-full">
          <Ionicons name="person-circle" size={32} color="white" />
          <FontAwesome6 name="x-twitter" size={32} color="white" />
          <Ionicons name="ellipsis-vertical" size={24} color="white" />
        </View>

        <View className="flex-row justify-center mt-4 w-full">
          <TouchableOpacity className="py-2 px-3 rounded-md border-b-4 border-b-blue-500 mx-2">
            <Text className="text-white text-lg font-bold">Para Você</Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-2 px-3 mx-2">
            <Text className="text-white text-lg font-bold">Seguindo</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View className="p-4 border-b border-b-gray-700">
            <View className="flex-row mb-2">
              <Image
                source={{ uri: item.avatar }}
                className="w-12 h-12 rounded-full mr-3"
              />
              <View className="flex-1">
                <Text className="text-white text-lg font-bold">
                  {item.user}
                </Text>
                <Text className="text-gray-400 text-sm mt-1">
                  {item.content}
                </Text>
              </View>
            </View>

            <View className="flex-row justify-between mt-3">
              <TouchableOpacity className="flex-row items-center mx-3">
                <Ionicons name="chatbubble-outline" size={20} color="white" />
                <Text className="text-white text-sm ml-2">{item.comments}</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center mx-3">
                <Ionicons name="heart-outline" size={20} color="white" />
                <Text className="text-white text-sm ml-2">{item.likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center mx-3">
                <Ionicons name="eye-outline" size={20} color="white" />
                <Text className="text-white text-sm ml-2">{item.views}</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center mx-3">
                <Fontisto name="favorite" size={16} color="white" />
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center mx-3">
                <Ionicons name="share-social-outline" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <TouchableOpacity
        className="absolute bottom-10 right-3 bg-blue-500 p-4 rounded-full flex items-center justify-center"
        style={{ elevation: 5 }}
      >
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}
