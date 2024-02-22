import React from "react";
import { View, Text, Button } from "react-native";

// HomeScreen reçoit la props navigation
function SignIn({ navigation, setToken }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>SignIn Screen</Text>
            <Button
                title="Go to SignUp"
                // La fonction navigate() permet de naviguer vers un écran. On lui passe comme argument le nom de l'écran vers lequel on souhaite naviguer (ce nom se trouve dans App.js)
                onPress={() => navigation.navigate("SignUp")}
            />
        </View>
    );
}

export default SignIn;
