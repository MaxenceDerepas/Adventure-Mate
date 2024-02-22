import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";

import SignIn from "./screens/SignIn.js";
import SignUp from "./screens/SignUp.js";
import Home from "./screens/Home.js";

const Stack = createNativeStackNavigator();

export default function App() {
    const [token, setToken] = useState(null);

    return (
        <NavigationContainer>
            {token === null ? (
                <Stack.Navigator>
                    <Stack.Screen name="SignIn">
                        {(props) => <SignIn {...props} extraData={someData} />}
                    </Stack.Screen>
                    <Stack.Screen name="SignUp" component={SignUp} />
                </Stack.Navigator>
            ) : (
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
