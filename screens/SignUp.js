import React from "react";
import { View, Text, Button } from "react-native";

// HomeScreen reçoit la props navigation
function SignUp({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>SignUp Screen</Text>
            <Button
                title="Go to SigIn"
                // La fonction navigate() permet de naviguer vers un écran. On lui passe comme argument le nom de l'écran vers lequel on souhaite naviguer (ce nom se trouve dans App.js)
                onPress={() => navigation.navigate("SignIn")}
            />
        </View>
    );
}

export default SignUp;
