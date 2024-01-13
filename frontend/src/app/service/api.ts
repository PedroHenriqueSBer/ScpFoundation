import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://2e9a1833-9f77-462f-9fe6-a6520771e1fa-00-2xjgfidzxf0l9.riker.replit.dev',
    headers: {
        'Content-Type': 'application/json'
    }
});