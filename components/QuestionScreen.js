import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import { requestQuestions } from "../Requests";

export default function QuestionScreen({ route, navigation }) {
    const [questions, setQuestions] = useState([])
    let [questionCounter, setQuestionCounter] = useState(0)
    let [correctCounter, setCorrectCounter] = useState(0)
    let [incorrectCounter, setIncorrectCounter] = useState(0)
    let random = null
    { questions.length !== 0 ? random = questions[questionCounter].incorrect_answers.concat(questions[questionCounter].correct_answer).sort(() => Math.random() - 0.5) : (null) }

    useEffect(() => {
        requestQuestions(route.params.catId).then((response) => (response && setQuestions(response.data.results)))
    }, [])

    const handleClick = (answer) => answer === questions[questionCounter].correct_answer ? (
        setQuestionCounter(questionCounter += 1), setCorrectCounter(correctCounter += 1)
    ) : (
        setQuestionCounter(questionCounter += 1), setIncorrectCounter(incorrectCounter += 1))

        {questionCounter === 10 && navigation.navigate("Score", {correct: correctCounter, incorrect: incorrectCounter})}

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.homeContainer}>
                <TouchableOpacity style={styles.home} onPress={() => navigation.navigate("Category")}>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
            {questions.length === 0 ? (<ActivityIndicator />
            ) : (
                <View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionFont}>{questions[questionCounter].question.replace(/[^a-zA-Z0-9 ?%]/g, '').replace(/quot/g, '"').replace(/039/g, "'")}</Text>
                    </View>
                    <View style={styles.answerContainer}>
                        {random.map((answer, idx) => (
                            <TouchableOpacity onPress={() => handleClick(answer)} style={styles.answerButtons} key={idx}><Text>{answer.replace(/[^a-zA-Z0-9 ?%]/g, '').replace(/quot/g, '"').replace(/039/g, "'")}</Text></TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.counters}>
                    <Text>Correct Answers: {correctCounter}</Text>
                    <Text style={{marginLeft: 20}}>Incorrect Answers: {incorrectCounter}</Text>
                    </View>
                </View>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    answerButtons: {
        backgroundColor: 'tomato',
        margin: 3,
        padding: 5,
        height: 40,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    answerContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    counters: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
        padding: 10,
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
    questionContainer: {
        padding: 15,
    },
    questionFont: {
        fontSize: 20,
        textAlign: 'center'
    }
})