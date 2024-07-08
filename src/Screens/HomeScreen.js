import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Categories from "../components/Categories";
import SortCategories from "../components/SortCategories";
import Destination from "../components/Destination";

const HomeScreen = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <View style={[styles.viewContainer, { width: wp("90%") }]}>
          <Text style={[styles.text, { fontSize: wp(7) }]}>Let's Discover</Text>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/avatar.png")}
              style={styles.avatar}
            />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View
            style={[
              styles.searchInput,
              { borderColor: isFocused ? "transparent" : "grey" },
            ]}
          >
            <TextInput
              placeholder="Search Destination"
              placeholderTextColor="grey"
              style={styles.input}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </View>
        </View>
        <View className="mb-4">
          <Categories />
        </View>
        <View className="mb-4">
          <SortCategories />
        </View>
        <View className="mb-4">
          <Destination />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollView: {
    paddingVertical: hp("2%"),
  },
  viewContainer: {
    marginHorizontal: wp("5%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: hp("10%"),
    borderRadius: 10,
    padding: wp("2%"),
  },
  text: {
    fontSize: wp("5%"),
    color: "black",
    fontWeight: "bold",
  },
  avatar: {
    width: wp("10%"),
    height: wp("10%"),
    borderRadius: wp("5%"),
  },
  searchContainer: {
    marginHorizontal: wp("5%"),
    marginBottom: hp("2%"),
    backgroundColor: "lightgrey",
    borderRadius: 10,
  },
  searchInput: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("4%"),
    paddingVertical: hp("1%"),
  },
  input: {
    flex: 1,
    fontSizeb: wp("4%"),
    color: "black",
    marginLeft: wp("2%"),
  },
});

export default HomeScreen;
