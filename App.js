import { View, Text, StatusBar } from "react-native";
import React from "react";
import Navigation from "./src/navigation/Navigtation";
import { accentColor } from "./src/style/utilities/Colors";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={accentColor} />
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
