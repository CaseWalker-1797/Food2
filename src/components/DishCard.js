import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StatusBar,
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
import { featured } from "../constants";
import { horizontalScale, verticalScale } from "../style/utilities/Dimensions";

const DishCard = () => {
  const navigation = useNavigation();
  const [heart, setHeart] = useState();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(featured.restaurants), [];
  });

  const renderData = ({ item }) => {
    return (
      <View style={styles.cardContainer}>
        <Image source={item.image} style={styles.image} />
        {/* Discount */}
        <View style={styles.discountContainer}>
          <Text style={textStyles.titleText}>20% off</Text>
        </View>
        {/* Like Button */}
        <View style={styles.likeContainer}>
          <Icon source="heart-outline" size={22} color={inactiveColor} />
        </View>
        <View style={styles.cardContentContainer}>
          {/* Dish Price */}
          <View style={styles.rateContainer}>
            <Text style={textStyles.priceText}>$ {item.dishes[0].price}</Text>
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
      <View style={styles.nameContainer}>
        <Text style={textStyles.headingText}>Today's Specials</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Top");
          }}
        >
          <Icon source="arrow-right" size={32} color={textColor} />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderData}
      />
    </>
  );
};

export default DishCard;

const styles = StyleSheet.create({
  nameContainer: {
    height: verticalScale(54),
    width: horizontalScale(380),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },
  cardContainer: {
    height: verticalScale(320),
    width: horizontalScale(200),
    alignItems: "center",
    borderRadius: 48 / 2,
    backgroundColor: bgColor,
    marginHorizontal: 6,
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
  discountContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    margin: 10,
    padding: 4,
    borderRadius: 30 / 2,
    backgroundColor: "rgba(255,255,255,0.8)",
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
    width: horizontalScale(200),
    justifyContent: "space-evenly",
    alignItems: "stretch",
    padding: 12,
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
