import axios from "axios";

export const requestCategories = () => {
    const URL='https://opentdb.com/api_category.php'
    const response = axios.get(URL)

    return response
}

export const requestQuestions = (topicId) => {
    const URL=`https://opentdb.com/api.php?amount=11&category=${topicId}`
    const response = axios.get(URL)

    return response
}