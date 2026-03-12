import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { FontAwesome } from '@expo/vector-icons';

export default function SignInScreen({ navigation }) {

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Sign In</Text>

            <Text>Email ID</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email here!"
            />

            <Text>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your password here!"
                secureTextEntry
            />

            <Text style={styles.forgot}>Forgot password?</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.replace("Main")}
            >
                <Text style={styles.btnText}>Sign In</Text>
            </TouchableOpacity>

            <Text style={styles.or}>Or sign in with</Text>

            <View style={styles.social}>

                <TouchableOpacity style={styles.google}>
                    <FontAwesome name="google" size={20} />
                    <Text style={{ marginLeft: 8 }}>Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.facebook}>
                    <FontAwesome name="facebook" size={20} color="white" />
                    <Text style={{ color: "#fff", marginLeft: 8 }}>Facebook</Text>
                </TouchableOpacity>

            </View>

            <Text style={styles.signup}>
                Not yet a member? <Text style={{ color: "#ff9900" }}>Sign Up</Text>
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 25,
        justifyContent: "center"
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        alignSelf: "center",
        marginBottom: 30
    },

    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 12,
        borderRadius: 6,
        marginBottom: 15
    },

    forgot: {
        alignSelf: "flex-end",
        color: "#ff9900",
        marginBottom: 20
    },

    button: {
        backgroundColor: "#ffa500",
        padding: 15,
        borderRadius: 6,
        alignItems: "center"
    },

    btnText: {
        color: "#fff",
        fontWeight: "bold"
    },

    or: {
        alignSelf: "center",
        marginTop: 20
    },

    social: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20
    },

    google: {
        borderWidth: 1,
        padding: 8,
        borderRadius: 6,
        width: "45%",
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'row'
    },

    facebook: {
        backgroundColor: "#4267B2",
        padding: 8,
        borderRadius: 6,
        width: "45%",
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'row'
    },

    signup: {
        alignSelf: "center",
        marginTop: 30
    }

}
);