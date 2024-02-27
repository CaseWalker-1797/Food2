import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import {
  horizontalScale,
  verticalScale,
} from "../../style/utilities/Dimensions";
import {
  accentColor,
  primaryColor,
  secondaryColor,
  bgColor,
  textColor,
  inactiveColor,
  textHighlightColor,
  inactiveColor2,
} from "../../style/utilities/Colors";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const PuddingScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: bgColor, justifyContent: "center" }}
    >
      <LinearGradient colors={[accentColor, primaryColor, secondaryColor]}>
        <View style={styles.topContainer}>
          {/* Back Button */}
          <View style={styles.backContainer}>
            <Icon source="chevron-left" size={24} />
          </View>
          {/* Location Bar */}
          <View style={styles.currentLocation}>
            <Text style={textStyles.headingText}>Pudding</Text>
          </View>
          {/* Cart */}
          <View style={styles.cartContainer}>
            <Icon source="cart-outline" size={24} />
            <Text style={textStyles.cartText}>00</Text>
          </View>
        </View>
      </LinearGradient>
      <ScrollView>
        <View style={styles.productContainer}>
          <Image
            source={require("../../assets/images/puddingDish.jpeg")}
            style={styles.dishImage}
          />
          <View style={styles.productnameContainer}>
            <View>
              <Text style={textStyles.dishnameText}>Caramel Pudding</Text>
              <Text style={textStyles.priceText}>$ 52</Text>
            </View>
            <View style={styles.quantityContainer}>
              <View style={styles.iconquantityContainer}>
                <Icon source="minus" size={24} />
              </View>
              <Text style={textStyles.priceText}>02</Text>
              <View style={styles.iconquantityContainer}>
                <Icon source="plus" size={24} />
              </View>
            </View>
          </View>
          {/* Dish Rating */}
          <View style={styles.dishratingConatiner}>
            <View style={styles.imageContainer}>
              <Image source={require("../../assets/images/Group30.png")} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 2,
              }}
            >
              <Icon source="star" size={28} color="gold" />
              <Text style={textStyles.dishnameText}>5 star rating</Text>
            </View>
          </View>
        </View>
        {/* Dish Description */}
        <View style={styles.productContainer}>
          <Text style={textStyles.dishnameText}>Description</Text>
          <Text style={textStyles.paragraphText}>
            Dolore quia nulla facere totam vel maxime quia sunt. Dolores nulla
            autem repudiandae est nihil natus veritatis. Recusandae unde nobis
            mollitia voluptas architecto voluptates doloribus. Non ad aut. Aut
            eum tempore excepturi veniam consequatur autem illum esse minima.
            <Text style={{ color: textHighlightColor }}> Read More...</Text>
          </Text>
        </View>
        <View style={styles.productContainer}>
          <Text style={textStyles.dishnameText}>Size</Text>
        </View>
      </ScrollView>
      <View style={styles.buysellContainer}>
        <View
          style={{
            alignItems: "center",
            padding: 8,
            justifyContent: "center",
          }}
        >
          <Text style={textStyles.priceText}>Total</Text>
          <Text
            style={[textStyles.dishnameText, { color: textHighlightColor }]}
          >
            $ 104
          </Text>
        </View>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: inactiveColor,
            borderRadius: 25 / 2,
            margin: 4,
          }}
        >
          <Text style={[textStyles.priceText, { color: "dimgray" }]}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PuddingScreen;

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
  dishImage: {
    height: verticalScale(280),
    width: "100%",
    borderRadius: 20,
    alignSelf: "center",
    margin: 4,
  },
  productContainer: {
    borderBottomWidth: 2,
    borderColor: inactiveColor,
    padding: 12,
    justifyContent: "space-evenly",
  },
  productnameContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 4,
  },
  dishratingConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 4,
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconquantityContainer: { borderWidth: 1, borderRadius: 40 / 2, margin: 6 },
  imageContainer: {
    width: horizontalScale(120),
    margin: 6,
  },
  buysellContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: bgColor,
    padding: 8,
    shadowOffset: {
      width: 0,
      height: -6,
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    elevation: 6,
  },
});

const textStyles = StyleSheet.create({
  headingText: {
    fontSize: RFValue(20),
    fontWeight: "700",
    fontFamily: "Inter",
    color: bgColor,
  },
  dishnameText: {
    fontSize: RFValue(20),
    fontWeight: "700",
    fontFamily: "Inter",
    color: "black",
  },
  priceText: {
    fontSize: RFValue(18),
    fontWeight: "600",
    fontFamily: "Inter",
    color: "black",
  },
  paragraphText: {
    fontSize: RFValue(14),
    fontWeight: "600",
    fontFamily: "Inter",
    color: "black",
  },
});
