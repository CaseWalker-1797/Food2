import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  accentColor,
  bgColor,
  primaryColor,
  secondaryColor,
  inactiveColor2,
  inactiveColor,
  textColor,
} from "../../style/utilities/Colors";
import { Icon } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import {
  horizontalScale,
  verticalScale,
} from "../../style/utilities/Dimensions";
import DessertCategoryCard from "../../components/DessertCategoryCard";
import DessertCard from "../../components/DessertCard";

const DessertScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: bgColor }}>
      <LinearGradient colors={[accentColor, primaryColor, secondaryColor]}>
        <View style={styles.topContainer}>
          {/* Back Button */}
          <View style={styles.backContainer}>
            <Icon source="chevron-left" size={24} />
          </View>
          {/* Location Bar */}
          <View style={styles.currentLocation}>
            <Text style={textStyles.cityText}>Dessert</Text>
          </View>
          {/* Cart */}
          <View style={styles.cartContainer}>
            <Icon source="cart-outline" size={24} />
            <Text style={textStyles.cartText}>00</Text>
          </View>
        </View>
      </LinearGradient>
      {/* Categories */}
      <DessertCategoryCard />
      {/* Categories */}
      <DessertCard />
    </SafeAreaView>
  );
};

export default DessertScreen;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    height: verticalScale(90),
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
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
  backContainer: {
    padding: 4,
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
