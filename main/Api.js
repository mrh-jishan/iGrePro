const axios = require('axios').default;

const instance = axios.create({
    baseURL: 'https://igre-pro.herokuapp.com/api/v1',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

const token = ""

const headers = {
    headers: {
        'Authorization': `Bearer ${token}`
    }
}

const login = (body) => {
    return instance.post('/sign_in', body)
}

const register = (body) => {
    return instance.post('sign_up', body)
}

const quizz = (studyPlan) => {
    return instance.get(`/study_plans/${studyPlan}/quizzes`, headers)
}

const studyPlans = () => {
    return instance.get('/study_plans', headers)
}

export default { v1: { login, register, quizz, studyPlans } }