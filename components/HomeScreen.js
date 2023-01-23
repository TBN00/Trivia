import { View, Text, StyleSheet, TouchableOpacity } from "react-native"



export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleFont}>TRIVIA</Text>
            </View>
            
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Category")}><Text>Categories</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'tomato',
        width: 200,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    title: {
        height: 300, 
    },
    titleFont: {
        fontSize: 50
    }
});