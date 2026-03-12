import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function ExplorerScreen() {
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.title}>Explorer</Text>

            {/* Top Categories */}
            <Text style={styles.section}>Top Categories</Text>

            <View style={styles.categories}>

                <View style={styles.card}>
                    <Image
                        source={require("../assets/pizza.png")}
                        style={styles.image}
                    />
                    <Text style={styles.label}>Pizza</Text>
                </View>

                <View style={styles.card}>
                    <Image
                        source={require("../assets/buger.jpg")}
                        style={styles.image}
                    />
                    <Text style={styles.label}>Burgers</Text>
                </View>

                <View style={styles.card}>
                    <Image
                        source={require("../assets/steak.jpg")}
                        style={styles.image}
                    />
                    <Text style={styles.label}>Steak</Text>
                </View>

            </View>

            {/* Popular Items */}
            <Text style={styles.section}>Popular Items</Text>

            <View style={styles.foodCard}>

                <Image
                    source={require("../assets/pizza.png")}
                    style={styles.foodImage}
                />

                <View style={styles.foodInfo}>
                    <Text style={styles.foodName}>Food 1</Text>
                    <Text>By Viet Nam</Text>
                    <Text style={styles.price}>1$</Text>
                </View>

            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff"
    },

    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20
    },

    section: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10
    },

    categories: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },

    card: {
        alignItems: "center"
    },

    image: {
        width: 100,
        height: 70,
        borderRadius: 10
    },

    label: {
        marginTop: 5
    },

    foodCard: {
        flexDirection: "row",
        backgroundColor: "#f5f5f5",
        padding: 10,
        borderRadius: 10
    },

    foodImage: {
        width: 80,
        height: 80,
        borderRadius: 10
    },

    foodInfo: {
        marginLeft: 10,
        justifyContent: "center"
    },

    foodName: {
        fontWeight: "bold"
    },

    price: {
        marginTop: 5,
        color: "green"
    }

});