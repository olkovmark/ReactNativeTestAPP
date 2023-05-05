import React, { useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export const FullPhoto = (prop: any) => {
  const fullFotoUrl = prop.route.params.photo.urls.full;
  const [loaded, setLoaded] = useState<boolean>(false);
  return (
    <View>
      <Image
        source={{
          uri: fullFotoUrl,
        }}
        style={{ width: "100%", height: "100%" }}
        onLoad={() => setLoaded(true)}
      />
      {loaded ? null : (
        <ActivityIndicator style={styles.loader} size="large" color="#00ff00" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
