import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ScoreScreen({ route, navigation }) {


    return (
        <View style={styles.container}>
            <View style={styles.homeContainer}>
                <TouchableOpacity style={styles.home} onPress={() => navigation.navigate("Category")}>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
            <Text>
                You got {route.params.correct} right and {route.params.incorrect} wrong
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    home: {
        backgroundColor: 'tomato',
        height: 50,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 20,
    },
    homeContainer: {
        alignItems: 'center'
    },
})