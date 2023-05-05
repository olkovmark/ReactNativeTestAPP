import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { getPictureList } from "../services/apiServices";
import { Photo } from "../models/interfeces";
import { CardComponent } from "../components/CardComponent";

export const Main = (props: any) => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    getPictureList().then((photos: Photo[] | null) => {
      if (photos) setPhotos(photos);
    });
  }, []);

  const openFoto = (photo: any) => {
    props.navigation.navigate("Photo", { photo: photo });
  };

  return (
    <View style={(styles.main, styles.photos_list)}>
      <FlatList
        data={photos}
        renderItem={({ item }) => {
          return <CardComponent photo={item} openPhoto={openFoto} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {},
  photos_list: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
