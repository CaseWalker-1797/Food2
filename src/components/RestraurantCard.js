import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { horizontalScale, verticalScale } from "../style/utilities/Dimensions";
import { textColor } from "../style/utilities/Colors";
import { RFValue } from "react-native-responsive-fontsize";
import { Icon } from "react-native-paper";

const RestraurantCard = () => {
  return (
    <View style={styles.nameContainer}>
      <Text style={textStyles.headingText}>Nearby Restraurants</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Top");
        }}
      >
        <Icon source="arrow-right" size={32} color={textColor} />
      </TouchableOpacity>
    </View>
  );
};

export default RestraurantCard;

const styles = StyleSheet.create({
  nameContainer: {
    height: verticalScale(54),
    width: horizontalScale(380),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
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
});
