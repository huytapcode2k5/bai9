import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function AccountScreen({ navigation }) {

    const handleSignOut = () => {
        navigation.replace("SignIn");
    };

    return (
        <View style={styles.container}>

            <View style={styles.header} />

            <Text style={styles.name}>Hung Nguyen</Text>
            <Text style={styles.job}>Mobile developer</Text>

            <Text style={styles.desc}>
                I have above 5 years of experience in native mobile apps development,
                now i am learning React Native
            </Text>

            <TouchableOpacity style={styles.btn} onPress={handleSignOut}>
                <Text style={{ color: "#fff" }}>Sign Out</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },

    header: {
        height: 150,
        width: "100%",
        backgroundColor: "#1da1f2"
    },

    name: {
        fontSize: 22,
        marginTop: 20
    },

    job: {
        color: "#1da1f2"
    },

    desc: {
        textAlign: "center",
        padding: 20
    },

    btn: {
        backgroundColor: "#ffa500",
        padding: 10,
        borderRadius: 6
    }
});