import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";

export default function ScoreScreen({ route, navigation }) {
    const questions = route.params.questions
    const extra = questions.pop()


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.homeContainer}>
                <TouchableOpacity style={styles.home} onPress={() => navigation.navigate("Category")}>
                    <Text>Home</Text>
                </TouchableOpacity>
                <Text>
                    You got {route.params.correct} right and {route.params.incorrect} wrong
                </Text>
            </View>
            <ScrollView>
                <View>
                    {questions.map((trivia) =>
                        <View style={styles.answerContainer}>
                            <Text>{trivia.question.replace(/[^a-zA-Z0-9 ?%]/g, '').replace(/quot/g, '"').replace(/039/g, "'")}</Text>
                            <Text style={{color: 'green'}}>{trivia.correct_answer}</Text>
                            {trivia.incorrect_answers.map((wrong)=>
                            <Text style={{color: 'red'}}>{wrong}</Text>)}
                        </View>
                    )}
                </View>
            </ScrollView>



        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    answerContainer: {
        margin: 10,
        borderTopWidth: 3,
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
        alignItems: 'center',
        marginBottom: 20
    },
})