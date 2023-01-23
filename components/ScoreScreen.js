import { View, Text, StyleSheet } from "react-native";

export default function ScoreScreen({route}) {


    return (
        <View style={styles.container}>
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
})