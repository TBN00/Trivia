import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, ScrollView } from "react-native"
import { requestCategories } from "../Requests";
import { useEffect, useState } from "react";

export default function CategoryScreen({navigation}) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        requestCategories().then((response) => (response && setCategories(response.data.trivia_categories)))
    }, [])

    return (
        <View style={styles.container}>
            {categories.length === 0 ? (<ActivityIndicator />
            ) : (
                <View>
                    <View style={styles.header}>
                        <Text style={styles.title}>Categories</Text>
                    </View>
                    <View style={styles.categories}>
                        {categories.map((catz, idx) =>
                            <TouchableOpacity style={styles.buttons} key={idx} onPress={() => navigation.navigate("Questions", {catId: catz.id})}>
                                <Text>{catz.name.replace("Entertainment: ", '')}</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        paddingBottom: 80,
    },
    categories: {
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    buttons: {
        backgroundColor: 'tomato',
        margin: 3,
        padding: 5,
        height: 40,
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    header: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 50
    }
});