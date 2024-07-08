import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { sortCategoryData } from "../constants";

const SortCategories = () => {
  const [activeSort, setActiveSort] = useState("Popular");
  const [scaleValue] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1.1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  }, [activeSort]);

  return (
    <View style={styles.container}>
      {sortCategoryData.map((sort, index) => {
        const isActive = sort === activeSort;

        return (
          <TouchableOpacity
            key={index}
            style={[styles.item, isActive && styles.activeItem]}
            onPress={() => setActiveSort(sort)}
          >
            <Animated.View style={{ transform: [{ scale: isActive ? scaleValue : 1 }] }}>
              <Text style={[styles.itemText, isActive && styles.activeItemText]}>
                {sort}
              </Text>
            </Animated.View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f8f8f8", // Very light grey background color
    borderRadius: 15,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  item: {
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: "#f0f0f0",
  },
  activeItem: {
    backgroundColor: "#ff9800",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  itemText: {
    fontSize: 14,
    color: "#333",
  },
  activeItemText: {
    color: "#fff",
  },
});

export default SortCategories;
