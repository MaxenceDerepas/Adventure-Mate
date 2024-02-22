import React from "react";
import { View, Text, Button } from "react-native";

// HomeScreen reçoit la props navigation
function Home({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Home Screen</Text>
        </View>
    );
}

export default Home;
