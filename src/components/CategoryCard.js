import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { categories } from "../constants";
import {
  inactiveColor,
  primaryColor,
  textColor,
} from "../style/utilities/Colors";
import { horizontalScale, verticalScale } from "../style/utilities/Dimensions";
import { RFValue } from "react-native-responsive-fontsize";

const CategoryCard = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [categories1, setCategories] = useState([]);
  useEffect(() => {
    setCategories(categories), [];
  });

  return (
    <View>
      <ScrollView
        style={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          //   flex: 1,
          //   padding: 4,
          alignItems: "center",
        }}
      >
        {categories?.map((category, index) => {
          let isActive = category.id == activeCategory;
          let btnClass = isActive
            ? { backgroundColor: primaryColor }
            : { backgroundColor: inactiveColor };
          //   let textClass = isActive
          //     ? { fontWeight: "bold", color: "white" }
          //     : { fontWeight: "normal", color: "black" };
          return (
            <View style={styles.categoryContainer}>
              <TouchableOpacity onPress={() => setActiveCategory(category.id)}>
                <Image style={[styles.cat, btnClass]} source={category.image} />
              </TouchableOpacity>
              <Text style={textStyles.itemText}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    height: verticalScale(100),
    width: horizontalScale(380),
    borderBottomWidth: 2,
    marginBottom: 4,
    borderColor: inactiveColor,
  },
  categoryContainer: {
    height: verticalScale(90),
    width: horizontalScale(70),
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
  },
  cat: {
    width: 48,
    height: 48,
    borderRadius: 60 / 2,
  },
});

const textStyles = StyleSheet.create({
  itemText: {
    fontSize: RFValue(12),
    fontWeight: "500",
    fontFamily: "Inter",
    color: textColor,
  },
});
