import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-paper";
import {
  accentColor,
  bgColor,
  inactiveColor,
  inactiveColor2,
  primaryColor,
  secondaryColor,
  textColor,
} from "../../style/utilities/Colors";
import CategoryCard from "../../components/CategoryCard";
import DishCard from "../../components/DishCard";
import LinearGradient from "react-native-linear-gradient";
import {
  horizontalScale,
  verticalScale,
} from "../../style/utilities/Dimensions";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import RestraurantCard from "../../components/RestraurantCard";

const HomeScreen = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: bgColor }}>
        <LinearGradient colors={[accentColor, primaryColor, secondaryColor]}>
          <View style={styles.topContainer}>
            {/* Location Bar */}
            <View style={styles.locationContainer}>
              <View style={styles.currentLocation}>
                <Icon source="map-marker" size={28} color={bgColor} />
                <Text style={textStyles.cityText}>California, USA</Text>
                <Icon source="chevron-down" size={28} color={bgColor} />
              </View>
              {/* Cart */}
              <View style={styles.cartContainer}>
                <Icon source="cart-outline" size={24} />
                <Text style={textStyles.cartText}>00</Text>
              </View>
            </View>
            {/* Search Bar */}
            <View style={styles.searchbarContainer}>
              <View style={styles.iconContainer}>
                <Icon
                  source="magnify"
                  size={RFValue(24)}
                  color={inactiveColor2}
                />
              </View>
              <TextInput
                style={styles.searchbarTextContainer}
                placeholder="Search food"
                keyboardType="default"
              />
              <View style={styles.iconContainer}>
                <Icon
                  source="shopping-outline"
                  size={RFValue(24)}
                  color={inactiveColor2}
                />
              </View>
            </View>
          </View>
        </LinearGradient>
        {/* Categories */}
        <CategoryCard />
        {/* Todays Special */}
        <DishCard />
        {/* Nearby Restraurant */}
        <RestraurantCard />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  topContainer: {
    height: verticalScale(160),
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  locationContainer: {
    height: verticalScale(60),
    width: horizontalScale(360),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  currentLocation: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cartContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 45 / 2,
    backgroundColor: bgColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    elevation: 6,
  },
  searchbarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: inactiveColor2,
    borderRadius: 26 / 2,
    padding: 0,
    margin: 6,
    backgroundColor: bgColor,
  },
  iconContainer: {
    margin: 10,
  },
  searchbarTextContainer: {
    flex: 1,
    padding: 6,
    marginVertical: 10,
    borderRightWidth: 2,
    borderColor: inactiveColor,
  },
});

const textStyles = StyleSheet.create({
  cityText: {
    fontSize: RFValue(20),
    fontWeight: "600",
    fontFamily: "Inter",
    color: bgColor,
  },
  cartText: {
    fontSize: RFValue(18),
    fontWeight: "600",
    fontFamily: "Inter",
    color: textColor,
  },
});
