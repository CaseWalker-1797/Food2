import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Icon, IconButton } from "react-native-paper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import {
  bgColor,
  inactiveColor,
  accentColor,
  textHighlightColor,
  textColor,
  inactiveColor2,
} from "../style/utilities/Colors";
import { horizontalScale, verticalScale } from "../style/utilities/Dimensions";
import { featured2 } from "../constants/index2";

const DessertCard = () => {
  const [heart, setHeart] = useState();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(featured2.restaurants), [];
  });

  const renderData = ({ item }) => {
    return (
      <View style={styles.cardContainer}>
            <Image source={item.image} style={styles.image} />
          {/* Like Button */}
        <View style={styles.likeContainer}>
          <Icon source="heart-outline" size={22} color={inactiveColor} />
        </View>
        <View style={styles.cardContentContainer}>
          {/* Dish Price */}
          <View style={styles.rateContainer}>
            <Text style={textStyles.priceText}>$45</Text>
          </View>
          {/* Dish Name */}
          <View style={styles.rateContainer}>
            <Text style={textStyles.titleText}>{item.dishes[0].name}</Text>
          </View>
          {/* Restuarant Name */}
          <View style={styles.rateContainer}>
            <Icon source="map-marker-outline" size={22} color={inactiveColor} />
            <Text style={textStyles.commonText}>{item.name}</Text>
          </View>
          {/* Rate */}
          <View style={styles.rateContainer}>
            <Icon source="star" size={20} color="gold" />
            <Icon source="star" size={20} color="gold" />
            <Icon source="star" size={20} color="gold" />
            <Icon source="star" size={20} color="gold" />
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderData}
      />
    </>
  );
};

export default DessertCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: verticalScale(320),
    width: horizontalScale(170),
    justifyContent: "center",
    borderRadius: 48 / 2,
    backgroundColor: bgColor,
    margin: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    elevation: 6,
  },
  image: {
    height: verticalScale(180),
    width: "100%",
    borderRadius: 30 / 2,
  },
  likeContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    margin: 10,
    padding: 4,
    borderRadius: 30 / 2,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  cardContentContainer: {
    height: verticalScale(140),
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "stretch",
    padding: 10,
  },
  rateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 4,
  },
});

const textStyles = StyleSheet.create({
  headingText: {
    fontSize: RFValue(18),
    fontWeight: "700",
    fontFamily: "Inter",
    color: "black",
    textAlign: "center",
  },
  priceText: {
    fontSize: RFValue(16),
    fontWeight: "700",
    fontFamily: "Inter",
    color: textHighlightColor,
  },
  titleText: {
    fontSize: RFValue(14),
    fontWeight: "700",
    fontFamily: "Inter",
    color: textColor,
  },
  commonText: {
    fontSize: RFValue(13),
    fontFamily: "Inter",
    color: inactiveColor2,
  },
});
