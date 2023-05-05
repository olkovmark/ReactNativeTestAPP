import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Photo } from "../models/interfeces";

interface CardPhoto {
  photo: Photo;
  openPhoto: Function;
}

export const CardComponent = (prop: CardPhoto) => {
  const select = () => prop.openPhoto(prop.photo);
  return (
    <View>
      <Pressable style={styles.conteiner} onPress={select}>
        <Image
          source={{
            uri: prop.photo.urls.thumb,
          }}
          style={{ width: 100, height: 100 }}
        />
        <View style={styles.info}>
          <Text style={{ fontWeight: "bold" }}>{prop.photo.user.name}</Text>
          <Text>{prop.photo.description}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#ecf0f1",
    padding: 8,
    margin: 20,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    display: "flex",
    flexDirection: "row",
  },
  info: {
    paddingLeft: 20,
    width: 200,
  },
});
