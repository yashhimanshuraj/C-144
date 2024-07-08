import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet
} from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { theme } from "../theme";
import { CategoryData } from "../constants";

const Categories = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}
      >
        {CategoryData.map((cat, index) => (
          <TouchableOpacity key={index} style={styles.category}>
            <Image source={cat.image} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>{cat.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
  },
  title: {
    fontSize: wp(5),
    fontWeight: "bold",
    color: "#333",
  },
  seeAll: {
    fontSize: wp(4),
    color: theme.text,
  },
  scrollContainer: {
    paddingHorizontal: 15,
  },
  category: {
    alignItems: "center",
    marginRight: 15,
  },
  categoryImage: {
    width: wp(20),
    height: wp(20),
    borderRadius: 15,
  },
  categoryTitle: {
    marginTop: 5,
    fontSize: wp(3),
    color: "#555",
  },
});

export default Categories;
