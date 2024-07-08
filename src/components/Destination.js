import React from "react";
import { DestinationData } from "../constant/index"; 
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const Destination = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {DestinationData.map((item, index) => {
        return (
          <DestinationCard navigation={navigation} item={item} key={index} />
        );
      })}
    </View>
  );
};

const DestinationCard = ({ item, navigation }) => {
  return (
    <TouchableOpacity 
      style={styles.button}
      onPress={() => navigation.navigate('Destination', { ...item })}
    >
      <Image 
        source={item.image}
        style={styles.image}
      />

      <View style={styles.textContainer}>
        <Text style={styles.content}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Destination;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  button: {
    width: wp(44),
    height: wp(65),
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
    padding: 4,
    paddingVertical: 6,
    marginBottom: 10,
    marginTop: 15,
  },
  image: {
    width: wp(44),
    height: wp(65),
    borderRadius: 35,
  },

  textContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 5,
    borderRadius: 5,
  },
  content: {
    fontSize: wp(4),
    color: "#fff",
    fontWeight: "600",
  },
});
