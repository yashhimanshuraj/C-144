import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../theme";

export default function DestinationScreen(props) {
  const item = props.route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.touchableOpacity}
        >
          <ChevronLeftIcon size={wp(7)} strokeWidth={4} color="#fff" />
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.contentContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item?.title}</Text>
            <Text style={styles.price}>{item?.price}</Text>
          </View>
          <Text style={styles.longDescription}>{item?.longDescription}</Text>
        </ScrollView>
        <TouchableOpacity style={styles.bookNowButton}>
          <Text style={styles.bookNowButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  image: {
    width: wp(100),
    height: hp(55),
  },
  safeArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    top: 0,
  },
  touchableOpacity: {
    padding: 10,
    borderRadius: 999,
    marginLeft: wp(4),
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  contentContainer: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingHorizontal: wp(5),
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingTop: hp(8),
    marginTop: -hp(14),
  },
  scrollView: {
    paddingVertical: hp(5),
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  title: {
    fontSize: wp(7),
    fontWeight: "bold",
    flex: 1,
    color: theme.neutral700,
  },
  price: {
    fontSize: wp(7),
    fontWeight: "600",
    color: theme.text,
  },
  longDescription: {
    fontSize: wp(3.7),
    color: theme.neutral700,
    marginBottom: hp(2),
    letterSpacing: 0.5,
  },
  bookNowButton: {
    backgroundColor: theme.primary,
    borderRadius: 10,
    paddingVertical: hp(2),
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: wp(5),
    marginBottom: hp(2),
  },
  bookNowButtonText: {
    color: "white",
    fontSize: wp(5),
    fontWeight: "bold",
  },
});
