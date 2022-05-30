const axios = require('axios').default;
import { getData } from './storage';

const instance = axios.create({
    baseURL: 'https://igre-pro.herokuapp.com/api/v1',
    headers: { 'Content-Type': 'application/json' }
});

const headers = async () => {
    const { token } = await getData("token")
    console.log("token in header: ", token);
    return {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
}

const login = async (body) => {
    const { data } = await instance.post('/sign_in', body)
    console.log("login data-------: ", data);
    return data
}

const register = async (body) => {
    const { data } = await instance.post('sign_up', body)
    return data
}

const quizz = async (studyPlan) => {
    const config = await headers()
    const { data } = await instance.get(`/study_plans/${studyPlan}/quizzes`, config)
    return data
}

const studyPlans = async () => {
    const config = await headers()
    const { data } = await instance.get('/study_plans', config)
    return data
}

export default { v1: { login, register, quizz, studyPlans } }